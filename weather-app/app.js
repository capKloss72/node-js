const request = require('postman-request');

const urlWS =
  'http://api.weatherstack.com/current?access_key=e3bddab3e02266169155bdb5d371c3d1&query=--31.953512,115.857048';

request({ url: urlWS }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current.pressure);
});
