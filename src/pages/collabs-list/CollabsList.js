import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Select from '../../components/bootstrap/forms/Select';
import Card, { CardBody, CardFooter, CardTitle } from '../../components/bootstrap/Card';
import Badge from '../../components/bootstrap/Badge';
import data, { CATEGORIES } from './helper/dummyKnowledgeData';
import { generalMenu, menuSidebar } from '../../menu';
import User from '../../layout/User/User';
import Avatar from '../../components/Avatar';

import UserImageWebp3 from '../../assets/img/wanna/wanna3.webp';
import UserImage3 from '../../assets/img/wanna/wanna3.png';
import Button from '../../components/bootstrap/Button';
import Checks, { ChecksGroup } from '../../components/bootstrap/forms/Checks';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../components/bootstrap/Dropdown';
// eslint-disable-next-line react/prop-types
const Item = ({ id, image, title, description, tags, user, color }) => {
	const history = useHistory();
	const handleOnClick = useCallback(
		() => history.push(`${generalMenu.collaboration.subMenu.detailProgramCollab.path}/${id}`),
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
				<CardTitle>{title}</CardTitle>
				<p className='text-muted truncate-line-2'>{description}</p>
				<Avatar
					srcSet={UserImageWebp3}
					src={UserImage3}
					size={32}
					border={2}
					className='me-3'
				/>
				<span>{user}</span>
				<div className='text-end mt-3'>
					<Button color='info'>Join Now!</Button>
				</div>
			</CardBody>
		</Card>
	);
};

const CollabsList = () => {
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

	return (
		<PageWrapper title={generalMenu.collaboration.subMenu.collabsList.text}>
			<Page>
				<div className='row'>
					<div className='col-12 col-md-9 text-left my-3 my-mb-5'>
						<span className='display-5 fw-bold'>
							{generalMenu.collaboration.subMenu.collabsList.text}
						</span>
					</div>
					<div className='col-12 col-md-3 text-end my-3 my-mb-5'>
						<form className='row pb-3 mx-0 ' onSubmit={formik.handleSubmit}>
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
										<DropdownItem>
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

export default CollabsList;
