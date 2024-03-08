import React , {useState} from 'react'
import { useNavigate , useLocation} from 'react-router-dom';
import axios from 'axios'
import '../css/Contact.css';
const Contact = ({userData}) => {
  // Use the useLocation hook to access the state from the Link component
  const location = useLocation();
  const receiverNo = new URLSearchParams(location.search).get('phoneNo');
  const navigate = useNavigate();
  const [sender, setSender] = useState({
    Sendername : `${userData.firstname} ${userData.lastname}`, Senderphone : `${userData.phone}`, msg:"" , receiverPhone : receiverNo
  });
  const handleInputs = (e) => {
    const { name, value, type, checked } = e.target;
    // For radio buttons
    if (type === "radio") {
      setSender({ ...sender, [name]: checked ? value : "" });
    } else {
      // For other input types
      setSender({ ...sender, [name]: value });
    }
  };
  const PostData = async (e) =>{
    // console.log(sender);
    e.preventDefault();  {/* to prevent by default action*/}
    try{
      // alert("show msg");
      let response = await axios.post("http://localhost:4000/connects",sender);
      if (response.data.success) {
        // Registration successful, redirect to home page
        alert("Successfully sent");
        navigate('/'); // Assuming you are using React Router
      } else {
        // Registration failed, display an error message
        alert(`Error: ${response.data.message}`);
      }
    }catch (error) {
      alert("err");
      console.error('Error message:', error.message); 
    }
  }
  return (
    <section className="cnt">
        <form  action = "POST" className="senderForm" >
           <textarea placeholder = "Type your message" name="msg" value = {sender.msg} onChange = {handleInputs}/>
           <button className= "formBtn" type="submit" value="Connection" onClick={PostData}>Send</button>
        </form>
    </section>
  )
}

export default Contact