  const express = require('express');
  const cors = require('cors');
  const dotenv = require('dotenv');
  const connectDB = require('./config/db');
  const cookieParser = require('cookie-parser');
  const bodyParser = require('body-parser');
  const router = require('./routes');

  dotenv.config();

  const app = express();
  const PORT = process.env.PORT || 8000;

  // Middleware
  const allowedOrigins = [
    'http://localhost:5174',
    'https://front-architectus.vercel.app'
  ];
  
  app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    // Check if the origin is allowed
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // This is necessary if you're using cookies or authorization headers
  methods: 'GET,POST,PUT,DELETE',
}));

  
  app.use(express.json());
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use("/files", express.static("files"));

  // Routes
  app.use('/', router);


  // Connect to MongoDB
  connectDB()
    .then(() => {
      app.listen(PORT, () => {
        console.log('Connected to database');
        console.log(`Server is running on port ${PORT}`);
      });
    })
    .catch((err) => console.error('Error connecting to MongoDB:', err.message));

  module.exports = app;
