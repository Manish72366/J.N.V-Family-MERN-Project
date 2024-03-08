import React, { useState, useEffect } from 'react';
import '../css/Messages.css';
import { Link } from "react-router-dom";
const Messages = ({ userData }) => {
  const [userMessages, setUserMessages] = useState([]);
  const [senders, setSenders] = useState([]);

  useEffect(() => {
    if (userData && userData.phone) {
      fetchMessagesByUserPhone(userData.phone);
    }
  }, [userData]);

  const fetchMessagesByUserPhone = async (userPhone) => {
    try {
      const response = await fetch(`http://localhost:4000/connects?receiverPhone=${userPhone}`);
      const data = await response.json();
      setUserMessages(data.messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    // Make sure userMessages is not empty before proceeding
    if (userMessages.length > 0) {
      fetchSendersByPhone();
    }
  }, [userMessages]);

  const fetchSendersByPhone = async () => {
    try {
      // Map over userMessages and fetch sender details for each message
      const senderPromises = userMessages.map(async (message) => {
        const response = await fetch(`http://localhost:4000/register/${message.Senderphone}`);
        const data = await response.json();
        return data.user;
      });

      // Wait for all senderPromises to resolve
      const resolvedSenders = await Promise.all(senderPromises);

      // Update the state with the resolved senders
      setSenders(resolvedSenders);
    } catch (error) {
      console.error('Error fetching senders:', error);
    }
  };
  
  const handleDeleteMessage = async (itemId) => {
    try {
      // Make a DELETE request to the backend API endpoint for deleting a cart item
      await fetch(`http://localhost:4000/connects/${itemId}`, {
        method: 'DELETE',
      });
      // After successful deletion, fetch the updated cart data
      fetchMessagesByUserPhone(userData.phone);
    } catch (error) {
      console.error('Error deleting message item:', error);
    }
  };
  return (
    <div className="Msgmain">
      <ul className="Msgcards">
        {userMessages.map((message, index) => (
          <li className="Msgcards_item" key={index}>
            <div className="Msgcard">
              <div className="Msgcard_image">
                {/* Find the corresponding sender for the current message */}
                {senders[index] && (
                  <img src={senders[index].image.url} alt={message.Sendername} />
                )}
              </div>
              <div className="Msgcard_content">
                <h2 className="Msgcard_title">{message.Sendername}</h2>
                <div className="Msgcard_text">
                  <p>Sender phone number {message.Senderphone}</p>
                  <hr />
                  <p>{message.msg}</p>
                  <button onClick={() => handleDeleteMessage(message._id)}>Delete</button>
                  <Link to={`/contact?phoneNo=${message.Senderphone}`}>
                     <button>Reply</button>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
