class Recipe < ActiveRecord::Base
  has_many :images, :foreign_key => :recipe_id

  has_many :items, :foreign_key => :recipe_id
  has_many :ingredients, :through => :items
  has_many :steps, :foreign_key => :recipe_id

  has_many :taggings, :foreign_key => :recipe_id
  has_many :tags, :through => :taggings

  # nested attributes
  accepts_nested_attributes_for :items, :reject_if => proc { |a| a[:notes].blank? }

  accepts_nested_attributes_for :steps, :reject_if => proc { |a| a[:instructions].blank? }

  def image_urls
    self.images.pluck(:url)
  end
end