class Api::UsersController < ApplicationController
  before_action :set_user, only: :update

  def update
    @user.update!(user_params)
  end

  private
    def set_user
      @user = Current.user
    end

    def user_params
      params.permit(
        :name,
        :email,
        :avatar,
      )
    end
end
