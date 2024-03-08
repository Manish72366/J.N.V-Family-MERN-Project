const mongoose = require("mongoose");
const connection  = async ()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/ECommerce");
        console.log("Connection successful");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }
}
connection();