class Item < ActiveRecord::Base
  belongs_to :recipe
  belongs_to :ingredient, required: true

  def name
    self.ingredient.name
  end
end
