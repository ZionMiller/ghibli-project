const filmsUrl = "https://ghibliapi.herokuapp.com/films"

// const moveLeft = document.getElementsById("left-arrow");
// const moveRight = document.getElementsById("right-arrow");

const likeCount = document.getElementById("like-count");
const movieCard = document.getElementById("movie-card");
const movieDetails = document.getElementById("movie-details");
const movieTitle = document.getElementById("movie-title");
const movieImg = document.getElementById("movie-img");
const selectMovie = document.getElementById("select-movie");
const cardBody = document.getElementById("card-body");
const ghibRev = document.getElementById("nav-dropdown");

function init(){
fetch(filmsUrl)
    .then(res => res.json())
    .then(films => renderFilms(films))
}

const renderFilms = films => {
        films.forEach(film => {
            const nameDrop = document.createElement('option');
            ghibRev.append(selectMovie)
            selectMovie.append(nameDrop)
            nameDrop.textContent = film.title;
            const div = document.createElement('div')





            

            // const image = document.createElement('img')
            // image.src = film.image
            // div.append(image)
            // cardBody.append(div)

        })


















        // selectMovie.addEventListener("change", chooseMovie)

        //     function chooseMovie(e){
        //          //const chosenMovie = e.target.value;
                 
        //          const filteredMovies = films.find((film)=>
                    
        //             (e.target.value.contains(film.name) ) 
                    
        //          )
        //          console.log(filteredMovies) 
        //     }
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

// invoke init to get data
init();