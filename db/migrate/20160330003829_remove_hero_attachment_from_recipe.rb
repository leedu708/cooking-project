class RemoveHeroAttachmentFromRecipe < ActiveRecord::Migration
  def change
    remove_attachment :recipes, :hero
  end
end
