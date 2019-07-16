const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
const morgan=require('morgan');
const app = express();
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const port = process.env.PORT;
const siteurl=process.env.MONGODB_URL;
console.log(siteurl);
// Connecting to the database
//mongoose.connect(dbConfig.url, {
mongoose.connect(siteurl, {
    useNewUrlParser: true
}).then(() => {
    console.log()
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
//End Connecting to the database

const deptroute=require('./app/routes/dept.routes');
const userroute=require('./app/routes/user.routes');
const contactroute=require('./app/routes/contact.routes');

app.use('/api/departments',deptroute);
app.use('/api/users',userroute);
app.use('/api/contacts',contactroute);  
  
// const port = process.env.PORT;
// const siteurl=process.env.MONGODB_URL;
//let port = 1234;
// listen for requests
// app.listen(3000, () => {
//     console.log("Server is listening on port 3000");
// });

app.listen(port, () => {
    console.log(port);
    console.log(`Server running on port ${port}`);
});



// import express from 'express';
// const app=express();
// app.get('/',(req,res)=>
//     res.send('Hello TEAM World!')
// )

// //launch the server on port 3000

// const server=app.listen(3000,()=>{
//     const{address,port}=server.address();
//     console.log(`Listening at http:// ${address}:${port}`);
// });



// Add the code below to index.js


// Import express
// let express = require('express')
// // Import routes
// let apiRoutes = require("./api-routes")

// // Initialize the app
// let app = express();

// // Setup server port
// var port = process.env.PORT || 3000;

// // Send message for default URL
// app.get('/', (req, res) => res.send('Hello World with Express'));

// // Launch app to listen to specified port
// app.listen(port, function () {
//      console.log("Running RestHub on port " + port);
// });



// // Use Api routes in the App
// app.use('/api', apiRoutes)


// import express from 'express';
// import morgan from 'morgan';
// import mongoose from 'mongoose';
// import router from './router';

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost/movies');

// // Initialize http server
// const app = express();

// // Logger that outputs all requests into the console
// app.use(morgan('combined'));
// // Use v1 as prefix for all API endpoints
// app.use('/v1', router);

// const server = app.listen(3000, () => {
//   const { address, port } = server.address();
//   console.log(`Listening at http://${address}:${port}`);
// });



// Configuring the database
// const dbConfig = require('./config/database.config.js');
// const mongoose = require('mongoose');
// //require('./app/routes/user.routes.js').default(app);

// mongoose.Promise = global.Promise;

// // Connecting to the database
// mongoose.connect(dbConfig.url, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log("Successfully connected to the database");    
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...', err);
//     process.exit();
// });



// const express = require('express');
// const bodyParser = require('body-parser');

// // create express app
// const app = express();

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))

// // parse requests of content-type - application/json
// app.use(bodyParser.json())

// // define a simple route
// app.get('/', (req, res) => {
//     res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
// });

// // listen for requests
// app.listen(3000, () => {
//     console.log("Server is listening on port 3000");
// });


//app.js
// import express from 'express';
// const app=express();
// app.get('/',(req,res)=>
//     res.send('Hello TEAM World!')
// )

// //launch the server on port 3000

// const server=app.listen(3000,()=>{
//     const{address,port}=server.address();
//     console.log(`Listening at http:// ${address}:${port}`);
// });



// Add the code below to index.js


// Import express
// let express = require('express')
// // Import routes
// let apiRoutes = require("./api-routes")

// // Initialize the app
// let app = express();

// // Setup server port
// var port = process.env.PORT || 3000;

// // Send message for default URL
// app.get('/', (req, res) => res.send('Hello World with Express'));

// // Launch app to listen to specified port
// app.listen(port, function () {
//      console.log("Running RestHub on port " + port);
// });



// // Use Api routes in the App
// app.use('/api', apiRoutes)


// import express from 'express';
// import morgan from 'morgan';
// import mongoose from 'mongoose';
// import router from './router';

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost/movies');

// // Initialize http server
// const app = express();

// // Logger that outputs all requests into the console
// app.use(morgan('combined'));
// // Use v1 as prefix for all API endpoints
// app.use('/v1', router);

// const server = app.listen(3000, () => {
//   const { address, port } = server.address();
//   console.log(`Listening at http://${address}:${port}`);
// });



// Configuring the database
// const dbConfig = require('./config/database.config.js');
// const mongoose = require('mongoose');
// //require('./app/routes/user.routes.js').default(app);

// mongoose.Promise = global.Promise;

// // Connecting to the database
// mongoose.connect(dbConfig.url, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log("Successfully connected to the database");    
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...', err);
//     process.exit();
// });



// const express = require('express');
// const bodyParser = require('body-parser');

// // create express app
// const app = express();

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))

// // parse requests of content-type - application/json
// app.use(bodyParser.json())

// // define a simple route
// app.get('/', (req, res) => {
//     res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
// });

// // listen for requests
// app.listen(3000, () => {
//     console.log("Server is listening on port 3000");
// });


//app.js
