const axios = require('axios');
const express = require('express');
const router = express.Router();

// Endpoint to get country information by name
router.get('/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
        res.json(response.data);
    } catch (error) {
        if (error.response) {
            if (error.response.status === 404) {
              const errorMessage = "The requested resource was not found. Please check your input.";
              res.status(404).json({ error: errorMessage });
            } else if (error.response.status === 400) {
              // Handle other 4xx status codes as needed
              const errorMessage = "Bad request. Please check your input.";
              res.status(400).json({ error: errorMessage });
            } else {
              // Handle other error status codes
              const errorMessage = error.response.data.message || "An error occurred while processing the request.";
              res.status(error.response.status).json({ error: errorMessage });
            }
        } else if (error.request) {
        // The request was made, but no response was received (e.g., network error)
        const errorMessage = "No response received from the server. Please check your internet connection.";
        res.status(500).json({ error: errorMessage });
        } else {
        // Something else happened while setting up the request
            const errorMessage = "An error occurred while processing the request.";
            res.status(500).json({ error: errorMessage });
        }
    }
});

module.exports = router;
