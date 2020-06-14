class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  include CurrentRequest

  def index
    render file: Rails.root.join('public/index.html'),
           status: 200,
           layout: false,
           content_type: 'text/html'
  end
end
