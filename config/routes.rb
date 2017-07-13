Rails.application.routes.draw do
  root to: 'home#index'

  get 'home/index'
  get 'components/index'

  match 'home/', to: 'home#index', via: :get
  match 'getting-started/', to: 'getting_started#index', via: :get

  # React Router needs a wildcard https://github.com/shakacode/react-webpack-rails-tutorial/blob/master/config/routes.rb#L12
  get "components(/*all)", to: "components#index"
end
