import movieStorage from 'movie_storage';

let movie = [];         // private variable

const movie_list = {
    load() {
        movies = movieStorage.retrieve();
        return this;
    },
    save() {
        movieStorage.store(movie);
        return this;
    },
    add(movie) {
        movie.push(movie);
        return this;
    },
    delete(i) {
        this.sortByDueDate(); // sort so in same order as page
        movie.splice(i, 1);
        return this;
    },
    clear() {
        movie.length = 0;
        movieStorage.remove();
        return this;
    },
    sortByDueDate() {
        movie.sort((a, b) => a.dueDate - b.dueDate);
        return this;
    },
    *[Symbol.iterator]() { 
        for (let movie of movie) {
            yield movie;
        }
    }
};

export default movie_list;