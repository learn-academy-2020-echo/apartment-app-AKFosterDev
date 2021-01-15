import React, { Component } from 'react'
import { Container, Button } from 'reactstrap'

export class Home extends Component {
	render() {
		return (
			<Container>
				<h1>Welcome to Home Sweet!</h1>
				<Button href='/apartmentindex' color='primary'>
					See Available Rentals
				</Button>
			</Container>
		)
	}
}

export default Home
