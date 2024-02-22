const express = require('express');
const cors = require('cors');
const categorieRoute=require('./routes/categorie')
const questionsRoute=require("./routes/questions")
const app = express();
const PORT = 4000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());
app.use(express.json());

// Use the routers correctly
app.use('/api/categorie', categorieRoute);
app.use("/api/question",questionsRoute)

app.get('/api', (req, res) => {
  res.send('Hello from the server!');
});

// Your database connection code goes here

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
