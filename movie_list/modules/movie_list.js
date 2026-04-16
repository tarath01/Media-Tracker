/**
 *
 * @author Taylor Rath & Brayden Hermanson
 * @date 04/15/2026
 * @repository https://github.com/tarath01/Media-Tracker
 * @summary
 * This program allows users to add, view, sort, and delete movies using arrays, and objects. It allows a fully customized Movie Tracker
 that stores movie titles, genres, and ratings. The application uses a modular design,
 DOM, and storage to manage a dynamic movie list.
 */

import movieStorage from 'movie_storage';

let movies = [];         // private variable

const movieList = {
    /**
     * Loads movies
     * @returns {movieList}
     */
    load() {
        movies = movieStorage.retrieve();
        return this;
    },
    /**
     * Saves current movie to storage
     * @returns {movieList}
     */
    save() {
        movieStorage.store(movies);
        return this;
    },
    /**
     * Adds new movie to list
     * @param movie
     * @returns {movieList}
     */
    add(movie) {
        movies.push(movie);
        return this;
    },
    /**
     * Deletes movie
     * @param i Index of movie to delete
     * @returns {movieList}
     */
    delete(i) {
        this.sort(); // sort so in same order as page
        movies.splice(i, 1);
        return this;
    },
    /**
     * clears all movies
     * @returns {movieList}
     */
    clear() {
        movies.length = 0;
        movieStorage.remove();
        return this;
    },
    /**
     * sorts movies by genre, rating, movie title
     * @returns {movieList}
     */
    sort() {
        movies.sort((a, b) => {
            return a.genre.toLowerCase().localeCompare(b.genre.toLowerCase()) ||
                (b.rating - a.rating) ||
                a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        });
        return this;
    },
    /**
     * enables iteration over movie list
     * @returns {Generator<*, void, *>}
     */
    * [Symbol.iterator]() {
        for (let movie of movies) {
            yield movie;
        }
    }
};

export default movieList;