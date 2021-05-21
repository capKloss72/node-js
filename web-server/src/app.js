const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '../public')));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
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
