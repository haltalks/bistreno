/*eslint-disable*/
import React from 'react';

// reactstrap components
import {
	Badge,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardTitle,
	NavItem,
	NavLink,
	Nav,
	TabContent,
	TabPane,
	Container,
	Row,
	Col,
} from 'reactstrap';

// core components

function Projects() {
	const [pills, setPills] = React.useState('1');
	return (
		<>
			<div className='cd-section' id='projects'>
				<div className='projects-2'>
					<Container>
						<Row>
							<Col className='ml-auto mr-auto text-center' md='8'>
								{/* <h6 className='text-muted'>Our Services</h6> */}
								<h2 className='title'>Our Services</h2>

								<div className='section-space'></div>
							</Col>
						</Row>
						<Row>
							<Col md='4'>
								<Card className='card-plain'>
									<a href='/projectone'>
										<div className='card-image'>
											<img
												alt='...'
												className='img-raised rounded'
												src='https://res.cloudinary.com/mayapics/image/upload/v1741626450/wlrbnjheyvwe0r5isra1.jpg'></img>
										</div>
									</a>
									<CardBody>
										<a href='/projectone' target='_blank'>
											<CardTitle tag='h4'>Landscaping</CardTitle>
										</a>

										<p className='card-description'>
											Transform your outdoor vision into reality with our expert
											landscaping services. We design and build stunning
											landscapes, from lush gardens and serene patios to
											functional outdoor living areas.
										</p>
									</CardBody>
								</Card>
							</Col>
							<Col md='4'>
								<Card className='card-plain'>
									<a href='/projecttwo'>
										<div className='card-image'>
											<img
												alt='...'
												className='img-raised rounded'
												src='https://res.cloudinary.com/mayapics/image/upload/v1741627513/gcnoqkrythciqqtaldfu.jpg'></img>
										</div>
									</a>
									<CardBody>
										<a href='/projecttwo' target='_blank'>
											<CardTitle tag='h4'>Demolishing</CardTitle>
										</a>

										<p className='card-description'>
											Our professional demolition services provide safe and
											efficient removal of structures, preparing your site for
											its next phase. We handle projects of all sizes, from
											selective interior demolition to complete building
											tear-downs.
										</p>
									</CardBody>
								</Card>
							</Col>
							<Col md='4'>
								<Card className='card-plain'>
									<a href='/projectthree'>
										<div className='card-image'>
											<img
												alt='...'
												className='img-raised rounded'
												src='https://res.cloudinary.com/mayapics/image/upload/v1741627718/gicxd91zpczjwzqhm0lt.jpg'></img>
										</div>
									</a>
									<CardBody>
										<a href='/projectthree'>
											<CardTitle tag='h4'>Renovation</CardTitle>
										</a>

										<p className='card-description'>
											Whether you're looking to update a single room or renovate
											your entire property, our renovation services deliver
											exceptional results. We specialize in transforming
											outdated spaces into modern,and stylish environments.
										</p>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</Container>
				</div>
				<div className='projects-3' data-background-color='black'>
					<Container>
						<Row>
							<Col className='ml-auto mr-auto text-center' md='8'>
								{/* <h6 className='category text-muted'>Our work</h6> */}
								<h2 className='title'>Water Filtration</h2>
							</Col>
						</Row>
						<div className='section-story-overview'>
							<Row>
								<Col md='6'>
									<div
										className='image-container image-left'
										style={{
											backgroundImage:
												'url(' + require('assets/img/img/1.jpg') + ')',
										}}>
										<p className='blockquote blockquote-info'>
											"Amber Interiors is available to assist in all aspects of
											a project from start to finish including consulting with
											Architects and Builders"
										</p>
									</div>
								</Col>
								<Col md='5'>
									<div
										className='image-container image-right'
										style={{
											backgroundImage:
												'url(' + require('assets/img/img/2.jpg') + ')',
										}}></div>
									<h6 className='category text-info'>Design</h6>
									<CardTitle tag='h4'>Coco Kelley</CardTitle>
									<p>
										Amber Lewis’s interior design blog takes you inside the
										creative workings of her Los Angeles–based studio. Keep an
										eye on this website for an industry insider’s point of view.
									</p>
								</Col>
							</Row>
						</div>
					</Container>
				</div>
			</div>
		</>
	);
}

export default Projects;
