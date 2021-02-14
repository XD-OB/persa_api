const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

// For the deployement the server will have the port value in the env.
const PORT = process.env.PORT || 5000;

const app = express();

// Middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// database connection
const username = 'obelouch';
const password = 'Persa2021';
const db_name = 'persadb';
const dbURI = `mongodb+srv://${username}:${password}@cluster0.s6kah.mongodb.net/${db_name}`;
mongoose.connect(
    dbURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    })
    .then( (result) => app.listen(
        PORT,
        () => console.log(`Server started on port ${PORT}`)
    ))
    .catch( (err) => console.log(err) );


// test
app.get('/', (req, res) => res.send('<h1>test</h1>'));
