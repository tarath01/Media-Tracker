class Movie {
    constructor(title, genre, rating) {
        this.title = title;
        this.genre = genre;
        this.rating = rating;
    }

    toString() {
        return `${this.title} | ${this.genre} | Rating ${this.rating}`;
    }
}

export default Movie;