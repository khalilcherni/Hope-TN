import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Supporters.css'; // Import the CSS file

function Supporters() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [points, setPoints] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newPoints, setNewPoints] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4001/supporters/get')
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
      axios.get('http://localhost:4001/supporters/get')
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
      points
    };

    axios.post("http://localhost:4001/supporters/post", newSupporter)
      .then(response => {
        console.log("Supporter added successfully:", response.data);
        setData(prevData => [...prevData, response.data]);
        setShowAddForm(false);
        setName('');
        setImage('');
        setPoints('');
      })
      .catch(error => {
        console.error("Error adding supporter:", error);
      });
  };

  const handleUpdate = (id) => {
    axios.put(`http://localhost:4001/supporters/update/${id}`, { 
      name: newName,
      image: newImage,
      points: newPoints
    })
      .then(() => {
        const updatedData = data.map(item => {
          if (item.id === id) {
            return { 
              ...item, 
              name: newName,
              image: newImage,
              points: newPoints
            };
          }
          return item;
        });
        setData(updatedData);
        setEditingId(null);
      })
      .catch(err => console.error("Error updating supporter:", err));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4001/supporters/delete/${id}`)
      .then(response => {
        console.log("Supporter deleted successfully:", response.data);
        setData(prevData => prevData.filter(user => user.id !== id));
      })
      .catch(error => {
        console.error("Error deleting supporter:", error);
      });
  };

  return (
    <div className="supporters-container">
      <h1 className="supporters-title">Supporters List</h1>
      <div className="supporter-search-container">
        <input 
          type="text" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="Search by name" 
        />
        <button className="button" onClick={handleSubmit}>Search</button>
      </div>
      <div className="supporter-form">
        <button className="button" onClick={() => setShowAddForm(true)}>Add Supporter</button>
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
              value={points} 
              onChange={(e) => setPoints(e.target.value)} 
              placeholder="Points" 
              required 
            />
            <button className="button" type="submit">Submit</button>
          </form>
        )}
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="supporter-list">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Points</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((supporter, index) => (
                <tr key={index}>
                  <td>{supporter.name}</td>
                  <td><img src={supporter.image} alt="Supporter" className="profile-image" /></td>
                  <td>{supporter.poitns}</td>
                  <td>
                    <button className="button" onClick={() => handleDelete(supporter.id)}>Delete</button>
                    {editingId === supporter.id ? (
                      <>
                        <input 
                          type="text" 
                          value={newName} 
                          onChange={(e) => setNewName(e.target.value)} 
                          placeholder="Name" 
                        />
                        <input 
                          type="text" 
                          value={newImage} 
                          onChange={(e) => setNewImage(e.target.value)} 
                          placeholder="Image URL" 
                        />
                        <input 
                          type="number" 
                          value={newPoints} 
                          onChange={(e) => setNewPoints(e.target.value)} 
                          placeholder="Points" 
                        />
                        <button className="button" onClick={() => handleUpdate(supporter.id)}>Save</button>
                      </>
                    ) : (
                      <button className="button" onClick={() => setEditingId(supporter.id)}>Edit</button>
                    )}
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

export default Supporters;
