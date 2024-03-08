const express = require("express");
const cors = require("cors");
const app = express(); 
app.use(cors());
app.use(express.json({ limit: '50mb' })); // 10mb to upload file upto 10mb
app.use(express.urlencoded({ limit: '50mb', extended: true }));
const port =  4000;
const hbs = require("hbs");
const path = require("path");

require("./db/conn.js");

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index");
});

// Endpoint to get all products or products by email
const Product = require("./models/product");
app.get("/products", async (req, res) => {
  try {
    const userEmail = req.query.email;

    if (userEmail) {
      // If email is provided, filter products by email
      const products = await Product.find({ userEmail: userEmail });
      res.status(200).json({ success: true, products: products });
    } else {
      // If no email provided, get all products
      const allProducts = await Product.find();
      res.status(200).json({ success: true, products: allProducts });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: `Failed: ${error.message}` });
  }
});

// DELETE endpoint to delete a product by ID
app.delete('/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;

    // Find the product by ID and remove it from the database
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (deletedProduct) {
      res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ success: false, message: 'Product not found' });
    }
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.post("/products" , async (req , res) =>{
    try{
        const registerProduct =  new Product({
        name : req.body.name,
        price : req.body.price,
        img : req.body.img,
        itemNo : req.body.itemNo,
        mfg : req.body.mfg,
        size : req.body.size,
        qty : req.body.qty,
        userPhone : req.body.userPhone,
        userEmail : req.body.userEmail
        })
        const addedToCart =  await registerProduct.save();
        res.status(201).json({success: true, message: 'Added successful', user: addedToCart});
      } catch(error)
      {
        res.status(402).json({ success: false, message: `failed: ${error}` });
      }
})

const Register = require("./models/register");
app.post('/register' , async(req , res) =>{
    try{
        const registeration =  new Register({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        phone : req.body.phone,
        dob : req.body.dob,
        gender : req.body.gender,
        street : req.body.street,
        country : req.body.country,
        city : req.body.city,
        state : req.body.state,
        Pincode : req.body.Pincode,
        image: {
          url: req.body.image.url,
        },
        password : req.body.password,
        confirmPassword : req.body.confirmPassword
        })
        const registeredUser =  await registeration.save();
        res.status(201).json({ success: true, message: 'Registration successful', user: registeredUser });
    } catch (error) {
        res.status(402).json({ success: false, message: `Registration failed: ${error}` });
    }
})
// Update user data in register // put or patch both works but patch is update only that part which needs update..not entirely
app.patch('/update/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const updatedUserData = req.body;

    // Update user data in the database (replace this with your actual logic)
    const updatedUser = await Register.findByIdAndUpdate(userId, updatedUserData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.json({ success: true, message: 'User data updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: `Error updating user data: ${error}` });
  }
});
// Endpoint to get all users
app.get("/register", async (req, res) => {
  try {
    const users = await Register.find();
    res.status(200).json({ success: true, users: users });
  } catch (error) {
    res.status(500).json({ success: false, message: `Failed: ${error.message}` });
  }
});
// Endpoint to get a user by phone number
app.get("/register/:phone", async (req, res) => {
  const userPhone = req.params.phone;

  try {
    const user = await Register.findOne({ phone: userPhone });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, user: user });
  } catch (error) {
    res.status(500).json({ success: false, message: `Failed: ${error.message}` });
  }
});

// for login ->
app.post("/login", async (req, res) => {
  try {
    const userInput = req.body.email; // Assuming the user can input either email or phone
    const password = req.body.password;
    
    // Determine if the userInput is an email or a phone number
    let query;
    if (userInput.includes('@')) {
      query = { email: userInput };
    } else {
      const phoneNum = parseInt(userInput);
      query = { phone: isNaN(phoneNum) ? 0001 : phoneNum };
    }
    
    // Use $or to search for a user with either the given email or phone number
    const RegUser = await Register.findOne(query);
    
    if (RegUser) {
      if (RegUser.email == userInput || RegUser.phone == userInput) {
        if (password == RegUser.password) {
          res.status(201).json(RegUser); // sending user details to frontend..
          // res.status(201).json({ success: true, message: 'Login successful' });
        } else {
          res.status(402).json({ success: false, message: 'Incorrect password' });
        }
      } else {
        res.status(402).json({ success: false, message: 'Incorrect password/email' });
      }
      
    } else {
      res.status(402).json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    res.status(400).send("Error during login");
  }
});

// Sell products backend..
const Sell = require("./models/sell");
app.post('/sell' , async(req , res) =>{
  try{
      const Productdetails =  new Sell({
      Productname : req.body.Productname,
      companyName : req.body.companyName,
      price : req.body.price,
      description : req.body.description,
      sellcity : req.body.sellcity,
      sellstate : req.body.sellstate,
      Pincode : req.body.Pincode,
      image: {
        url: req.body.image.url,
      },
      qty : req.body.qty,
      email : req.body.email,
      phone : req.body.phone
      })
      const registeredProduct =  await Productdetails.save();
      res.status(201).json({ success: true, message: 'Registration successful', products : registeredProduct });
  } catch (error) {
      res.status(402).json({ success: false, message: `Registration failed: ${error}` });
  }
})
// Endpoint to get all products
app.get("/sell", async (req, res) => {
  try {
    const products = await Sell.find();
    res.status(200).json({ success: true, products: products});
  } catch (error) {
    res.status(500).json({ success: false, message: `Failed: ${error.message}` });
  }
});

// school backend...
const School = require("./models/school");
app.post('/schools' , async(req , res) =>{
  try{
      const Schooldetails =  new School({
      Schoolname : req.body.Schoolname,
      city : req.body.city,
      state : req.body.state,
      Pincode : req.body.Pincode,
      description : req.body.description,
      image: {
        url1: req.body.images.url1,
        url2 : req.body.images.url2
      },
      email : req.body.email,
      phone : req.body.phone
      })

      const registeredSchool =  await Schooldetails.save();
      res.status(201).json({ success: true, message: 'Registration successful', schools : registeredSchool});
  } catch (error) {
      res.status(402).json({ success: false, message: `Registration failed: ${error}` });
  }
})
// Endpoint to get all schools
app.get("/schools", async (req, res) => {
  try {
    const schools = await School.find();
    res.status(200).json({ success: true, schools: schools});
  } catch (error) {
    res.status(500).json({ success: false, message: `Failed: ${error.message}` });
  }
});

// connection backend ->
const Connection = require("./models/connection");
app.get('/connects' , async (req , res) =>{
  try {
    const userPhone = req.query.receiverPhone;
    if (userPhone) {
      // If email is provided, filter products by email
      const messages = await Connection.find({receiverPhone: userPhone });
      res.status(200).json({ success: true, messages : messages});
    } else {
      // If no phone provided, get all products
      const allMessages = await Connection.find();
      res.status(200).json({ success: true, allMessages: allMessages });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: `Failed: ${error.message}` });
  }
})
app.post('/connects' , async(req , res) =>{
  try{
      const Connectsdetails =  new Connection({
      Sendername : req.body.Sendername,
      Senderphone : req.body.Senderphone,
      msg : req.body.msg,
      receiverPhone : req.body.receiverPhone
      })
      const connected =  await Connectsdetails.save();
      res.status(201).json({ success: true, message: 'successful', connection : connected});
  } catch (error) {
      res.status(402).json({ success: false, message: `failed: ${error}` });
  }
})
// DELETE message endpoint to delete a product by ID
app.delete('/connects/:id', async (req, res) => {
  try {
    const ConnectionId = req.params.id;

    // Find the product by ID and remove it from the database
    const deletedConnection = await Connection.findByIdAndDelete(ConnectionId);
    if (deletedConnection) {
      res.status(200).json({ success: true, message: 'Message deleted successfully' });
    } else {
      res.status(404).json({ success: false, message: 'Message not found' });
    }
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`server is running at port no ${port}`);
});
