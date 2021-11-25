import * as React from 'react';

function SvgFileEarmarkImage(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M6.502 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
			<path d='M14 14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2h5.5L14 4.5V14zM4 1a1 1 0 00-1 1v10l2.224-2.224a.5.5 0 01.61-.075L8 11l2.157-3.02a.5.5 0 01.76-.063L13 10V4.5h-2A1.5 1.5 0 019.5 3V1H4z' />
		</svg>
	);
}

export default SvgFileEarmarkImage;
