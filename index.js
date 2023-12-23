const express = require('express');
const dotenv = require('dotenv');

const connectDB = require('./config/db');

// Routes
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();

const PORT = process.env.PORT || 5001;

connectDB();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Api is running...');
});

app.use('/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
