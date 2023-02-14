const express = require('express');
const path = require('path');
const movies = require('./data/movies.json');
const ageRatings = require('./data/age-ratings.json');
const genres = require('./data/genres.json');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join('public')));

app.get('/api/age-ratings', (request, response) => {
  response.status(200).json(ageRatings)
});

app.get('/api/genres', (request, response) => {
  response.status(200).json(genres)
});

app.get('/api/movies/year', (request, response) =>{
  const year = movies.find(item => item.releaseDate == request.params.releaseDate);
  response.status(200).json(year);
});

app.get('/movie/:id', (request, response) =>{
  response.status(200).sendFile(path.resolve('public/movies-id.html'));
});

app.get('/api/movies', (request, response) => {
  response.status(200).json(movies.map(movie => ({
    id: movie.id,
    title: movie.title,
    age: movie.age,
    genres: movie.genres,
    releaseDate: movie.releaseDate,
    rating: movie.rating
  })));
});




app.get('/api/movies/:id', (request, response) =>{
  const movie = movies.find(item => item.id == request.params.id);
  if(!movie) {
      return response.status(200).json({error: `Movie with id ${request.params.id} not found`});
  }
  response.status(200).json(movie);
});



app.listen(port, (error) => {
  if(error) {
    console.log(error);
    return;
  }
  console.log(`Server is running at http://localhost:${port}`);
});
