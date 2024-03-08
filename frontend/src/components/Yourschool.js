import React, { useState, useRef } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import axios from 'axios'
const Yourschool = () => {
  const navigate = useNavigate();
  const [newSchool, setSchool] = useState({
    Schoolname: "",
    city: "",
    state: "",
    Pincode: "",
    description: "",
    images:{url1 : "" , url2:""},
    email: "",
    phone: ""
  });
  const handleInputs = (e) => {
    const { name, value, type, checked } = e.target;
    // For radio buttons
    if (type === "radio") {
        setSchool({ ...newSchool, [name]: checked ? value : "" });
    } else {
      // For other input types
      setSchool({ ...newSchool, [name]: value });
    }
  };

  const PostData = async (e) => {
    // console.log(newSchool);
    e.preventDefault(); 
    try {
      let response = await axios.post("http://localhost:4000/schools", newSchool);
      if (response.data.success) {
        alert("Successfully added a new school");
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
const inputRef1 = useRef(null);
const inputRef2 = useRef(null);
const [image, setImage] = useState("");
const handleImageClick = (inputRef) => {
    inputRef.current.click();
};


const handleImageChange = (event, key) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const imageUrl = reader.result;
        setSchool({ ...newSchool, images: { ...newSchool.images, [key]: imageUrl } });
      };
      reader.readAsDataURL(file);
    }
    setImage(file);
  };

return (
  <div className="reg">
    <section className="container1">
      <Link to='/profile'>Back to profile</Link>
      <div className='hdr'>School form</div>
      <form action="POST" className="form">
        <div className="input-box-sign">
          <label>School Name</label>
          <input type="text" placeholder="Enter school name" name="Schoolname" value={newSchool.Schoolname} onChange={handleInputs} />
        </div>
        <div className="input-box-sign">
          <label>City</label>
          <input type="text" placeholder="Enter location of school" name="city" value={newSchool.city} onChange={handleInputs} />
        </div>
        <div className="input-box-sign">
          <label>State</label>
          <input type="text" placeholder="Enter state" name="state" value={newSchool.state} onChange={handleInputs} />
        </div>
        <div className="input-box-sign">
          <label>Pincode</label>
          <input type="text" placeholder="Enter pincode " name="Pincode" value={newSchool.Pincode} onChange={handleInputs} />
        </div>
        <div className="input-box-sign">
          <label>Description</label>
          <input type="text" placeholder="Enter about school " name="description" value={newSchool.description} onChange={handleInputs} />
        </div>

         {/* Upload image 1 */}
         <div className="uploadImg">
            {newSchool.images.url1 ? (
              <img className="upld" src={newSchool.images.url1} alt="" />
            ) : (
              <img className="upld" src="../photos/jnvTehri.jpeg" alt="" />
            )}
            <input
              type="file"
              ref={inputRef1}
              onChange={(e) => handleImageChange(e, 'url1')}
              style={{ display: 'none' }}
            />
            <button
              className="userRegImg"
              onClick={() => handleImageClick(inputRef1)}
              type="button"
            >
              Upload Image 1
            </button>
          </div>

          {/* Upload image 2 */}
          <div className="uploadImg">
            {newSchool.images.url2 ? (
              <img className="upld" src={newSchool.images.url2} alt="" />
            ) : (
              <img className="upld" src="../photos/jnvTehri.jpeg" alt="" />
            )}
            <input
              type="file"
              ref={inputRef2}
              onChange={(e) => handleImageChange(e, 'url2')}
              style={{ display: 'none' }}
            />
            <button
              className="userRegImg"
              onClick={() => handleImageClick(inputRef2)}
              type="button"
            >
              Upload Image 2
            </button>
          </div>
       
        <div className="input-box-sign">
          <label>Email</label>
          <input type="text" placeholder="Enter your email" name="email" value={newSchool.email} onChange={handleInputs} />
        </div>
        <div className="input-box-sign">
          <label>Phone no</label>
          <input type="number" placeholder="Enter your phone number" name="phone" value={newSchool.phone} onChange={handleInputs} />
        </div>
        <button className="formBtn" type="submit" value="School" onClick={PostData}>Submit</button>
      </form>
    </section>
  </div>
);
};
export default Yourschool;