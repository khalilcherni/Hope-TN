import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Event.css'; // Import the CSS file

function Events() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [registrationdeadline, setRegistrationDeadline] = useState("");
  const [Newname, setNewName] = useState("");
  const [newdescription, setNewDescription] = useState("");
  const [Newimage, setNewImage] = useState("");
  const [newlocation, setNewLocation] = useState("");
  const [newtype, setNewType] = useState("");
  const [newstartDate, setNewStartDate] = useState("");
  const [newendDate, setNewEndDate] = useState("");
  const [newregistrationDeadline, setNewRegistrationDeadline] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    axios.get('http://localhost:4000/api/get')
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching events:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const handlePost = () => {
    const eventData = {
      name,
      description,
      image,
      location,
      type,
      startdate: startdate ,
      enddate,
      registrationdeadline
    };

    axios.post("http://localhost:4000/api/add", eventData)
      .then(response => {
        console.log("Event added successfully:", response.data);
        setData(prevData => [...prevData, response.data]);
        setName("");
        setDescription("");
        setImage("");
        setLocation("");
        setType("");
        setStartDate("");
        setEndDate("");
        setRegistrationDeadline("");
      })
      .catch(error => {
        console.error("Error posting event data:", error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/api/${id}`)
      .then(response => {
        console.log("Event deleted successfully:", response.data);
        setData(prevData => prevData.filter(event => event.id !== id));
      })
      .catch(error => {
        console.error("Error deleting event:", error);
      });
  };

  const handleUpdate = (id) => {
    axios.put(`http://localhost:4000/api/events/put/${id}`, { 
      name: Newname, 
      description: newdescription, 
      image: Newimage,
      location: newlocation,
      type: newtype,
      startdate: newstartDate,
      enddate: newendDate,
      registrationdeadline: newregistrationDeadline
    })
      .then(() => {
        const updatedData = data.map(item => {
          if (item.id === id) {
            return { 
              ...item, 
              name: Newname, 
              description: newdescription, 
              image: Newimage,
              location: newlocation,
              type: newtype,
              startdate: newstartDate,
              enddate: newendDate,
              registrationdeadline: newregistrationDeadline
            };
          }
          return item;
        });
        setData(updatedData);
        setEditingId(null);
      })
      .catch(err => console.error("Error updating event:", err));
  };

  const handleSearch = () => {
    // Perform search by name
    if (searchTerm === "") {
      // If search term is empty, reset data to original state
      axios.get('http://localhost:4000/api/get')
        .then(res => {
          setData(res.data);
          setLoading(false);
        })
        .catch(err => {
          console.error("Error fetching events:", err);
          setLoading(false);
        });
    } else {
      // If search term is not empty, filter data
      const filteredData = data.filter(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setData(filteredData);
    }
  };

  return (
    <div className="events-container">
      <h1 className="events-title">Event List</h1>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search by name" 
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={() => setShowForm(!showForm)} className="add-event-button">
        {showForm ? "Close Form" : "Add Event"}
      </button>
      {showForm && (
        <div className="event-form">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Event Name" />
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Event Description" />
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Event Image URL" />
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Event Location" />
          <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Event Type" />
          <input type="date" value={startdate} onChange={(e) => setStartDate(e.target.value)} placeholder="Start Date" />
          <input type="date" value={enddate} onChange={(e) => setEndDate(e.target.value)} placeholder="End Date" />
          <input type="number" value={registrationdeadline} onChange={(e) => setRegistrationDeadline(e.target.value)} placeholder="Registration Deadline" />
          <button onClick={handlePost}>Submit</button>
        </div>
      )}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="event-list">
          {data.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-info">
                <strong>Name:</strong> {event.name}
              </div>
              <div className="event-info">
                <strong>Description:</strong> {event.description}
              </div>
              <div className="event-info">
                <img src={event.image} alt="" />
              </div>
              <div className="event-info">
                <strong>Location:</strong> {event.location}
              </div>
              <div className="event-info">
                <strong>Type:</strong> {event.type}
              </div>
              <div className="event-info">
                <strong>Start Date:</strong> {event.startdate}
              </div>
              <div className="event-info">
                <strong>End Date:</strong> {event.enddate}
              </div>
              <div className="event-info">
                <strong>Registration Deadline:</strong> {event.registrationdeadline}
              </div>
              <button onClick={() => handleDelete(event.id)}>Delete</button>
              <div className="event-info">
                {editingId === event.id ? (
                  <>
                    <input type="text" value={Newname} onChange={(e) => setNewName(e.target.value)} placeholder="Event Name"/>
                    <input type="text" value={Newimage} onChange={(e) => setNewImage(e.target.value)} placeholder="image"/>
                    <input type="text" value={newdescription} onChange={(e) => setNewDescription(e.target.value)}placeholder="description" />
                    <input type="text" value={newlocation} onChange={(e) => setNewLocation(e.target.value)} placeholder="location"/>
                    <input type="text" value={newtype} onChange={(e) => setNewType(e.target.value)}  placeholder="type"/>
                    <input type="date" value={newstartDate} onChange={(e) => setNewStartDate(e.target.value)}  />
                    <input type="date" value={newendDate} onChange={(e) => setNewEndDate(e.target.value)} />
                    <input type="number" value={newregistrationDeadline} onChange={(e) => setNewRegistrationDeadline(e.target.value)}  placeholder="registrationdeadline" />
                    <button onClick={() => handleUpdate(event.id)}>Save</button>
                  </>
                ) : (
                  <button onClick={() => setEditingId(event.id)}>Update</button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Events;
