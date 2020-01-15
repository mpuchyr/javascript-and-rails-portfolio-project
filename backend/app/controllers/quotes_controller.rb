class QuotesController < ApplicationController
    def index
        quotes = Quote.all
        render json: quotes
    end

    def show
        quote = Quote.find_by(id: params[:id])
        render json: quote
    end

    def create
        quote = Quote.find_by(quote: params[:quote])
        if !quote 
            movie = Movie.find_or_create_by(name: params[:movie])
            quote = Quote.create(quote: params[:quote], movie_id: movie.id)
        end
        redirect_to quotes_path
    end
end
