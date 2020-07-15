class CreatePrivileges < ActiveRecord::Migration[6.0]
  def change
    create_table :privileges do |t|
      t.references :user, null: false, foreign_key: true
      t.references :vault, null: false, foreign_key: true
      t.integer :permission

      t.timestamps
    end
  end
end
