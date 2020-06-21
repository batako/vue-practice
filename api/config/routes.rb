Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope :api do
    mount_devise_token_auth_for 'User', at: 'auth', controllers: {
      sessions:  'api/users/sessions'
    }
  end

  namespace :api, { format: 'json' } do
    resources :articles, only: [:index, :create] do
      post   '/like',    to: 'articles/like#create'
      delete '/dislike', to: 'articles/like#destroy'
    end

    controller :users do
      put '/users' => :update
    end
  end

  get '*vue_routes', to: 'application#index'
end
