class HomeController < ApplicationController
  def index
    @home_index_props = { name: "Terra UI" }
  end
end
