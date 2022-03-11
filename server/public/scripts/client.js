$(document).ready(handleReady);

let round = 0;

function handleReady() {
  console.log("jquery is loaded!")

  // getSecretNumber();

  $('#submitBtn').on('click', handleSubmit);

  getGuesses();
}

//get ajax secret number 
// function getSecretNumber() { //getting randomly generated number from SERVER
//   console.log('Getting secret Number for ya');

//   $.ajax({
//     url: '/secret-number',
//    method: 'GET'
//   }).then(function(response){
//     console.log(response);
//     //We don't need secret number in client side.
//   }).catch(function(error){
//     console.log(error);
//     alert('error in get!')
//   })
//   console.log('end of get function...');
// }

function evaluateCheck(guesses) {
  if(guesses.lucasGuess === true) {
  }
}

//get ajax guesses 
function getGuesses(){
  console.log('getting guesses...');
  
  $.ajax({
    url: '/guess',
   method: 'GET'
  }).then(function(response){
    console.log(response);
    render(response);
  }).catch(function(error){
    console.log(error);
    alert('error in get!')
  })
  console.log('end of get function...');
}

// POST ajax guess 
function handleSubmit (){
  console.log('clicked in handleSubmit');
  let lucasGuess = $('#lucasGuess').val();
  let julietteGuess = $('#julietteGuess').val();
  let anissaGuess = $('#anissaGuess').val();
  // let round = 0;
  round++;
  
  $.ajax({
    url: '/guess',
   method: 'POST',
   data: {
     round: round,
     lucasGuess: lucasGuess,
     julietteGuess: julietteGuess,
     anissaGuess: anissaGuess
   }
  }).then(function(response) {
    console.log('response');
    getGuesses();
    $('input').val('');
  }).catch(function(error){
    console.log(error);
  })

  // $.ajax({
  //   url: '/secret-number',
  //  method: 'POST',
  //  data: {
  //    lucasGuess: false,
  //    julietteGuess: false,
  //    anissaGuess: false
  //  }
  // }).then(function(response) {
  //   console.log('response');
  //   evaluateCheck(response);
  // }).catch(function(error){
  //   console.log(error);
  // })
}

function render(guesses){
  $('#guess').text('');

  for (const guess of guesses){
    $('#guess').append(`<p>ROUND ${guess.round}: ${guess.anissaGuess} ${guess.julietteGuess} ${guess.lucasGuess}</p>`)
  }
}