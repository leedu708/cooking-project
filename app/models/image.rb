class Image < ActiveRecord::Base
  has_attached_file :attachment
  validates_attachment_content_type :attachment, content_type: /\Aimage\/.*\Z/
end
