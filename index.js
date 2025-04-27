const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.get('/testapi', (req, res) => {
  res.send('Hello World')
})

app.listen(3000);

//mongodb connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log('Connected!'))
  .catch((error) => console .log('Connection error:',error));