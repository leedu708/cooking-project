class AddHeroColumnToRecipe < ActiveRecord::Migration
  def change
    add_attachment :recipes, :hero
  end
end
