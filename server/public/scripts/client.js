$(document).ready(handleReady);

let round = 0;

function handleReady() {
  console.log("jquery is loaded!")

  $('#submitBtn').on('click', handleSubmit);

  getGuesses();
}

//get ajax
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

// POST ajax
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
}

function render(guesses){
  $('#guess').text('');

  for (const guess of guesses){
    $('#guess').append(`<p>ROUND ${guess.round}: ${guess.anissaGuess} ${guess.julietteGuess} ${guess.lucasGuess}</p>`)
  }
}