import React from 'react';
// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components
import Navbar from 'components/Navbars/ScrollTransparentNavbar';

import Footer from 'components/Footers/FooterBlack';
function Sections() {
	return (
		<>
			<Navbar />
			<div className='section section-sections' data-background-color='gray'>
				<Container>
					<Col className='ml-auto mr-auto' md='8'>
						<div className='section-description text-center'>
							<h2 className='title'>Gallery</h2>
						</div>
					</Col>
				</Container>
				<Container fluid>
					<div className='section-cols'>
						<Row>
							<Col md='3'>
								<img alt='...' src={require('assets/img/project/l1.jpg')}></img>
							</Col>
							<Col md='3'>
								<img alt='...' src={require('assets/img/project/l2.jpg')}></img>
							</Col>
							<Col md='3'>
								<img alt='...' src={require('assets/img/project/l8.jpg')}></img>
							</Col>
							<Col md='3'>
								<img alt='...' src={require('assets/img/project/l3.jpg')}></img>
							</Col>
						</Row>
						<Row>
							<Col md='3'>
								<img alt='...' src={require('assets/img/project/l4.jpg')}></img>
							</Col>
							<Col md='3'>
								<img alt='...' src={require('assets/img/project/l5.jpg')}></img>
							</Col>
							<Col md='3'>
								<img alt='...' src={require('assets/img/project/l6.jpg')}></img>
							</Col>
							<Col md='3'>
								<img alt='...' src={require('assets/img/project/l7.jpg')}></img>
							</Col>
						</Row>
					</div>
				</Container>
			</div>
			<Footer />
		</>
	);
}

export default Sections;
