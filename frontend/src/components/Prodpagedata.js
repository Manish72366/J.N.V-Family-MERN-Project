import React , {useState , useEffect}  from 'react'
import Productpage from './Productpage'
import Footer from './Footer'
import '../css/Prodpagedata.css'
const Prodpagedata = ({userData}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch user data from the backend
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:4000/sell'); // Replace with your backend endpoint
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  return (
    <>
   <section className='proddata'>
   <Productpage userData={userData}   imgUrl="https://navodayatrendz.in/wp-content/uploads/2023/04/39-resized.jpg" title="White Tshirt" price= {499} itemNo="12578" mfg="Aramco ltd."/>
   <Productpage userData={userData}   imgUrl="https://m.media-amazon.com/images/I/610CGDfEDHL._SX569_.jpg" title="White Tshirt" price={499} itemNo="12578" mfg="Aramco ltd."/>
   <Productpage userData={userData}  imgUrl="https://navodayatrendz.in/wp-content/uploads/2022/04/Navodayan-design-tshirt-7-700x900.jpg" title="White Tshirt" price={499} itemNo="12578" mfg="Aramco ltd."/>
   <Productpage  userData={userData}  imgUrl="https://navodayatrendz.in/wp-content/uploads/2023/04/29-resized.jpg" title="White Tshirt" price={499} itemNo="12578" mfg="Aramco ltd."/>
   <Productpage userData={userData}  imgUrl="https://navodayatrendz.in/wp-content/uploads/2022/04/Navodayan-design-tshirt-19.jpg" title="White Tshirt" price={499} itemNo="12578" mfg="Aramco ltd."/>
   <Productpage userData={userData}  imgUrl="https://navodayatrendz.in/wp-content/uploads/2022/04/Navodayan-design-tshirt-32.jpg" title="White Tshirt" price={499} itemNo="12578" mfg="Aramco ltd."/>
   <Productpage userData={userData}  imgUrl="https://navodayatrendz.in/wp-content/uploads/2022/04/Navodayan-design-tshirt-79.jpg" title="White Tshirt" price={499} itemNo="12578" mfg="Aramco ltd."/>
   {/* Registered product */}
   {products.map((product) => (
        <Productpage userData={userData}  
          imgUrl = {product.image.url} 
          title={product.Productname}
          price= {product.price}
          itemNo="12898"
          mfg={product.companyName} // Adjust the property names according to your data
        />
      ))}
   </section>
   <Footer/>
   </>
  )
}

export default Prodpagedata
