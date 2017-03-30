class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :set_dir

  private

  def set_dir
    #if parameter set, elseif previously set, else default
    session[:dir] = params[:dir].presence || session[:dir].presence || 'ltr'
    @dir = session[:dir]
  end
end
