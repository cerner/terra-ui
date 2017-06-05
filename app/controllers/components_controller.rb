class ComponentsController < ApplicationController
  def index
    @home_props = { name: "Terra" }
  end
end
