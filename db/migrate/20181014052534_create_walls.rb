class CreateWalls < ActiveRecord::Migration[5.1]
  def change
    create_table :walls do |t|
      t.string :name
      t.text :description
      t.belongs_to :area, foreign_key: true

      t.timestamps
    end
  end
end
