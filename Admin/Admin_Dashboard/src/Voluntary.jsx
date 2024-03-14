import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css'; // Import the CSS file

function Volunteers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

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

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const handleSearch = () => {
    if (searchTerm === "") {
      axios.get('http://localhost:4000/api/voluntary/getAll')
        .then(res => {
          setData(res.data);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    } else {
      const filteredData = data.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setData(filteredData);
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/api/voluntary/delete/${id}`)
      .then(response => {
        console.log("User deleted successfully:", response.data);
        setData(prevData => prevData.filter(user => user.id !== id));
      })
      .catch(error => {
        console.error("Error deleting user:", error);
      });
  };

  const handleAdd = () => {
    setShowAddForm(true);
  };

  const handleSubmit = () => {
    const newVolunteer = {
      name,
      phone,
      job
    };

    axios.post("http://localhost:4000/api/voluntary/add", newVolunteer)
      .then(response => {
        console.log("Volunteer added successfully:", response.data);
        setData(prevData => [...prevData, response.data]);
        setShowAddForm(false);
        setName('');
        setPhone('');
        setJob('');
      })
      .catch(error => {
        console.error("Error adding volunteer:", error);
      });
  };

  return (
    <div className="users-container">
      <h1 className="users-title">Volunteers</h1>
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {showAddForm && (
        <div className="add-form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
          />
          <input
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            placeholder="Job"
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}

      <button onClick={handleAdd}>Add Volunteer</button>

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
                <strong>Phone:</strong> {user.phone}
              </div>
              <div className="user-info">
                <strong>Job:</strong> {user.job}
              </div>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Volunteers;
