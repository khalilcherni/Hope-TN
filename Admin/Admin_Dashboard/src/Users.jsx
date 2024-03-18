import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css'; // Import the CSS file

function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios.get('http://localhost:4001/users/get')
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
      axios.get('http://localhost:4001/users/get')
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
    axios.delete(`http://localhost:4001/users/delete/${id}`)
      .then(response => {
        console.log("User deleted successfully:", response.data);
        setData(prevData => prevData.filter(user => user.id !== id));
      })
      .catch(error => {
        console.error("Error deleting user:", error);
      });
  };

  const handleSubmitAddUser = async () => {
    try {
      const registerResponse = await axios.post('http://localhost:4001/users/register', {
        firstName,
        lastName,
        birth,
        email,
        password
      });
      console.log('Registration API response:', registerResponse.data);

      // Update the user list with the newly added user
      setData(prevData => [...prevData, registerResponse.data]);
      setShowAddForm(false);
      resetFormFields();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitEditUser = async () => {
    try {
      await axios.put(`http://localhost:4001/users/update/${editingUser.id}`, { 
        firstName,
        lastName,
        birth,
        email,
        password
      });
      const updatedData = data.map(item => {
        if (item.id === editingUser.id) {
          return { 
            ...item, 
            firstName,
            lastName,
            birth,
            email,
            password
          };
        }
        return item;
      });
      setData(updatedData);
      setShowEditForm(false);
      resetFormFields();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const resetFormFields = () => {
    setFirstName('');
    setLastName('');
    setBirth('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="users-container">
      <h1 className="users-title">Users.List</h1>
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name"
        />
        {/* <button onClick={handleSearch}>Search</button> */}
      </div>
      <button className="add-button" onClick={() => setShowAddForm(true)}>Add User</button>
      {showAddForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowAddForm(false)}>&times;</span>
            <h2>Add User</h2>
            <div className="form-card-content">
              <table>
                <tbody>
                  <tr>
                    <td><label htmlFor="firstName">First Name:</label></td>
                    <td><input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="lastName">Last Name:</label></td>
                    <td><input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="birth">Birth:</label></td>
                    <td><input type="text" id="birth" value={birth} onChange={(e) => setBirth(e.target.value)} placeholder="Birth" /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="email">Email:</label></td>
                    <td><input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="password">Password:</label></td>
                    <td><input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="form-card-buttons">
              <button onClick={handleSubmitAddUser}>Done</button>
            </div>
          </div>
        </div>
      )}

      {showEditForm && editingUser && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowEditForm(false)}>&times;</span>
            <h2>Edit User</h2>
            <div className="form-card-content">
              <div className="form-group">
                <label htmlFor="editFirstName">First Name:</label>
                <input type="text" id="editFirstName" value={editingUser.firstName} onChange={(e) => setEditingUser({...editingUser, firstName: e.target.value})} placeholder="First Name" />
              </div>
              <div className="form-group">
                <label htmlFor="editLastName">Last Name:</label>
                <input type="text" id="editLastName" value={editingUser.lastName} onChange={(e) => setEditingUser({...editingUser, lastName: e.target.value})} placeholder="Last Name" />
              </div>
              <div className="form-group">
                <label htmlFor="editBirth">Birth:</label>
                <input type="text" id="editBirth" value={editingUser.birth} onChange={(e) => setEditingUser({...editingUser, birth: e.target.value})} placeholder="Birth" />
              </div>
              <div className="form-group">
                <label htmlFor="editEmail">Email:</label>
                <input type="text" id="editEmail" value={editingUser.email} onChange={(e) => setEditingUser({...editingUser, email: e.target.value})} placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="editPassword">Password:</label>
                <input type="password" id="editPassword" value={editingUser.password} onChange={(e) => setEditingUser({...editingUser, password: e.target.value})} placeholder="Password" />
              </div>
            </div>
            <div className="form-card-buttons">
              <button onClick={handleSubmitEditUser}>Done</button>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="user-list">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Birth</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index}>
                  <td>{user.firstName} {user.lastName}</td>
                  <td>{user.birth}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
                    <button className="button-59" onClick={() => handleDelete(user.id)}>Delete</button>
                    <button className="button-59" onClick={() => { setShowEditForm(true); setEditingUser(user); }}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Users;
