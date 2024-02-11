const express = require("express");
require('dotenv').config()


const app = express();

const userRouter = require("./routes/user");

const PORT = process.env.PORT || 5000;

// Mount the user router at the specified path
app.use("/", userRouter);

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
