class Ingredient < ActiveRecord::Base
  has_many :items, :foreign_key => :ingredient_id
  has_many :recipes, :through => :items
end
