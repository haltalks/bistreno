import React from 'react';

// reactstrap components
import { Row, Col } from 'reactstrap';

// core components

function AboutUsHeader() {
	let pageHeader = React.createRef();
	React.useEffect(() => {
		if (window.innerWidth > 991) {
			const updateScroll = () => {
				let windowScrollTop = window.pageYOffset / 3;
				pageHeader.current.style.transform =
					'translate3d(0,' + windowScrollTop + 'px,0)';
			};
			window.addEventListener('scroll', updateScroll);
			return function cleanup() {
				window.removeEventListener('scroll', updateScroll);
			};
		}
	});
	return (
		<>
			<div className='page-header page-header-small'>
				<div
					className='page-header-image'
					style={{
						backgroundImage: 'url(' + require('assets/img/img/8.jpg') + ')',
					}}
					ref={pageHeader}></div>
				<div className='content-center'>
					<Row>
						<Col className='ml-auto mr-auto' md='8'>
							<h1 className='title'>About Us</h1>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}

export default AboutUsHeader;
