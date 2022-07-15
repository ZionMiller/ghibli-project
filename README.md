# ghibli-project
Phase-1-Ghibli-Project

## User Experience:

"Ghibli Films" utilizes the Ghibli API to provide Studio Ghibli fans a one stop shop for every Ghibli film. Users are able to do the following;

* Upon arrival to Ghibli Movies, movies are listed via pic tile.  
* Towards the top of the window, users can search films and receive an isolated view of the individual tile.
* Based on selected movie, users can like/unlike via toggle, observe details such as director, and release date.
* User can also click a synopsis option which will provide a detailed overview of the film 

## The core features:

* Event Listeners (each has own cb function): 

    * Click like – toggle like button empty/filled
    * Search bar - user can "keydown" in the search field, and receive the desired isolated film tile via toLowerCase(), ensuring search is handled correctly regardless of capitilization. 
    * Click synposis - user can cick the synopsis button on film tile to receive more information on the film such as a description of the film. Users can click out of this pop up via a click in the window or on the synposis button again. 

## API data:  https://ghibliapi.herokuapp.com/

This API has several endpoint options, and this app uses the films option.


