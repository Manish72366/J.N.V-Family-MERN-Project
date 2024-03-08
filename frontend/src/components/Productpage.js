import React , {useState}  from 'react';
import axios from 'axios'
import '../css/Productpage.css';
import { useNavigate } from 'react-router-dom';
const Productpage = ({userData , imgUrl , title, price , itemNo , mfg}) => {
  const userPhone = userData && userData.phone ? userData.phone : 'Unknown';
  const userEmail = userData && userData.phone ? userData.email : 'Unknown';
  const navigate = useNavigate();
  const getProductInfo = () => {
    return {
      title: title, // both are same as far as name concern so destructing happens here...
      itemNo: itemNo,
      mfg: mfg,
      price: price,
      img: imgUrl,
      variant: {
        size: ["Size", "SMALL", "MEDIUM", "LARGE", "X-LARGE"]
      },
      description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam orci, posuere id malesuada non, hendrerit non lacus. Nullam fringilla est sit amet rhoncus porttitor.</p> Nam non tellus sit amet purus posuere varius nec id nunc. Integer nec egestas mauris. Nunc in tincidunt erat. Pellentesque vitae urna eu dui elementum vulputate eget eu nibh. <p>Pellentesque vitae aliquet velit, non posuere lacus. Praesent in faucibus eros. Proin auctor magna vitae massa placerat, eu tempus velit vehicula. Nunc in tincidunt erat. Pellentesque vitae urna eu dui elementum vulputate eget eu nibh. Pellentesque vitae aliquet velit, non posuere lacus. Praesent in faucibus eros.</p><ul><b>Features:</b><li>Feature 1...</li><li>Feature 2...</li><li>Feature 3...</li></ul>",
    };
  };

  // This will allow the description to use HTML markup and not just return a string
  // It will use dangerouslySetInnerHTML where the description will be returned
  const createMarkup = () => {
    return { __html: getProductInfo().description };
  };

  const productInfo = getProductInfo();

  const [user , setUser] = useState({
    name:title,price: price, img :imgUrl, itemNo : itemNo,mfg: mfg,
    size : "", qty: "" , userPhone : userPhone , userEmail : userEmail
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
    e.preventDefault();  
    try{
         let response = await axios.post("http://localhost:4000/products",user);
         if (response.data.success) {
          alert("Successfully added in cart");
          } else {
              // Registration failed, display an error message
              alert(`Error: ${response.data.message}`);
          }
    }catch (error) {
      if(userData.length === 0){ 
        navigate('/login');
      }
      else if (error.response) {
        alert("Oops something wrong!");
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

  return (
  <span className="prodpage">
  <form  action = "POST" className="form">
    <div className="Productcard">
      <div className="Prodsection">
          <img src={productInfo.img} alt={productInfo.title} />  
      </div>

      <div className="Prodsection itemDetails">
        <div id='title'>
          <h1>{productInfo.title}</h1>
          <hr className='hr'/>
        </div>
        <div id="itemNo" className="borderStyleitem">
          <span className="borderBg">Item</span>
          <span className="borderValue">{productInfo.itemNo}</span>
        </div>

        <div id="price" className="borderStyleprice">
          <span className="borderBg">&#8377;</span>
          <span className="borderValue">{productInfo.price.toFixed(2)}</span>
        </div>

        <div className="mfg borderStyle borderStyleitem">
          <span className="borderBg">Mfg</span>
          <span className="borderValue">{productInfo.mfg}</span>
        </div>

        <div className="variant">
          <select className='Prodselect' name= "size" value={user.size} onChange={handleInputs}>
            {productInfo.variant.size.map((size, index) => (
              <option className= "opt" key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="qty">
          <input type="number" min="0" max="10" placeholder="QTY" name= "qty" value={user.qty} onChange = {handleInputs}/>
        </div>

        <div className="descriptionContainer">
          <div><h2 className="background"><span>Description</span></h2></div>

          {/* This is where you use dangerouslySetInnerHTML */}
          <div className="description" dangerouslySetInnerHTML={createMarkup()}></div>
        </div>

        <div className="addToCart">
          <button type="submit" class = "btnRegister" value="Register" onClick={PostData}>Add To Cart</button>
        </div>
      </div>
    </div>
    </form>
    </span>
  );
};

export default Productpage;
