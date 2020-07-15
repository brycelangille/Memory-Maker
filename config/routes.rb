Rails.application.routes.draw do
  resources :users 
  resources :posts do
  resources :comments
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
post '/auth/login', to: 'authentication#login'
get '/auth/verify', to: 'authentication#verify'
end
