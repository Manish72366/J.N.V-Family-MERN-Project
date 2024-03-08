import React from 'react';
import  "../css/Aboutpage.css";
const Aboutpage = () => {
    return (
     <section className='describeSec'>
        <div className="abt1">
            <img className = "abtImg" src="../photos/jnvTehri.jpeg" alt=""/>
        </div>
        <div className='abt2'>
               <h1 id="H1abt">About Me</h1>
               <div className="abtManish">
                 MY self manish mamgain..... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ipsa officiis ex voluptas, reprehenderit doloribus a possimus, voluptates sed sunt reiciendis, nesciunt minima quidem consequuntur debitis aspernatur provident harum est!
                 Officiis hic veritatis, inventore dolores quibusdam architecto quia aut sunt commodi quam eveniet natus distinctio! Facere distinctio sunt culpa? Asperiores eveniet ut incidunt fugit architecto. Quasi iste ipsam voluptate possimus.
               </div>
               <button className="talk">Contact me</button>
        </div>
     </section>
     );
};
export default Aboutpage;