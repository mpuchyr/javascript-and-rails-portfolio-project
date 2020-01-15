const BASE_URL = "http://localhost:3000"
const MOVIES_URL = `${BASE_URL}/movies`
const QUOTES_URL = `${BASE_URL}/quotes`

let movies = []
let moviesToGuess = []
let quotes = []
let quote
let score = 0

const container = document.querySelector(".container")
const scoreSpan = document.querySelector(".score")

scoreSpan.innerText = score


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



// Movies


let gameStart = () => {
    container.innerHTML = ""
    randomQuote()
    createQuoteHTML()
    randomMovies()
    shuffleRandomMovies()
    addMovieButtons()
    addButtonFunctionality()
}

fetchMovies()
.then(fetchQuotes)
.then(gameStart)
.then(addMovieQuote)
// .then(randomQuote)
// .then(createQuoteHTML)
// .then(randomMovies)
// .then(shuffleRandomMovies)
// .then(addMovieButtons)
// .then(addButtonFunctionality)

