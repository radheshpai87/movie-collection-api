const express = require('express');
const cors = require('cors');
const path = require('path');
const moviesRouter = require('./routes/movieRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/movies', moviesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
