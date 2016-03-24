class Item < ActiveRecord::Base
  belongs_to :recipe
  belongs_to :ingredient, required: true
end
