console.log('Client side JS is loaded');

// fetch('http://localhost:3000/weather?address=Perth').then((response) => {
//   response.json().then((data) => {
//     if (!data[0].address) {
//       return console.log({ error: 'You must provide a valid address!' });
//     }
//     console.log(data[0].location);
//     console.log(data[0].forecast);
//   });
// });

const weatherForm = document.querySelector('form');
const search = document.getElementById('search-input');
const locationMsg = document.querySelector('#location');
const forecastMsg = document.querySelector('#forecast');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!search.value) {
    return (locationMsg.innerHTML = 'Search term must be provided!');
  }
  locationMsg.innerHTML = '';
  forecastMsg.innerHTML = '';
  locationMsg.innerHTML = 'Loading Message';
  fetch(`http://localhost:3000/weather?address=${search.value}`).then(
    (response) => {
      response.json().then((data) => {
        if (!data[0]) {
          return (locationMsg.innerHTML = 'You must provide a valid address!');
        }
        locationMsg.innerHTML = data[0].location;
        forecastMsg.innerHTML = data[0].forecast;
      });
    }
  );
  console.log(search.value);
});
