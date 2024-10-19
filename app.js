const express = require('express');
const app = express();
const port = 3000;

// Middleware pentru parsarea JSON
app.use(express.json());

// Endpoint simplu GET
app.get('/', (req, res) => {
  res.send('API-ul funcționează!');
});

// Endpoint pentru /nodeApp
app.get('/nodeApp', (req, res) => {
  res.send('API-ul funcționează pe ruta /nodeApp!');
});

// Endpoint simplu POST
app.post('/data', (req, res) => {
  const data = req.body;
  res.json({
    message: 'Ai trimis următoarele date:',
    data: data
  });
});

// Pornirea serverului
app.listen(port, () => {
  console.log(`API-ul rulează la http://localhost:${port}`);
});