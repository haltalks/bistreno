import React from 'react';

// reactstrap components
import {
	Badge,
	Card,
	CardBody,
	CardTitle,
	Container,
	Row,
	Col,
} from 'reactstrap';

// core components
import DropdownFixedNavbar from 'components/Navbars/ScrollTransparentNavbar';
import AboutUsHeader from 'components/Headers/AboutUsHeader.js';
import Footer from 'components/Footers/FooterBlack';

function AboutUs() {
	React.useEffect(() => {
		document.body.classList.add('about-us');
		document.body.classList.add('sidebar-collapse');
		document.documentElement.classList.remove('nav-open');
		window.scrollTo(0, 0);
		document.body.scrollTop = 0;
		return function cleanup() {
			document.body.classList.remove('about-us');
			document.body.classList.remove('sidebar-collapse');
		};
	}, []);
	return (
		<>
			<DropdownFixedNavbar />
			<div className='wrapper'>
				<AboutUsHeader />
				<div className='section'>
					<div className='projects-5'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto text-center' md='8'>
									<h2 className='title'>Who We Are?</h2>
									<h4 className='description'>
										Our company is built on the foundation of a highly skilled
										and dedicated team of renovation professionals. We bring a
										wealth of expertise to every project, ensuring top-quality
										craftsmanship and attention to detail. From initial design
										to final touches, we're committed to delivering exceptional
										renovations that enhance your home or business.
									</h4>
									<div className='section-space'></div>
								</Col>
							</Row>
							<Row>
								<Col className='ml-auto' md='5'>
									<Card
										className='card-background card-background-product card-raised'
										style={{
											backgroundImage:
												'url(' + require('assets/img/img/kitchen3.jpg') + ')',
										}}>
										<CardBody>
											<CardTitle tag='h2'>Dream Kitchens Realized</CardTitle>
											<p className='card-description'>
												Expert renovation to transform your kitchen into a
												functional and beautiful space.
											</p>
											<Badge className='badge-neutral'>Analytics</Badge>
										</CardBody>
									</Card>
								</Col>
								<Col className='mr-auto' md='5'>
									<div className='info info-horizontal'>
										<div className='icon icon-danger'>
											<i className='now-ui-icons ui-2_chat-round'></i>
										</div>
										<div className='description'>
											<h4 className='info-title'>Personalized Consultations</h4>
											<p className='description'>
												We listen to your needs and preferences, offering
												tailored solutions for your renovation project.
											</p>
										</div>
									</div>
									<div className='info info-horizontal'>
										<div className='icon icon-danger'>
											<i className='now-ui-icons business_chart-pie-36'></i>
										</div>
										<div className='description'>
											<h4 className='info-title'>
												Project Planning & Management
											</h4>
											<p className='description'>
												We handle every aspect of your renovation, ensuring a
												smooth and efficient process.
											</p>
										</div>
									</div>
									<div className='info info-horizontal'>
										<div className='icon icon-danger'>
											<i className='now-ui-icons design-2_ruler-pencil'></i>
										</div>
										<div className='description'>
											<h4 className='info-title'>Quality Craftsmanship</h4>
											<p className='description'>
												Our experienced team delivers exceptional results with
												attention to detail and superior materials.
											</p>
										</div>
									</div>
								</Col>
							</Row>
						</Container>
					</div>

					<div className='about-office'>
						<Container>
							<Row className='text-center'>
								<Col className='ml-auto mr-auto' md='8'>
									<h2 className='title'>Our Work</h2>
									{/* <h4 className='description'>
										Here are some pictures from our office. You can see the
										place looks like a palace and is fully equiped with
										everything you need to get the job done.
									</h4> */}
								</Col>
							</Row>
							<Row>
								<Col md='4'>
									<img
										alt='...'
										className='rounded img-raised'
										src={require('assets/img/img/bath1.jpg')}></img>
								</Col>
								<Col md='4'>
									<img
										alt='...'
										className='rounded img-raised'
										src={require('assets/img/img/bath3.jpg')}></img>
								</Col>
								<Col md='4'>
									<img
										alt='...'
										className='rounded img-raised'
										src={require('assets/img/img/bath5.jpg')}></img>
								</Col>
								<Col md='6'>
									<img
										alt='...'
										className='rounded img-raised'
										src={require('assets/img/img/desk1.jpg')}></img>
								</Col>
								<Col md='6'>
									<img
										alt='...'
										className='rounded img-raised'
										src={require('assets/img/img/desk3.jpg')}></img>
								</Col>
							</Row>
						</Container>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default AboutUs;
