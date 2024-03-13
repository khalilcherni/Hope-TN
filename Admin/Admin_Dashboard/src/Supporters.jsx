import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Supporters.css'; // Import the CSS file

function Supporters() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:4000/supporters/get')
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="users-container">
      <h1 className="users-title">Supporters List</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="user-list">
          {data.map((user, index) => (
            <div key={index} className="user-card">
              <div className="user-info">
                <img src={user.image} alt={`Profile of ${user.name}`} className="profile-image" />
              </div>
              <div className="user-details">
                <div className="user-info">
                  <strong>Name:</strong> {user.name}
                </div>
                <div className="user-info">
                  <strong>Points:</strong> {user.points}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Supporters;
