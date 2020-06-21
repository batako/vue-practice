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
end
