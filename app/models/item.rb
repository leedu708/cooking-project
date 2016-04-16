class Item < ActiveRecord::Base
  belongs_to :recipe
  belongs_to :ingredient, required: true
  validates_uniqueness_of :recipe_id, :scope => :ingredient_id

  def name
    self.ingredient.name
  end
end
