const express = require('express');
const cors = require('cors');
const categorieRoute=require('./routes/categorie')
const questionsRoute=require("./routes/questions")
const donationRoute=require('./routes/donation.js')
const eventsRoute=require('./routes/events.js')
const schoolRoute= require ('./routes/schoolCourses.js')
const userRoute=require('./routes/user.js')
const peopleRoute=require ('./routes/peoplewhohelp.js')
const helpRoute = require('./routes/HelpRoutes.js');
const palestineRoute = require('./routes/palestineRoutes.js')
const supporterRoute = require('./routes/supporters.js')
const whatTheyNeedRoute = require('./routes/whattheyneed.js')

const Voluntarywork=require('./routes/voluntarywork.js')

const profileRoute=require('./routes/ProfileRoutes.js')


const app = express();
const PORT = 4000;


app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());
app.use(express.json());

// Use the routers correctly
app.use('/api/categorie', categorieRoute);
app.use("/api/question",questionsRoute)
app.use("/api/voluntary",Voluntarywork)
app.use("/api/people",peopleRoute)
app.use('/api',donationRoute)
app.use('/api',eventsRoute)
app.use('/api',schoolRoute)
app.use('/categorie', categorieRoute);
app.use("/questions",questionsRoute)
app.use ("/people",peopleRoute)
app.use('/donation',donationRoute)
app.use('/events',eventsRoute)
app.use('/school',schoolRoute)
app.use('/users',userRoute)
app.use('/supporters',supporterRoute)
app.use('/whatTheyNeed',whatTheyNeedRoute)
app.use('/help', helpRoute);
app.use('/palestine', palestineRoute)
app.use('/profile',profileRoute)



app.get('/api', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
});