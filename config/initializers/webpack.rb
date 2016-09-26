# In /bin/rails.rb WEBPACK_DEV_SERVER = true if running rails s or rails server
# Webpack will bundle assets when starting rails server
# Webpack-dev-server runs on port 3808
if ENV['WEBPACK_DEV_SERVER'].eql?('true') && Rails.env.development?
  webpack_pid = spawn('npm start')
  Process.detach(webpack_pid)
end
