const express = require('express');
const axios = require('axios');
const NodeCache = require('node-cache');
require('dotenv').config();

const app = express();
const port = 3000;

// Initialize cache with a Time-To-Live (TTL) of 12 hours (43200 seconds)
const weatherCache = new NodeCache({ stdTTL: 43200 });

app.get('/weather/:city', async (req, res) => {
    const city = req.params.city;
    const apiKey = process.env.API_KEY;

    // 1. Check if the weather data exists in cache
    if (weatherCache.has(city)) {
        console.log(`Fetching ${city} from Cache...`);
        return res.json({ 
            source: 'cache', 
            data: weatherCache.get(city) 
        });
    }

    // 2. If not in cache, fetch data from the external Weather API
    try {
        console.log(`Fetching ${city} from External API...`);
        const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`);
        
        const weatherData = response.data;

        // 3. Store the retrieved data in cache for future requests
        weatherCache.set(city, weatherData);

        res.json({ 
            source: 'api', 
            data: weatherData 
        });
    } catch (error) {
        // Handle errors such as invalid city names or API downtime
        res.status(500).json({ 
            error: 'Failed to retrieve weather data. Please check the city name or try again later.' 
        });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});