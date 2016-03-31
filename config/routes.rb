Rails.application.routes.draw do
  devise_for :users
  root 'cooking#index'

  scope 'api' do
    resources :recipes, :only => [:index, :show, :create, :update]
    resources :ingredients, :only => [:index, :create]
    resources :images, :only => [:create]
  end
end