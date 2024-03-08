import React , {useState , useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Update = ({userData}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        firstname: userData.firstname || "",
        lastname: userData.lastname || "",
        email: userData.email || "",
        phone: userData.phone || "",
        dob: userData.dob || "",
        gender: userData.gender || "",
        street: userData.street || "",
        country: userData.country || "",
        city: userData.city || "",
        state: userData.state || "",
        Pincode: userData.Pincode || "",
        image: { url: userData.image ? userData.image.url : "" },
        password: "", // Leave password fields empty for security reasons
        confirmPassword: ""
      });
    // below is to get the input what user will fill and to which box he filled the data (name)..
    const handleInputs = (e) => {
      const { name, value, type, checked } = e.target;
      // For radio buttons
      if (type === "radio") {
        setUser({ ...user, [name]: checked ? value : "" });
      } else {
        // For other input types
        setUser({ ...user, [name]: value });
      }
    };
    
    const updateData = async (e) => {
        // console.log(userData._id);
        e.preventDefault();
        try {
          let response = await axios.patch(`http://localhost:4000/update/${userData._id}`, user);
          if (response.data.success) {
            alert("Successfully updated!");
            navigate('/profile');
          } else {
            alert(`Error: ${response.data.message}`);
          }
        } catch (error) {
          alert("Error updating profile");
          // Handle error
        }
      };
  
     // for image drop 
     const inputRef = useRef(null);
     const [image , setImage] = useState("");
     const handleImageClick = () =>{
       inputRef.current.click();
     }
     
     const handleImageChange = (event) => {
       const file = event.target.files[0];
     
       if (file) {
         const reader = new FileReader();
     
         reader.onloadend = () => {
           const imageUrl = reader.result;     
           // Set the image URL in the state
           setUser({ ...user, image: { url: imageUrl } });
         };
     
         reader.readAsDataURL(file);
         setImage(file);
       }
     };

  return (
    <div className="reg">
    <section className="container1">
    <div className='hdr'>Update Profile</div>
    <form  action = "PATCH" className="form" >
      <div className="input-box-sign">
        <label>First Name</label>
        <input type="text" placeholder="Enter first name" name="firstname" value={user.firstname} onChange = {handleInputs}/>
      </div>
      <div className="input-box-sign">
        <label>Last Name</label>
        <input type="text" placeholder="Enter last name" name="lastname"  value = {user.lastname} onChange = {handleInputs}/>
      </div>
      <div className="input-box-sign">
        <label>Email Address</label>
        <input type="text" placeholder="Enter email address" name="email"  value = {user.email} onChange = {handleInputs}/>
      </div>

      <div className="column">
        <div className="input-box-sign">
          <label>Phone Number</label>
           <input type="number" placeholder="Enter phone number"  name="phone"  value = {user.phone} onChange = {handleInputs}/>  
        </div>
        <div className="input-box-sign">
          <label>Birth Date</label>
          <input type="date" placeholder="Enter birth date" name="dob"  value = {user.dob} onChange = {handleInputs}/>
        </div>
      </div>
      <div className="gender-box">
        <h3>Gender</h3>
        <div className="gender-option">
          <div className="gender">
          <input type="radio" id="check-male" name="gender" value = "male" checked={user.gender === 'male'} onChange={handleInputs} />
            <label for="check-male">male</label>
          </div>
          
          <div className="gender">
          <input type="radio" id="check-female" name="gender" value = "female" checked={user.gender === 'female'} onChange={handleInputs}/> {/* name gender so you can choose one only  */}
            <label for="check-female">Female</label>
          </div>
        </div>
      </div>
      <div className="input-box-sign address">
        <label>Address</label>
        <input type="text" placeholder="Enter street address" name="street"  value = {user.street}onChange = {handleInputs}/>
        <div className="column">
          <div className="select-box">
          <select name="country" value={user.country} onChange={handleInputs}>
            <option className= "opt" hidden>Country</option>
            <option className= "opt" value="America">America</option>
            <option className= "opt" value="Japan">Japan</option>
            <option className= "opt" value="India">India</option>
            <option className= "opt" value="Nepal">Nepal</option>
          </select>
          </div>
          <input type="text" placeholder="Enter your city" name="city" value = {user.city} onChange = {handleInputs}/>
        </div>
        <div className="column">
          <input type="text" placeholder="Enter your state" name="state" value = {user.state} onChange = {handleInputs}/>
          <input type="number" placeholder="Enter postal code" name="Pincode" value = {user.Pincode}onChange = {handleInputs}/>
        </div>
      </div>
     {/* Upload image */}

     <div className="uploadImg" >
        {image ? (<img className="upld" src={URL.createObjectURL(image)} alt="" />) : (<img className="upld" src={user.image.url} alt="" /> )}
        <input type="file" ref={inputRef} onChange={handleImageChange} style={{ display: "none" }} />
        <button className="userRegImg" onClick={handleImageClick} type="button">Upload Image</button>
      </div>

      <div className="input-box-sign">
        <label>Password</label>
        <input type="password" placeholder="Password" name="password"  value = {user.password}onChange = {handleInputs}/>
      </div>
       <div className="input-box-sign">
        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm Password" name="confirmPassword" value = {user.confirmPassword} onChange = {handleInputs}/>
      </div>
      <button className= "formBtn" type="submit" value="Register" onClick={updateData}>Update</button>
    </form>
  </section>
  </div>
  )
}

export default Update