const express = require('express');
const cors = require('cors');
const http = require('http');




// Import your routes
// const categorieRoute = require('./routes/categorie');
// const questionsRoute = require("./routes/questions");
// const donationRoute = require('./routes/donation.js');
const eventsRoute = require('./routes/events.js');
const schoolRoute = require('./routes/schoolcourses.js');
const userRoute = require('./routes/user.js');
// const peopleRoute = require('./routes/peoplewhohelp.js');
// const helpRoute = require('./routes/HelpRoutes.js');
// const palestineRoute = require('./routes/palestineRoutes.js');
const supporterRoute = require('./routes/supporters.js');
// const whatTheyNeedRoute = require('./routes/whattheyneed.js');
const Voluntarywork = require('./routes/voluntarywork.js');
// // const profileRoute = require('./routes/ProfileRoutes.js');
// const events=require('./routes/events.js')
const app = express();
const PORT = 4001;

app.use(express.static(__dirname + '/../client/dist'));
app.use(cors()); // Enable CORS
app.use(express.json());

// Use the routers correctly
// app.use('/api/categorie', categorieRoute);
// app.use("/api/question", questionsRoute);
app.use("/api/voluntary", Voluntarywork);
// app.use("/api/people", peopleRoute);
// app.use('/api', donationRoute);
app.use('/api', eventsRoute); // Use the eventsRoute for /api route
app.use('/api', schoolRoute);
app.use('/users', userRoute);
app.use('/supporters', supporterRoute);
// app.use('/whatTheyNeed', whatTheyNeedRoute);
// app.use('/help', helpRoute);
// app.use('/palestine', palestineRoute);
// app.use('/profile', profileRoute);

// Create the HTTP server
const server = http.createServer(app);



server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});




