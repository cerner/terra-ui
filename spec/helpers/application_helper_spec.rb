require 'rails_helper'

RSpec.describe ApplicationHelper, type: :helper do

  describe '#render_example' do
    context "file exists" do
      before do
        allow(File).to receive(:exist?).and_return(true)
        allow(File).to receive(:read).and_return('# Terra Title')
      end

      it 'returns example' do
        output = "<article id=\"terra-component\"><h1>Terra Title</h1>\n<br># Terra Title</br><pre class=\"tui-html-code\"><code># Terra Title</code></pre></article>"
        expect(helper.render_example('terra-component', 'terra-component')).to eq output
      end
    end

    context "file does not exist" do
      before do
        allow(File).to receive(:exist?).and_return(false)
      end

      it 'returns empty string' do
        output = "<article id=\"terra-component\"></article>"
        expect(helper.render_example('terra-component', 'terra-component')).to eq output
      end
    end
  end

  describe '#render_component_version' do
    context "file exists" do
      before do
        allow(File).to receive(:exist?).and_return(true)
        allow(File).to receive(:read).and_return('{"version": "5.1.0"}')
      end

      it 'returns h2 with component version' do
        input =  'terra-ui'
        output = "<h2 class=\"version terra-ui\">Version: 5.1.0</h2>"
        expect(helper.render_component_version(input)).to eq output
      end
    end

    context "file does not exist" do
      before do
        allow(File).to receive(:exist?).and_return(false)
      end

      it 'returns h2 with component version' do
        input =  'terra-ui'
        output = "<h2 class=\"version terra-ui\">Version: Unknown Version</h2>"
        expect(helper.render_component_version(input)).to eq output
      end
    end
  end

  describe '#render_toc' do
    context "1 elements in array" do
      it 'returns toc with a single element' do
        input =  ['terra-title']
        output = "<ul><li><a href=\"#terra-title\">Terra Title</a></li></ul>"
        expect(helper.render_toc(input)).to eq output
      end
    end

    context "2 elements in array" do
      it 'returns toc with 2 elements' do
        input =  ['test1', 'test2']
        output = "<ul><li><a href=\"#test1\">Test1</a></li><li><a href=\"#test2\">Test2</a></li></ul>"
        expect(helper.render_toc(input)).to eq output
      end
    end
  end

  describe '#render_header' do
    it 'returns h2 with formatted text' do
      input =  'terra-title'
      output = "<h2>Terra Title</h2>"
      expect(helper.render_header(input)).to eq output
    end
  end

end
