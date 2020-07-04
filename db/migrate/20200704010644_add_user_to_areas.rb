class AddUserToAreas < ActiveRecord::Migration[6.0]
  def change
    add_reference :areas, :user, null: false, foreign_key: true
  end
end
