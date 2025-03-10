import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
	Button,
	Collapse,
	NavbarBrand,
	Navbar,
	NavItem,
	Nav,
	UncontrolledTooltip,
} from 'reactstrap';

function ScrollTransparentNavbar() {
	const [collapseOpen, setCollapseOpen] = React.useState(false);
	const [navbarColor, setNavbarColor] = React.useState(
		(document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
			? ''
			: ' navbar-transparent'
	);
	const [buyButtonColor, setBuyButtonColor] = React.useState(
		(document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
			? 'info'
			: 'neutral'
	);
	React.useEffect(() => {
		const updateNavbarColor = () => {
			if (
				document.documentElement.scrollTop > 499 ||
				document.body.scrollTop > 499
			) {
				setNavbarColor('');
				setBuyButtonColor('info');
			} else if (
				document.documentElement.scrollTop < 500 ||
				document.body.scrollTop < 500
			) {
				setNavbarColor(' navbar-transparent');
				setBuyButtonColor('neutral');
			}
		};
		window.addEventListener('scroll', updateNavbarColor);
		return function cleanup() {
			window.removeEventListener('scroll', updateNavbarColor);
		};
	});
	return (
		<>
			{collapseOpen ? (
				<div
					id='bodyClick'
					onClick={() => {
						document.documentElement.classList.toggle('nav-open');
						setCollapseOpen(false);
					}}
				/>
			) : null}
			<Navbar className={'fixed-top' + navbarColor} color='white' expand='lg'>
				<div className='navbar-translate'>
					<NavbarBrand to='/' tag={Link} id='navbar-brand'>
						<img
							alt='...'
							className='logo'
							src={require('assets/img/img/logo.png')}></img>
						{/* <h2>BistReno</h2> */}
					</NavbarBrand>
					<UncontrolledTooltip target='navbar-brand'>
						Designed Farbod
					</UncontrolledTooltip>
					<button
						onClick={() => {
							document.documentElement.classList.toggle('nav-open');
							setCollapseOpen(!collapseOpen);
						}}
						aria-expanded={collapseOpen}
						className='navbar-toggler'>
						<span className='navbar-toggler-bar top-bar'></span>
						<span className='navbar-toggler-bar middle-bar'></span>
						<span className='navbar-toggler-bar bottom-bar'></span>
					</button>
				</div>
				<Collapse isOpen={collapseOpen} navbar>
					<Nav className='ml-auto' id='ceva' navbar>
						<NavItem>
							<Link to='/about' className='nav-link'>
								About Us
							</Link>
						</NavItem>

						<NavItem>
							<Button
								className='nav-link btn-default'
								color={buyButtonColor}
								href='/contact'>
								<p>Contact Us</p>
							</Button>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</>
	);
}

export default ScrollTransparentNavbar;
