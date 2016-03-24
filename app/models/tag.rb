class Tag < ActiveRecord::Base
  has_many :taggings, :foreign_key => :tag_id
  has_many :recipes, :through => :taggings
end
