Rails.application.routes.draw do
  get 'getting_started/index'

  root to: 'home#index'
  get 'home/index'

  # React Router needs a wildcard https://github.com/shakacode/react-webpack-rails-tutorial/blob/master/config/routes.rb#L12
  get "components(/*all)", to: "home#index"
end
