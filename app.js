require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser');
const route = require('./src/routers/index.js');
const cors = require('cors');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use('/uploads',express.static('./uploads'));
app.use('/api/v1/',route);
app.listen(port, ()=>{
  console.log(`The App is running on ${port}`);
})