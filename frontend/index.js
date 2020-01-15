const BASE_URL = "http://localhost:3000"
const MOVIES_URL = `${BASE_URL}/movies`
const QUOTES_URL = `${BASE_URL}/quotes`

let movies = []
let quotes = []


class Movie {
    constructor(name) {
        this.name = name
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
    .then(quotes => {
        quotes.forEach(quote => {
            let newQuote = new Quote(quote.quote, quote.movie_id)
            quotes.push(newQuote)
        })
    })
}
