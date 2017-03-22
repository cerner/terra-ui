Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  root to: 'home#index'
  get 'home/index'
end
