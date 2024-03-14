import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Supporters.css'; // Import the CSS file

function Supporters() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [poitns, setpoitns] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newnimage, setnewName] = useState("");
  const [newname, setnewPhone] = useState("");
  const [newpoints, setnexpo] = useState("");
  const [editingId, setEditingId] = useState(null);
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

  useEffect(() => {
    if (searchTerm === "") {
      axios.get('http://localhost:4000/supporters/get')
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
  }, [searchTerm]);

  const handleSubmit = () => {
    const newSupporter = {
      name,
      image,
      poitns
    };

    axios.post("http://localhost:4000/supporters/post", newSupporter) // Assuming this is the correct URL for adding supporters
      .then(response => {
        console.log("Supporter added successfully:", response.data);
        setData(prevData => [...prevData, response.data]);
        setShowAddForm(false);
        setName('');
        setImage('');
        setpoitns('');
      })
      .catch(error => {
        console.error("Error adding supporter:", error);
      });
  };
  const handleUpdate = (id) => {
    axios.put(`http://localhost:4000/supporters/update/${id}`, { 
     name:newname,
     image:newnimage,
     poitns:newpoints
   
  
    })
      .then(() => {
        const updatedData = data.map(item => {
          if (item.id === id) {
            return { 
              ...item, 
              name:newname,
     image:newnimage,
     poitns:newpoints
            
            };
          }
          return item;
        });
        setData(updatedData);
        setEditingId(null);
      })
      .catch(err => console.error("Error updating event:", err));
  };
  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/supporters/delete/${id}`)
      .then(response => {
        console.log("User deleted successfully:", response.data);
        setData(prevData => prevData.filter(user => user.id !== id));
      })
      .catch(error => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div className="users-container">
      <h1 className="users-title">Supporters List</h1>
      <div className="add-form">
        <button onClick={() => setShowAddForm(true)}>Add Supporter</button>
        {showAddForm && (
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Name" 
              required 
            />
            <input 
              type="text" 
              value={image} 
              onChange={(e) => setImage(e.target.value)} 
              placeholder="Image URL" 
              required 
            />
            <input 
              type="number" 
              value={poitns} 
              onChange={(e) => setpoitns(e.target.value)} 
              placeholder="Points" 
              required 
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search by name" 
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="user-list">
          {data.map((user, index) => (
            <div key={index} className="user-card">
              <div className="user-info">
                <img src={user.image}  className="profile-image" />
              </div>
              <div className="user-details">
                <div className="user-info">
                  <strong>Name:</strong> {user.name}
                </div>
                <div className="user-info">
                  <strong>Points:</strong> {user.poitns}
                </div>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
                <div className="event-info">
                {editingId === user.id ? (
                  <>
                    <input type="text" value={newname} onChange={(e) => setnewPhone(e.target.value)} placeholder="name"/>
                    <input type="text" value={newnimage} onChange={(e) => setnewName(e.target.value)} placeholder="image"/>
                    <input type="text" value={newpoints} onChange={(e) => setnexpo(e.target.value)}placeholder="points" />
                   
                    <button onClick={() => handleUpdate(user.id)}>Save</button>
                  </>
                ) : (
                  <button onClick={() => setEditingId(user.id)}>Update</button>
                )}
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
