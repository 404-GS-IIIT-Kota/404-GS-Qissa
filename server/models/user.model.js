import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import zod from 'zod';

const userSchema = new Schema({
    firstName:{
        type: 'String',
        required: [true, 'Name is required'],
        minLength: [5, 'Name must be atleast 5 charachter'],
        maxLength: [50, 'Name should be less than 50 charachter'],
        lowercase: true,
        trim: true,
    },
    lastName: {
        type: 'String',
        required: [true, 'Name is required'],
        minLength: [5, 'Name must be atleast 5 charachter'],
        maxLength: [50, 'Name should be less than 50 charachter'],
        lowercase: true,
        trim: true,
    },
    userName: {
        type: 'String',
        required: [true, 'Name is required'],
        minLength: [5, 'Name must be atleast 5 charachter'],
        maxLength: [50, 'Name should be less than 50 charachter'],
        lowercase: true,
        trim: true,
    },
    email: {
        type: 'String',
        required: [true, 'Email is required'],
        lowercase: true,
        trim: true,
        unique: true,
        // match: [

        // ]
    },
    password: {
        type: 'String',
        required: [true, 'Password is required'],
        minLength: [8, 'Password must be atleast 8 charachter'],
        select: false
    },
    country:{
        type:'String'
    },
    birthday:{
        type:'String'
    },
    gender: {
        type:'String'
    },
    pronouns:{
        type:'String'
    },
    bio:{
        type:'String'
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    
},{
    timestamps: true
});

// const signupSchema2 = zod.object({
//         country: zod.string(),
//         birthday: zod.string(),
//         gender: zod.string(),
//         pronouns: zod.string(),
//         bio: zod.string(),
//       });

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods = {
    generateJWTToken: async function(){
        return await jwt.sign(
            { id: this._id, email:this.email},
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRY,
            }
        )
    },
    comparePassword: async function(plainTextPassword){
        return await bcrypt.compare(plainTextPassword, this.password)
    },
    generatePasswordResetToken: async function(){
        const resetToken = crypto.randomBytes(20).toString('hex');

        this.forgotPasswordToken = crypto
            .createHash('sha256')
            .update(resetToken)
            .digest('hex')
        ;
        this.forgotPasswordExpiry = Date.now() + 15*60*1000;

        return resetToken;
    }
}

const User = model('User', userSchema);

export default User;