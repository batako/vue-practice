class Article < ApplicationRecord
  include Userstamp

  has_one_attached :image
end
