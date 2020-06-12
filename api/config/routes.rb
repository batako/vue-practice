Rails.application.routes.draw do
  scope :api do
    mount_devise_token_auth_for 'User', at: 'auth'
  end

  namespace :api, { format: 'json' } do
    resources :articles, only: [:index, :create]

    namespace :users do
      controller :avatar do
        put 'avatar' => :update
      end
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
