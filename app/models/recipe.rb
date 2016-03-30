class Recipe < ActiveRecord::Base
  has_many :images, :foreign_key => :recipe_id

  has_many :items, :foreign_key => :recipe_id
  has_many :ingredients, :through => :items
  has_many :steps, :foreign_key => :recipe_id

  has_many :taggings, :foreign_key => :recipe_id
  has_many :tags, :through => :taggings

  # nested attributes
  accepts_nested_attributes_for :items, :reject_if => lambda { |a| a[:amount].blank? }
  
  accepts_nested_attributes_for :steps, :reject_if => lambda { |a| a[:recipe_order].blank? }

  def image_urls
    self.images.pluck(:url)
  end
end