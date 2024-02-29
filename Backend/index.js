const express = require('express');
const cors = require('cors');
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

const app = express();
const PORT = 4000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());
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

// Socket.IO integration
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle chatroom events here
  socket.on('joinChatroom', (room) => {
    socket.join(room);
    console.log(`User joined chatroom: ${room}`);
  });

  socket.on('createChatroom', (room) => {
    // Implement logic to create chatroom here
    console.log(`User created chatroom: ${room}`);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

http.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

// Define your database connection here if needed
// const connection = require('./db/connection');
