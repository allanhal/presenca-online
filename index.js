// Servidor backend
const express = require('express');
const app = express();

let presenca = [];

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://your-frontend.com');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Private-Network', true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader('Access-Control-Max-Age', 7200);

  next();
});

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

app.listen(process.env.PORT || 3333, () => {
  console.log(`${process.env.PORT || 3333} is running web server`);
});
