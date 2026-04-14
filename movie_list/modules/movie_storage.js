import * as storage from 'storage';
import Movie from 'movie';

const movieStorage = {
    retrieve() { 
        const movies = [];
        const movieArray = storage.retrieve("movie");
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