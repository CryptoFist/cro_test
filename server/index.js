const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const fs = require('fs');
const path = require('path');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

let count = 0;

app.get('/count', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ amount: count }));
});

app.post('/count/add', (req, res) => {
  count = req.body.amount;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ amount: count }));
});

app.get('/cake/list', (req, res) => {
  const rawdata = fs.readFileSync(`${__dirname  }/assets/cakes.json`);
  const cakes = JSON.parse(rawdata);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ cakes }));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
