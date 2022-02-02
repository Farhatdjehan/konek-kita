import React, { useCallback, useState } from 'react';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Humans from '../../assets/img/hand.png';
import HumansWebp from '../../assets/img/hand.webp';
import data, { CATEGORIES } from './helper/dummyBootcampData';
import { generalMenu, menuSidebar } from '../../menu';
import Button from '../../components/bootstrap/Button';

const RegistTeacher = () => {
	const [modal, setModal] = useState(false);
	const [filterableData, setFilterableData] = useState(data);

	return (
		<PageWrapper title={generalMenu.bootcamp.subMenu.galleryBootcamp.text}>
			<Page>
				<div className='row d-flex align-items-center h-100'>
					<div className='col-12 d-flex flex-column justify-content-center align-items-center'>
						<div
							className='text-primary fw-bold'
							style={{ fontSize: 'calc(3rem + 3vw)' }}>
							Soon
						</div>
						<div
							className='text-dark fw-bold'
							style={{ fontSize: 'calc(1.5rem + 1.5vw)' }}>
							Stay Tune!
						</div>
					</div>
					<div className='col-12 d-flex align-items-baseline justify-content-center'>
						<img
							srcSet={HumansWebp}
							src={Humans}
							alt='Humans'
							style={{ height: '50vh' }}
						/>
					</div>
					<div className='col-12 d-flex flex-column justify-content-center align-items-center'>
						<Button
							className='px-5 py-3'
							color='primary'
							isLight
							icon='HolidayVillage'
							onClick={() => history.goBack()}>
							Go Back
						</Button>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default RegistTeacher;
