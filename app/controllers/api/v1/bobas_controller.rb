class Api::V1::BobasController < ApplicationController
    def index
        @bobas = Boba.all
        render json: @bobas, status: 200
    end
    
    def show
        @boba = Boba.find(params[:id])
        render json: @boba, status:200
    end
    
    def create 
        @boba = Boba.create(boba_params)
        @ingredients = Ingredient.all
        # Boba.create(name:"ba",flavor:"green", ingredient_ids:[1,2,3])
        render json: @boba, status:200
    end
    
    def update
        @boba = Boba.find(params[:id])
        if  @boba.update(boba_params)
            render json: @boba, status:200
        else
            render error
        end
    end
    
    def destroy
        @boba = Boba.find(params[:id])
        @boba.destroy
        render json: @boba, status:200
    end



    private
        def boba_params
            params.require(:boba).permit(:id, :name, :flavor, :ingredient_ids => [])
        end
    # def destroy
    #     @boba = Boba.find(params[:id])
    #     @boba.delete
    
    #     render json: (bobaId: @boba.id}
    
    # end
    

end
