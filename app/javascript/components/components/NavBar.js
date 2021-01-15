import React, { Component, Fragment } from 'react'
import { Nav, NavItem, NavLink, Container } from 'reactstrap'

export class NavBar extends Component {
	render() {
		const { loggedIn, signIn, signOut } = this.props
		return (
			<Fragment>
				<Nav>
					<NavItem>
						<NavLink href='/'>Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href='/about'>About Us</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href='/learn'>Learn More</NavLink>
					</NavItem>

					{/* <NavItem>
						<NavLink href='/users/sign_out'>Sign Out</NavLink>
					</NavItem>

					<NavItem>
						<NavLink href='/users/sign_in'>Sign In</NavLink>
					</NavItem> */}

					{/* <NavItem>
						<NavLink href='/users/sign_up'>Sign Up</NavLink>
					</NavItem> */}

					{loggedIn && (
						<NavItem>
							{/* <NavLink href={sign_out_route}>Sign Out</NavLink> */}
							<NavLink href='/users/sign_out'>Sign Out</NavLink>
						</NavItem>
					)}
					{!loggedIn && (
						<>
							<NavItem>
								<NavLink href='/users/sign_up'>Sign Up</NavLink>
							</NavItem>

							<NavItem>
								<NavLink href='/users/sign_in'>Login</NavLink>
							</NavItem>
						</>
					)}
				</Nav>
			</Fragment>
		)
	}
}

export default NavBar
