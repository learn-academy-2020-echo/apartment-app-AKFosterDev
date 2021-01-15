import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
	Container,
	Row,
	Col,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Button,
} from 'reactstrap'
import { BiBed, BiBath } from 'react-icons/bi'
import { IoPaw } from 'react-icons/io5'

export class ApartmentIndex extends Component {
	render() {
		const { apartments } = this.props

		return (
			<Fragment>
				<Container>
					<Row>
						<Col>
							<h1 className='page-title'>Available Rentals</h1>
						</Col>
					</Row>
					<Row>
						{apartments.map((apartment, index) => {
							return (
								<Col xs='12' md='6' lg='4'>
									<Card>
										<CardImg top src={apartment.image} alt={apartment.name} />
										<CardBody className='col text-center'>
											<CardTitle tag='h5' className='title-top'>
												{apartment.street}
											</CardTitle>
											<CardTitle tag='h5' className='title-top'>
												{apartment.city}, {apartment.state}
											</CardTitle>
											<CardTitle tag='h5'>{apartment.price} per mo.</CardTitle>
											<div className='icon-wrapper'>
												<CardText className='icon-text'>
													<BiBed className='icon' /> {apartment.bedrooms}
												</CardText>
												<CardText className='icon-text'>
													<BiBath className='icon' /> {apartment.bathrooms}
												</CardText>
												<CardText className='icon-text'>
													<IoPaw className='icon' /> {apartment.pets}
												</CardText>
											</div>

											<Link to={`/apartmentshow/${apartment.id}`}>
												<Button className='card-button' variant='primary'>
													{' '}
													<p key={index}>Learn More</p>
												</Button>{' '}
											</Link>
										</CardBody>
									</Card>
								</Col>
							)
						})}
					</Row>
				</Container>
			</Fragment>
		)
	}
}

export default ApartmentIndex
