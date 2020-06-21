class Api::Articles::LikeController < ApplicationController
  before_action :set_like, only: :destroy

  def create
    Like.create!(like_params)

    render json: {
      status:  'success',
    }
  end

  def destroy
    @like.destroy!

    render json: {
      status:  'success',
    }
  end

  private
    def set_like
      @like = Like.find_by({
        user_id:    Current.user.id,
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
