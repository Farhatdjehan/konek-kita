import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Select from '../../components/bootstrap/forms/Select';
import Card, { CardBody, CardTitle, CardHeader, CardLabel } from '../../components/bootstrap/Card';
import Badge from '../../components/bootstrap/Badge';
import data, { CATEGORIES } from './helper/dummyKnowledgeData';
import { dashboardMenu, menuSidebar } from '../../menu';
import Button from '../../components/bootstrap/Button';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../components/bootstrap/Modal';
import { OffCanvasTitle } from '../../components/bootstrap/OffCanvas';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import USERS from '../../common/data/userDummyData';
import moment from 'moment';
import Textarea from '../../components/bootstrap/forms/Textarea';
import Checks, { ChecksGroup } from '../../components/bootstrap/forms/Checks';
import Popovers from '../../components/bootstrap/Popovers';
import Icon from '../../components/icon/Icon';
import Avatar from '../../components/Avatar';

import UserImageWebp3 from '../../assets/img/wanna/wanna3.webp';
import UserImage3 from '../../assets/img/wanna/wanna3.png';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../components/bootstrap/Dropdown';
// eslint-disable-next-line react/prop-types
const Item = ({ id, image, title, description, tags, color }) => {
	const history = useHistory();
	const handleOnClick = useCallback(
		() =>
			history.push(
				`${dashboardMenu.collaboration.subMenu.detailProgramOpenCollab.path}/${id}`,
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
				{/* <Avatar
					srcSet={UserImageWebp3}
					src={UserImage3}
					size={32}
					border={2}
					className='me-3'
				/>
				<span>{user}</span> */}
			</CardBody>
		</Card>
	);
};

const OpenCollaboration = () => {
	const [filterableData, setFilterableData] = useState(data);
	const [collabsType, setCollabsType] = useState('direct');
	const [upcomingEventsEditOffcanvas, setUpcomingEventsEditOffcanvas] = useState(false);
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

	// const formik = useFormik({
	// 	initialValues: {
	// 		search: '',
	// 		category: '',
	// 	},
	// 	onSubmit: onFormSubmit,
	// 	onReset: () => setFilterableData(data),
	// });
	const handleUpcomingEdit = () => {
		setUpcomingEventsEditOffcanvas(!upcomingEventsEditOffcanvas);
	};
	const formik = useFormik({
		initialValues: {
			mention: '',
			offer: '',
			start_date: moment().add(1, 'days').format('YYYY-MM-DD'),
			end_date: moment().add(7, 'days').format('YYYY-MM-DD'),
			link_ref: '',
			total_money: '',
			provided_money: '',
			skill: '',
			desc: '',
		},
	});
	return (
		<PageWrapper title={dashboardMenu.collaboration.subMenu.openCollaboration.text}>
			<Page>
				<div className='row align-items-center'>
					<div className='col-8 text-left my-5'>
						<div className='display-5 fw-bold mb-3'>Open Collaboration</div>
						<Button onClick={handleUpcomingEdit} color='info' icon='Add' isLight>
							Open Collabs
						</Button>
					</div>
					<div className='col-4 mx-auto text-center my-5'>
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
					</div>{' '}
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
					setIsOpen={setUpcomingEventsEditOffcanvas}
					isOpen={upcomingEventsEditOffcanvas}
					titleId='upcomingEdit'
					isCentered
					isScrollable
					size='lg'>
					<ModalHeader setIsOpen={setUpcomingEventsEditOffcanvas}>
						<OffCanvasTitle id='upcomingEdit' className='me-3'>
							Open Collaboration
						</OffCanvasTitle>
						<Dropdown>
							<DropdownToggle hasIcon={false}>
								<Button color='light' shadow='default'>
									{' '}
									Collabs : {collabsType}
								</Button>
							</DropdownToggle>
							<DropdownMenu isAlignmentEnd>
								<DropdownItem>
									<Button onClick={() => setCollabsType('direct')}>Direct</Button>
								</DropdownItem>
								<DropdownItem isDivider />
								<DropdownItem>
									<Button onClick={() => setCollabsType('umum')}>Umum</Button>
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</ModalHeader>

					<ModalBody>
						{collabsType === 'direct' ? (
							<div className='row g-4'>
								<div className='col-12'>
									<FormGroup id='mention' label='Mention Pekarya'>
										<Input
											placeholder='Mention Pekarya'
											onChange={formik.handleChange}
											value={formik.values.mention}
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='file' label='Brief Kerja'>
										<Input
											type='file'
											autoComplete='photo'
											// value={formik.values.file}
										/>
									</FormGroup>
								</div>

								<div className='col-12'>
									<FormGroup id='link' label='Link Refrensi'>
										<Input
											placeholder='Link Refrensi'
											onChange={formik.handleChange}
											value={formik.values.link}
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='provided_money' label='Dana Project'>
										<Input
											type='number'
											placeholder='Nominal Uang'
											onChange={formik.handleChange}
											value={formik.values.provided_money}
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='total_money' label='Ajuan Dana Project '>
										<Input
											type='number'
											placeholder='Nominal Uang'
											onChange={formik.handleChange}
											value={formik.values.total_money}
										/>
									</FormGroup>
								</div>
								<div className='col-6'>
									<FormGroup id='start_date' label='Start Date'>
										<Input
											placeholder='Date'
											onChange={formik.handleChange}
											value={formik.values.start_date}
											type='date'
										/>
									</FormGroup>
								</div>
								<div className='col-6'>
									<FormGroup id='end_date' label='End Date'>
										<Input
											placeholder='Date'
											onChange={formik.handleChange}
											value={formik.values.end_date}
											type='date'
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='desc' label='Deskripsi'>
										<Textarea
											rows={6}
											placeholder='Deskripsi Kolaborasi'
											onChange={formik.handleChange}
											value={formik.values.desc}
										/>
									</FormGroup>
								</div>
							</div>
						) : (
							<div className='row g-4'>
								<div className='col-12'>
									<FormGroup id='title' label='Judul'>
										<Input
											placeholder='Judul Kolaborasi'
											// onChange={formik.handleChange}
											// value={formik.values.mention}
										/>
									</FormGroup>
								</div>

								<div className='col-6'>
									<FormGroup id='file' label='Brief Kerja'>
										<Input
											type='file'
											autoComplete='photo'
											// value={formik.values.file}
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='link' label='Link Refrensi'>
										<Input
											placeholder='Link Refrensi'
											onChange={formik.handleChange}
											value={formik.values.link}
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='provided_money' label='Dana Project'>
										<Input
											type='number'
											placeholder='Nominal Uang'
											onChange={formik.handleChange}
											value={formik.values.provided_money}
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='total_money' label='Ajuan Dana Project '>
										<Input
											type='number'
											placeholder='Nominal Uang'
											onChange={formik.handleChange}
											value={formik.values.total_money}
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='tipekonten' label='Negara' className='mb-3'>
										<Select
											id='example'
											onChange={formik.handleChange}
											list={[
												{
													text: 'Photo',
													value: 1,
												},
												{
													text: 'Live Session',
													value: 2,
												},
												{
													text: 'Video',
													value: 3,
												},
												{
													text: 'Sound',
													value: 3,
												},
											]}
											value={formik.values.tipekonten}></Select>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='tipekonten' label='Provinsi' className='mb-3'>
										<Select
											id='example'
											onChange={formik.handleChange}
											list={[
												{
													text: 'Photo',
													value: 1,
												},
												{
													text: 'Live Session',
													value: 2,
												},
												{
													text: 'Video',
													value: 3,
												},
												{
													text: 'Sound',
													value: 3,
												},
											]}
											value={formik.values.tipekonten}></Select>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='tipekonten' label='Provinsi' className='mb-3'>
										<Select
											id='example'
											onChange={formik.handleChange}
											list={[
												{
													text: 'Photo',
													value: 1,
												},
												{
													text: 'Live Session',
													value: 2,
												},
												{
													text: 'Video',
													value: 3,
												},
												{
													text: 'Sound',
													value: 3,
												},
											]}
											value={formik.values.tipekonten}></Select>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='tipekonten' label='Kota' className='mb-3'>
										<Select
											id='example'
											onChange={formik.handleChange}
											list={[
												{
													text: 'Photo',
													value: 1,
												},
												{
													text: 'Live Session',
													value: 2,
												},
												{
													text: 'Video',
													value: 3,
												},
												{
													text: 'Sound',
													value: 3,
												},
											]}
											value={formik.values.tipekonten}></Select>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup
										id='tipekonten'
										label='Skill yang Dibutuhkan'
										className='mb-3'>
										<Input
											placeholder='Skill'
											onChange={formik.handleChange}
											value={formik.values.skill}
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup
										id='tipekonten'
										label='Media Promosi'
										className='mb-3'>
										<ChecksGroup isInline>
											<Checks id='checksOne' label='One (inline)' />
											<Checks id='checksTwo' label='Two (inline)' />
											<Checks id='checksThree' label='Three' />
										</ChecksGroup>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='tipekonten' label='Ranking' className='mb-3'>
										<Select
											id='example'
											onChange={formik.handleChange}
											list={[
												{
													text: 'Photo',
													value: 1,
												},
												{
													text: 'Live Session',
													value: 2,
												},
												{
													text: 'Video',
													value: 3,
												},
												{
													text: 'Sound',
													value: 3,
												},
											]}
											value={formik.values.tipekonten}></Select>
									</FormGroup>
								</div>
								<div className='col-6'>
									<FormGroup id='start_date' label='Start Date'>
										<Input
											placeholder='Date'
											onChange={formik.handleChange}
											value={formik.values.start_date}
											type='date'
										/>
									</FormGroup>
								</div>
								<div className='col-6'>
									<FormGroup id='end_date' label='End Date'>
										<Input
											placeholder='Date'
											onChange={formik.handleChange}
											value={formik.values.end_date}
											type='date'
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='love' label='Badge Love'>
										<Input
											type='number'
											placeholder='Badge Love'
											// onChange={formik.handleChange}
											// value={formik.values.mention}
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<Card isCompact className='mb-0'>
										<CardHeader>
											<CardLabel>
												<CardTitle>Deskripsi</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody>
											<FormGroup id='desc' label='Deskripsi' isFloating>
												<Textarea
													rows={8}
													placeholder='desc'
													onChange={formik.handleChange}
													value={formik.values.desc}
												/>
											</FormGroup>
										</CardBody>
									</Card>
								</div>
							</div>
						)}
					</ModalBody>
					<ModalFooter className='bg-transparent'>
						<Button
							color='info'
							icon='Save'
							onClick={() => setUpcomingEventsEditOffcanvas(false)}>
							Submit
						</Button>
					</ModalFooter>
				</Modal>
			</Page>
		</PageWrapper>
	);
};

export default OpenCollaboration;
