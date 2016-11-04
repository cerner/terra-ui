Rails.application.routes.draw do
  root 'terra#index'

  match 'terra', to: 'terra#index', via: :get
  match 'terra-application/', to: 'terra_application#index', via: :get
  match 'terra-button', to: 'terra_button#index', via: :get
  match 'terra-content', to: 'terra_content#index', via: :get
  match 'terra-grid', to: 'terra_grid#index', via: :get
  match 'terra-image', to: 'terra_image#index', via: :get
  match 'terra-label', to: 'terra_label#index', via: :get
  match 'terra-legacy-theme', to: 'terra_legacy_theme#index', via: :get
  match 'terra-menu', to: 'terra_menu#index', via: :get
  match 'terra-table', to: 'terra_table#index', via: :get
  match 'terra-title', to: 'terra_title#index', via: :get

end
