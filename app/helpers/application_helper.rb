module ApplicationHelper

  # Helper to add is active class to menu item
  # Gets the current controller from params, compares with controller argument
  def menu_item_is_active(controller)
    params[:controller].eql?(controller) ? "terra-Menu-item is-active" : "terra-Menu-item"
  end

  def format_terra_header(component)
    component.gsub('-', ' ').titleize
  end

  def terra_html_path(component, example)
    "/node_modules/#{component}/tests/visual/#{example}.html"
  end

  # Returns path to find an example for a component
  def terra_md_path(component, example)
    "/node_modules/#{component}/docs/#{example}.md"
  end

  def terra_example(component, example)
    # terra_md_path(component, example)
  end
end
