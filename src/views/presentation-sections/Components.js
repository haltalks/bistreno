import React from 'react';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components

function Components() {
	return (
		<>
			<div className='section ' data-background-color='dark-blue'>
				<Container>
					<Row>
						<Col className='ml-auto mr-auto' md='8'>
							<h2 className='text-center title'>
								Our Projects <br></br>
							</h2>
							{/* <h5 className="text-center description">
                Now UI Kit Pro comes with a huge number of customisable
                elements. They are not only designed to be pixel perfect and
                light but they are also easy to use and combine well with other
                components.
              </h5>
              <div className="space-50"></div> */}
						</Col>
					</Row>
					<Row>
						<Col md='3'>
							<div className='card-container first-card'>
								<div className='card-component'>
									<a href='#pablo' onClick={(e) => e.preventDefault()}>
										<div className='front'>
											<img
												alt='...'
												src={require('assets/img/img/IMG_3530.jpeg')}></img>
										</div>
									</a>
								</div>
							</div>
						</Col>
						<Col md='3'>
							<div className='card-container second-card'>
								<div className='card-component'>
									<a href='#pablo' onClick={(e) => e.preventDefault()}>
										<div className='front'>
											<img
												alt='...'
												src={require('assets/img/img/IMG_3558.jpeg')}></img>
										</div>
									</a>
								</div>
							</div>
						</Col>
						<Col md='3'>
							<div className='card-container third-card'>
								<div className='card-component'>
									<a href='sections.html'>
										<div className='front'>
											<img
												alt='...'
												src={require('assets/img/img/IMG_3559.jpeg')}></img>
										</div>
									</a>
								</div>
							</div>
						</Col>
						<Col md='3'>
							<div className='card-container fourth-card'>
								<div className='card-component'>
									<a href='examples/product-page.html'>
										<div className='front'>
											<img
												alt='...'
												src={require('assets/img/img/IMG_3567.jpeg')}></img>
										</div>
									</a>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default Components;
