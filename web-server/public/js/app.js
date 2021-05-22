console.log('Client side JS is loaded');

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

fetch('http://localhost:3000/weather?address=Perth').then((response) => {
  response.json().then((data) => {
    if (!data[0].address) {
      return console.log({ error: 'You must provide a valid address!' });
    }
    console.log(data[0].location);
    console.log(data[0].forecast);
  });
});
