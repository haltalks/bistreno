import React from 'react';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components

function Cards() {
	return (
		<>
			<div className='section section-cards'>
				<Container>
					<Row>
						<Col className='text-center ml-auto mr-auto' md='8'>
							<div className='section-description'>
								<h2 className='title'>What we do?</h2>
								<h6 className='category'>Construction</h6>
								<h5 className='description'>
									From cards designed for blog posts, to product cards or user
									profiles, you will have many options to choose from. All the
									cards follow the Now UI Kit style principles and have a design
									that stands out. We have gone above and beyond with options
									for you to organise your information.
								</h5>
							</div>
						</Col>
					</Row>
					<Row>
						<Col md='12'>
							<div className='images-container'>
								<div className='image-container1 mr-1'>
									<img
										alt='...'
										src={require('assets/img/img/house1.jpg')}></img>
								</div>
								<div className='image-container2 mr-1'>
									<img
										alt='...'
										src={require('assets/img/img/house1.jpg')}></img>
								</div>
								<div className='image-container3 mr-1'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/card7.jpg')}></img>
								</div>
								<div className='image-container4 mr-1'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/card5.jpg')}></img>
								</div>
								<div className='image-container5'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/card4.jpg')}></img>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default Cards;
