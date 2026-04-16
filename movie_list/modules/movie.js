/**
 *
 * @author Taylor Rath & Brayden Hermanson
 * @date 04/15/2026
 * @repository https://github.com/tarath01/Media-Tracker
 * @summary
 * Represents a Movie Object used in the Movie Tracker
 */

/**
 * @property {string} movie - title of movie
 * @property {string} genre - movies genre
 * @property {string} rating - movies rating 1-10
 */

class Movie {
    /**
     * Creates new Movie instance
     * @param title
     * @param genre
     * @param rating
     */
    constructor(title, genre, rating) {
        this.title = title;
        this.genre = genre;
        this.rating = rating;
    }

    /**
     * Returns formatted string of the movie
     * @returns {string}
     */
    toString() {
        return `${this.title} | ${this.genre} | Rating ${this.rating}`;
    }
}

export default Movie;