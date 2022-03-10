const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

//variables
const guesses = {};
let counter = 0;
let secretNumber = 0;

//random number generator
function randomNumberGenerator() {
  secretNumber = Math.floor(Math.random() * 26);
  console.log(secretNumber)
};

//comparison between secret number and  guess
function checkSecretNumber(secretNumber) {
  if(secretNumber === secretNumber.anissaGuess) {
    console.log('Congrats, Anissa!');
    secretNumber.anissaGuess = true;
  } else if(secretNumber === secretNumber.julietteGuess) {
    console.log('Congrats, Juliette!');
    secretNumber.julietteGuess = true;
  } else if(secretNumber === secretNumber.lucasGuess) {
    console.log('Congrats, Lucas');
    secretNumber.lucasGuess === true;
  } else {
    console.log('Keep guessing...')
  }
};

// GET & POST Routes go here

//get guess
app.get('/guess', (req, res) => {
  console.log('GET /guesses!');
  res.send(guesses);
});

//get secret number
app.get('/secret-number', (req, res) => {
  console.log('GET /secret-number');
  res.send(randomNumberGenerator());
});

//post guess
app.post('/guess', (req, res) => {
  console.log('POST /guesses', req.body);

  guesses.push(req.body);

  res.sendStatus(201);
  console.log(guesses);
  res.send(checkSecretNumber(req.body));
});

//post secret number
app.post('/secret-number', (req, res) =>{
  console.log('POST /secret-number');
  // checkSecretNumber(req.body);
});

//starts the server 
app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
});


