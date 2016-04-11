Rails.application.routes.draw do
  devise_for :users
  root 'cooking#index'

  scope 'api' do
    resources :recipes, :only => [:index, :show, :create, :update, :destroy] do
      collection do
        get 'home'
      end
      post 'favorite', :on => :member
    end
    resources :users, :only => [:show]
    resources :favorites, :only => [:index]
    resources :ingredients, :only => [:index, :create, :destroy]
    resources :images, :only => [:create]
  end
end