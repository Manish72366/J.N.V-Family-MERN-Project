import React, { useState, useEffect } from 'react';
import Studentpage from './Studentpage.js';
import Footer from './Footer.js';
import '../css/Studentdata.css';
const Studentdata = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the backend
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:4000/register'); // Replace with your backend endpoint
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  return (
    <>
    <section className='stdData'>
    <Studentpage name="Manish" imgUrl="https://img.freepik.com/premium-photo/young-bearded-smiling-man-wearing-plaid-shirt-with-green-blind-him_1139-1351.jpg?size=626&ext=jpg" courseType="Jee" />
    <Studentpage name="Manish" imgUrl="https://img.freepik.com/free-photo/young-smiling-confident-woman-using-laptop-computer-looking-camera-isolated-white-background_231208-9497.jpg?size=626&ext=jpg" courseType="Jee" />
    <Studentpage name="Manish" imgUrl="https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?size=626&ext=jpg" courseType="Jee" />
    <Studentpage name="Manish" imgUrl="https://img.freepik.com/premium-photo/confident-woman-with-long-brown-hair-modern-city-street-night_171308-2099.jpg?size=626&ext=jpg" courseType="Jee" />
    <Studentpage name="Manish" imgUrl="https://img.freepik.com/premium-photo/young-beautiful-asian-college-student-girls-holding-books_102814-1432.jpg?size=626&ext=jpg" courseType="Jee" />
    <Studentpage name="Manish" imgUrl="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg" courseType="Jee" />
    <Studentpage name="Manish" imgUrl="https://img.freepik.com/free-photo/close-up-portrait-handsome-confident-young-man-white-t-shirt-looking-away-blurry-outdoor-nature_176420-6306.jpg?size=626&ext=jpg" courseType="Jee" />
    <Studentpage name="Manish" imgUrl="https://img.freepik.com/free-photo/beautiful-smiling-woman-with-long-hair-standing-against-blue-background_662251-521.jpg?size=626&ext=jpg" courseType="Jee" />
    <Studentpage name="Manish" imgUrl="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg" courseType="Jee" />
    <Studentpage name="Manish" imgUrl="https://img.freepik.com/premium-photo/arabian-handsome-man-wall-giving-thumbs-up-gesture_1368-97425.jpg?size=626&ext=jpg" courseType="Jee" />
    <Studentpage name="Manish" imgUrl="https://img.freepik.com/free-photo/happy-student-posing-camera-holding-texrbooks-outdoors_1098-18751.jpg?size=626&ext=jpg" courseType="Jee" />
    <Studentpage name="Manish" imgUrl="https://img.freepik.com/free-photo/handsome-young-indian-student-man-holding-notebooks-while-standing-street_231208-2771.jpg?size=626&ext=jpg" courseType="Jee" />
    <Studentpage name="Manish" imgUrl="https://img.freepik.com/free-photo/portrait-young-happy-blogger-with-modern-laptop-outdoors_231208-2070.jpg?size=626&ext=jpg" courseType="Jee" />
    {/* Registered bache */}
    {users.map((user) => (
        <Studentpage
          name={`${user.firstname} ${user.lastname}`}
          imgUrl={user.image.url} // Adjust the property names according to your data
          courseType={user.lastname} // Adjust the property names according to your data
          phoneNo = {user.phone}
        />
      ))}
    </section>
    <Footer/>
    </>
  );
};

export default Studentdata;
