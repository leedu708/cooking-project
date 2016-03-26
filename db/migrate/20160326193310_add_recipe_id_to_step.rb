class AddRecipeIdToStep < ActiveRecord::Migration
  def change
    add_column :steps, :recipe_id, :integer, null: false
  end
end
