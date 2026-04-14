import movieStorage from 'movie_storage';

let movies = [];         // private variable

const movie_list = {
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
        this.sortByDueDate(); // sort so in same order as page
        movies.splice(i, 1);
        return this;
    },
    clear() {
        movies.length = 0;
        movieStorage.remove();
        return this;
    },
    sortByDueDate() {
        movies.sort((a, b) => a.dueDate - b.dueDate);
        return this;
    },
    *[Symbol.iterator]() { 
        for (let movie of movies) {
            yield movie;
        }
    }
};

export default movie_list;