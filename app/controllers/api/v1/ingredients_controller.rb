class Api::V1::IngredientsController < ApplicationController
    def index
        @ingredients = Ingredient.all
        render json: @ingredients, status: 200
    end
    
    def show
        @ingredient = Ingredient.find(params[:id])
        render json: @ingredient, status:200
    end
end
