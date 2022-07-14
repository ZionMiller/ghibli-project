//VOCABULARY
//Modal = A modal (also called a modal window or lightbox) is a web page element that displays in front of and deactivates all other page content.

//film = film describes the status of the entire program or an individual object. 

//async function = is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

const filmsUrl = "https://ghibliapi.herokuapp.com/films"
const films = document.getElementById("films")
const searchBar = document.getElementById('searchBar');
const movieCollection = document.getElementById
('movie-collection');
//modal
const synopsis = document.getElementsByClassName('synopsis');
const overlay = document.getElementsByClassName('overlay');
const openModalBtn = document.getElementsByClassName('openModalBtn');
const closeModalBtn = document.getElementsByClassName('closeModalBtn');
//dropdown
const selectMovie = document.getElementById("drop-down");
const ghibRev = document.getElementById("nav-dropdown");

// get film data from ghibli
let film;

async function fetchFilms() {
    const response = await fetch("https://ghibliapi.herokuapp.com/films")
    const data = await response.json();
    film = data
    renderFilms(film);
}
fetchFilms();

//this functions displays the search results and renders the films to show on the page
searchBar.addEventListener("keydown", (e) => {
    const searchFilm = e.target.value.toLowerCase()
    const filteredFilms = film.filter((film) => {
        return (film.title.toLowerCase().includes(searchFilm))
    });

    renderFilms(filteredFilms);
});

//this functions displays the search results //this structure is the same structure from toytale. ntried to refactor but this wayt is quicker.
//can possibly refactor, thsinis the way i learned to display searchresults and reset
function renderFilms(films) {
    const filmArray = films
        .map((films) => {
            return ` 
            <li class ="movie-collection">
                    <h3>${films.title}</h3>
                    <p>Year Released: ${films.release_date}</p>
                    <h4.1>Directed by: ${films.director}</h4.1>
                    <h4.2>Rating: ${films.rt_score}</h4.2>
                    <img class="filmPoster" src="${films.image}" />
                    <button class="openModalBtn" onclick="onClick(event)" value="${films.description}"> Synopsis </button>       
                    <div id="containerForHeartIcon" >
                        <i onclick="toggler(event)" id="heartIcon" class="fa-regular fa-heart"> </i>
                    </div>                   
            </li>`
        })
        .join(''); //using .join allows you to remove the commas from the array of films
    movieCollection.innerHTML = filmArray
}

// this is the drop down copied from the other branch
const dropDown = (e) => {
    const target = e.target
    const nameDrop = document.createElement('option')
    ghibRev.append(selectMovie)
    selectMovie.append(nameDrop)
    nameDrop.textContent = filmArray.title
    const div = document.createElement('div')
}

//these next functions will focus on the favorite button toggle can also add like number if want
const toggler = (e) => {
    const target = e.target;
    console.log(target)
    if (target.classList.contains("fa-regular")) {
        target.classList.replace('fa-regular', 'fa-solid')

    } else {
        target.classList.replace('fa-solid', 'fa-regular')
    }
}

// these functions are for the modal that popup when clicking the synopsis button
const onClick = (e) => {
    const target = e.target;
    overlay[0].classList.toggle('hidden')
    synopsis[0].innerHTML = target.value
}

closeModalBtn[0].addEventListener("click", (e) => {
    console.log(e.target.value)
    overlay[0].classList.toggle('hidden')
})


////////////////////////////////////////////////////////////////////







// const init = () => {
// fetch(filmsUrl)
//     .then(res => res.json())
//     .then(films => films.forEach(renderFilms))
//     renderFilms(film);
// }

// function renderFilms(films) {
//     const filmArray = films
//     console.log(filmArray)

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

//             const nameDrop = document.createElement('option');
//             ghibRev.append(selectMovie)
//             selectMovie.append(nameDrop)
//             nameDrop.textContent = filmArray.title;
//             const div = document.createElement('div')
// }


// note: zion set const init above so we can pass 
// for each to our render function as a whole easier
// this invocation below is required to initialize the card
// init();


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




//           const image = document.createElement('img')

//             image.src = film.image
//             div.append(image)
//             cardBody.append(div)


//   selectMovie.addEventListener("change", chooseMovie)

//             function chooseMovie(e){
//                  //const chosenMovie = e.target.value;
                 
//                  const filteredMovies = films.find((film)=>
                    
//                     (e.target.value.contains(film.name) ) 
                    
//                  )
//                  console.log(filteredMovies) 
//             }


// }

// document.getElementById("nav-dropdown").addEventListener('click', (e) => {
//     console.log(e)
// });

// // document.getElementById("like-button").addEventListener("click", likeDisplay);
// // document.getElementById("comment-form-button").addEventListener("submit", handleComments);

// function likeDisplay() {
//     likeCount.textContent = parseInt(likeCount.textContent) + 1 + ` likes`
// }


//     movieTitle.innerText = filmArray[0].title;
//     commented out because movie images contain titles
//     movieImg.src = filmArray[0].image;
//     movieTitle.innerText = filmArray[0].title;
//     movieImg.src = filmArray[0].image;
//     movieDetails.textContent = filmArray[0].description;

//  function handleComments() {
//     let commentDisplay = document.getElementById("comment-display")
//     let commentBody = document.getElementById("comment-form-body")
//     document.getElementById('comment-form-button').addEventListener('submit', (e) => {
//         e.preventDefault();
//         commentBody.append(commentDisplay)
//     })
// }

// handleComments();

