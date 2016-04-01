Rails.application.routes.draw do
  devise_for :users
  root 'cooking#index'

  scope 'api' do
    resources :recipes, :only => [:index, :show, :create, :update, :destroy]
    resources :ingredients, :only => [:index, :create, :destroy]
    resources :images, :only => [:create]
  end
end