Rails.application.routes.draw do
  devise_for :users
  root 'cooking#index'

  scope 'api' do
    resources :recipes, :only => [:index, :show, :create, :update]
    resources :ingredients, :only => [:index]
  end
end
