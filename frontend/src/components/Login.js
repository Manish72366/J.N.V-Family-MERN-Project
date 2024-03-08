import React , {useState} from 'react'
import { useNavigate , Link  } from 'react-router-dom';
import axios from 'axios'
import '../css/Login.css'

const Login = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [user , setUser] = useState({
    email:"",password:""
  });
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
    {/* console.log(user); */}
    e.preventDefault();  {/* to prevent by default action*/}
    try{
         let response = await axios.post("http://localhost:4000/login",user);
         if (response.data) 
         {
            alert("Login Successfully");
            // Call the onLoginSuccess callback provided by the parent component
            onLoginSuccess(response.data);
            navigate('/');
         } 
        else {
              alert(`Error: ${response.data.message}`);
        }
    }catch (error) {
      alert("Please check your password , email or phone number");
      console.log(error);
      }
    }
  return (
    <section className='logIn'>
        <div className="wrapper1">
     <form className='logForm' action="/login" method="POST">
      <h2 className='log'>Login</h2>
        <div className="input-field">
        <input type="text" name="email" value={user.email} onChange = {handleInputs} required />
        <label>Enter your email or phone No</label>
      </div>
      <div className="input-field">
        <input type="password" name="password" value={user.password} onChange = {handleInputs} required />
        <label>Enter your password</label>
      </div>
      <div className="forget">
        <label for="remember">
          <input type="checkbox" id="remember"/>
          <p>Remember me</p>
        </label>
        <Link to="#">Forgot password?</Link>
      </div>
      {/* {{!-- type submit se wo form ke aciton = /login mai jaane ki kosis karega with the help of post method --}} */}
      <button className='btnLog' type="submit" onClick={PostData} >Log In</button>
      <div className="register">
        <p>Don't have an account? <Link to="/signin">Register</Link></p>
      </div>
    </form>
  </div>
    </section>
  )
}

export default Login
