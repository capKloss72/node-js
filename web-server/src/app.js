const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for express config
const publicPath = path.join(__dirname, '../public');
const hbsTemplatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// HBS engine and views locations
app.set('view engine', 'hbs');
app.set('views', hbsTemplatePath);
hbs.registerPartials(partialsPath);

// Path to static / public assets
app.use(express.static(publicPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Tym Zon',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me!',
    name: 'Tym Zon',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help!',
    message: 'Example message!',
    name: 'Tym Zon',
  });
});

// app.com
// app.com/help
// app.com/about
// app.com/weather

app.get('/weather', (req, res) => {
  res.send([{ forecast: `It's 23 degrees`, location: `Perth` }]);
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
