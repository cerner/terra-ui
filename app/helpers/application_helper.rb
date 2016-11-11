require 'json'

module ApplicationHelper

  # Helper to add is active class to menu item
  # Gets the current controller from params, compares with controller argument
  def menu_item_is_active(controller)
    params[:controller].eql?(controller) ? "terra-Menu-item is-active" : "terra-Menu-item"
  end

  # Renders component version header
  def render_component_version(component)
    content_tag(:h3, class: "version #{component}") do
      "Version: #{component_version(component)}"
    end
  end

  # Renders docs, html, html code, and haml code for a single example
  def render_example(component, example)
    content_tag(:article, id: example) do
      if File.exist? markdown_path(component, example)
        concat render_markdown(component, example)
      end

      if File.exist? html_path(component, example)
        concat render_html(component, example)
        concat render_code_html(component, example)
        #concat render_code_haml(component, example)
      end
    end
  end

  # Returns table of contents for a single page
  # examples = ['terra-title']
  # renders  "<ul><li><a href=\"#terra-title\">Terra Title</a></li></ul>"
  def render_toc(examples)
    content_tag :ul do
      examples.collect {|item| concat(content_tag(:li, link_to(format_header(item), "##{item}")))}
    end
  end

  # Returns header for example
  # component = 'terra-title'
  # renders <h2 id="terra-title">Terra Title</h2>
  def render_header(component)
    component_header = component.gsub('-', ' ').titleize
    content_tag(:h2) do
      component_header
    end
  end

  private

  ##### DOC HELPERS

  # Replaces '-' with ' ' and capitalizes the first letter in each word.
  def format_header(component)
    component.gsub('-', ' ').titleize
  end

  # Get component version from package.json
  # component = 'terra-title'
  # returns string representing version
  def component_version(component)
    path = "node_modules/#{component}/package.json"
    return "Unknown Version" unless File.exist?(path)

    package_json = JSON.parse(File.read(path))
    package_json['version'].to_s
  end

  # Returns path for html example file
  # component = 'terra-title'
  # example = 'terra-title-size'
  # returns "/node_modules/terra-title/tests/visual/terra-title-size.html"
  def html_path(component, example)
    "node_modules/#{component}/tests/visual/#{example}.html"
  end

  # Returns path for documenation markdown file
  # component = 'terra-title'
  # example = 'terra-title-size'
  # returns /node_modules/terra-title/docs/terra-title-size.md
  def markdown_path(component, example)
    "node_modules/#{component}/docs/#{example}.md"
  end

  # Renders markdown as html
  # content =  '#### Test H4'
  # returns '<h4>Test H4</h4>'
  def format_markdown(content)
    raise "failed to load #{content}" unless content.present?
    @options ||= {
      autolink: true,
      fenced_code_blocks: true,
      footnotes: true,
      highlight: true,
      lax_spacing: true,
      link_attributes: {rel: 'nofollow', target: '_blank'},
      no_intra_emphasis: true,
      space_after_headers: true,
      tables: true,
      underline: true
    }
    @markdown ||= Redcarpet::Markdown.new(Redcarpet::Render::HTML, @options)
    @markdown.render(content).html_safe
  end

  # Renders markdown file as html
  # component = 'terra-title'
  # example = 'terra-title-size'
  # returns rendered html from terra-title doc file
  def render_markdown(component, example)
    path = markdown_path(component, example)
    markdown_file = File.read(path)
    format_markdown markdown_file
  end

  # Renders html from file
  # component = 'terra-title'
  # example = 'terra-title-size'
  # returns html example
  def render_html(component, example)
    path = html_path(component, example)

    content_tag(:br) do
      File.read("#{path}").html_safe
    end
  end

  # Renders html code from file
  # component = 'terra-title'
  # example = 'terra-title-size'
  # returns html code
  def render_code_html(component, example)
    path = html_path(component, example)

    content_tag(:pre, class: 'tui-html-code') do
      content_tag(:code) do
        File.read("#{path}")
      end
    end
  end

  # Renders haml code from html file
  # component = 'terra-title'
  # example = 'terra-title-size'
  # returns haml code
  def render_code_haml(component, example)
    path = html_path(component, example)

    templateSource = File.read(path)
    content_tag(:pre, class: 'tui-haml-code') do
      content_tag(:code) do
        Html2haml::HTML.new(templateSource, {erb: true}).render
      end
    end
  end


  def render_svg(path)
    content_tag(:br) do
      File.read("#{path}").html_safe
    end
  end

end
