import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import moment from 'moment';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import { menuSidebar } from '../../../menu';
import Button from '../../../components/bootstrap/Button';
import Popovers from '../../../components/bootstrap/Popovers';
import Icon from '../../../components/icon/Icon';
import CommonSalePerformance from '../../common/CRMDashboard/CommonSalePerformance';
import CommonTopSales from '../../common/CRMDashboard/CommonTopSales';
import CommonLatestTransActions from '../../common/CRMDashboard/CommonLatestTransActions';
import CommonIncome from '../../common/CRMDashboard/CommonIncome';

const CrmDashboard = () => {
	const [selectedDate, setSelectedDate] = useState([
		{
			startDate: moment().startOf('week').add('-1', 'week').toDate(),
			endDate: moment().endOf('week').toDate(),
			key: 'selection',
		},
	]);
	const datePicker = (
		<DateRangePicker
			onChange={(item) => setSelectedDate([item.selection])}
			showSelectionPreview
			moveRangeOnFirstSelection={false}
			retainEndDateOnFirstSelection={false}
			months={2}
			ranges={selectedDate}
			direction='horizontal'
			rangeColors={[process.env.REACT_APP_PRIMARY_COLOR]}
		/>
	);

	return (
		<PageWrapper title={menuSidebar.crm.subMenu.dashboard.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Icon icon='Info' className='me-2' size='2x' />
					<span className='text-muted'>Check out latest updates.</span>
				</SubHeaderLeft>
				<SubHeaderRight>
					<Popovers
						placement='bottom-end'
						className='mw-100'
						trigger='click'
						desc={datePicker}>
						<Button color='dark' isLight>
							{`${moment(selectedDate[0].startDate).format('MMM Do YY')} - ${moment(
								selectedDate[0].endDate,
							).format('MMM Do YY')}`}
						</Button>
					</Popovers>
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-lg-8'>
						<CommonSalePerformance />
					</div>
					<div className='col-lg-4'>
						<CommonTopSales />
					</div>
					<div className='col-lg-6'>
						<CommonLatestTransActions />
					</div>
					<div className='col-lg-6'>
						<CommonIncome />
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default CrmDashboard;
