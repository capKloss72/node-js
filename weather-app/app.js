const request = require('postman-request');
const geoCode = require('./utils/geocode.js');
const geocode = require('./utils/geocode.js');

// let urlWS = `http://api.weatherstack.com/current?access_key=e3bddab3e02266169155bdb5d371c3d1&query=-31.9527,115.8605&units=m`;

// request({ url: urlWS, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service ice');
//   } else if (response.body.success === false) {
//     console.log(`${response.body.error.info}`);
//   } else {
//     console.log(
//       `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees and it feels like ${response.body.current.feelslike} degrees`
//     );
//   }
// });

// const urlMapbox =
//   'https://api.mapbox.com/geocoding/v5/mapbox.places/Perth.json?access_token=pk.eyJ1IjoiY2Fwa2xvc3M3MiIsImEiOiJja29yNDBtaGgwaTh1MndwZGVsYzJzc3IxIn0.35UjY6fbuUT8aReyX33GZw&limit=1';

// request({ url: urlMapbox, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to mapping service ice');
//   } else if (response.body.features.length === 0) {
//     console.log(`Could not locate: ${response.body.query}`);
//   } else {
//     const latitude = response.body.features[0].center[1];
//     const Longitude = response.body.features[0].center[0];
//     console.log(`${latitude}, ${Longitude}`);
//     console.log(`${response.body.features[0].place_name}`);
//   }
// });

const getWeatherForecast = (location, callback) => {
  let url = `http://api.weatherstack.com/current?access_key=e3bddab3e02266169155bdb5d371c3d1&query=${encodeURIComponent(
    location.Latitude
  )},${encodeURIComponent(location.Longitude)}&units=m`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service ice', undefined);
    } else if (response.body.success === false) {
      callback(`${response.body.error.info}`), undefined;
    } else {
      callback(
        undefined,
        `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees in ${location.Location} and it feels like ${response.body.current.feelslike} degrees`
      );
    }
  });
};

geoCode('Margaret River', (error, data) => {
  getWeatherForecast(data, (error, data) => {
    console.log(data);
  });
});
