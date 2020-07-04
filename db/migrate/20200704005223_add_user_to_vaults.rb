class AddUserToVaults < ActiveRecord::Migration[6.0]
  def change
    add_reference :vaults, :user, null: false, foreign_key: true
  end
end
