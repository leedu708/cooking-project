source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.5'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.15'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

gem 'figaro'

# Angular.js
gem 'angularjs-rails'
gem 'angular_rails_csrf'

# image uploading
gem 'paperclip', '4.3.1'
gem 'aws-sdk', '< 2.0'

source "https://rails-assets.org" do
  gem "rails-assets-angular-devise"
end

gem 'binding_of_caller'
gem 'devise'

gem 'faker'

# bootstrap
gem 'twitter-bootstrap-rails'

group :development, :test do
  gem 'jazz_hands', github: 'nixme/jazz_hands', branch: 'bring-your-own-debugger'
  gem 'pry-byebug'
  gem 'spring'
  gem 'factory_girl_rails'
  gem 'letter_opener'
end

group :development do
  gem 'better_errors'
  gem 'guard-rspec', require: false
  gem 'web-console', '~> 2.0'
end

group :test do 
  gem 'rspec-rails', '~> 3.0'
  gem 'shoulda-matchers', '~> 3.0'
  gem 'shoulda-callback-matchers', '~> 1.1.1'
end