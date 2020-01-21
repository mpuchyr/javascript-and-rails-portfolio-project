const fetchMovies = () => {
    return fetch(`${MOVIES_URL}`)
    .then(res => res.json())
    .then(allMovies => {
        allMovies.forEach(movie => {
            let newMovie = new Movie(movie.name, movie.id)
            movies.push(newMovie)
        })
    })
}

const randomMovies = () => {
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

const shuffleRandomMovies = () => {
    for (let i = moviesToGuess.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = moviesToGuess[i]
        moviesToGuess[i] = moviesToGuess[j]
        moviesToGuess[j] = temp
    }
}

const addMovieButtons = () => {
    moviesToGuess.forEach(movie => {
        container.innerHTML += `
            <button class="guess-button" id="${movie.id}">${movie.name}</button><br>
        `
    })
}


const addButtonFunctionality = () => {
    let buttons = document.querySelectorAll(".guess-button")
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            if (parseInt(this.id) === quote.movieId) {
                this.style.color = "green"
                this.style.borderColor = "green"
                score += 1
                console.log("Correct!")
            } else {
                this.style.color = "red"
                this.style.borderColor = "red"
                score -= 1
                strikes += 1
            }
            quotes.splice( quotes.indexOf(quote), 1)
            scoreSpan.innerText = score
            setTimeout(gameStart, 500)
        })
    })
}

const sortMovies = () => {
    moviesToGuess = moviesToGuess.sort(function(a, b) {
        let c = a.name
        let d = b.name
        
        if (a.name.split(" ")[0].toLowerCase() === "The".toLowerCase()) {
            let aName = a.name.split(" ")
            aName.splice(0, 1)
            c = aName.join(" ")
        }

        if (b.name.split(" ")[0].toLowerCase() === "The".toLowerCase()) {
            let bName = b.name.split(" ")
            bName.splice(0, 1)
            d = bName.join(" ")
        }
        

        if (c.toLowerCase() > d.toLowerCase()) {
            return 1
        } else if (c.toLowerCase() < d.toLowerCase()) {
            return -1
        } else {
            return 0
        }
    })
}