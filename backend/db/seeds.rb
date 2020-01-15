# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Movie.create(name: "Gone With the Wind")
Quote.create(quote: "Frankly, my dear, I don't give a damn.", movie_id: 1)

Movie.create(name: "The Wizard of Oz")
Quote.create(quote: "Toto, I've got a feeling we're not in Kansas anymore.", movie_id: 2)
Quote.create(quote: "There's no place like home.", movie_id: 2)

Movie.create(name: "Citizen Kane")
Quote.create(quote: "Rosebud", movie_id: 3)

Movie.create(name: "Taxi Driver")
Quote.create(quote: "You talking to me?", movie_id: 4)

Movie.create(name: "The Terminator")
Quote.create(quote: "I'll be back.", movie_id: 5)

Movie.create(name: "Jaws")
Quote.create(quote: "You're gonna need a bigger boat.", movie_id: 6)

Movie.create(name: "Apollo 13")
Quote.create(quote: "Houston, we have a problem.", movie_id: 7)

Movie.create(name: "Scarface")
Quote.create(quote: 'Say "hello" to my little friend!', movie_id: 8)

Movie.create(name: "Ghostbusters")
Quote.create(quote: "There is no Dana, only Zuul.", movie_id: 9)
Quote.create(quote: "That's a big Twinkie.", movie_id: 9)
Quote.create(quote: "Cats and dogs living together. Mass hysteria!", movie_id: 9)
Quote.create(quote: "When someone asks you if you're a god, you say yes!", movie_id: 9)

Movie.create(name: "Star Wars: A New Hope")
Quote.create(quote: "May the Force be with you.", movie_id: 10)
Quote.create(quote: "The ability to destroy a planet is insiginficant next to the power of the Force.", movie_id: 10)
Quote.create(quote: "Will someone get this walking carpet out of my way?", movie_id: 10)

Movie.create(name: "Star Wars: The Empire Strikes Back")
Quote.create(quote: "No, I am your father!", movie_id: 11)
Quote.create(quote: "I'd just as soon kiss a wookiee!", movie_id: 11)

Movie.create(name: "Star Wars: Return of the Jedi")
Quote.create(quote: "And now young Skywalker, you will die.", movie_id: 12)
Quote.create(quote: "I am a Jedi, like my father before me.", movie_id: 12)

Movie.create(name: "Terminator 2: Judgement Day")
Quote.create(quote: "Hasta la vista, baby.", movie_id: 13)

Movie.create(name: "Blade Runner")
Quote.create(quote: "All those moments will be lost in time, like tears in rain...", movie_id: 14)
Quote.create(quote: "Wake up. Time to die.", movie_id: 14)

Movie.create(name: "Pulp Fiction")
Quote.create(quote: "You will know my name is the Lord, when I lay my vengeance upon thee.", movie_id: 15)

Movie.create(name: "Dr. No")
Quote.create(quote: "Bond. James Bond.", movie_id: 16)