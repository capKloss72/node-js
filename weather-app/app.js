const request = require('postman-request');
const { CLIENT_RENEG_LIMIT } = require('tls');

const urlMapbox =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Perth.json?access_token=pk.eyJ1IjoiY2Fwa2xvc3M3MiIsImEiOiJja29yNDBtaGgwaTh1MndwZGVsYzJzc3IxIn0.35UjY6fbuUT8aReyX33GZw';

let newLoc = [];

request({ url: urlMapbox, json: true }, (error, response) => {
  console.log(`${response.body.features[0].center[1]}`);
  newLoc = response.body.features[0].center;
  console.log(newLoc);
});

console.log(`${newLoc[1]},${newLoc[0]}`);

let urlWS = `http://api.weatherstack.com/current?access_key=e3bddab3e02266169155bdb5d371c3d1&query=${newLoc[1]},${newLoc[0]}&units=m`;

request({ url: urlWS, json: true }, (error, response) => {
  console.log(
    `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees and it feels like ${response.body.current.feelslike} degrees`
  );
});
