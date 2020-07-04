class AddUserToWalls < ActiveRecord::Migration[6.0]
  def change
    add_reference :walls, :user, null: false, foreign_key: true
  end
end
