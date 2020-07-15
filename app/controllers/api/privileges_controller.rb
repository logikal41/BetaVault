class Api::PrivilegesController < ApplicationController
    before_action :authenticate_user! 

    def index
        render json: Privilege.all
    end

    def show
        # search database for permission by vault_id and user_id and return hash
        render json: Privilege.find_by(vault_id: params[:id], user_id: current_user.id)
    end

    def update
        privelege = Privelege.find(params[:id])
        if privelege.update(privelege_params)
            render json: privelege
        else
            render json: { errors: privelege.errors }, status: :unprocessable_entity
        end
    end

    def create
        # ensure that the user id is not already present with the same vault 
        # only one user id per vault
        privelege = Privelege.new(privelege_params)
        if privelege.save
            render json: privelege
        else
            render json: {errors: privelege.errors}, status: :unprocessable_entity
        end
    end

    def destroy
        Privelege.find(params[:id]).destroy
    end

    private
        def privelege_params
            params.require(:privelege).permit(:user_id, :vault_id, :permission)
        end

end
