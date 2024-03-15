import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css'; // Import the CSS file

function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newBirth, setNewBirth] = useState("");
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

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

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const handleSearch = () => {
    if (searchTerm === "") {
      axios.get('http://localhost:4000/users/get')
        .then(res => {
          setData(res.data);
          setLoading(false);
        })
        .catch(err => {
          console.error("Error fetching users:", err);
          setLoading(false);
        });
    } else {
      const filteredData = data.filter(user => 
        user.firstName && user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setData(filteredData);
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/users/delete/${id}`)
      .then(response => {
        console.log("User deleted successfully:", response.data);
        setData(prevData => prevData.filter(user => user.id !== id));
      })
      .catch(error => {
        console.error("Error deleting user:", error);
      });
  };

  const handleUpdate = (id) => {
    axios.put(`http://localhost:4000/users/update/${id}`, { 
      firstName: newFirstName, 
      lastName: newLastName, 
      birth: newBirth,
      email: newEmail,
      password: newPassword,
    })
      .then(() => {
        const updatedData = data.map(item => {
          if (item.id === id) {
            return { 
              ...item, 
              firstName: newFirstName, 
              lastName: newLastName, 
              birth: newBirth,
              email: newEmail,
              password: newPassword,
            };
          }
          return item;
        });
        setData(updatedData);
        setEditingId(null);
      })
      .catch(err => console.error("Error updating user:", err));
  };

  const handleAddUser = () => {
    setShowForm(true);
  };

  const handleSubmit = async () => {
    try {
      const registerResponse = await axios.post('http://localhost:4000/users/register', {
        firstName,
        lastName,
        birth,
        email,
        password
      });
      console.log('Registration API response:', registerResponse.data);
  
      setData(prevData => [...prevData, registerResponse.data]);
      setShowForm(false);
      setFirstName('');
      setLastName('');
      setBirth('');
      setEmail('');
      setPassword('');
      // Resetting the input fields for new user details
      setNewFirstName('');
      setNewLastName('');
      setNewBirth('');
      setNewEmail('');
      setNewPassword('');
    } catch (error) {
      console.error(error);
    }
  };

 

  return (
    <div className="users-container">
      <h1 className="users-title">User List</h1>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search by name" 
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleAddUser}>Add User</button>
      {showForm && (
        <div className="form-card">
          <div className="form-card-content">
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
            <input type="text" value={birth} onChange={(e) => setBirth(e.target.value)} placeholder="Birth" />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </div>
          <div className="form-card-buttons">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
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
              <button onClick={() => handleDelete(user.id)}>Delete</button>
              <div className="event-info">
                {editingId === user.id ? (
                  <>
                    <input type="text" value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)} placeholder="First Name"/>
                    <input type="text" value={newLastName} onChange={(e) => setNewLastName(e.target.value)} placeholder="Last Name"/>
                    <input type="text" value={newBirth} onChange={(e) => setNewBirth(e.target.value)}placeholder="Birth" />
                    <input type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder="Email"/>
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Password"/>
                    <button onClick={() => handleUpdate(user.id)}>Save</button>
                  </>
                ) : (
                  <button onClick={() => setEditingId(user.id)}>Update</button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Users;
