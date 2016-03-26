class CreateSteps < ActiveRecord::Migration
  def change
    create_table :steps do |t|
      t.string :instructions
      t.integer :recipe_order

      t.timestamps null: false
    end
  end
end
