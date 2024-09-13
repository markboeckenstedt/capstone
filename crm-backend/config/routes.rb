Rails.application.routes.draw do
  Rails.application.routes.draw do
    resources :activities, only: [:index, :create, :show, :update, :destroy]
    resources :contacts, only: [:index, :create, :show, :update, :destroy]
    resources :companies, only: [:index, :create, :show, :update, :destroy]
    resources :users, only: [:create]
    resources :sessions, only: [:create]
  end
end
