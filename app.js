const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// database connection
mongoose.connect(
    process.env.DB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    },
    () => console.log('Connected to DB!')
);

// Import Routes
const authRoutes = require('./routes/authRoutes');

// Middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
//// Allow fetching request across differents domaines
app.use(cors());
//// Route Middlewares
app.use('/api/user', authRoutes);


// test
app.get('/', (req, res) => res.send('<h1>test</h1>'));


const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    () => console.log(`Server started on port ${PORT}`)
);