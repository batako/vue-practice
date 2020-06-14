# overwrite devise_token_auth (1.1.3)
class Api::Users::SessionsController < DeviseTokenAuth::SessionsController
  def render_create_success
    render json: {
      status:  'success',
      user: {
        login_id: @resource.login_id,
        email:    @resource.email,
        avatar:   @resource.avatar.attached? ? url_for(@resource.avatar) : nil,
      },
    }
  end
end
