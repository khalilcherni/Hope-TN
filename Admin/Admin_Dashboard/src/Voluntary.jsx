import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css'; // Import the CSS file

function volunteers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:4000/api/voluntary/getAll')
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
      <h1 className="users-title">User List</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="user-list">
          {data.map((user, index) => (
            <div key={index} className="user-card">
              <div className="user-info">
                <strong>Name:</strong> {user.name} 
              </div>
              <div className="user-info">
                <strong>phone:</strong> {user.phone}
              </div>
              <div className="user-info">
                <strong>job:</strong> {user.job}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default volunteers;
