/**
 *
 * @author Taylor Rath & Brayden Hermanson
 * @date 04/15/2026
 * @repository https://github.com/tarath01/Media-Tracker
 * @summary
 * Handles saving and retrieving Movie objects from localStorage
 */

import * as storage from 'storage';
import Movie from 'movie';

const movieStorage = {
    /**
     * Retrieves all stored movies
     * @returns {*[]}
     */
    retrieve() { 
        const movies = [];
        const movieArray = storage.retrieve("movies");
        if(movieArray) {
            for(let obj of movieArray) {
                movies.push(new Movie(obj.title, obj.genre, obj.rating));
            }
        }
        return movies;
    },
    store(movie) {
        storage.store("movie", movie);
    },
    remove() { 
        storage.remove("movie");
    }
};

export default movieStorage;