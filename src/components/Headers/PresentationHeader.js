/*eslint-disable*/
import React from 'react';

// reactstrap components

// core components

function PresentationHeader() {
	return (
		<>
			<div className='page-header clear-filter'>
				<div className='rellax-header rellax-header-sky' data-rellax-speed='-4'>
					<div
						className='page-header-image'
						style={{
							backgroundImage:
								'url(' + require('assets/img/img/nuk-pro-back-sky.jpg') + ')',
						}}></div>
				</div>
				<div
					className='rellax-header rellax-header-buildings'
					data-rellax-speed='0'>
					<div
						className='page-header-image page-header-city'
						style={{
							backgroundImage:
								'url(' + require('assets/img/img/nuk-pro-buildings.png') + ')',
						}}></div>
				</div>
				<div className='rellax-text-container rellax-text'>
					<h1 className='h1-seo' data-rellax-speed='-1'>
						Bist Reno
					</h1>
					{/* <div className='pro'>PRO</div> */}
				</div>
				<h2 className='h3-description rellax-text' data-rellax-speed='-1'>
					Best Renovation in the Market
				</h2>
			</div>
		</>
	);
}

export default PresentationHeader;
