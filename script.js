//VOCABULARY
//Modal = A modal (also called a modal window or lightbox) is a web page element that displays in front of and deactivates all other page content.

//film = film describes the status of the entire program or an individual object. 

//async function = is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

const filmsUrl = "https://ghibliapi.herokuapp.com/films"
const films = document.getElementById("films")
const searchBar = document.getElementById('searchBar');
const movieCollection = document.getElementById('movie-collection');
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
    const response = await fetch(filmsUrl)
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
                    <h4.2>Rotten Tomatoes: ${films.rt_score}</h4.2>
                    <img class="filmPoster" src="${films.image}" />
                    <button class="openModalBtn" onclick="onClick(event)" value="${films.description}"> Synopsis </button>       
                    <div id="containerForHeartIcon" >
                        <i onclick="toggler(event)" id="heartIcon" class="fa-regular fa-heart"> </i>
                    </div>                   
            </li>`
        })
        .join(''); //using .join allows you to remove the commas from the array of films
    movieCollection.innerHTML = filmArray

    films.forEach((film) => {
        const nameDrop = document.createElement('option');
        selectMovie.append(nameDrop)
        nameDrop.innerHTML = film.title;

        nameDrop.addEventListener('click', (e) =>{
            console.log(e)
        });
    });

}

//favorite button toggle can also add like number if want
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

