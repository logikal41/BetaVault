class Api::RoutesController < ApplicationController
 
    def index
      render json: Route.where(wall_id: params[:wall_id])
    end
  
    def show
        render json: Route.find(params[:id])
    end
  
    def update
        route = Route.find(params[:id])
        route.update(route_params)
        render json: route
    end
  
    def create
        route = Route.new(route_params)
        if route.save
            render json: route
        else
            render json: {errors: area.errors}, status: :unprocessable_entity
        end
    end
  
    def destroy
        Route.find(params[:id]).destroy
    end
  
    private
        def route_params
            params.require(:route).permit(:wall_id, :name, :difficulty, :pitch, :length, :rating, :first_ascent, :description, :gear, :descent)
        end
  
  end