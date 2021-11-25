import * as React from 'react';

function SvgSuitDiamond(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8.384 1.226a.463.463 0 00-.768 0l-4.56 6.468a.537.537 0 000 .612l4.56 6.469a.463.463 0 00.768 0l4.56-6.469a.537.537 0 000-.612l-4.56-6.468zM6.848.613a1.39 1.39 0 012.304 0l4.56 6.468a1.61 1.61 0 010 1.838l-4.56 6.468a1.39 1.39 0 01-2.304 0L2.288 8.92a1.61 1.61 0 010-1.838L6.848.613z' />
		</svg>
	);
}

export default SvgSuitDiamond;
