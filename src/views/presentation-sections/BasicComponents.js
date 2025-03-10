import React from 'react';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components

function BasicComponents() {
	return (
		<>
			<div className='section section-basic-components'>
				<Container>
					<Row>
						<Col className='ml-auto mr-auto' lg='5' md='7'>
							<h3 className='title'>We Pay Attention to Details</h3>
							<h6 className='category'>Our work is trusted by our clients</h6>
							<h5 className='description'>
								Detail-oriented and trusted by clients, we offer comprehensive
								construction services. From baseboards to drywall, demolition to
								renovation, our experience ensures quality in every project.
							</h5>
						</Col>
						<Col lg='6' md='12'>
							<div className='image-container'>
								<img
									alt='...'
									className='components-macbook'
									src={require('assets/img/img/house1.jpg')}></img>
								<img
									alt='...'
									className='table-img'
									src={require('assets/img/img/desk1.jpg')}></img>

								<img
									alt='...'
									className='coloured-card-btn-img'
									src={require('assets/img/img/desk3.jpg')}></img>
								<img
									alt='...'
									className='coloured-card-img'
									src={require('assets/img/img/light1.jpg')}></img>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default BasicComponents;
