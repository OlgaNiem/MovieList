const movieId = window.location.pathname.split('/').splice(-1)[0];

fetchMovie();
async function fetchMovie() {
    try{
        const response = await fetch('/api/movies/' + movieId);
        const movie = await response.json();

        if(movie.error) {
            throw new Error(movie.error);
        }
        document.querySelector('#movie').innerHTML = `
            <div id="leftPart">
                <img src="/images/${movie.image}">
            </div>
            <div class="info" id="rightPart">
                <h1>${movie.title}</h1>
                <h2>${movie.description}</h2>
                <h3>Length: ${movie.length} sec</h3>
                <h3>Rating: ${movie.rating}</h3>
                <h3>Age ratings: ${movie.age}</h3>
                <h3>Release date: ${movie.releaseDate}</h3>
                <h3>Genres: ${movie.genres.join(', ')}</h3>
            </div>
        `;
    }catch(error){
        document.querySelector('#movie').innerHTML = `
        <h1>Error</h1>
        <h3>${error.message}</h3>
        `;
    }
}