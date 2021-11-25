import React from 'react';
import Header, { HeaderLeft } from '../../../layout/Header/Header';
import CommonHeaderRight from './CommonHeaderRight';

const DefaultHeader = () => {
	return (
		<Header>
			<HeaderLeft>
				{/* <Navigation
					menu={{ ...layoutMenu, ...componentsMenu }}
					id='header-top-menu'
					horizontal={deviceScreen?.width >= process.env.REACT_APP_MOBILE_BREAKPOINT_SIZE}
				/> */}
			</HeaderLeft>
			<CommonHeaderRight />
		</Header>
	);
};

export default DefaultHeader;
