class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.integer :recipe_id
      t.integer :ingredient_id
      t.integer :amount
      t.string :notes

      t.timestamps null: false
    end
  end
end
