import React , {useState , useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../css/Signin.css'

const Signin = ({onLoginSuccess}) => {
  const navigate = useNavigate();
  const [user , setUser] = useState({
    firstname:"", lastname:"",email:"",phone:"",dob:"",gender:""
    ,street:"",country:"",city:"",state:"",Pincode:"",image: { url: "" }, password:"",confirmPassword:""
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
  
  const PostData = async (e) =>{
      e.preventDefault();  {/* to prevent by default action*/}
      try{
          //  alert("show msg");
           let response = await axios.post("http://localhost:4000/register",user);
           if (response.data.success) {
            // Registration successful, redirect to home page
            alert("Successfully signed up");
            onLoginSuccess(response.data.user);
            navigate('/'); // Assuming you are using React Router
            } else {
                // Registration failed, display an error message
                alert(`Error: ${response.data.message}`);
            }
      }catch (error) {
        alert("err");
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('Request:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error message:', error.message);
        }
      }
    }

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
          console.log('Image URL:', imageUrl);
    
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
    <div className='hdr'>Registration Form</div>
    <form  action = "POST" className="form" >
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
        {image ? (<img className="upld" src={URL.createObjectURL(image)} alt="" />) : (<img className="upld" src="../photos/jnvTehri.jpeg" alt="" /> )}
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
      <button className= "formBtn" type="submit" value="Register" onClick={PostData}>Register</button>
    </form>
  </section>
  </div>
  )
}

export default Signin
