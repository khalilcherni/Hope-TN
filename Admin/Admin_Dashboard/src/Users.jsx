import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css'; // Import the CSS file

function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:4000/users/get')
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
                <strong>Name:</strong> {user.firstName} {user.lastName}
              </div>
              <div className="user-info">
                <strong>Birth:</strong> {user.birth}
              </div>
              <div className="user-info">
                <strong>Email:</strong> {user.email}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Users;
