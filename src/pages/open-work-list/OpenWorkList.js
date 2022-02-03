import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Select from '../../components/bootstrap/forms/Select';
import Card, { CardBody, CardTitle } from '../../components/bootstrap/Card';
import Badge from '../../components/bootstrap/Badge';
import data, { CATEGORIES } from './helper/dummyCampaignData';
import { generalMenu, menuSidebar } from '../../menu';
import { priceFormat } from '../../helpers/helpers';
import Button from '../../components/bootstrap/Button';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../components/bootstrap/Dropdown';
import Input from '../../components/bootstrap/forms/Input';
import Checks, { ChecksGroup } from '../../components/bootstrap/forms/Checks';
import Icon from '../../components/icon/Icon';

// eslint-disable-next-line react/prop-types
const Item = ({ id, image, budget, title, start_date, end_date, description, tags, color }) => {
	const history = useHistory();
	const handleOnClick = useCallback(
		() => history.push(`${generalMenu.worklist.subMenu.detailProgramOpenWorker.path}/${id}`),
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
					<Badge
						id='suit'
						className='ml-2 position-absolute h-auto w-auto px-4 py-2 mb-3'
						color='success'>
						Cocok
					</Badge>
				</div>
				<CardTitle className='mb-3'>{title}</CardTitle>
				<div className='text-mute mb-1'>
					<Icon icon='DateRange' size='2x' color='info' className='me-1' />
					{start_date}-{end_date}
				</div>
				<div className='text-mute'>
					<Icon icon='Money' size='2x' color='success' className='me-1' />
					{priceFormat(budget)}
				</div>
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
				<div className='mt-4 d-flex justify-content-end'>
					<Button icon='Check' color='info'>
						Join
					</Button>
				</div>
			</CardBody>
		</Card>
	);
};

const OpenWorkList = () => {
	const [filterableData, setFilterableData] = useState(data);
	const [check, setCheck] = useState([false, false, false, false]);

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
	const handleCheck = () => {
		// setCheck(id);
	};
	return (
		<PageWrapper title={generalMenu.worklist.subMenu.openWorkList.text}>
			<Page>
				<div className='row'>
					<div className='col-12 col-md-9 text-left my-3 my-md-5'>
						<span className='display-5 fw-bold'>
							{generalMenu.worklist.subMenu.openWorkList.text}
						</span>
					</div>
					<div className='col-12 col-md-3 text-end my-3 my-md-5'>
						<form className='row pb-3 px-3 mx-0 ' onSubmit={formik.handleSubmit}>
							{/* <div className='col-6 col-md-8'>
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
							</div> */}
							<div className='col-12 col-md-12'>
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
										<DropdownItem className='mb-3'>
											<div className='d-flex flex-column'>
												<div className='w-100'>Range Budget</div>
												<Input
													id='example'
													max={100}
													min={0}
													type='range'
												/>
											</div>
										</DropdownItem>
										<DropdownItem className='mb-3'>
											<div style={{ flexWrap: 'wrap' }}>
												<ChecksGroup>
													<div className='me-3'>
														<Checks
															id='tiktok'
															label='Tiktok'
															name='tiktok'
															onChange={() =>
																setCheck([
																	!check[0],
																	check[1],
																	check[2],
																	check[3],
																])
															}
															type='checkbox'
															checked={check[0]}
														/>
													</div>
													<div className='me-3'>
														<Checks
															id='facebook'
															label='Facebook'
															name='facebook'
															onChange={() =>
																setCheck([
																	check[0],
																	!check[1],
																	check[2],
																	check[3],
																])
															}
															type='checkbox'
															checked={check[1]}
														/>
													</div>
													<div className='me-3'>
														<Checks
															id='twitter'
															label='Twitter'
															name='twitter'
															onChange={() =>
																setCheck([
																	check[0],
																	check[1],
																	!check[2],
																	check[3],
																])
															}
															type='checkbox'
															checked={check[2]}
														/>
													</div>
													<div className='me-3'>
														<Checks
															id='instagram'
															label='Instagram'
															name='instagram'
															onChange={() =>
																setCheck([
																	check[0],
																	check[1],
																	check[2],
																	!check[3],
																])
															}
															type='checkbox'
															checked={check[3]}
														/>
													</div>
												</ChecksGroup>
											</div>
										</DropdownItem>
										<DropdownItem className='mb-4'>
											<Select
												id='budget'
												ariaLabel='Budget'
												placeholder='Budget Pekarya'
												list={[
													{
														text: 'Budget 1',
														value: '1',
													},
												]}
											/>
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

export default OpenWorkList;
