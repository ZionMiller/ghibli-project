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
    // movieTitle.innerText = filmArray[0].title;
    // commented out because movie images contain titles
    movieImg.src = filmArray[0].image;
    movieDetails.textContent = filmArray[0].description;
}


document.getElementById("nav-dropdown").addEventListener('click', (e) => {
    console.log(e)
});

document.getElementById("like-button").addEventListener("click", likeDisplay);
// document.getElementById("comment-form-button").addEventListener("submit", handleComments);

function likeDisplay() {
    likeCount.textContent = parseInt(likeCount.textContent) + 1 + ` likes`
}
// playing with submit form

//  function handleComments() {
//     let commentDisplay = document.getElementById("comment-display")
//     let commentBody = document.getElementById("comment-form-body")
//     document.getElementById('comment-form-button').addEventListener('submit', (e) => {
//         e.preventDefault();
//         commentBody.append(commentDisplay)
//     })
// }
// handleComments();

document.getElementById("left-arrow").addEventListener("click", (e) => {
    console.log(e)
    
});

document.getElementById("right-arrow").addEventListener('click', (e) => {
    console.log(e)
})
// invoke init to get data
init();