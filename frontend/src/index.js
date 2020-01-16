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
const resetBtn = document.querySelector(".reset")

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


let gameStart = () => {
    container.innerHTML = ""
    if (quotes.length > 0) {
        randomQuote()
        createQuoteHTML()
        randomMovies()
        shuffleRandomMovies()
        addMovieButtons()
        addButtonFunctionality()
    } else {
        container.innerHTML = `<h2>GAME OVER<h2>`
    }
}

let resetGame = () => {
    movies = []
    quotes = []
    fetchMovies()
    .then(fetchQuotes)
    .then(gameStart)
    .then(addMovieQuote)
}

resetBtn.addEventListener('click', resetGame)

window.addEventListener('DOMContentLoaded', (event) => {
    resetGame()
    // fetchMovies()
    // .then(fetchQuotes)
    // .then(gameStart)
    // .then(addMovieQuote)

})



