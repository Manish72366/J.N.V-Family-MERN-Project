const mongoose = require("mongoose");
const connectionSchema = new mongoose.Schema({
    Sendername:{
        type : String,
        required : [true , 'Please enter your first name']
    },
    Senderphone:{
        type : Number,
        required : true
    },
    msg:{
        type:String,
        required : true
    },
    receiverPhone:{
        type : Number,
        required : true
    }
})

// now we need to create a collection
const connection = new mongoose.model("connection" , connectionSchema); 
module.exports = connection;