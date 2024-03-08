const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : [true , "Please enter your name"]
    },
    Address:{
        type : String,
        required : [true , "Please enter address"]
    },
    price:{
        type:Number,
        default:0,
        maxLength:[8, 'Price should be lower']
    },
    images:[{
        public_id:{
          type:String,
          required:true
        },
        url:{
            type:String,
            required :true
        }
    }],
    category:{
      type: String,
      required :[true , "Please enter product category"]
    },
    stock:{
        type :Number,
        required:[true , "Please enter product stock"],
        maxLength:[4 , "Stock cannot exceed 4 characters"],
        default:0
    },
    numOfReviews:{
        type :Number,
        default:0
    },
    reviews:[
        {
            name :{
                type : String,
                required : true,
            },
            rating:{
                type : Number,
                required: true
            },
            comment:{
                type: String,
                required:true
            }
        }
    ],
    createdAt:{
        type: Date,
        default: Date.now
    }
})