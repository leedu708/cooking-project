class Recipe < ActiveRecord::Base
  has_many :items, :foreign_key => :recipe_id
  has_many :ingredients, :through => :items

  has_many :taggings, :foreign_key => :recipe_id
  has_many :tags, :through => :taggings
end
