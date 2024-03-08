import React, { useState, useRef } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import axios from 'axios'
const Sellproduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    Productname: "", companyName: "", price: "", description: "", sellcity: "", sellstate: ""
    , Pincode: "", image: { url: "" }, qty: "", email: "", phone: ""
  });

  const handleInputs = (e) => {
    const { name, value, type, checked } = e.target;
    // For radio buttons
    if (type === "radio") {
      setProduct({ ...product, [name]: checked ? value : "" });
    } else {
      // For other input types
      setProduct({ ...product, [name]: value });
    }
  };

  const PostData = async (e) => {
    e.preventDefault(); 
    try {
      let response = await axios.post("http://localhost:4000/sell", product);
      if (response.data.success) {
        alert("Successfully set up");
        navigate('/profile'); // Assuming you are using React Router
      } else {
        // Registration failed, display an error message
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error message:', error.message);
    }
}

// for image drop 
const inputRef = useRef(null);
const [image, setImage] = useState("");
const handleImageClick = () => {
  inputRef.current.click();
}

const handleImageChange = (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onloadend = () => {
      const imageUrl = reader.result;
      console.log('Image URL:', imageUrl);

      // Set the image URL in the state
      setProduct({ ...product, image: { url: imageUrl } });
    };
    reader.readAsDataURL(file);
    setImage(file);
  }
};
return (
  <div className="reg">

    <section className="container1"> 
      <Link to='/profile'>Back to profile</Link>
      <div className='hdr'>Product form</div>
      <form action="POST" className="form">
        <div className="input-box-sign">
          <label>Product Name</label>
          <input type="text" placeholder="Enter product's name" name="Productname" value={product.Productname} onChange={handleInputs} />
        </div>
        <div className="input-box-sign">
          <label>Company Name</label>
          <input type="text" placeholder="Enter company's name" name="companyName" value={product.companyName} onChange={handleInputs} />
        </div>
        <div className="input-box-sign">
          <label>Price</label>
          <input type="number" placeholder="Enter price of product" name="price" value={product.price} onChange={handleInputs} />
        </div>
        <div className="input-box-sign">
          <label>Description</label>
          <input type="text" placeholder="Enter about product" name="description" value={product.description} onChange={handleInputs} />
        </div>
        <div className="input-box-sign">
          <label>Seller city</label>
          <input type="text" placeholder="Enter seller's city" name="sellcity" value={product.sellcity} onChange={handleInputs} />
        </div>
        <div className="input-box-sign">
          <label>Seller state</label>
          <input type="text" placeholder="Enter seller's state" name="sellstate" value={product.sellstate} onChange={handleInputs} />
        </div>
        <div className="input-box-sign">
          <label>Pincode</label>
          <input type="text" placeholder="Enter pincode " name="Pincode" value={product.Pincode} onChange={handleInputs} />
        </div>

        {/* Upload image */}
        <div className="uploadImg" >
          {image ? (<img className="upld" src={URL.createObjectURL(image)} alt="" />) : (<img className="upld" src="../photos/jnvTehri.jpeg" alt="" />)}
          <input type="file" ref={inputRef} onChange={handleImageChange} style={{ display: "none" }} />
          <button className="userRegImg" onClick={handleImageClick} type="button">Upload Image</button>
        </div>

        <div className="input-box-sign">
          <label>Quantity</label>
          <input type="number" placeholder="Enter quantity" name="qty" value={product.qty} onChange={handleInputs} />
        </div>
        <div className="input-box-sign">
          <label>Email</label>
          <input type="text" placeholder="Enter your email" name="email" value={product.email} onChange={handleInputs} />
        </div>
        <div className="input-box-sign">
          <label>Phone no</label>
          <input type="number" placeholder="Enter your phone number" name="phone" value={product.phone} onChange={handleInputs} />
        </div>
        <button className="formBtn" type="submit" value="Sell" onClick={PostData}>Sell</button>
      </form>
    </section>
  </div>
);
};
export default Sellproduct;