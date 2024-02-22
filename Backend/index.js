const express = require('express');
const cors = require('cors');
const categorieRoute=require('./routes/categorie')
const questionsRoute=require("./routes/questions")
const donationRoute=require('./routes/donation.js')
const eventsRoute=require('./routes/events.js')
const schoolRoute= require ('./routes/schoolCourses.js')
const userRoute=require('./routes/user.js')
const voluntarywork=require("./routes/voluntarywork.js")
const peopleRoute=require ('./routes/peoplewhohelp.js')
const app = express();
const PORT = 4000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());
app.use(express.json());

app.use('/api/categorie', categorieRoute);
app.use("/api/question",questionsRoute)
app.use ('/api',eventsRoute)
app.use("/api/voluntary",voluntarywork)
app.use('/api',donationRoute)
app.use('/api',schoolRoute)
app.use('/users',userRoute)
app.use('/api',peopleRoute)
app.get('/api', (req, res) => {
  res.send('Hello from the server!');
});



app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
