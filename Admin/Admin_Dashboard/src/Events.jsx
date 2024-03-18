import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Event.css'; // Import the CSS file

function Events() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [registrationdeadline, setRegistrationDeadline] = useState("");
  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const fetchData = () => {
    axios.get('http://localhost:4001/api/get')
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching events:", err);
        setLoading(false);
      });
  };

  const handlePost = () => {
    const eventData = {
      name,
      description,
      // image,
      location,
      type,
      startdate,
      enddate,
      registrationdeadline
    };

    axios.post("http://localhost:4001/api/add", eventData)
      .then(response => {
        console.log("Event added successfully:", response.data);
        setData(prevData => [...prevData, response.data]);
        resetFormFields();
      })
      .catch(error => {
        console.error("Error posting event data:", error);
      });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:4001/api/put/${editingEvent.id}`, editingEvent) // Update the URL path here
    .then(() => {
        const updatedData = data.map(item => {
          if (item.id === editingEvent.id) {
            return editingEvent;
          }
          return item;
        });
        setData(updatedData);
        setEditingEvent(null);
      })
      .catch(err => console.error("Error updating event:", err));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4001/api/delete/${id}`) // Update the URL path here
    .then(response => {
        console.log("Event deleted successfully:", response.data);
        setData(prevData => prevData.filter(event => event.id !== id));
      })
      .catch(error => {
        console.error("Error deleting event:", error);
      });
  };

  const handleSearch = () => {
    // Perform search by name
    if (searchTerm === "") {
      // If search term is empty, reset data to original state
      fetchData();
    } else {
      // If search term is not empty, filter data
      const filteredData = data.filter(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setData(filteredData);
    }
  };

  const resetFormFields = () => {
    setName('');
    setDescription('');
    // setImage('');
    setLocation('');
    setType('');
    setStartDate('');
    setEndDate('');
    setRegistrationDeadline('');
  };

  return (
    <div className="events-container">
      <h1 className="events-title">Event.List</h1>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search by name" 
      />
      <button onClick={() => setShowForm(!showForm)} className="add-event-button">
        {showForm ? "Close Form" : "Add Event"}
      </button>
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowForm(false)}>&times;</span>
            <h2>Add Event</h2>
            <div className="form-card-content">
              <table>
                <tbody>
                  <tr>
                    <td><label htmlFor="name">Name:</label></td>
                    <td><input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Event Name" /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="description">Description:</label></td>
                    <td><input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Event Description" /></td>
                  </tr>
                  <tr>
                    {/* <td><label htmlFor="image">Image:</label></td> */}
                    {/* <td><input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Event Image URL" /></td> */}
                  </tr>
                  <tr>
                    <td><label htmlFor="location">Location:</label></td>
                    <td><input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Event Location" /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="type">Type:</label></td>
                    <td><input type="text" id="type" value={type} onChange={(e) => setType(e.target.value)} placeholder="Event Type" /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="startdate">Start Date:</label></td>
                    <td><input type="date" id="startdate" value={startdate} onChange={(e) => setStartDate(e.target.value)} /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="enddate">End Date:</label></td>
                    <td><input type="date" id="enddate" value={enddate} onChange={(e) => setEndDate(e.target.value)} /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="registrationdeadline">Registration Deadline:</label></td>
                    <td><input type="number" id="registrationdeadline" value={registrationdeadline} onChange={(e) => setRegistrationDeadline(e.target.value)} placeholder="Registration Deadline" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="form-card-buttons">
              <button onClick={handlePost}>Submit</button>
            </div>
          </div>
        </div>
      )}
      {editingEvent && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setEditingEvent(null)}>&times;</span>
            <h2>Edit Event</h2>
            <div className="form-card-content">
              <table>
                <tbody>
                  <tr>
                    <td><label htmlFor="name">Name:</label></td>
                    <td><input type="text" id="name" value={editingEvent.name} onChange={(e) => setEditingEvent({...editingEvent, name: e.target.value})} placeholder="Event Name" /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="description">Description:</label></td>
                    <td><input type="text" id="description" value={editingEvent.description} onChange={(e) => setEditingEvent({...editingEvent, description: e.target.value})} placeholder="Event Description" /></td>
                  </tr>
                  <tr>
                    {/* <td><label htmlFor="image">Image:</label></td>
                    <td><input type="text" id="image" value={editingEvent.image} onChange={(e) => setEditingEvent({...editingEvent, image: e.target.value})} placeholder="Event Image URL" /></td> */}
                  </tr>
                  <tr>
                    <td><label htmlFor="location">Location:</label></td>
                    <td><input type="text" id="location" value={editingEvent.location} onChange={(e) => setEditingEvent({...editingEvent, location: e.target.value})} placeholder="Event Location" /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="type">Type:</label></td>
                    <td><input type="text" id="type" value={editingEvent.type} onChange={(e) => setEditingEvent({...editingEvent, type: e.target.value})} placeholder="Event Type" /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="startdate">Start Date:</label></td>
                    <td><input type="date" id="startdate" value={editingEvent.startdate} onChange={(e) => setEditingEvent({...editingEvent, startdate: e.target.value})} /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="enddate">End Date:</label></td>
                    <td><input type="date" id="enddate" value={editingEvent.enddate} onChange={(e) => setEditingEvent({...editingEvent, enddate: e.target.value})} /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="registrationdeadline">Registration Deadline:</label></td>
                    <td><input type="number" id="registrationdeadline" value={editingEvent.registrationdeadline} onChange={(e) => setEditingEvent({...editingEvent, registrationdeadline: e.target.value})} placeholder="Registration Deadline" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="form-card-buttons">
              <button onClick={handleUpdate}>Submit</button>
            </div>
          </div>
        </div>
      )}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="event-list">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              {/* <th>Image</th> */}
              <th>Location</th>
              <th>Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Registration Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((event, index) => (
              <tr key={index}>
                <td>{event.name}</td>
                <td>{event.description}</td>
                {/* <td><img src={event.image} alt="" /></td> */}
                <td>{event.location}</td>
                <td>{event.type}</td>
                <td>{event.startdate}</td>
                <td>{event.enddate}</td>
                <td>{event.registrationdeadline}</td>
                <td>
                  <button onClick={() => handleDelete(event.id)}>Delete</button>
                  <button onClick={() => setEditingEvent(event)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Events;
