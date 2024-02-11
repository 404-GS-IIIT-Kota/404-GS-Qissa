const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { User, Post } = require("../db");
const { JWT_SECRET } = { JWT_SECRET: "hello" };
const zod = require("zod");
const router = Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

const signupSchema1 = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
  username: zod.string(),
  password: zod
    .string()
    .min(6)
    .refine((password) => /[A-Z]/.test(password), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((password) => /[!@#$%^&*(),.?":{}|<>]/.test(password), {
      message: "Password must contain at least one special character",
    }),
  email: zod.string().email(),
  confirmPassword: zod.string(),
});
const signupSchema2 = zod.object({
  country: zod.string(),
  birthday: zod.string(),
  gender: zod.string(),
  pronouns: zod.string(),
  bio: zod.string(),
});

// User Routes

router.post("/signup", async function (req, res) {
  try {
    const { firstName, lastName, username, password, confirmPassword, email } =
      signupSchema1.parse(req.body);

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).send("Username already exists");
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.redirect("/signup-2?username=" + encodeURIComponent(username));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/signup-2", async function (req, res) {
  try {
    const { country, birthday, gender, pronouns, bio } = signupSchema2.parse(
      req.body
    );
    // Retrieve the username from the query parameters
    const username = req.query.username;

    // If username is not provided, return error
    if (!username) {
      return res.status(400).json({ error: "Username not provided" });
    }

    // Find the user by username
    const user = await User.findOne({ username });

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Append additional data to the user
    user.country = country;
    user.birthday = birthday;
    user.gender = gender;
    user.pronouns = pronouns;
    user.bio = bio;

    // Save the user with appended data
    await user.save();

    res.json({ message: "User saved successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ username: user.username }, JWT_SECRET);
    res.send({ token });
    res.setHeader("Authorization", `Bearer ${token}`);
    res.status(200).json({ message: "Authentication successful" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const postsSchema = zod.object({
  title: zod.string(), // imageLink
  description: zod.string(),
});

router.post("/post", userMiddleware, async (req, res) => {
  // Implement course creation logic
  // zod
  const {
    title, // imageLink
    description,
  } = postsSchema.parse(req.body);

  const newPost = new Post({
    title, // imageLink
    description,
  });

  await newPost.save();

  res.json({
    message: "Course created successfully",
    postId: newPost._id,
  });
});

router.get("/profile", userMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const { username } = req;

  const user = await User.findOne({ username }).select(
    "firstName lastName country birthday gender pronouns bio"
  );

  const response = await Post.find({});

  res.json({
    user,
    posts: response,
  });
});

module.exports = router;
