const filmsUrl = "https://ghibliapi.herokuapp.com/films"

fetch(filmsUrl)
    .then(res => res.json())
    .then(films => renderFilms(films))

function renderFilms(films) {
    const filmArray = films
    filmArray.forEach((film)=>{
        
    })
} 

document.getElementById("like-button").addEventListener("click", likeDisplay);

function likeDisplay() {
    likeCount.textContent = parseInt(likeCount.textContent) + 1 + ` likes`
}