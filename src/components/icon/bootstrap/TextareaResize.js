import * as React from 'react';

function SvgTextareaResize(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M.5 4A2.5 2.5 0 013 1.5h12A2.5 2.5 0 0117.5 4v8a2.5 2.5 0 01-2.5 2.5H3A2.5 2.5 0 01.5 12V4zM3 2.5A1.5 1.5 0 001.5 4v8A1.5 1.5 0 003 13.5h12a1.5 1.5 0 001.5-1.5V4A1.5 1.5 0 0015 2.5H3zm11.854 5.646a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708l3-3a.5.5 0 01.708 0zm0 2.5a.5.5 0 010 .708l-.5.5a.5.5 0 01-.708-.708l.5-.5a.5.5 0 01.708 0z' />
		</svg>
	);
}

export default SvgTextareaResize;
