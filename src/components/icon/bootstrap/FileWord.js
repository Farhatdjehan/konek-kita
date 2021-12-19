import * as React from 'react';

function SvgFileWord(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M4.879 4.515a.5.5 0 01.606.364l1.036 4.144.997-3.655a.5.5 0 01.964 0l.997 3.655 1.036-4.144a.5.5 0 01.97.242l-1.5 6a.5.5 0 01-.967.01L8 7.402l-1.018 3.73a.5.5 0 01-.967-.01l-1.5-6a.5.5 0 01.364-.606z' />
			<path d='M4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4zm0 1h8a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z' />
		</svg>
	);
}

export default SvgFileWord;
