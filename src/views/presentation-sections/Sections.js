import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import { Button, Container, Row, Col } from 'reactstrap';

// core components

function Sections() {
	return (
		<>
			<div className='section section-sections' data-background-color='gray'>
				<Container>
					<Col className='ml-auto mr-auto' md='8'>
						<div className='section-description text-center'>
							<h2 className='title'>Gallery</h2>

							<Button
								className='btn-round'
								to='/gallery'
								color='info'
								tag={Link}>
								See all images
							</Button>
						</div>
					</Col>
				</Container>
				<Container fluid>
					<div className='section-cols'>
						<Row>
							<Col md='3'>
								<img
									alt='...'
									src={require('assets/img/img/kitchen1.jpg')}></img>
							</Col>
							<Col md='3'>
								<img
									alt='...'
									src={require('assets/img/img/Kitchen2.jpg')}></img>
							</Col>
							<Col md='3'>
								<img
									alt='...'
									src={require('assets/img/img/kitchen3.jpg')}></img>
							</Col>
							<Col md='3'>
								<img
									alt='...'
									src={require('assets/img/img/kitchen4.jpg')}></img>
							</Col>
						</Row>
						<Row>
							<Col md='3'>
								<img alt='...' src={require('assets/img/img/bath1.jpg')}></img>
							</Col>
							<Col md='3'>
								<img alt='...' src={require('assets/img/img/bath2.jpg')}></img>
							</Col>
							<Col md='3'>
								<img alt='...' src={require('assets/img/img/bath3.jpg')}></img>
							</Col>
							<Col md='3'>
								<img alt='...' src={require('assets/img/img/bath4.jpg')}></img>
							</Col>
						</Row>
						<Row>
							<Col md='3'>
								<img alt='...' src={require('assets/img/img/desk1.jpg')}></img>
								<img
									alt='...'
									className='rellax'
									data-rellax-speed='5'
									src={require('assets/img/img/house2.jpg')}></img>
							</Col>
							<Col md='3'>
								<img alt='...' src={require('assets/img/img/1.jpg')}></img>
							</Col>
							<Col md='3'>
								<img alt='...' src={require('assets/img/img/desk3.jpg')}></img>
							</Col>
							<Col md='3'>
								<img alt='...' src={require('assets/img/img/2.jpg')}></img>
							</Col>
						</Row>
					</div>
				</Container>
			</div>
		</>
	);
}

export default Sections;
