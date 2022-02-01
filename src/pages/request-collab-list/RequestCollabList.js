import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Select from '../../components/bootstrap/forms/Select';
import Card, { CardBody, CardTitle } from '../../components/bootstrap/Card';
import Badge from '../../components/bootstrap/Badge';
import data, { CATEGORIES } from './helper/dummyRequestCollabData';
import { dashboardMenu, menuSidebar } from '../../menu';
import Button from '../../components/bootstrap/Button';
import Avatar from '../../components/Avatar';

import UserImageWebp3 from '../../assets/img/wanna/wanna3.webp';
import UserImage3 from '../../assets/img/wanna/wanna3.png';
import Icon from '../../components/icon/Icon';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../components/bootstrap/Dropdown';
import Checks from '../../components/bootstrap/forms/Checks';
import Input from '../../components/bootstrap/forms/Input';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
// eslint-disable-next-line react/prop-types
const Item = ({ id, image, title, description, user, tags, color }) => {
	const history = useHistory();
	const handleOnClick = useCallback(
		() =>
			history.push(
				`${dashboardMenu.collaboration.subMenu.detailProgramReqCollab.path}/${id}`,
			),
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
						'position-relative',
					)}>
					<img
						src={image}
						alt=''
						width='100%'
						height='auto'
						className='object-fit-contain p-3'
					/>
					<Badge id="suit" color='success' className='position-absolute h-auto w-auto'>
						Cocok
					</Badge>
				</div>
				<CardTitle>{title}</CardTitle>
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
				<Avatar
					srcSet={UserImageWebp3}
					src={UserImage3}
					size={28}
					border={2}
					className='me-2'
				/>
				<span>
					{user}
					<Icon className='ms-2' color='info' icon='Verified' />
				</span>
				<div className='mt-2'>
					<Badge color='danger' className='me-2'>
						Public Relation
					</Badge>
					<Badge color='info'>Entertainer</Badge>
				</div>

				<div className='mt-4 d-flex justify-content-between'>
					{/* {CATEGORIES} */}

					<Button icon='Close' color='danger'>
						Decline
					</Button>
					<Button icon='Check' color='success'>
						Join
					</Button>
				</div>
			</CardBody>
		</Card>
	);
};

const RequestCollabList = () => {
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
				// item.description.toLowerCase().includes(searchValue) ||
				// item.content.toLowerCase().includes(searchValue) ||
				item.categories.find((categ) => categ.text.toLowerCase().includes(searchValue))
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
		<PageWrapper title={dashboardMenu.collaboration.subMenu.reqCollabsList.text}>
			<Page>
				<div className='row'>
					<div className='col-12 col-7 text-left my-5'>
						<span className='display-5 fw-bold'>{dashboardMenu.collaboration.subMenu.reqCollabsList.text}</span>
					</div>
					<div className='col-12 col-md-5 mx-auto text-center my-4 my-md-5'>
						<form
							className='row bg-l10-primary pb-4 px-3 mx-0 g-4 rounded-3'
							onSubmit={formik.handleSubmit}>
							<div className='col-6 col-md-8'>
								<Select
									id='category'
									size='lg'
									ariaLabel='Category'
									placeholder='All Category'
									list={Object.keys(CATEGORIES).map((c) => CATEGORIES[c])}
									className='rounded-1 bg-white'
									onChange={(e) => {
										formik.handleChange(e);

										if (e.target.value)
											debounce(
												() =>
													onFormSubmit({
														...formik.values,
														category: e.target.value,
													}),
												1000,
											)();
									}}
									value={formik.values.category}
								/>
							</div>
							<div className='col-6 col-md-4'>
								<Dropdown>
									<DropdownToggle>
										<Button color='info' icon='FilterAlt' isLight>
											Filter
										</Button>
									</DropdownToggle>
									<DropdownMenu isAlignmentEnd size='lg'>
										<DropdownItem className='mb-4'>
											<Select
												id='industri'
												ariaLabel='Industri'
												placeholder='Filter Industri'
												list={[
													{
														text: 'Industri 1',
														value: '1',
													},
												]}
											/>
										</DropdownItem>
										<DropdownItem className='mb-3'>
											<Input placeholder='Filter Kota' type='text' />
										</DropdownItem>
										<DropdownItem>
											<div>
												<Checks
													id='example'
													label='Cocok untuk anda'
													name='example'
													onChange={(e) => console.log(e)}
													type='switch'
												/>
											</div>
										</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</div>
							{/* <div className='col-md-5'>
								<Input
									id='search'
									size='lg'
									placeholder='Type your question...'
									className='rounded-1 bg-white'
									onChange={(e) => {
										formik.handleChange(e);

										if (e.target.value.length > 2)
											debounce(
												() =>
													onFormSubmit({
														...formik.values,
														search: e.target.value,
													}),
												1000,
											)();

										if (e.target.value.length === 0) formik.resetForm();
									}}
									value={formik.values.search}
								/>
							</div>
							<div className='col-md-2'>
								<Button
									size='lg'
									icon='Close'
									color='primary'
									className='w-100'
									rounded={1}
									onClick={formik.resetForm}
									type='reset'
									isDisable={!(formik.values.search || formik.values.category)}
								/>
							</div> */}
						</form>
					</div>
				</div>
				<div className='row mb-5'>
					{filterableData.map((item) => (
						<div key={item.id} className='col-xl-3 col-lg-4 col-md-6'>
							{/* eslint-disable-next-line react/jsx-props-no-spreading */}
							<Item {...item} />
						</div>
					))}
				</div>
			</Page>
		</PageWrapper>
	);
};

export default RequestCollabList;
