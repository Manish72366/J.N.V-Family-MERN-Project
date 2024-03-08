import React from 'react';
import '../css/Student.css'
const Student = () => {
  return (
    <section className='student'>
       <div className="demo-description">
         <h1 className="demo-description__title">Some Memories</h1>
         <p className="demo-description__p">Resize the browser to see the <picture/> effect.</p>
       </div>

       <div className="demo coursemeal">

        {/* <!-- APPETIZERS--> */}
        <div className="coursemeal__div ">
            <picture className="responsive-img">
                <source media="(min-width: 992px)" srcset="../photos/jnvTehri.jpeg"/>
                <source media="(min-width: 767px)" srcset="../photos/jnvTehri.jpeg"/>
                <source srcset="https://i.postimg.cc/TwnctQr7/appetizer-img-3.jpg"/>
                <img src="../photos/jnvTehri.jpeg" alt="Appetizer"/>
            </picture>     
            
            <div className="coursemeal-info">
                <a href="#" className="coursemeal-info__link">Hostel</a>
            </div>
        </div>

    {/* <!-- MAIN COURSE--> */}
    <div className="coursemeal__div">
        
        <picture className="responsive-img">
            <source media="(min-width: 992px)" srcset="../photos/jnvPatna.jpg"/>
            <source media="(min-width: 767px)" srcset="../photos/jnvPatna.jpg"/>
            <source srcset="https://i.postimg.cc/pLY8dt4q/maindish-img-3.jpg"/>
            <img src="../photos/jnvPatna.jpg" alt="Main Course"/>
        </picture> 

        <div className="coursemeal-info">
            <a href="#" className="coursemeal-info__link">Classroom</a>
        </div>            
    </div>

    {/* <!-- DESSERTS--> */}
    <div className="coursemeal__div">
        
        <picture className="responsive-img">
            <source media="(min-width: 992px)" srcset="../photos/jnvFront.jpeg"/>
            <source media="(min-width: 767px)" srcset="../photos/jnvFront.jpeg"/>
            <source srcset="https://i.postimg.cc/ZKcFCVFZ/dessert-img-3.jpg"/>
            <img src="../photos/jnvFront.jpeg" alt="Desserts"/>
        </picture>
        <div className="coursemeal-info">
            <a href="#" className="coursemeal-info__link">Academic</a>
        </div>              
    </div>
   </div>
    </section>
  );
};

export default Student;
