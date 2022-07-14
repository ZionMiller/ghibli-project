const filmsUrl = "https://ghibliapi.herokuapp.com/films"

const movieCollection = document.getElementById('movie-collection');

const selectMovie = document.getElementById("select-movie");
// const cardBody = document.getElementById("card-body");
const ghibRev = document.getElementById("nav-dropdown");

// get film data from ghibli

const init = () => {
fetch(filmsUrl)
    .then(res => res.json())
    .then(films => films.forEach(renderFilms))
}

function renderFilms(films) {
    const filmArray = films
    console.log(filmArray)

    let movieCard = document.createElement('div');
    movieCard.id = "card";

    const img = document.createElement('img');
    img.src = filmArray.image;
    img.className = "movie-img";

    const movieTitle = document.createElement('h2');
    movieTitle.textContent = filmArray.title;

    const movieDescription = document.createElement('p');
    movieDescription.textContent = filmArray.description;

    movieCard.append(img, movieTitle, movieDescription);
    movieCollection.append(movieCard);

            const nameDrop = document.createElement('option');
            ghibRev.append(selectMovie)
            selectMovie.append(nameDrop)
            nameDrop.textContent = filmArray.title;
            const div = document.createElement('div')
}
// note: zion set const init above so we can pass 
// for each to our render function as a whole easier
// this invocation below is required to initialize the card
init();


// break point commented out code from main

// const filmsUrl = "https://ghibliapi.herokuapp.com/films"

// const movieCollection = document.getElementById('movie-collection');
// const likeCount = document.getElementById("like-count");
// const movieCard = document.getElementById("movie-card");
// const movieDetails = document.getElementById("movie-details");
// const movieTitle = document.getElementById("movie-title");
// const movieImg = document.getElementById("movie-img");
// const selectMovie = document.getElementById("select-movie");
// const cardBody = document.getElementById("card-body");
// const ghibRev = document.getElementById("nav-dropdown");

// function init(){

// fetch(filmsUrl)
//     .then(res => res.json())
//     .then(films => films.forEach(renderFilms))
// }

// const renderFilms = films => {
//             const nameDrop = document.createElement('option');
//             ghibRev.append(selectMovie)
//             selectMovie.append(nameDrop)
//             nameDrop.textContent = film.title;
//             const div = document.createElement('div')
//             // const image = document.createElement('img')
//     const filmArray = films
//     let movieCard = document.createElement('div');
//     movieCard.id = "card";
//     const img = document.createElement('img');
//     img.src = filmArray.image;
//     img.className = "movie-img";
//     const movieTitle = document.createElement('h2');
//     movieTitle.textContent = filmArray.title;

//     const movieDescription = document.createElement('p');
//     movieDescription.textContent = filmArray.description;

//     movieCard.append(img, movieTitle, movieDescription);
//     movieCollection.append(movieCard);

//   const dropDownHandle = films => {
//          const nameDrop = document.createElement('option');
//          ghibRev.append(selectMovie)
//          selectMovie.append(nameDrop)
//          nameDrop.textContent = films.title;
//          const div = document.createElement('div')
//         }
    
// };




          // const image = document.createElement('img')

            // image.src = film.image
            // div.append(image)
            // cardBody.append(div)


  // selectMovie.addEventListener("change", chooseMovie)

        //     function chooseMovie(e){
        //          //const chosenMovie = e.target.value;
                 
        //          const filteredMovies = films.find((film)=>
                    
        //             (e.target.value.contains(film.name) ) 
                    
        //          )
        //          console.log(filteredMovies) 
        //     }


// }

// document.getElementById("nav-dropdown").addEventListener('click', (e) => {
//     console.log(e)
// });

// // document.getElementById("like-button").addEventListener("click", likeDisplay);
// // document.getElementById("comment-form-button").addEventListener("submit", handleComments);

// function likeDisplay() {
//     likeCount.textContent = parseInt(likeCount.textContent) + 1 + ` likes`
// }


    // movieTitle.innerText = filmArray[0].title;
    // commented out because movie images contain titles
    // movieImg.src = filmArray[0].image;
    // movieTitle.innerText = filmArray[0].title;
    // movieImg.src = filmArray[0].image;
    // movieDetails.textContent = filmArray[0].description;

//  function handleComments() {
//     let commentDisplay = document.getElementById("comment-display")
//     let commentBody = document.getElementById("comment-form-body")
//     document.getElementById('comment-form-button').addEventListener('submit', (e) => {
//         e.preventDefault();
//         commentBody.append(commentDisplay)
//     })
// }

// handleComments();

