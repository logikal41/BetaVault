class CreateRoutes < ActiveRecord::Migration[5.1]
  def change
    create_table :routes do |t|
      t.string :name
      t.string :difficulty
      t.integer :pitch
      t.string :length
      t.float :rating
      t.string :first_ascent
      t.text :description
      t.string :gear
      t.string :descent
      t.belongs_to :wall, foreign_key: true

      t.timestamps
    end
  end
end
