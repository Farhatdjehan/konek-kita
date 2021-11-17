import React from 'react';
import PropTypes from 'prop-types';

const CarouselSlide = ({ children, background }) => {
	return (
		<div
			className='carousel-slide h-100 w-100'
			style={{ backgroundImage: `url(${background})` }}>
			{children}
		</div>
	);
};
CarouselSlide.propTypes = {
	children: PropTypes.node.isRequired,
	background: PropTypes.string,
};
CarouselSlide.defaultProps = {
	background: null,
};
export default CarouselSlide;
