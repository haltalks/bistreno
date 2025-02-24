/*eslint-disable*/
import React from 'react';

// reactstrap components
import { Container } from 'reactstrap';

// core components

function FooterBlack() {
	return (
		<>
			<footer className='footer' data-background-color='black'>
				<Container>
					<nav>
						<ul>
							<li>
								<a href='/about'>About Us</a>
							</li>
							<li>
								<a href='/contact'>Contact Us</a>
							</li>
						</ul>
					</nav>
					<div className='copyright' id='copyright'>
						© {new Date().getFullYear()}, All Rights Reserved . BistReno{' '}
					</div>
				</Container>
			</footer>
		</>
	);
}

export default FooterBlack;
