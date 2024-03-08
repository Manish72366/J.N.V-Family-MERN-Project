const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name :{
        type : String,
        required : [true , "Please enter product name"]
    },
    price:{
        type:Number,
        default:0,
        maxLength:[8, 'Price should be lower']
    },
    img :{
            type:String,
            required :true
    },
    itemNo:{
        type:Number,
        required :true
    },
    mfg:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true
    },
    userPhone:{
        type:Number,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    }
})

// collection ->
const Product = new mongoose.model("Product" , productSchema);
module.exports = Product;
