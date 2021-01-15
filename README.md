-- SetUp

$ rails new hello_world -d postgresql -T
$ cd hello_world
$ rails db:create
$ bundle add react-rails
$ rails webpacker:install
$ rails webpacker:install:react
$ rails generate react:install

$ bundle add rspec-rails
$ rails generate rspec:install

-- React Component

- Create a React component in the Rails application using a generate command.

$ rails g react:component App

- The install commands created a directory in app called javascript
- In app/javascript there will be another directory called components that will contain our App React component with some basic code
- Add an h1 tag to the React component

-- Rails Controller and View

- Next, we need to generate a controller so that we can route the React component can be rendered in a Rails view. This is the only Rails view we will make. Everything else will come from the React components.

$ rails g controller Home

$ rm app/assets/stylesheets/home.scss
$ rm app/helpers/home_helper.rb

- Add a file in app/views/home called
- \*\* index.html.erb
- this file acts like the index.html in React App
- this file responsible for supporting the views we make in React

By calling the React Component in erb tags the component will be rendered in the browser through the Rails view

app/views/home/index.html.erb

<%= react_component "App" %>

- rails s - brings up reg. rails app home page

-- Rails Routes

- Create a route so the React component will be rendered in a Rails view.

<config/routes.rb>

Rails.application.routes.draw do
root to: "home#index"
end

- rails s - brings up React components view

**\*\***React Routing in Rails

-- Add Reactstrap

- Adding Reactstrap to the application allows for the use of a library of pre-built components. Reactstrap works in conjunction with Bootstap's core CSS. To add these libraries requires a little bit of setup to make the React styles compatible with Rails. There are many ways to add bootstrap to a Rails app, all of which will work equally well.

- We are going to modify the Rails stylesheet to be a "scss" file. This will allow us to write regular "css" code as well as import necessary dependencies.

$ bundle add bootstrap
$ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
$ yarn add reactstrap

-- Add an import to the "scss" file. Make sure to stop your server and restart after the performing these commands.

- app/assets/stylesheets/application.scss
  \*\* @import 'bootstrap'

-- Additional React Components

At this point, there is only one React component in the application. Just like in a regular React App, our project will have many, many components.
-- \*\*\*To keep the files organized, it is a good practice to create three directories in your React application:

\*\*\* assets, components, and pages.

-- Assets
The assets directory is used to store image files used in your application.

-- Components
The components directory is for helper components such as headers, footers, and buttons.

-- Pages
The pages directory is for full views. The full view can consist of items from the assets and components directory as well a code unique to a page.

- Due to Rails convention, the React file structure lives in the
  app/javascript/components directory.

- Note: While it may seem a bit confusing, the React components directory will be nested inside of the Rails components directory. The Rails component directory takes the place of the src directory in a typical React application.

Add pages
For this application, we are going to have three pages:

"About Us"
"Learn More"
"Home"

-- React Router
In order to have multiple pages we need to add the React Router.

$ yarn add react-router-dom

- Import the React-router and appropriate pages.

app/javascript/components/App.js

import {
BrowserRouter as Router,
Route,
Switch
} from 'react-router-dom'

import AboutUs from './pages/AboutUs'
import LearnMore from './pages/LearnMore'
import Home from './pages/Home'

Add the basic routes to allow for navigation.

app/javascript/components/App.js

<Router>
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route path="/about" component={ AboutUs } />
    <Route path="/learn" component={ LearnMore } />
  </Switch>
</Router>

Routing Constraints
You'll recall that Rails has a router, and now that we've added React Router, so does React. You might imagine that these two routers could come into conflict, and that would be correct. We need to clearly separate the Rails routing responsibilities, and the React routing responsibilities. We're building a single page app. This, by definition, means that all HTML traffic goes to just one page. All other types of requests though, will need to be routed by the Rails app. Most important of these, is the JSON and JavaScript traffic that the Rails app must handle, we've been thinking of these requests as API requests from the frontend app to the backend one.

The Rails Router has a convenient feature that we can use to achieve this separation of traffic, all HTML requests go to our React app, and everything else be handled normally.

\*\* config/routes.rb

Rails.application.routes.draw do
get '\*path', to: 'home#index', constraints: ->(request){ request.format.html? }
root to: 'home#index'
end
Notice the "constraints" section. This states that all HTML traffic goes to "home#index" our React app.

Add Navigation Components
Using Reactstrap to add the navigation code.

app/javascript/components/App.js

import React from "react"
import PropTypes from "prop-types"
import {
BrowserRouter as Router,
NavLink,
Route,
Switch
} from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'
import AboutUs from './pages/AboutUs'
import LearnMore from './pages/LearnMore'
import Home from './pages/Home'

class App extends React.Component{
render(){
return(
<Router>

<h1>This is a React Component</h1>
<Nav>
<NavItem>
<NavLink to="/">Home</NavLink>
</NavItem>
<NavItem>
<NavLink to="/about">About Us</NavLink>
</NavItem>
<NavItem>
<NavLink to="/learn">Learn More</NavLink>
</NavItem>
</Nav>
<Switch>
<Route exact path="/" component={ Home } />
<Route path="/about" component={ AboutUs } />
<Route path="/learn" component={ LearnMore } />
</Switch>
</Router>
)
}
}

export default App

-- Troubleshooting
Now that we are working in a new stack, the way we find error messages is going to look a little bit different. We are used to getting a browser display when something goes wrong. With this particular stack, we need to look for errors in the console and in the terminal. Any syntax errors or incorrect code anywhere in the React components will prevent App.js from compiling. So a mistake is likely to lead to a blank page. If this happens, try one of the following options:

Stop the server and start it again.
Did all the setup commands run properly? The commands can be rerun if something isn't working.
Seeing a blank page? Look at the terminal for errors.
Did you follow all the Rails naming conventions?
Did something unexpected happen? Don't be afraid to start over. If you are going to start over make sure to delete the current project completely including dropping your database ($ rails db:drop).

\*\*\*\* AUTHENTICATION/AUTHORIZATION

$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ rails db:migrate

-- Adding mailer settings

- You’ll need to set up the default URL options for the Devise mailer in each environment.
- In the config/environments/development.rb file, add the following code at the end of the previous code inside the file:

\*\*\* config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

Devise is a Rails gem that gives developers a collection of methods that create authorization and authentication. Using Devise, we can create a special model called User that gets Devise code injected into each new model instance. Just by running the setup commands we get Devise sign in and sign up forms as well as a lot of additional functionality that we will explore with the Apartment App challenge.

Navigate to http://localhost:3000/users/sign_in and see a log in page.

Navigate to http://localhost:3000/users/sign_up and see a sign up page.

---

**\*** Apartment Resource

- The Devise User model is going to have an association with the Apartment model. In this situation, the User will have many apartments and the Apartments will belong to a User.

$ rails g resource Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string user_id:integer
$ rails db:migrate

**\*** User and Apartment Associations

- The Apartments will belong to a User and a User will have many apartments.

---

app/models/apartment.rb

class Apartment < ApplicationRecord
belongs_to :user
end

---

app/models/user.rb

class User < ApplicationRecord

# Include default devise modules. Others available are:

# :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

devise :database_authenticatable, :registerable,
:recoverable, :rememberable, :validatable
has_many :apartments
end

---

**\*\***Devise Code
Looking around our app, we can see that Devise gets added to a few different spots.

1. The User model, which we already looked at.
2. The controller. This code is predominantly behind the scenes.
3. The routes. We can see that we have a resource for apartments and Devise routes for users.

config/routes.rb

Rails.application.routes.draw do
resources :apartments
devise_for :users
end

---
