import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css'; // Import the CSS file

function School() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setname] = useState("");
  const [nameodteacher, setnameodteacher] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  const [start, setstart] = useState("");
  const [end, setend] = useState("");
  const [duration, setduration] = useState("");
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:4000/api/school/get')
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

const handlePost=(()=>{
const obj={
  name:name,
  nameodteacher:nameodteacher,
  description:description,
  image:image,
  start:start,
  end:end,
  duration:duration
}
axios.post("http://localhost:4000/api/school",obj)
.then(response => {
  console.log(response.data); // Log the response data after successful post
  setData(prevData => [...prevData, response.data]); // Update the state with the new data
  // Optionally, you can reset the form fields here
})
.catch(error => {
  console.error("Error posting school data:", error);
});
})
return (
  <div className="users-container">
    <h1 className="users-title">School List</h1>
    <button onClick={() => setShowForm(!showForm)} className="add-event-button">
      {showForm ? "Close Form" : "Add School"}
    </button>
    {showForm && (
      <div className="school-form">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="School Name" />
        <input type="text" value={nameodteacher} onChange={(e) => setnameodteacher(e.target.value)} placeholder="Name of Teacher" />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <input type="text" value={image} onChange={(e) => setimage(e.target.value)} placeholder="Image URL" />
        <input type="date" value={start} onChange={(e) => setstart(e.target.value)} placeholder="Start Date" />
        <input type="date" value={end} onChange={(e) => setend(e.target.value)} placeholder="End Date" />
        <input type="text" value={duration} onChange={(e) => setduration(e.target.value)} placeholder="Duration" />
        <button onClick={handlePost}>Submit</button>
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
              <strong>Name of Teacher:</strong> {school.nameOfTeacher}
            </div>
            <div className="school-info">
              <strong>Description:</strong> {school.description}
              <img src={school.image} alt="" />
              <strong>Start Date:</strong> {school.start}
              <strong>End Date:</strong> {school.end}
              <strong>Duration:</strong> {school.duration}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);
}

export default School;
