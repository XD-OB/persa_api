const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv/config');

//// For the deployement the server will have the port value in the env.
const PORT = process.env.PORT || 5000;

const app = express();

// Middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
//// Allow fetching request across differents domaines
app.use(cors());

// database connection
mongoose.connect(
    process.env.DB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    })
    .then( (result) => app.listen(
        PORT,
        () => console.log(`Server started on port ${PORT} and connected successfuly with the DB!`)
    ))
    .catch( (err) => console.log(err) );


// test
app.get('/', (req, res) => res.send('<h1>test</h1>'));
