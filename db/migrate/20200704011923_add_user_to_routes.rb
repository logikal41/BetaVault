class AddUserToRoutes < ActiveRecord::Migration[6.0]
  def change
    add_reference :routes, :user, null: false, foreign_key: true
  end
end
