// @ts-nocheck
const express = require('express');

const app = express();

let presenca = [];

app.use(express.static('public'));

app.get('/dar-presenca', async (req, res) => {
  console.log('chegou aqui');
  const { aula, professor, turno, nome } = req.query;
  presenca.push({ aula, professor, turno, nome });
  res.json();
});

app.get('/ver-presenca', async (req, res) => {
  res.json(presenca);
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT} is running web server`);
});
