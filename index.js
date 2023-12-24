const express = require('express');
const dotenv = require('dotenv');

const connectDB = require('./config/db');

// Routes
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const PORT = process.env.PORT || 5001;

connectDB();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Api is running...');
});

app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
