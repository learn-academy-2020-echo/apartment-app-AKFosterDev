import React, { Component, Fragment } from 'react'
import { Container, Jumbotron } from 'reactstrap'
import NavBar from './NavBar'
import logo from '../assets/logo.jpg'

class Header extends Component {
	render() {
		const { loggedIn, signIn, signOut } = this.props
		console.log('header', this.props.loggedIn)
		return (
			<Fragment>
				<Jumbotron>
					{/* <a href='/'>
						<img style={{ width: '200px' }} src={logo} id='logo'></img>
					</a> */}
					<NavBar loggedIn={loggedIn} signIn={signIn} signOut={signOut} />
				</Jumbotron>
			</Fragment>
		)
	}
}

export default Header
