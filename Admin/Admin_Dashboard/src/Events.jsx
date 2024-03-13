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
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [registrationDeadline, setRegistrationDeadline] = useState("");
  const [Newname, setNewName] = useState("");
  const [newdescription, setNewDescription] = useState("");
  const [Newimage, setNewImage] = useState("");
  const [newlocation, setNewLocation] = useState("");
  const [newtype, setNewType] = useState("");
  const [newstartDate, setNewStartDate] = useState("");
  const [newendDate, setNewEndDate] = useState("");
  const [newregistrationDeadline, setNewRegistrationDeadline] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/api/get')
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handlePost = () => {
    const eventData = {
      name,
      description,
      image,
      location,
      type,
      startDate,
      endDate,
      registrationDeadline
    };

    axios.post("http://localhost:4000/api/add", eventData)
      .then(response => {
        console.log(response.data);
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
        console.log(response.data);
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
      startDate: newstartDate,
      endDate: newendDate,
      registrationDeadline: newregistrationDeadline 
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
              startDate: newstartDate,
              endDate: newendDate,
              registrationDeadline: newregistrationDeadline
            };
          }
          return item;
        });
        setData(updatedData);
        setEditingId(null);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="events-container">
      <h1 className="events-title">Event List</h1>
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
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder="Start Date" />
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="End Date" />
          <input type="date" value={registrationDeadline} onChange={(e) => setRegistrationDeadline(e.target.value)} placeholder="Registration Deadline" />
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
                <strong>Start Date:</strong> {event.startDate}
              </div>
              <div className="event-info">
                <strong>End Date:</strong> {event.endDate}
              </div>
              <div className="event-info">
                <strong>Registration Deadline:</strong> {event.registrationDeadline}
              </div>
              <button onClick={() => handleDelete(event.id)}>Delete</button>
              <div className="event-info">
                {editingId === event.id ? (
                  <>
                    <input type="text" value={Newname} onChange={(e) => setNewName(e.target.value)} />
                    <input type="text" value={Newimage} onChange={(e) => setNewImage(e.target.value)} />
                    <input type="text" value={newdescription} onChange={(e) => setNewDescription(e.target.value)} />
                    <input type="text" value={newlocation} onChange={(e) => setNewLocation(e.target.value)} />
                    <input type="text" value={newtype} onChange={(e) => setNewType(e.target.value)} />
                    <input type="date" value={newstartDate} onChange={(e) => setNewStartDate(e.target.value)} />
                    <input type="date" value={newendDate} onChange={(e) => setNewEndDate(e.target.value)} />
                    <input type="date" value={newregistrationDeadline} onChange={(e) => setNewRegistrationDeadline(e.target.value)} />
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
