import React from 'react';
import { useMeasure } from 'react-use';

const Footer = () => {
	const [ref, { height }] = useMeasure();

	const root = document.documentElement;
	root.style.setProperty('--footer-height', `${height}px`);

	return (
		<footer ref={ref} className='footer'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col'>
						<span className='fw-light'>Copyright © 2021 - Version 1.2.3</span>
					</div>
					<div className='col-auto'>
						<a href='/' className='text-decoration-none link-dark'>
							<small className='fw-bold'>Facit Theme</small>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
