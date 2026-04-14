import movieStorage from 'movie_storage';

let movies = [];         // private variable

const movieList = {
    load() {
        movies = movieStorage.retrieve();
        return this;
    },
    save() {
        movieStorage.store(movies);
        return this;
    },
    add(movie) {
        movies.push(movie);
        return this;
    },
    delete(i) {
        this.sort(); // sort so in same order as page
        movies.splice(i, 1);
        return this;
    },
    clear() {
        movies.length = 0;
        movieStorage.remove();
        return this;
    },
    sort() {
        movies.sort((a, b) => {
            return a.genre.toLowerCase().localeCompare(b.genre.toLowerCase()) ||
                (b.rating - a.rating) ||
                a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        });
        return this;
    },
    * [Symbol.iterator]() {
        for (let movie of movies) {
            yield movie;
        }
    }
};

export default movieList;