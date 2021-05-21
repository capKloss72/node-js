const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const userInputLocation = process.argv[2];

if (!userInputLocation) {
  return console.log(`No location provided, please enter a valid location`);
}

geocode(userInputLocation, (error, geocodeData) => {
  if (error) {
    return console.log(error);
  }
  forecast(geocodeData, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log(`${geocodeData.Location}`);
    console.log(`${forecastData}`);
  });
});
