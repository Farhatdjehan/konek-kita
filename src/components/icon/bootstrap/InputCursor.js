import * as React from 'react';

function SvgInputCursor(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M10 5h4a1 1 0 011 1v4a1 1 0 01-1 1h-4v1h4a2 2 0 002-2V6a2 2 0 00-2-2h-4v1zM6 5V4H2a2 2 0 00-2 2v4a2 2 0 002 2h4v-1H2a1 1 0 01-1-1V6a1 1 0 011-1h4z' />
			<path fillRule='evenodd' d='M8 1a.5.5 0 01.5.5v13a.5.5 0 01-1 0v-13A.5.5 0 018 1z' />
		</svg>
	);
}

export default SvgInputCursor;
