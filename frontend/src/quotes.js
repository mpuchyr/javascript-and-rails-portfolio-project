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

let addMovieQuote = () => {
    const newQuoteForm = document.querySelector(".add-movie-quote")
    newQuoteForm.addEventListener("submit", function(e) {
        e.preventDefault()
        movies = []
        quotes = []
        let quoteInput = this.querySelector("#new-movie-quote").value
        let movieInput = this.querySelector("#new-movie").value
        fetch(`${QUOTES_URL}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                quote: `${quoteInput}`,
                movie: `${movieInput}`
            })
        }).then(res => res.json())
        .then(location.reload())
    })
}