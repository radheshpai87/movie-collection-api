# My Movie Collection

## 1. About the Collection

This is a small, hand-picked movie collection focused on memorable storytelling and strong direction. It contains a mix of dramas, action-packed blockbusters, and thoughtful sci-fi films — plus a couple of classic favorites.

I included titles that are representative of different genres and eras so the demo API can showcase filtering (classics) and simple aggregation (genres).

## 2. Project Description

This project is a lightweight Movie Collection API with a minimal frontend. The backend serves movie data from a JSON file and exposes three endpoints to list all movies, return classic movies, and return genre counts. The frontend is a small static page that calls the API and displays the results.

Technologies used:

- Node.js
- Express.js
- HTML / CSS / JavaScript (vanilla)

## 3. Genres Available

- Drama
- Action
- Sci-Fi
- Thriller
- Comedy

## 4. Project Structure

```
movie-collection-api/
├─ server.js               # Express server entry
├─ package.json
├─ .gitignore
├─ README.md
├─ data/
│  └─ data.json           # movie data
├─ routes/
│  └─ movieRoutes.js      # API route handlers
└─ public/
   ├─ index.html          # Frontend page
   ├─ style.css           # Simple CSS
   └─ script.js           # Client-side JS (fetch + render)
```

## 5. API Documentation

All endpoints are available at: `http://localhost:3000` (when the server is running).

### GET /movies

- Method: GET
- Description: Returns the full list of movies.
- Sample Response:

```json
[
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "releaseYear": 1994,
    "isClassic": true,
    "director": "Frank Darabont"
  },
  {
    "id": 2,
    "title": "The Dark Knight",
    "genre": "Action",
    "releaseYear": 2008,
    "isClassic": false,
    "director": "Christopher Nolan"
  }
  // ...additional movie objects
]
```

### GET /movies/classics

- Method: GET
- Description: Returns only movies marked as classics (`isClassic: true`).
- Sample Response:

```json
[
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "releaseYear": 1994,
    "isClassic": true,
    "director": "Frank Darabont"
  },
  {
    "id": 4,
    "title": "Pulp Fiction",
    "genre": "Thriller",
    "releaseYear": 1994,
    "isClassic": true,
    "director": "Quentin Tarantino"
  }
]
```

### GET /movies/genres

- Method: GET
- Description: Returns a list of genres and the number of movies in each genre. Response shape: [{ "name": <genre>, "movieCount": <number> }]
- Sample Response (based on data in `data/data.json`):

```json
[
  { "name": "Sci-Fi", "movieCount": 2 },
  { "name": "Drama", "movieCount": 1 },
  { "name": "Action", "movieCount": 1 },
  { "name": "Thriller", "movieCount": 1 },
  { "name": "Comedy", "movieCount": 1 }
]
```

## 6. Installation & Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/radheshpai87/movie-collection-api.git
```

2. Navigate to the project directory:

```bash
cd movie-collection-api
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
# or for development with auto-reload (requires nodemon):
npm run dev
```

5. Access the API and frontend:

- API endpoints (examples):
  - http://localhost:3000/movies
  - http://localhost:3000/movies/classics
  - http://localhost:3000/movies/genres
- Frontend page:
  - http://localhost:3000/

## 7. Features

- Simple REST endpoints serving movie data from a JSON file
- Filter endpoint for classic movies
- Aggregation endpoint returning genre counts
- Minimal static frontend that fetches and displays API data

## 8. GitHub Repository Link

https://github.com/radheshpai87/movie-collection-api

## 9. Author Information

Radhesh
