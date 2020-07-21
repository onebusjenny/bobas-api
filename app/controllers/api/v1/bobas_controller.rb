class Api::V1::BobasController < ApplicationController
    def index
        @bobas = Boba.all
        render json: @boba, status: 200
    end
    
    def show
        @boba = Boba.find(params[:id])
    
        render json: @boba, status:200
    end
     
    def create 
        @boba = Boba.create(boba_params)
    
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
    
    # def destroy
    #     @boba = Boba.find(params[:id])
    #     @boba.delete
    
    #     render json: (bobaId: @boba.id}
    
    # end
    





end
