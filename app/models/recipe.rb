class Recipe < ActiveRecord::Base
  has_attached_file :hero
  validates_attachment_content_type :hero, content_type: /\Aimage\/.*\Z/

  has_many :items, :foreign_key => :recipe_id
  has_many :ingredients, :through => :items
  has_many :steps, :foreign_key => :recipe_id

  has_many :taggings, :foreign_key => :recipe_id
  has_many :tags, :through => :taggings

  def hero_url
    self.hero.url
  end
end