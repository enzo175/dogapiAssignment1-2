'use strict';

function getDogImage(numberOfDogs = 3) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('something went wrong. try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
   $('.results').html(`<h2>Check these dogs out!</h2>`);

   for (let dog of responseJson.message) {
     $('.results').append(
     `<img src="${dog}" class="results-img">`);
    }
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let numOfDogs = $('input[name="numOfDogs"]').val();
    getDogImage( numOfDogs );
  });
}
$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});