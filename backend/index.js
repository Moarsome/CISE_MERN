// app.js

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// routes
const books = require('./routes/api/books');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

const corsConfig = {
  origin: '',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
app.use(cors(corsConfig));
app.options('', cors(corsConfig));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server running on port ${port}`));
