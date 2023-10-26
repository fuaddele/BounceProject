const path = require('path');
const express = require('express');
const cors = require('cors');
const countryRoute = require('./routes/country'); // Import the country route

const app = express();
app.use(cors());

// Serve the built React application (if you have one)
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Your API routes
app.use('/api/country', countryRoute);

// Default route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Catch-all route for other undefined routes
app.get('*', (req, res) => {
    res.status(404).send('Not Found');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
