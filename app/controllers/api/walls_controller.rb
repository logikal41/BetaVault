class Api::WallsController < ApplicationController

    def index
        render json: Wall.where(area_id: params[:area_id])
    end

    def show
        wall = Wall.find(params[:id])
        routes = wall.routes.order(id: :asc)
        render json: { wall: wall, routes: routes }
    end

    def update
        wall = Wall.find(params[:id])
        if wall.update(wall_params)
            render json: wall
        else
            render json: { errors: wall.errors }, status: :unprocessable_entity
        end
    end

    def create
        wall = Wall.new(wall_params)
        if wall.save
            render json: wall
        else
            render json: {errors: wall.errors}, status: :unprocessable_entity
        end
    end

    def destroy
        Wall.find(params[:id]).destroy
    end

    private
        def wall_params
            params.require(:wall).permit(:area_id, :name, :description)
        end
  
end