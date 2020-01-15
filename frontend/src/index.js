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

// Quotes


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

let shuffleRandomMovies = () => {
    for (let i = moviesToGuess.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = moviesToGuess[i]
        moviesToGuess[i] = moviesToGuess[j]
        moviesToGuess[j] = temp
    }
}

let addMovieButtons = () => {
    moviesToGuess.forEach(movie => {
        container.innerHTML += `
            <button class="guess-button" id="${movie.id}">${movie.name}</button>
        `
    })
}

// Game Functionality

let addButtonFunctionality = () => {
    let buttons = document.querySelectorAll(".guess-button")
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            if (parseInt(this.id) === quote.movieId) {
                this.style.color = "green"
                score += 1
                console.log("Correct!")
            } else {
                this.style.color = "red"
                score -= 1
            }
            quotes.splice( quotes.indexOf(quote), 1)
            scoreSpan.innerText = score
            setTimeout(gameStart, 1500)
        })
    })
}

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

