class HomeController < ApplicationController
  def index
    @home_index_props = { name: "World in Controller" }
  end
end
