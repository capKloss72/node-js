const request = require('postman-request');

const forecast = (location, callback) => {
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
        `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees and it feels like ${response.body.current.feelslike} degrees`
      );
    }
  });
};

module.exports = forecast;
