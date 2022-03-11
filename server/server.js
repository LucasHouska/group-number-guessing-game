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
const guesses = [];
const guessResults = [];
let counter = 0;
let randomNumber = 0;

//random number generator
function randomNumberGenerator() {
  secretNumber = Math.floor(Math.random() * 26);
  console.log(secretNumber)
};

//call random number generator 
randomNumberGenerator();

//results object
  let lucasResult = '';
  let anissaResult = '';
  let julietteResult = '';

let resultObject = {
  Lucas: lucasResult,
  Juliette: julietteResult,
  Anissa: anissaResult
}

// function convertToNumber(input) {
  
// }
//comparison between secret number and  guess
function checkSecretNumber(secretNumber) {


  // let lucasResult = '';
  // let anissaResult = '';
  // let julietteResult = '';

  if(randomNumber === secretNumber.anissaGuess) {
    console.log('Congrats, Anissa!');
    anissaResult = 'WINNER';
  } else if(randomNumber > secretNumber.anissaGuess) {
    console.log('Too low, Anissa');
    anissaResult = 'Too Low';
  } else if(randomNumber < secretNumber.anissaGuess) {
    console.log('Too High, Anissa');
    anissaResult = 'Too High, Anissa';
  } 
  
  if (randomNumber === secretNumber.julietteGuess) {
    julietteResult = 'Congrats, Juliette!';
  }
    else if(randomNumber < secretNumber.julietteGuess) {
      julietteResult = 'Too high';
    }
    else if(randomNumber > secretNumber.julietteGuess) {
      julietteResult = 'Too low';
    }
   
  if(randomNumber === secretNumber.lucasGuess) {
    console.log('Congrats, Lucas');
    lucasResult = 'Lucas, you WIN!!!';
  } else if(randomNumber > secretNumber.lucasGuess) {
    console.log('Too low, Lucas')
    lucasResult = 'too low'
  } else if(randomNumber < secretNumber.lucasGuess) {
    console.log('Too high, Lucas')
    lucasResult = 'too high'
  }
};



// GET & POST Routes go here

//get guess
app.get('/guess', (req, res) => {
  console.log('GET /guesses!');
  res.send(guesses);
});

//get secret number
// app.get('/secret-number', (req, res) => {
//   console.log('GET /secret-number');
//   res.send(randomNumberGenerator());
// });

//post guess
app.post('/guess', (req, res) => {
  console.log('POST /guesses', req.body);

  guesses.push(req.body);

  res.sendStatus(201);
  console.log(guesses);
  checkSecretNumber(req.body);
});

//post secret number
// app.post('/secret-number', (req, res) =>{
//   console.log('POST /secret-number');
//   // checkSecretNumber(req.body);
// });

//starts the server 
app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
});


