const filmsUrl = "https://ghibliapi.herokuapp.com/films"

// const moveLeft = document.getElementsById("left-arrow");
// const moveRight = document.getElementsById("right-arrow");

const likeCount = document.getElementById("like-count");
const movieCard = document.getElementById("movie-card");
const movieDetails = document.getElementById("movie-details");
const movieTitle = document.getElementById("movie-title");
const movieImg = document.getElementById("movie-img");

// let allMovieData

// get film data from ghibli

const init = () => {
fetch(filmsUrl)
    .then(res => res.json())
    .then(films => renderFilms(films))
}

function renderFilms(films) {
    const filmArray = films
    console.log(filmArray)
    movieTitle.innerText = filmArray.title;
    movieImg.src = filmArray.image;
}

// function renderFilms(movieCard) {
//     // const filmArray = films
//     // console.log(filmArray)
//     // filmArray.forEach((films) => { 
//        movieTitle.textContent = movieCard.title;
//     //    movieDetails.innerHTML = filmArray.description;
       
//     // })
// } 

document.getElementById("nav-dropdown").addEventListener('click', (e) => {
    console.log(e)
});


document.getElementById("like-button").addEventListener("click", likeDisplay);

function likeDisplay() {
    likeCount.textContent = parseInt(likeCount.textContent) + 1 + ` likes`
}

document.getElementById("left-arrow").addEventListener("click", (e) => {
    console.log(e)
    
});

document.getElementById("right-arrow").addEventListener('click', (e) => {
    console.log(e)
})

init();