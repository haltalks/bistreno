import React from 'react';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components
import DropdownWhiteNavbar from 'components/Navbars/ScrollTransparentNavbar.js';
import ContactUsHeader from 'components/Headers/ContactUsHeader.js';
import Footer from 'components/Footers/FooterBlack';

function ContactUs() {
	React.useEffect(() => {
		document.body.classList.add('contact-page');
		document.body.classList.add('sidebar-collapse');
		document.documentElement.classList.remove('nav-open');
		window.scrollTo(0, 0);
		document.body.scrollTop = 0;
		return function cleanup() {
			document.body.classList.remove('contact-page');
			document.body.classList.remove('sidebar-collapse');
		};
	}, []);
	return (
		<>
			<DropdownWhiteNavbar />
			<div className='wrapper'>
				<ContactUsHeader />
				<div className='main'>
					<div className='contact-content'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto' md='5'>
									<h2 className='title'>Send us a message</h2>
									<p className='description'>
										You can contact us with anything related to our Products.
										We'll get in touch with you as soon as possible. <br></br>
										<br></br>
									</p>
								</Col>
								<Col className='ml-auto mr-auto' md='5'>
									<div className='info info-horizontal mt-5'>
										<div className='icon icon-info'>
											<i className='now-ui-icons location_pin'></i>
										</div>
										<div className='description'>
											<h4 className='info-title'>Find us at the office</h4>
											<p>
												Bld Mihail Kogalniceanu, nr. 8, <br></br>
												7652 Bucharest, <br></br>
												Romania
											</p>
										</div>
									</div>
									<div className='info info-horizontal'>
										<div className='icon icon-info'>
											<i className='now-ui-icons tech_mobile'></i>
										</div>
										<div className='description'>
											<h4 className='info-title'>Give us a ring</h4>
											<p>
												Michael Jordan <br></br>
												+40 762 321 762 <br></br>
												Mon - Fri, 8:00-22:00
											</p>
										</div>
									</div>
									<div className='info info-horizontal'>
										<div className='icon icon-info'>
											<i className='business_briefcase-24 now-ui-icons'></i>
										</div>
										<div className='description'>
											<h4 className='info-title'>Legal Information</h4>
											<p>
												Creative Tim Ltd. <br></br>
												VAT · EN2341241 <br></br>
												IBAN · EN8732ENGB2300099123 <br></br>
												Bank · Great Britain Bank
											</p>
										</div>
									</div>
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

export default ContactUs;
