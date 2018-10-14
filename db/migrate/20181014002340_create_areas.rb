class CreateAreas < ActiveRecord::Migration[5.1]
  def change
    create_table :areas do |t|
      t.string :name
      t.text :description
      t.belongs_to :vault, foreign_key: true

      t.timestamps
    end
  end
end
