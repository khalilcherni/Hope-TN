import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './School.css'; // Import the CSS file

function School() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [nameodteacher, setNameodteacher] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [duration, setDuration] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [newname, setNewname] = useState('');
  const [newnameodteacher, setNewnameodteacher] = useState('');
  const [newdescription, setNewdescription] = useState('');
  const [newimage, setNewimage] = useState('');
  const [newstart, setNewstart] = useState('');
  const [newend, setNewend] = useState('');
  const [newduration, setNewduration] = useState('');
  const [editingId, setEditingId] = useState(null); // Track the ID of the school being edited
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get('http://localhost:4001/api/school/get')
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

  const handlePost = () => {
    const obj = {
      name,
      nameodteacher,
      description,
      image,
      start,
      end,
      duration
    };
  
    axios.post("http://localhost:4001/api/school", obj)
      .then(response => {
        console.log(response.data);
        setData(prevData => [...prevData, response.data]);
        setName("");
        setNameodteacher("");
        setDescription("");
        setImage("");
        setStart("");
        setEnd("");
        setDuration("");
      })
      .catch(error => {
        console.error("Error posting school data:", error);
      });
  }
  
  const handleUpdate = (id) => {
    setEditingId(id);

    const schoolToUpdate = data.find(school => school.id === id);
    setNewname(schoolToUpdate.name);
    setNewnameodteacher(schoolToUpdate.nameodteacher);
    setNewdescription(schoolToUpdate.description);
    setNewimage(schoolToUpdate.image);
    setNewstart(schoolToUpdate.start);
    setNewend(schoolToUpdate.end);
    setNewduration(schoolToUpdate.duration);
  }

  const updateSchool = () => {
    const updatedSchool = {
      name: newname,
      nameodteacher: newnameodteacher,
      description: newdescription,
      image: newimage,
      start: newstart,
      end: newend,
      duration: newduration
    };

    axios.put(`http://localhost:4001/api/school/${editingId}`, updatedSchool)
      .then(response => {
        console.log(response.data);
        const updatedData = data.map(school => {
          if (school.id === editingId) {
            return { ...school, ...updatedSchool };
          }
          return school;
        });
        setData(updatedData);
        setEditingId(null);
      })
      .catch(error => {
        console.error("Error updating school data:", error);
      });
  }

  const handleDelete=(id)=>{
    axios.delete(`http://localhost:4001/api/school/${id}`)
    .then(response => {
      console.log(response.data);
      setData(prevData => prevData.filter(event => event.id !== id));
    })
    .catch(error => {
      console.error("Error deleting event:", error);
    });
  }

  const handleSearch = () => {
    if (searchTerm === "") {
      axios.get('http://localhost:4001/api/school/get')
        .then(res => {
          setData(res.data);
          setLoading(false);
        })
        .catch(err => {
          console.error("Error fetching schools:", err);
          setLoading(false);
        });
    } else {
      const filteredData = data.filter(school => school.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setData(filteredData);
    }
  };

  return (
    <div className="school-container">
      <h1 className="school-title">School List</h1>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search by name" 
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={() => setShowForm(!showForm)} className="add-school-button">
        {showForm ? "Close Form" : "Add School"}
      </button>
      {showForm && (
        <div className="form-card">
          <div className="form-card-content">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="School Name" />
            <input type="text" value={nameodteacher} onChange={(e) => setNameodteacher(e.target.value)} placeholder="Name of Teacher" />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
            <input type="date" value={start} onChange={(e) => setStart(e.target.value)} placeholder="Start Date" />
            <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} placeholder="End Date" />
            <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Duration" />
          </div>
          <div className="form-card-buttons">
            <button onClick={handlePost}>Submit</button>
          </div>
        </div>
      )}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="school-list">
          {data.map((school, index) => (
            <div key={index} className="school-card">
              <div className="school-info">
                <strong>Name:</strong> {school.name} 
              </div>
              <div className="school-info">
                <strong>Name of Teacher:</strong> {school.nameodteacher}
              </div>
              <div className="school-info">
                <strong>Description:</strong> {school.description} {/* Display description here */}
                <img src={school.image} alt="" />
                <strong>Start Date:</strong> {school.start}
                <strong>End Date:</strong> {school.end}
                <strong>Duration:</strong> {school.duration}
              </div>
              <button onClick={() => handleDelete(school.id)}>Delete</button>
              <div className="school-info">
                {editingId === school.id ? (
                  <>
                    <input type="text" value={newname} onChange={(e) => setNewname(e.target.value)} />
                    <input type="text" value={newnameodteacher} onChange={(e) => setNewnameodteacher(e.target.value)} />
                    <input type="text" value={newdescription} onChange={(e) => setNewdescription(e.target.value)} />
                    <input type="text" value={newimage} onChange={(e) => setNewimage(e.target.value)} />
                    <input type="date" value={newstart} onChange={(e) => setNewstart(e.target.value)} />
                    <input type="date" value={newend} onChange={(e) => setNewend(e.target.value)} />
                    <input type="text" value={newduration} onChange={(e) => setNewduration(e.target.value)} />
                    <button onClick={() => updateSchool()}>Save</button>
                  </>
                ) : (
                  <button onClick={() => handleUpdate(school.id)}>Update</button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default School;
