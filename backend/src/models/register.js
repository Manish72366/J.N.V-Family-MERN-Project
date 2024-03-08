const mongoose = require("mongoose");
const publicSchema = new mongoose.Schema({
    firstname:{
        type : String,
        required : [true , 'Please enter your first name']
    },
    lastname:{
        type : String,
        required : [true , 'Please enter your sur name']
    },
    email:{
        type : String,
        required : true,
        unique: true
    },
    phone:{
        type : Number,
        required : true,
        unique: true
    },
    dob:{
        type : String,
        required : true
    },
    gender:{
        type : String,
        required : true,
        default : "male"
    },
    street:{
        type : String,
        required : true
    },
    country:{
        type : String,
        required : true,
        default : "India"
    },
    city:{
        type : String,
        required : true
    },
    state:{
        type : String,
        required : true
    },
    Pincode:{
        type : Number,
        required : true
    },
    image:{
        url: {
            type: String,
            required: true,
          },
    },
    password:{
        type : String,
        required : true
    },
    confirmPassword:{
        type : String,
        required : true
    },
   
})
// now we need to create a collection
const Register = new mongoose.model("Register" , publicSchema); 
module.exports = Register;