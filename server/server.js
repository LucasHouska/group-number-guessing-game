const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

const guesses = [];
let counter = 0;

// GET & POST Routes go here

//get data
app.get('/guess', (req, res) => {
  console.log('GET /guesses!');
  res.send(guesses);
})

//post
app.post('/guess', (req, res) => {
  console.log('POST /guesses', req.body);

  guesses.push(req.body);

  res.sendStatus(201);
  console.log(guesses);
})


//starts the server 
app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})


