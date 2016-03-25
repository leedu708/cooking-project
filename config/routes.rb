Rails.application.routes.draw do
  devise_for :users
  root 'cooking#index'

  scope 'api' do
    resources :recipes, :only => [:index, :show]
    resources :ingredients, :only => [:index]
  end
end
