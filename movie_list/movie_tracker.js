/**
 *
 * @author Taylor Rath & Brayden Hermanson
 * @date 04/15/2026
 * @repository https://github.com/tarath01/Media-Tracker
 * @summary
 * Handles users input, validation, sorting, deletion, and displaying.
*/

import movieList from "movie_list";
import Movie from "movie";
import * as dom from "DOM";

/**
 * Displays all movies after sorting
 * @function displayMovie
 * @returns
 */
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
/**
 * Initilizes when DOM is ready
 * @function DOMContentLoaded
 */
dom.load(() => {
    /**
     * adds new movie
     */
    dom.addClick("#add_movie", () => {
        dom.clear("#msg");             // clear any previous message
        
        const newMovie = new Movie(
            dom.getValue("#movie"),
            dom.getValue('#genre'),
            dom.getValue('#rating')
        );
        // Validation message
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
    /**
     * Clears all movies
     */
    dom.addClick("#clear_movie", () => {
        movieList.clear();
        dom.clear("#movie");
        dom.clear("#genre");
        dom.clear("#rating");
        dom.clear("#msg");
        dom.focus("#movie");
    });
    /**
     * Deletes movies
     */
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
    // Initial Load and Display
    movieList.load()
    displayMovie();
});