# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  article_id :integer
#  user_id    :integer
#
# Indexes
#
#  index_likes_on_article_id  (article_id)
#  index_likes_on_user_id     (user_id)
#
# Foreign Keys
#
#  article_id  (article_id => articles.id)
#  user_id     (user_id => users.id)
#
require 'test_helper'

class LikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
