class Api::AreasController < ApplicationController
  before_action :authenticate_user! 

  def index
    render json: Area.where(group_id: params[:group_id])
  end

  def show
    area = Area.find(params[:id])
    walls = area.walls.order(id: :asc)
    render json: { area: area, walls: walls }
  end

  def areainfo
    area = Area.find(params[:id])
    render json: { area_name: area.name, vault_id: area.vault_id }
  end

  def update
    area = Area.find(params[:id])
    if area.update(area_params)
      render json: area
    else
      render json: { errors: area.errors }, status: :unprocessable_entity
    end
  end

  def create
    area = Area.new(area_params)
    if area.save
      render json: area
    else
      render json: {errors: area.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    Area.find(params[:id]).destroy
  end

  private
    def area_params
      params.require(:area).permit(:vault_id, :name, :description, :user_id)
    end

end
