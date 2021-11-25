import * as React from 'react';

function SvgGraphDown(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path
				fillRule='evenodd'
				d='M0 0h1v15h15v1H0V0zm10 11.5a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-4a.5.5 0 00-1 0v2.6l-3.613-4.417a.5.5 0 00-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 00-.808.588l4 5.5a.5.5 0 00.758.06l2.609-2.61L13.445 11H10.5a.5.5 0 00-.5.5z'
			/>
		</svg>
	);
}

export default SvgGraphDown;
