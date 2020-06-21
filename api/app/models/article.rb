# == Schema Information
#
# Table name: articles
#
#  id         :integer          not null, primary key
#  created_by :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Article < ApplicationRecord
  include Userstamp

  has_many :likes, dependent: :destroy
  has_one_attached :image

  def image_base64
    base64 = Base64.encode64(image.download)
    "data:#{image.content_type};base64,#{base64}"
  end
end
