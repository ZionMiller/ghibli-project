const filmsUrl = "https://ghibliapi.herokuapp.com/films"

// const moveLeft = document.getElementsById("left-arrow");
// const moveRight = document.getElementsById("right-arrow");

const likeCount = document.getElementById("like-count")
const filmCard = document.getElementById("movie-list")
const filmDetails = document.getElementById("movie-details")
let allMovieData

document.addEventListener('DOMContentLoaded', async () => {
    await getFilmData()
    console.log(allMovieData)
})

const getFilmData = async () => {
    await fetch(filmsUrl)
        .then(res => res.json())
        .then(films => {
            allMovieData = films
        })
}

function renderFilms(films) {
    const filmArray = films
    // filmArray.forEach((films)=>{
    //     let movieBox = document.createElement('li')
    //     movieBox.src = films.image;
    // })
} 

// document.getElementById("nav-dropdown").addEventListener('click', (e) => {
//     console.log(e)
// });


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


renderFilms(); 