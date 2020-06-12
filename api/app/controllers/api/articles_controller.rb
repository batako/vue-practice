class Api::ArticlesController < ApplicationController
  def index
    @articles = Article.all.order(id: :desc)
  end

  def create
    Article.create!(article_params)
  end

  private
    def article_params
      params.permit(
        :image,
      )
    end
end
