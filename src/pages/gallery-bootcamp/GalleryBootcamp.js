import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Select from '../../components/bootstrap/forms/Select';
import Card, { CardBody, CardFooter, CardHeader, CardTitle } from '../../components/bootstrap/Card';
import Badge from '../../components/bootstrap/Badge';
import data, { CATEGORIES } from './helper/dummyBootcampData';
import { dashboardMenu, menuSidebar } from '../../menu';
import Button from '../../components/bootstrap/Button';
import UserImageWebp3 from '../../assets/img/wanna/wanna3.webp';
import Icon from '../../components/icon/Icon';
import Modal, { ModalBody, ModalHeader } from '../../components/bootstrap/Modal';
import { OffCanvasTitle } from '../../components/bootstrap/OffCanvas';
import { priceFormat } from '../../helpers/helpers';
// eslint-disable-next-line react/prop-types
const Item = ({ id, image, title, price, description, tags, color }) => {
	const history = useHistory();
	const handleOnClick = useCallback(
		() => history.push(`${dashboardMenu.bootcamp.subMenu.detailProgramBootcamp.path}/${id}`),
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
						color='success'
						className='position-absolute w-auto h-auto px-3 py-2'>
						{priceFormat(price)}
					</Badge>
				</div>
				<CardTitle>{title}</CardTitle>
				<p className='text-muted mb-1'>Badge yang di dapat</p>
				<div className='mb-3'>
					<div className='d-flex'>
						<div className='d-flex align-items-center me-2'>
							<Icon className='me-2' icon='HeartFill' color='danger' />
							<div className='fw-bold'>+1</div>
						</div>
						<div className='d-flex align-items-center me-2'>
							<Icon className='me-2' icon='EmojiEmotions' color='info' />
							<div className='fw-bold'>+1</div>
						</div>
						<div className='d-flex align-items-center me-2'>
							<Icon className='me-2' icon='CardMembership' color='success' />
							<div className='fw-bold'>+1</div>
						</div>
					</div>
				</div>
				<div className='row g-2'>
					{!!tags &&
						// eslint-disable-next-line react/prop-types
						tags.map((tag) => (
							<div key={tag.text} className='col-auto'>
								<Badge isLight color={tag.color} className='px-3 py-2'>
									{tag.text}
								</Badge>
							</div>
						))}
				</div>
			</CardBody>
		</Card>
	);
};

const GalleryBootcamp = () => {
	const [modal, setModal] = useState(false);
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
		<PageWrapper title={dashboardMenu.bootcamp.subMenu.galleryBootcamp.text}>
			<Page>
				<div className='row'>
					<Card>
						<CardBody>
							<img src={UserImageWebp3} />
							<div className='h4 fw-bold mt-3'>Benefit List</div>
							<ul>
								<li>Benefit 1</li>
								<li>Benefit 2</li>
								<li>Benefit 3</li>
							</ul>
							<Button onClick={() => setModal(true)} className='mt-3' color='info'>
								Register
							</Button>
						</CardBody>
					</Card>
				</div>
				<div className='row'>
					<div className='col-12 text-left my-5'>
						<span className='display-5 fw-bold'>Bootcamp</span>
					</div>
					{/* <div className='col-4 mx-auto text-center my-5'>
						<form
							className='row bg-l10-primary pb-4 px-3 mx-0 g-4 rounded-3'
							onSubmit={formik.handleSubmit}>
							<div className='col-md-12'>
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
							<div className='col-md-5'>
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
							</div> 
						</form>
					</div> */}
				</div>
				<div className='row mb-5'>
					{filterableData.map((item) => (
						<div key={item.id} className='col-xl-3 col-lg-4 col-md-6'>
							{/* eslint-disable-next-line react/jsx-props-no-spreading */}
							<Item {...item} />
						</div>
					))}
				</div>
				<Modal
					setIsOpen={setModal}
					isOpen={modal}
					titleId='form'
					isCentered
					isScrollable
					size='lg'>
					<ModalHeader setIsOpen={setModal}>
						<OffCanvasTitle id='form'>Register</OffCanvasTitle>
					</ModalHeader>
					<ModalBody></ModalBody>
				</Modal>
			</Page>
		</PageWrapper>
	);
};

export default GalleryBootcamp;
