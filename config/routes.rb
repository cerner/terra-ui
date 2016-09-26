Rails.application.routes.draw do
  root 'terra#index'

  get 'team/index'
  get 'terra/index'
  get 'terra_application/index'
  get 'terra_button/index'
  get 'terra_grid/index'
  get 'terra_legacy_theme/index'
  get 'terra_menu/index'
  get 'terra_table/index'
  get 'terra_title/index'
end
