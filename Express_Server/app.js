//basic server

//to load the express
const express = require('express');
//to initialize the express
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./api/apiRouter')

const hostname = '127.0.0.1';
const port = 3000;

//configure bodyParser


// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(jsonParser);
app.use(urlencodedParser);

//configure cors

app.use(cors());

//configure router

app.use('/api',apiRouter);


//get request
app.get('/',(request,response)=>{
    response.send('Welcome to Express Server of Employee Portal')
});

app.listen(port,hostname,()=>{
    console.log(`Express server is started at http://${hostname}:${port}`);
});



