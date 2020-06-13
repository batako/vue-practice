# overwrite devise_token_auth (1.1.3)
class Api::Users::SessionsController < DeviseTokenAuth::SessionsController
  def render_create_success
    render json: {
      status:  'success',
      user: {
        id:      @resource.id,
        avatar:  @resource.avatar.attached? ? @resource.avatar_base64 : nil,
      },
    }
  end
end
