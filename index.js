const express = require('express');
const { resolve } = require('path');
const env=require('dotenv');

const app = express();
const port = process.env.PORT;
const connectDatabase=require('./database.js')

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  connectDatabase()
  console.log(`Example app listening at http://localhost:${port}`);
});
