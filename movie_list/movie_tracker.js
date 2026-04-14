import movieList from "movie_list";
import Movie from "movie";
import * as dom from "DOM";

const displayMovie = () => {
    movie_list.sortByDueDate();

    const select = dom.get("#movie");
    select.textContent = "";  // clear previous tasks

    for (let movie of movie_list) {
        const opt = document.createElement("option");
        opt.appendChild(document.createTextNode(movie));
        select.appendChild(opt);
    }  
    dom.focus("#movie");
}

dom.load(() => {
    dom.addClick("#add_movie", () => {
        dom.clear("#msg");             // clear any previous message
        
        const newMovie = new movie(
            dom.getValue("#movie"),
            dom.getValue("#genre"));
        
        let message = "";
        if (newMovie.description === "") {
            message = "Movie is required. ";
        }
        if (newMovie.hasInvalidDueDate || newMovie.isPastDue) {
            message += "Due Date must be a valid date in the future."
        } 

        if (message === "") {
            movie_list.load().add(newMovie).save();
            dom.clear("#movie");
            dom.clear("#genre");
            displayMovie();
        } else {
            dom.setText("#msg", message);
            dom.select("#movie");
        }     
    });
    
    dom.addClick("#clear_movies", () => {
        movie_list.clear();
        dom.clear("#movie");
        dom.clear("#movie");
        dom.clear("#genre");
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