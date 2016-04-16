class Tagging < ActiveRecord::Base
  belongs_to :recipe
  belongs_to :tag
  validates_uniqueness_of :recipe_id, :scope => :tag_id
end
