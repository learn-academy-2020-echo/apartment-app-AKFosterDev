import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Nav, NavItem, NavLink, Container } from 'reactstrap'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'

// Pages
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import UserNew from './pages/UserNew'
import UserEdit from './pages/UserEdit'
import UserShow from './pages/UserShow'
import NotFound from './pages/NotFound'

import apartments from '../mockApartments.js'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			apartments: apartments,
		}
	}

	render() {
		const { logged_in, sign_in_route, sign_out_route } = this.props
		const { apartments } = this.state
		console.log(logged_in, sign_in_route, sign_out_route)
		return (
			<Fragment>
				<Header
					loggedIn={logged_in}
					signIn={sign_in_route}
					signOut={sign_out_route}
				/>
				<Router>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route
							path='/apartmentindex'
							render={(props) => <ApartmentIndex apartments={apartments} />}
						/>

						<Route
							path='/apartmentshow/:id'
							render={(props) => {
								const id = props.match.params.id
								let apartment = apartments.find(
									(apartment) => apartment.id === parseInt(id)
								)
								return (
									apartments.length > 0 && (
										<ApartmentShow apartment={apartment} />
									)
								)
							}}
						/>

						<Route path='/apartmentnew' component={ApartmentNew} />
						<Route path='/apartmentedit' component={ApartmentEdit} />
						<Route path='/usernew' component={UserNew} />
						<Route path='/usershow/:id' component={UserShow} />
						<Route path='/useredit/:id' component={UserEdit} />
						<Route path='{sign_in_route}' />
						<Route path='{sign_out_route}' />
						<Route path='/about' component={AboutUs} />
						<Route component={NotFound} />
					</Switch>
				</Router>
				<Button />
				<Footer />
			</Fragment>
		)
	}
}

export default App
