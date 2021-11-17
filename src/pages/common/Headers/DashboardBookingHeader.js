import React from 'react';
import Header, { HeaderLeft, HeaderRight } from '../../../layout/Header/Header';
import CommonHeaderChat from './CommonHeaderChat';

const DashboardBookingHeader = () => {
	return (
		<Header>
			<HeaderLeft>
				<div className='d-flex align-items-center'>
					<div className='row g-4'>
						<div className='col-md-auto'>
							<div className='fs-3 text-dark fw-bold'>Hi, John!</div>
						</div>
					</div>
				</div>
			</HeaderLeft>
			<HeaderRight>
				<CommonHeaderChat />
			</HeaderRight>
		</Header>
	);
};

export default DashboardBookingHeader;
