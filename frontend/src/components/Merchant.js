import React from 'react'
import '../css/Merchant.css'
const Merchant = () => {
  return (
    <section className='merchant'>
  <div className="mer_card" id="mer">
  <div className="mer_info">
    <div className="mer_header">
      <img className="locandina" src="https://navodayatrendz.in/wp-content/uploads/2023/09/1.webp"/>
      <h1>Colorful Sipper Bottle</h1>
      <h4>Gifting Items</h4>
    </div>
    <div className="mer_desc">
      <p className="text">
      Stay refreshed and vibrant with our Colorful Sipper Bottle, a perfect blend of hydration and style. Crafted to keep your drinks at the perfect temperature, this bottle adds a splash of color to your everyday life. With a range of vibrant hues to choose from. 
      </p>
    </div>
    <div className="mer_social">
      <ul>
        <li><i className="material-icons">share</i></li>
        <li><i className="material-icons"></i></li>
        <li><i className="material-icons">chat_bubble</i></li>
      </ul>
    </div>
  </div>
  <div className="blur_mer mer_back"></div>
</div>
      </section>
  )
}

export default Merchant