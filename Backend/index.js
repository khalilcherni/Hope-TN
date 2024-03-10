const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');
const emailjs = require('emailjs-com');



// Import your routes
const categorieRoute = require('./routes/categorie');
const questionsRoute = require("./routes/questions");
const donationRoute = require('./routes/donation.js');
const eventsRoute = require('./routes/events.js');
const schoolRoute = require('./routes/schoolCourses.js');
const userRoute = require('./routes/user.js');
const peopleRoute = require('./routes/peoplewhohelp.js');
const helpRoute = require('./routes/HelpRoutes.js');
const palestineRoute = require('./routes/palestineRoutes.js');
const supporterRoute = require('./routes/supporters.js');
const whatTheyNeedRoute = require('./routes/whattheyneed.js');
const Voluntarywork = require('./routes/voluntarywork.js');
const profileRoute = require('./routes/ProfileRoutes.js');
const events=require('./routes/events.js')
const app = express();
const PORT = 4000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(cors()); // Enable CORS
app.use(express.json());

// Use the routers correctly
app.use('/api/categorie', categorieRoute);
app.use("/api/question", questionsRoute);
app.use("/api/voluntary", Voluntarywork);
app.use("/api/people", peopleRoute);
app.use('/api', donationRoute);
app.use('/api', eventsRoute);
app.use('/api', schoolRoute);
app.use('/users', userRoute);
app.use('/supporters', supporterRoute);
app.use('/whatTheyNeed', whatTheyNeedRoute);
app.use('/help', helpRoute);
app.use('/palestine', palestineRoute);
app.use('/profile', profileRoute);

// Create the HTTP server
const server = http.createServer(app);

// Initialize Socket.IO
const io = socketIO(server);

// Handle WebSocket connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle chatroom events
  socket.on('joinChatroom', (room) => {
    socket.join(room); // Join the specified chatroom
    console.log(`User joined chatroom: ${room}`);
  });

  socket.on('createChatroom', (room) => {
    // Implement logic to create chatroom here
    console.log(`User created chatroom: ${room}`);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });

  // Handle invitation events
  socket.on('inviteUser', (userId) => {
    // Emit an event to the invited user to join the chatroom
    io.to(userId).emit('joinChatroom', 'Room 1');
    console.log(`Invitation sent to user ${userId}`);
  });
});




app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  try {
    const { to_email, subject, message } = req.body;

    const templateParams = {
      to_email,
      subject,
      message,
    };

    // Replace with your actual Email.js service ID, template ID, and user ID
    const emailjsResult = await emailjs.send(
      'service_ll9dgys',    // Replace with your Email.js service ID
      'template_phqrn0s',   // Replace with your Email.js template ID
      templateParams,
      'euC6e9oE6ozxavlMB'        // Replace with your Email.js user ID
    );

    console.log('Email.js Result:', emailjsResult);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});




