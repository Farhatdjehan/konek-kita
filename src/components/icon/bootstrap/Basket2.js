import * as React from 'react';

function SvgBasket2(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M4 10a1 1 0 012 0v2a1 1 0 01-2 0v-2zm3 0a1 1 0 012 0v2a1 1 0 01-2 0v-2zm3 0a1 1 0 112 0v2a1 1 0 01-2 0v-2z' />
			<path d='M5.757 1.071a.5.5 0 01.172.686L3.383 6h9.234L10.07 1.757a.5.5 0 11.858-.514L13.783 6H15.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-.623l-1.844 6.456a.75.75 0 01-.722.544H3.69a.75.75 0 01-.722-.544L1.123 8H.5a.5.5 0 01-.5-.5v-1A.5.5 0 01.5 6h1.717L5.07 1.243a.5.5 0 01.686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z' />
		</svg>
	);
}

export default SvgBasket2;