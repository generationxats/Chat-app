import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

username:{
    type: String,
    required: true
},

number:{
    type: Number,
    required: true
},

password:{
    type: String,
    required: true
},


profilepic:{
    type: String,
    default: ''
},


}, {timestamps: true});

const User = mongoose.model('User', userSchema);
export default User;