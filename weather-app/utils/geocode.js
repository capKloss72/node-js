const request = require('postman-request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiY2Fwa2xvc3M3MiIsImEiOiJja29yNDBtaGgwaTh1MndwZGVsYzJzc3IxIn0.35UjY6fbuUT8aReyX33GZw&limit=1`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect location services', undefined);
    } else if (response.body.features.length === 0) {
      callback(`Could not locate: ${response.body.query}`, undefined);
    } else {
      const latitude = response.body.features[0].center[1];
      const longitude = response.body.features[0].center[0];
      const location = response.body.features[0].place_name;
      callback(undefined, {
        Latitude: latitude,
        Longitude: longitude,
        Location: location,
      });
    }
  });
};

module.exports = geocode;
