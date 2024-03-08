import React , {useState , useEffect} from 'react'
import Footer from './Footer'
import '../css/Schoolpagedata.css'
import SchoolPage from './Schoolpage'
const Schoolpagedata = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    // Fetch user data from the backend
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      const response = await fetch('http://localhost:4000/schools'); // Replace with your backend endpoint
      const data = await response.json();
      setSchools(data.schools);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  return (
    <>
    <section className='schoolpagedata'>
      <SchoolPage  imgAbove = "../photos/jnvTehri.jpeg" imgBack = "../photos/tehriFront.jpg" schoolName= "JNV Tehri" pincode ={249121} about = "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared."/>
      <SchoolPage  imgAbove = "../photos/jnvNainital.jpg" imgBack = "../photos/tehriBeauty.jpg" schoolName= "JNV Nainital" pincode ={249121} about = "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared."/>
      <SchoolPage  imgAbove = "../photos/jnvClass.jpg" imgBack = "../photos/jnvPatna.jpg" schoolName= "JNV Patna" pincode ={249121} about = "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared."/>
      <SchoolPage  imgAbove = "../photos/tehriUp.jpg" imgBack = "../photos/jnvFront.jpeg" schoolName= "JNV Bagalkot" pincode ={249121} about = "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared."/>
      {/* Registered schools */}
      {schools.map((school) => (
        <SchoolPage
          imgAbove={school.image.url1} 
          imgBack={school.image.url2} // Adjust the property names according to your data
          schoolName={school.Schoolname} // Adjust the property names according to your data
          about = {school.description}
        />
      ))}
    </section>
    <Footer/>
    </>
  )
}

export default Schoolpagedata
