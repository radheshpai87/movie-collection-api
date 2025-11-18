const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const moviesFilePath = path.join(__dirname, '../data/data.json');

const readJSON = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading JSON file:', error);
        return [];
    }
}

router.get('/', (req, res) => {
    try{
        const movies = readJSON(moviesFilePath);
        res.json(movies);
    } catch (error) {
        console.error('Error reading JSON file:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/classics', (req, res) => {
    try{
        const movies = readJSON(moviesFilePath);
        const classics = movies.filter(movie => movie.isClassic);
        res.json(classics);
    } catch (error) {
        console.error('Error reading JSON file:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/genres', (req, res) => {
    try {
        const movies = readJSON(moviesFilePath);
        const counts = {};
        for (const m of movies) {
            const g = m.genre || 'Unknown';
            counts[g] = (counts[g] || 0) + 1;
        }

        const genres = Object.entries(counts).map(([name, movieCount]) => ({ name, movieCount }));
        res.json(genres);
    } catch (error) {
        console.error('Error computing genres:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;


