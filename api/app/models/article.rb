class Article < ApplicationRecord
  include Userstamps

  has_one_attached :image
end
