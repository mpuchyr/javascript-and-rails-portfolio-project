const BASE_URL = "http://localhost:3000"
const MOVIES_URL = `${BASE_URL}/movies`
const QUOTES_URL = `${BASE_URL}/quotes`

let movies = []
let moviesToGuess = []
let quotes = []
let quote

const container = document.querySelector(".container")


class Movie {
    constructor(name, id) {
        this.name = name
        this.id = id
    }
}

class Quote {
    constructor(quote, movieId) {
        this.quote = quote
        this.movieId = movieId
    }
}

// Quotes
let fetchQuotes = () => {
    return fetch(`${QUOTES_URL}`)
    .then(res => res.json())
    .then(movieQuotes => {
        movieQuotes.forEach(quote => {
            let newQuote = new Quote(quote.quote, quote.movie_id)
            quotes.push(newQuote)
        })
    })
}

let randomQuote = () => {
    let num = Math.floor(Math.random() * quotes.length)
    quote = quotes[num]
}

let createQuoteHTML = () => {
    let quoteHTML = `<h2>${quote.quote}</h2>`
    container.innerHTML += quoteHTML
} 



// Movies
let fetchMovies = () => {
    return fetch(`${MOVIES_URL}`)
    .then(res => res.json())
    .then(allMovies => {
        allMovies.forEach(movie => {
            let newMovie = new Movie(movie.name, movie.id)
            movies.push(newMovie)
        })
    })
}

let randomMovies = () => {
    moviesToGuess = []
    let firstMovie = movies.find(movie => { 
        return movie.id === quote.movieId
    })
    moviesToGuess.push(firstMovie)
    while (moviesToGuess.length < 3) {
        let num = Math.floor(Math.random() * movies.length)
        let randomMovie = movies[num]
        if (!moviesToGuess.includes(randomMovie)) {
            moviesToGuess.push(randomMovie)
        }
    }
}



