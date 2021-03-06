import * as React from 'react';

function SvgDashLg(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M0 8a1 1 0 011-1h14a1 1 0 110 2H1a1 1 0 01-1-1z' />
		</svg>
	);
}

export default SvgDashLg;
