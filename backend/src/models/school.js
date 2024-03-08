const mongoose = require("mongoose");
const schoolSchema = new mongoose.Schema({
    Schoolname:{
        type : String,
        required : [true , 'Please enter school name']
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
    description:{
        type : String,
        required: true
    },
    image:{
        url1: {
            type: String,
            required: true,
          },
        url2: {
            type: String,
            required: true,
          },
    },
    email:{
        type : String,
        required : true,
    },
    phone:{
        type : Number,
        required : true,
    },
})

// now we need to create a collection
const School = new mongoose.model("School" , schoolSchema); 
module.exports = School;