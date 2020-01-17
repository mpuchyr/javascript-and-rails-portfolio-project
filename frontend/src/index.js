const BASE_URL = "http://localhost:3000"
const MOVIES_URL = `${BASE_URL}/movies`
const QUOTES_URL = `${BASE_URL}/quotes`

let movies = []
let moviesToGuess = []
let quotes = []
let quote
let score = 0

const container = document.querySelector(".quote-container")
const scoreSpan = document.querySelector(".score")
const resetBtn = document.querySelector(".reset")
const loader = document.querySelector(".loader")

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


const gameStart = () => {
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

const addLoader = () => {
    loader.style.display = "block"
}

const removeLoader = () => {
    loader.style.display = "none"
}

const resetGame = () => {
    movies = []
    quotes = []

    addLoader()
    fetchMovies()
    .then(fetchQuotes)
    .then(removeLoader)
    .then(gameStart)
    .then(addMovieQuote)
    .catch(err => {
        container.innerHTML = `Sorry. Something went wrong. <br> Please try again later.`
        console.log(err.message)
    })

}

resetBtn.addEventListener('click', resetGame)

window.addEventListener('DOMContentLoaded', (event) => {
    resetGame()
})



