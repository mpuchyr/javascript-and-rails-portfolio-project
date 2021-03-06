const BASE_URL = "http://localhost:3000"
const MOVIES_URL = `${BASE_URL}/movies`
const QUOTES_URL = `${BASE_URL}/quotes`

let movies = []
let moviesToGuess = []
let quotes = []
let quote
let score = 0
let strikes = 0

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
    if (quotes.length > 0 && strikes < 3) {
        randomQuote()
        createQuoteHTML()
        randomMovies()
        shuffleRandomMovies()
        sortMovies()
        addMovieButtons()
        addButtonFunctionality()
    } else {
        container.innerHTML = `<h2>GAME OVER<h2><br>`
        container.innerHTML += `<button id="replay">Play Again?</button>`
        let replayBtn = container.querySelector("#replay")
        replayBtn.addEventListener("click", resetGame)
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
    score = 0
    strikes = 0
    scoreSpan.innerText = score

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



window.addEventListener('DOMContentLoaded', (event) => {
    resetGame()
    resetBtn.addEventListener('click', resetGame)
})




