const filmsUrl = "https://ghibliapi.herokuapp.com/films"
const likeCount = document.getElementById("like-count")
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

// function renderFilms(films) {
//     const filmArray = films
//     filmArray.forEach((film)=>{
        
//     })
// } 

document.getElementById("like-button").addEventListener("click", likeDisplay);

function likeDisplay() {
    likeCount.textContent = parseInt(likeCount.textContent) + 1 + ` likes`
}