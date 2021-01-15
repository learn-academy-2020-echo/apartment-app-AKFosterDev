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

class ApartmentShow extends Component {
	render() {
		const { apartment } = this.props
		return (
			<Fragment>
				<Container>
					<Row>
						<Col>
							<h1 className='title'>
								{apartment.street.toUpperCase()}, {apartment.city.toUpperCase()}
								, {apartment.state.toUpperCase()}
							</h1>
						</Col>
					</Row>
					<Row>
						<Col>
							<Card className='card-show'>
								<CardImg top src={apartment.image} alt={apartment.street} />
								<CardBody className='card-body-show'>
									<div className='card-info-show'>
										<CardTitle className='show-price' tag='h5'>
											{apartment.price} per mo.
										</CardTitle>
										<div className='icon-wrapper-show'>
											<CardText className='icon-text-show'>
												<BiBed className='icon show' /> {apartment.bedrooms}
											</CardText>
											<CardText className='icon-text-show'>
												<BiBath className='icon' /> {apartment.bathrooms}
											</CardText>
											<CardText className='icon-text-show'>
												<IoPaw className='icon' /> {apartment.pets}
											</CardText>
										</div>
									</div>
									<Link to='/apartmentindex'>
										<Button className='button show' variant='primary'>
											Go Back To Listings
										</Button>
									</Link>{' '}
									{/* <Link to={`/catedit/${cat.id}`}>
										<Button className='button' variant='primary'>
											Edit This Cat
										</Button>
									</Link>{' '}
									<Link to='#'>
										<Button className='button' variant='primary'>
											Delete This Cat
										</Button>
									</Link> */}
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</Fragment>
		)
	}
}

export default ApartmentShow
