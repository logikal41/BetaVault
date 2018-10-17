class Api::VaultsController < ApplicationController
  before_action :authenticate_user!, only: [:show, :update, :create, :destroy] 

  def index
    render json: Vault.all.order(id: :asc)
  end

  def show
    vault = Vault.find(params[:id])
    areas = vault.areas.order(id: :asc);
    render json: { vault: vault, areas: areas }
  end

  def vaultname
    render json: Vault.find(params[:id]).name
  end

  def update
    vault = Vault.find(params[:id])
    if vault.update(vault_params)
      render json: vault
    else
      render json: { errors: vault.errors }, status: :unprocessable_entity
    end
  end

  def create
    vault = Vault.new(vault_params)
    if vault.save
      render json: vault
    else
      render json: { errors: vault.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Vault.find(params[:id]).destroy
  end

  private
    def vault_params
      params.require(:vault).permit(:name, :description)
    end
end
