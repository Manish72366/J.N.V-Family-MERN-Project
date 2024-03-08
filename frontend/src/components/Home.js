import React from 'react'
import '../css/Home.css'
const Home = () => {
  return (
    <section className='bg'>
   {/* search section */}
   <div className="cont">
      <div className="cont1">
          <img className="cont1A" src="/photos/student.png" alt="" />
          <div className="cont1B">
          <h1 aria-label="We are navodiyans">
            We are&nbsp;<span class="typewriter"></span>
          </h1>
          </div>
      </div>
      <div className="cont2">
        <div class="wrap">
         <div class="circle">
         <img src='../photos/jnvTehri.jpeg' alt=''/>
         </div>
        </div>
      </div>
    </div>  
    </section> 
  )
}

export default Home;