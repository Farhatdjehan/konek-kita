import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';

import HumansWebp from '../../assets/img/scene4.webp';
import Humans from '../../assets/img/scene4.png';
import Input from '../../components/bootstrap/forms/Input';
import Button from '../../components/bootstrap/Button';
import Select from '../../components/bootstrap/forms/Select';
import Card, { CardBody, CardTitle } from '../../components/bootstrap/Card';
import Badge from '../../components/bootstrap/Badge';
import data, { CATEGORIES } from './helper/dummyKnowledgeData';
import { dashboardMenu, demoPages } from '../../menu';
import Icon from '../../components/icon/Icon';

// eslint-disable-next-line react/prop-types
const Item = ({ id, image, title, description, tags, color }) => {
	const history = useHistory();
	const handleOnClick = useCallback(
		() => history.push(`${dashboardMenu.worklist.subMenu.detailProgram.path}/${id}`),
		[history, id],
	);
	return (
		<Card className='cursor-pointer shadow-3d-primary shadow-3d-hover' onClick={handleOnClick}>
			<CardBody>
				<div
					className={classNames(
						'ratio ratio-1x1',
						'rounded-2',
						`bg-l10-${color}`,
						'mb-3',
					)}>
					<img
						src={image}
						alt=''
						width='100%'
						height='auto'
						className='object-fit-contain p-3'
					/>
				</div>
				<CardTitle className='mb-2'>{title}</CardTitle>
				<p className='text-muted truncate-line-2'>{description}</p>
				{/* <div className='row g-2'>
					{!!tags &&
						// eslint-disable-next-line react/prop-types
						tags.map((tag) => (
							<div key={tag.text} className='col-auto'>
								<Badge isLight color={tag.color} className='px-3 py-2'>
									{tag.text}
								</Badge>
							</div>
						))}
				</div> */}
				<div className='mt-4 d-flex justify-content-between'>
					<Button icon='Close' color='danger'>
						Decline
					</Button>
					<Button icon='Check' color='success'>
						Accept
					</Button>
				</div>
			</CardBody>
		</Card>
	);
};

const RequestWork = () => {
	const [filterableData, setFilterableData] = useState(data);

	const searchAndFilterData = (searchValue, category) => {
		let tempData = data;

		if (category)
			tempData = data.filter((item) =>
				item.categories.find((categ) => categ.value === category),
			);

		return tempData.filter((item) => {
			return (
				item.title.toLowerCase().includes(searchValue) ||
				item.description.toLowerCase().includes(searchValue) ||
				item.content.toLowerCase().includes(searchValue) ||
				item.categories.find((categ) => categ.text.toLowerCase().includes(searchValue)) ||
				item.tags.find((tag) => tag.text.toLowerCase().includes(searchValue))
			);
		});
	};

	const debounce = (func, wait) => {
		let timeout;

		return function executedFunction(...args) {
			const later = () => {
				clearTimeout(timeout);
				func(...args);
			};

			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		};
	};

	const onFormSubmit = (values) => {
		const searchValue = values.search.toString().toLowerCase();
		const newData = searchAndFilterData(searchValue, values.category);

		if (!values.search && !values.category) {
			setFilterableData(data);
		} else {
			setFilterableData(newData);
		}
	};

	const formik = useFormik({
		initialValues: {
			search: '',
			category: '',
		},
		onSubmit: onFormSubmit,
		onReset: () => setFilterableData(data),
	});

	return (
		<PageWrapper title={dashboardMenu.worklist.subMenu.reqWorkList.text}>
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
		// <PageWrapper title={dashboardMenu.worklist.subMenu.reqWorkList.text}>
		// 	<Page>
		// 		<div className='row'>
		// 			<div className='col-12 text-left my-3'>
		// 				<span className='display-5 fw-bold'>Request Work</span>
		// 			</div>
		// 			<div className='col-xxl-6 mx-auto text-center my-5'>
		// 				<form
		// 					className='row bg-l10-primary pb-4 px-3 mx-0 g-4 rounded-3'
		// 					onSubmit={formik.handleSubmit}>
		// 					<div className='col-md-5'>
		// 						<Select
		// 							id='category'
		// 							size='lg'
		// 							ariaLabel='Category'
		// 							placeholder='All Category'
		// 							list={Object.keys(CATEGORIES).map((c) => CATEGORIES[c])}
		// 							className='rounded-1 bg-white'
		// 							onChange={(e) => {
		// 								formik.handleChange(e);

		// 								if (e.target.value)
		// 									debounce(
		// 										() =>
		// 											onFormSubmit({
		// 												...formik.values,
		// 												category: e.target.value,
		// 											}),
		// 										1000,
		// 									)();
		// 							}}
		// 							value={formik.values.category}
		// 						/>
		// 					</div>
		// 					<div className='col-md-5'>
		// 						<Input
		// 							id='search'
		// 							size='lg'
		// 							placeholder='Type your question...'
		// 							className='rounded-1 bg-white'
		// 							onChange={(e) => {
		// 								formik.handleChange(e);

		// 								if (e.target.value.length > 2)
		// 									debounce(
		// 										() =>
		// 											onFormSubmit({
		// 												...formik.values,
		// 												search: e.target.value,
		// 											}),
		// 										1000,
		// 									)();

		// 								if (e.target.value.length === 0) formik.resetForm();
		// 							}}
		// 							value={formik.values.search}
		// 						/>
		// 					</div>
		// 					<div className='col-md-2'>
		// 						<Button
		// 							size='lg'
		// 							icon='Close'
		// 							color='primary'
		// 							className='w-100'
		// 							rounded={1}
		// 							onClick={formik.resetForm}
		// 							type='reset'
		// 							isDisable={!(formik.values.search || formik.values.category)}
		// 						/>
		// 					</div>
		// 				</form>
		// 			</div>
		// 		</div>
		// 		<div className='row mb-5'>
		// 			{filterableData.map((item) => (
		// 				<div key={item.id} className='col-xl-3 col-lg-4 col-md-6'>
		// 					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
		// 					<Item {...item} />
		// 				</div>
		// 			))}
		// 		</div>
		// 	</Page>
		// </PageWrapper>
	);
};

export default RequestWork;
