Rails.application.routes.draw do
  root to: 'components#index'

  get 'components', to: 'components#index'
  get 'components/core/arrange', to: 'terra_arrange#index'
  get 'components/core/badge', to: 'terra_badge#index'
end
