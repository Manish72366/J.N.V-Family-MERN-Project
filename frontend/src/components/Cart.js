import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../css/Cart.css';


const Cart = ({ userData }) => {
  const [userProducts, setUserProducts] = useState([]);

  useEffect(() => {
    if (userData && userData.email) {
      fetchProductsByUserEmail(userData.email);
    }
  }, [userData]);

  const fetchProductsByUserEmail = async (userEmail) => {
    try {
      const response = await fetch(`http://localhost:4000/products?email=${userEmail}`);
      const data = await response.json();
      setUserProducts(data.products);
    } catch (error) {
      console.error('Error fetching cart products:', error);
    }
  };
  
  const handleDeleteItem = async (itemId) => {
    try {
      // Make a DELETE request to the backend API endpoint for deleting a cart item
      await fetch(`http://localhost:4000/products/${itemId}`, {
        method: 'DELETE',
      });
      // After successful deletion, fetch the updated cart data
      fetchProductsByUserEmail(userData.email);
    } catch (error) {
      console.error('Error deleting cart item:', error);
    }
  };
  
 
  return (
    <div>
      <h5>Your Cart</h5>
      <Link to="/profile">Profile</Link>
      {userProducts.length > 0 ? (
        <div className="cart-container">
          {userProducts.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className='price'>Total Price: {item.price * item.qty}</p>
                <p>Quantity: {item.qty}</p>
                <p>Size: {item.size}</p>
              </div>
              <div className="CartBtn">
                <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
                <button >Buy</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};

export default Cart;
