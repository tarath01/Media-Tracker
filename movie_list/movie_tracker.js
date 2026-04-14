import movieList from "movie_list";
import Movie from "movie";
import * as dom from "DOM";

const displayMovie = () => {
    movieList.sort();

    const select = dom.get("#movies");
    select.textContent = "";  // clear previous tasks

    for (let movie of movieList) {
        const opt = document.createElement("option");
        opt.appendChild(document.createTextNode(movie));
        select.appendChild(opt);
    }  
    dom.focus("#movie");
}

dom.load(() => {
    dom.addClick("#add_movie", () => {
        dom.clear("#msg");             // clear any previous message
        
        const newMovie = new Movie(
            dom.getValue("#movie"),
            dom.getValue('#genre'),
            dom.getValue('#rating')
        );
        
        let message = "";
        if (newMovie.title === "") {
            message = "Movie is required. ";
        }

        if (message === "") {
            movieList.load().add(newMovie).save();
            dom.clear("#movie");
            dom.clear("#genre");
            displayMovie();
        } else {
            dom.setText("#msg", message);
            dom.select("#movie");
        }     
    });
    
    dom.addClick("#clear_movie", () => {
        movieList.clear();
        dom.clear("#movie");
        dom.clear("#genre");
        dom.clear("#rating");
        dom.clear("#msg");
        dom.focus("#movie");
    });  

    dom.addClick("#delete_movie", () => {
        dom.clear("#msg");             // clear any previous message
        
        const index = dom.get("#movie").selectedIndex;
        if (index === -1) {
            dom.setText("#msg", "Please select a movie to delete.");
        } else {
            movieList.load().delete(index).save();
            displayMovie();
        }
    });
    movieList.load()
    displayMovie();
});