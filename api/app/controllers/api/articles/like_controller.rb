class Api::Articles::LikeController < ApplicationController
  before_action :set_like, only: :destroy

  def create
    Like.create!(like_params)
  end

  def destroy
    @like.destory!
  end

  private
    def set_like
      @like = Like.find_by({
        user_id: Current.user.id,
        article_id: params[:article_id],
      })
    end

    def like_params
      {
        user_id:    Current.user.id,
        article_id: params[:article_id],
      }
    end
end
