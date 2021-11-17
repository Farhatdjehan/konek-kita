import React from 'react';
import Icon from '../../components/icon/Icon';

// eslint-disable-next-line react/prop-types
const CommonFilterTag = ({ title, text }) => {
	return (
		<small className='bg-l10-info text-info ps-3 pe-2 py-2 rounded-pill'>
			<strong>{title}:</strong> {text}
			<Icon icon='ErrorCircle' color='danger' size='lg' className='ms-2 cursor-pointer' />
		</small>
	);
};

export default CommonFilterTag;
