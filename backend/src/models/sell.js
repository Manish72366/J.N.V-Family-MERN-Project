const mongoose = require("mongoose");
const sellSchema = new mongoose.Schema({
    Productname:{
        type : String,
        required : [true , 'Please enter product name']
    },
    companyName:{
        type : String,
        required : [true , "Please enter your company's name"]
    },
    price:{
        type :Number,
        required:true
    },
    description:{
        type : String,
        required: true
    },
    sellcity:{
        type : String,
        required : true
    },
    sellstate:{
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
          }
    },
    qty:{
        type : Number,
        required:true
    },
    email:{
        type : String,
        required : true
    },
    phone:{
        type : Number,
        required : true
    },
})

// now we need to create a collection
const Sell = new mongoose.model("Sell" , sellSchema); 
module.exports = Sell;