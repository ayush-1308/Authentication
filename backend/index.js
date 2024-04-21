const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/auth.js');

app.use(cors(
  {
    origin: 'http://localhost:5173',
    credentials: true
  }
));

app.use(express.json());
app.use('/api', authRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

