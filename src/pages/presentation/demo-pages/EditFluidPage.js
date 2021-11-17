import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import classNames from 'classnames';
import moment from 'moment';
import { Calendar as DatePicker } from 'react-date-range';
import { useHistory } from 'react-router-dom';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader';
import data from '../../../common/data/dummyProductData';
import Button, { ButtonGroup } from '../../../components/bootstrap/Button';
import useSelectTable from '../../../hooks/useSelectTable';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import CommonFilterTag from '../../common/CommonFilterTag';
import CommonTableRow from '../../common/CommonTableRow';
import Page from '../../../layout/Page/Page';
import Card, {
	CardActions,
	CardBody,
	CardFooter,
	CardFooterLeft,
	CardFooterRight,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Avatar from '../../../components/Avatar';
import User1Webp from '../../../assets/img/wanna/wanna2.webp';
import User1Img from '../../../assets/img/wanna/wanna2.png';
import Input from '../../../components/bootstrap/forms/Input';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import CommonDesc from '../../../components/common/CommonDesc';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Icon from '../../../components/icon/Icon';
import { priceFormat } from '../../../helpers/helpers';
import validate from './helper/editPagesValidate';
import validateAddress from './helper/editPageAddressValidate';
import eventList from '../../../common/data/events';
import {
	CalendarTodayButton,
	CalendarViewModeButtons,
	getLabel,
	getUnitType,
	getViews,
} from '../../../components/extras/calendarHelper';
import Select from '../../../components/bootstrap/forms/Select';
import CommonMyWallet from '../../common/CommonMyWallet';
import Popovers from '../../../components/bootstrap/Popovers';
import USERS from '../../../common/data/userDummyData';
import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../../components/bootstrap/OffCanvas';
import Checks from '../../../components/bootstrap/forms/Checks';
import showNotification from '../../../components/extras/showNotification';
import { dashboardMenu } from '../../../menu';

const localizer = momentLocalizer(moment);
const now = new Date();

const MyEvent = (data) => {
	const { event } = data;
	return (
		<div className='row g-2'>
			<div className='col text-truncate'>
				{event.icon && <Icon icon={event.icon} size='lg' className='me-2' />}
				{event.name}
			</div>
		</div>
	);
};

const MyWeekEvent = (data) => {
	const { event } = data;
	return (
		<div className='row g-2'>
			<div className='col-12 text-truncate'>
				{event.icon && <Icon icon={event.icon} size='lg' className='me-2' />}
				{event.name}
			</div>
		</div>
	);
};

const editProfilPage = () => {
	const history = useHistory();

	const TABS = {
		ACCOUNT_DETAIL: 'Detail Account',
		SOCIAL_MEDIA: 'Social Media',
		SKILL: 'Skill & Industry',
		MY_WALLET: 'My Balance & Card',
	};
	const [activeTab, setActiveTab] = useState(TABS.ACCOUNT_DETAIL);

	const formik = useFormik({
		initialValues: {
			firstName: 'John',
			lastName: 'Doe',
			displayName: 'johndoe',
			emailAddress: 'johndoe@site.com',
			currentPassword: '',
			newPassword: '',
			confirmPassword: '',
		},
		validate,
		onSubmit: () => {
			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Updated Successfully</span>
				</span>,
				"The user's account details have been successfully updated.",
			);
		},
	});

	const formikAddress = useFormik({
		initialValues: {
			instagram: '',
			twitter: '',
			city: 'New York',
			state: 'usa',
			zip: '35535',
		},
		validate: validateAddress,
		onSubmit: () => {
			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Updated Successfully</span>
				</span>,
				"The user's address have been successfully updated.",
			);
		},
	});

	const formikSkill = useFormik({
		initialValues: {
			instagram: '',
			twitter: '',
			city: 'New York',
			state: 'usa',
			zip: '35535',
		},
		validate: validateAddress,
		onSubmit: () => {
			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Updated Successfully</span>
				</span>,
				"The user's address have been successfully updated.",
			);
		},
	});

	//
	// Events
	const [events, setEvents] = useState(eventList);
	// Selected Event
	const [eventItem, setEventItem] = useState(null);
	// Calendar View Mode
	const [viewMode, setViewMode] = useState(Views.MONTH);
	// Calendar Date
	const [date, setDate] = useState(new Date());
	// Item edit panel status
	const [toggleInfoEventCanvas, setToggleInfoEventCanvas] = useState(false);
	const setInfoEvent = () => setToggleInfoEventCanvas(!toggleInfoEventCanvas);
	// Calendar Unit Type
	const unitType = getUnitType(viewMode);
	// Calendar Date Label
	const calendarDateLabel = getLabel(date, viewMode);

	// eslint-disable-next-line no-unused-vars
	const eventStyleGetter = (event, start, end, isSelected) => {
		const isActiveEvent = start <= now && end >= now;
		const isPastEvent = end < now;
		const color = isActiveEvent ? 'success' : event.color;

		return {
			className: classNames({
				[`bg-l10-${color} text-${color}`]: color,
				'border border-success': isActiveEvent,
				'opacity-50': isPastEvent,
			}),
		};
	};

	const handleViewMode = (e) => {
		setDate(moment(e)._d);
		setViewMode(Views.DAY);
	};

	// View modes; Month, Week, Work Week, Day and Agenda
	const views = getViews();

	// New Event
	const handleSelect = ({ start, end }) => {
		// eslint-disable-next-line no-alert
		const title = window.prompt('New Event name');
		if (title)
			setEvents([
				...events,
				{
					start,
					end,
					title,
				},
			]);
	};

	useEffect(() => {
		if (eventItem)
			formik.setValues({
				...formik.values,
				eventId: eventItem.id || null,
				eventName: eventItem.name,
				eventStart: moment(eventItem.start)._d,
				eventEnd: moment(eventItem.end)._d,
				eventAllDay: eventItem.allDay,
				eventEmployee: `${eventItem?.user?.name} ${eventItem?.user?.surname}`,
			});
		return () => {};
		//	eslint-disable-next-line react-hooks/exhaustive-deps
	}, [eventItem]);

	const formikEvent = useFormik({
		initialValues: {
			eventName: '',
			eventStart: '',
			eventEnd: '',
			eventAllDay: false,
			eventRecurring: false,
			eventRepeat: '',
			eventUntilWhen: '',
			eventEmployee: '',
		},
		// eslint-disable-next-line no-unused-vars
		onSubmit: (values) => {
			// console.log(JSON.stringify(values, null, 2));
			setToggleInfoEventCanvas(false);
			setEventItem(null);
		},
	});

	const formikTable = useFormik({
		initialValues: {
			minPrice: '',
			maxPrice: '',
			categoryName: '3D Shapes',
			companyA: true,
			companyB: true,
			companyC: true,
			companyD: true,
		},
		// eslint-disable-next-line no-unused-vars
		onSubmit: (values) => {
			setFilterMenu(false);
			// alert(JSON.stringify(values, null, 2));
		},
	});

	const filteredData = data.filter(
		(f) =>
			// Category
			f.category === formikTable.values.categoryName &&
			// Price
			(formikTable.values.minPrice === '' || f.price > formikTable.values.minPrice) &&
			(formikTable.values.maxPrice === '' || f.price < formikTable.values.maxPrice) &&
			//	Company
			((formikTable.values.companyA ? f.store === 'Company A' : false) ||
				(formikTable.values.companyB ? f.store === 'Company B' : false) ||
				(formikTable.values.companyC ? f.store === 'Company C' : false) ||
				(formikTable.values.companyD ? f.store === 'Company D' : false)),
	);

	const { selectTable, SelectAllCheck } = useSelectTable(filteredData);

	return (
		<PageWrapper title={dashboardMenu.editProfilePage.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Button color='info' isLink icon='ArrowBack' onClick={() => history.goBack()}>
						Back to List
					</Button>
					<SubheaderSeparator />
					<Avatar srcSet={User1Webp} src={User1Img} size={32} />
					<span>
						<strong>Timothy J. Doe</strong>
					</span>
					<span className='text-muted'>Edit User</span>
				</SubHeaderLeft>
				<SubHeaderRight>
					{/* <Button
						color='dark'
						isLight
						icon='Add'
						onClick={() => {
							setActiveTab(TABS.ACCOUNT_DETAIL);
							formik.setValues({
								firstName: '',
								lastName: '',
								displayName: '',
								emailAddress: '',
								currentPassword: '',
								newPassword: '',
								confirmPassword: '',
							});
							formikAddress.setValues({
								addressLine: '',
								addressLine2: '',
								city: '',
								state: '',
								zip: '',
							});
						}}>
						Add New
					</Button> */}

					{/* {TABS.ACCOUNT_DETAIL === activeTab && (
						<Button color='info' isOutline icon='Save' onClick={formik.handleSubmit}>
							Save
						</Button>
					)}
					{TABS.SOCIAL_MEDIA === activeTab && (
						<Button
							color='info'
							isOutline
							icon='Save'
							onClick={formikAddress.handleSubmit}>
							Save
						</Button>
					)} */}
				</SubHeaderRight>
			</SubHeader>
			<Page container='fluid'>
				<div className='row h-100'>
					<div className='col-xxl-2 col-xl-3 col-lg-5'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Person' iconColor='info'>
									<CardTitle>Account Settings</CardTitle>
									<CardSubTitle>Personal Information</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody isScrollable>
								<div className='row g-3'>
									<div className='col-12'>
										<Button
											icon='Contacts'
											color='info'
											className='w-100 p-3'
											isLight={TABS.ACCOUNT_DETAIL !== activeTab}
											onClick={() => setActiveTab(TABS.ACCOUNT_DETAIL)}>
											{TABS.ACCOUNT_DETAIL}
										</Button>
									</div>
									<div className='col-12'>
										<Button
											icon='GroupWork'
											color='info'
											className='w-100 p-3'
											isLight={TABS.SOCIAL_MEDIA !== activeTab}
											onClick={() => setActiveTab(TABS.SOCIAL_MEDIA)}>
											{TABS.SOCIAL_MEDIA}
										</Button>
									</div>
									<div className='col-12'>
										<Button
											icon='StackedBarChart'
											color='info'
											className='w-100 p-3'
											isLight={TABS.SKILL !== activeTab}
											onClick={() => setActiveTab(TABS.SKILL)}>
											{TABS.SKILL}
										</Button>
									</div>
									<div className='col-12 border-bottom' />
									<div className='col-12'>
										<Button
											icon='Style'
											color='success'
											className='w-100 p-3'
											isLight={TABS.MY_WALLET !== activeTab}
											onClick={() => setActiveTab(TABS.MY_WALLET)}>
											{TABS.MY_WALLET}
										</Button>
									</div>

									{/* <div className='col-12 shadow-3d-container'>
										<Card className='bg-l10-primary rounded-2 shadow-3d-primary shadow-3d-hover cursor-pointer'>
											<CardHeader className='bg-transparent'>
												<CardLabel>
													<CardTitle>Coupon</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<div className='d-flex align-items-center pb-3'>
													<div className='flex-shrink-0'>
														<Icon
															icon='ConfirmationNumber'
															size='4x'
															color='primary'
														/>
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-3 mb-0'>
															{priceFormat(250)}
														</div>
														<div className='text-muted'>
															You can use it within 15 days.
														</div>
													</div>
												</div>
											</CardBody>
										</Card>
										<Card className='bg-l10-warning rounded-2 shadow-3d-warning shadow-3d-hover cursor-pointer'>
											<CardHeader className='bg-transparent'>
												<CardLabel>
													<CardTitle>CardGiftcard</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<div className='d-flex align-items-center pb-3'>
													<div className='flex-shrink-0'>
														<Icon
															icon='CardGiftcard'
															size='4x'
															color='warning'
														/>
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-3 mb-0'>
															{priceFormat(100)}
														</div>
														<div className='text-muted'>
															You can use it within 3 days.
														</div>
													</div>
												</div>
											</CardBody>
										</Card>
									</div> */}
								</div>
							</CardBody>
							{/* <CardFooter>
								<CardFooterLeft className='w-100'>
									<Button
										icon='Delete'
										color='danger'
										isLight
										className='w-100 p-3'>
										Delete User
									</Button>
								</CardFooterLeft>
							</CardFooter> */}
						</Card>
					</div>
					<div className='col-xxl-10 col-xl-9 col-lg-7'>
						{TABS.ACCOUNT_DETAIL === activeTab && (
							<Card stretch tag='form' noValidate onSubmit={formik.handleSubmit}>
								<CardHeader>
									<CardLabel icon='Contacts' iconColor='info'>
										<CardTitle>Account Details</CardTitle>
									</CardLabel>
								</CardHeader>
								<CardBody isScrollable>
									<Card>
										<CardBody>
											<div className='row g-4 align-items-center'>
												<div className='col-xl-auto'>
													<Avatar srcSet={User1Webp} src={User1Img} />
												</div>
												<div className='col-xl'>
													<div className='row g-4'>
														<div className='col-auto'>
															<Input
																type='file'
																autoComplete='photo'
															/>
														</div>
														<div className='col-auto'>
															<Button
																color='dark'
																isLight
																icon='Delete'>
																Delete Avatar
															</Button>
														</div>
														<div className='col-12'>
															<p className='lead text-muted'>
																Avatar helps your teammates get to
																know you.
															</p>
														</div>
													</div>
												</div>
											</div>
										</CardBody>
									</Card>
									<Card>
										<CardHeader>
											<CardLabel icon='Edit' iconColor='warning'>
												<CardTitle>Personal Information</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody>
											<div className='row g-4'>
												<div className='col-lg-6'>
													<FormGroup
														id='firstName'
														label='First Name'
														isFloating>
														<Input
															placeholder='First Name'
															autoComplete='additional-name'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.firstName}
															isValid={formik.isValid}
															isTouched={formik.touched.firstName}
															invalidFeedback={
																formik.errors.firstName
															}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
												<div className='col-lg-6'>
													<FormGroup
														id='lastName'
														label='Last Name'
														isFloating>
														<Input
															placeholder='Last Name'
															autoComplete='family-name'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.lastName}
															isValid={formik.isValid}
															isTouched={formik.touched.lastName}
															invalidFeedback={formik.errors.lastName}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
												<div className='col-lg-6'>
													<FormGroup
														id='displayName'
														label='Display Name'
														isFloating
														formText='This will be how your name will be displayed in the account section and in reviews'>
														<Input
															placeholder='Display Name'
															autoComplete='username'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.displayName}
															isValid={formik.isValid}
															isTouched={formik.touched.displayName}
															invalidFeedback={
																formik.errors.displayName
															}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
												<div className='col-lg-6'>
													<FormGroup
														id='emailAddress'
														label='Email address'
														isFloating>
														<Input
															type='email'
															placeholder='Email address'
															autoComplete='email'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.emailAddress}
															isValid={formik.isValid}
															isTouched={formik.touched.emailAddress}
															invalidFeedback={
																formik.errors.emailAddress
															}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
											</div>
										</CardBody>
									</Card>
									<Card>
										<CardHeader>
											<CardLabel icon='LocalPolice' iconColor='success'>
												<CardTitle>Password Change</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody>
											<div className='row g-4'>
												<div className='col-xl-4'>
													<FormGroup
														id='currentPassword'
														label='Current password'
														isFloating>
														<Input
															type='password'
															placeholder='Current password'
															autoComplete='current-password'
															onChange={formik.handleChange}
															value={formik.values.currentPassword}
														/>
													</FormGroup>
												</div>
												<div className='col-xl-4'>
													<FormGroup
														id='newPassword'
														label='New password'
														isFloating>
														<Input
															type='password'
															placeholder='New password'
															autoComplete='new-password'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.newPassword}
															isValid={formik.isValid}
															isTouched={formik.touched.newPassword}
															invalidFeedback={
																formik.errors.newPassword
															}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
												<div className='col-xl-4'>
													<FormGroup
														id='confirmPassword'
														label='Confirm new password'
														isFloating>
														<Input
															type='password'
															placeholder='Confirm new password'
															autoComplete='new-password'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.confirmPassword}
															isValid={formik.isValid}
															isTouched={
																formik.touched.confirmPassword
															}
															invalidFeedback={
																formik.errors.confirmPassword
															}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
											</div>
										</CardBody>
										<CardFooter>
											<CommonDesc>Leave blank to leave unchanged.</CommonDesc>
										</CardFooter>
									</Card>
								</CardBody>
								<CardFooter>
									<CardFooterLeft>
										<Button
											color='info'
											isLink
											type='reset'
											onClick={formik.resetForm}>
											Reset
										</Button>
									</CardFooterLeft>
									<CardFooterRight>
										<Button
											type='submit'
											icon='Save'
											color='info'
											isOutline
											isDisable={!formik.isValid && !!formik.submitCount}>
											Save
										</Button>
									</CardFooterRight>
								</CardFooter>
							</Card>
						)}
						{TABS.SOCIAL_MEDIA === activeTab && (
							<Card
								stretch
								tag='form'
								noValidate
								onSubmit={formikAddress.handleSubmit}>
								<CardHeader>
									<CardLabel icon='GroupWork' iconColor='info'>
										<CardTitle>{TABS.SOCIAL_MEDIA}</CardTitle>
									</CardLabel>
								</CardHeader>
								<CardBody className='pb-0' isScrollable>
									<div className='row g-4'>
										<div className='col-lg-12'>
											<FormGroup id='instagram' label='Instagram' isFloating>
												<Input
													onChange={formikAddress.handleChange}
													onBlur={formikAddress.handleBlur}
													value={formikAddress.values.addressLine}
													isValid={formikAddress.isValid}
													isTouched={formikAddress.touched.addressLine}
													invalidFeedback={
														formikAddress.errors.addressLine
													}
													validFeedback='Looks good!'
												/>
											</FormGroup>
										</div>
										<div className='col-lg-12'>
											<FormGroup id='twitter' label='Twitter' isFloating>
												<Input
													onChange={formikAddress.handleChange}
													value={formikAddress.values.twitter}
												/>
											</FormGroup>
										</div>
									</div>
								</CardBody>
								<CardFooter>
									<CardFooterLeft>
										<Button
											color='info'
											isLink
											type='reset'
											onClick={formikAddress.resetForm}>
											Reset
										</Button>
									</CardFooterLeft>
									<CardFooterRight>
										<Button
											type='submit'
											icon='Save'
											color='info'
											isOutline
											isDisable={
												!formikAddress.isValid &&
												!!formikAddress.submitCount
											}>
											Save
										</Button>
									</CardFooterRight>
								</CardFooter>
							</Card>
						)}

						{TABS.SKILL === activeTab && (
							<Card
								stretch
								tag='form'
								noValidate
								onSubmit={formikAddress.handleSubmit}>
								<CardHeader>
									<CardLabel icon='StackedBarChart' iconColor='info'>
										<CardTitle>{TABS.SKILL}</CardTitle>
									</CardLabel>
								</CardHeader>
								<CardBody className='pb-0' isScrollable>
									<div className='row g-4'>
										<div className='col-lg-12'>
											<FormGroup
												id='addressLine'
												label='Address Line'
												isFloating>
												<Input
													onChange={formikSkill.handleChange}
													onBlur={formikSkill.handleBlur}
													value={formikSkill.values.skill}
													isValid={formikSkill.isValid}
													isTouched={formikSkill.touched.instagram}
													invalidFeedback={formikSkill.errors.instagram}
													validFeedback='Looks good!'
												/>
											</FormGroup>
										</div>
										<div className='col-lg-12'>
											<FormGroup id='twitter' label='Twitter' isFloating>
												<Input
													onChange={formikAddress.handleChange}
													value={formikAddress.values.twitter}
												/>
											</FormGroup>
										</div>
									</div>
								</CardBody>
								<CardFooter>
									<CardFooterLeft>
										<Button
											color='info'
											isLink
											type='reset'
											onClick={formikAddress.resetForm}>
											Reset
										</Button>
									</CardFooterLeft>
									<CardFooterRight>
										<Button
											type='submit'
											icon='Save'
											color='info'
											isOutline
											isDisable={
												!formikAddress.isValid &&
												!!formikAddress.submitCount
											}>
											Save
										</Button>
									</CardFooterRight>
								</CardFooter>
							</Card>
						)}
						{TABS.MY_WALLET === activeTab && <CommonMyWallet />}
					</div>
					<div className='col-12'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='RateReview' iconColor='info'>
									<CardTitle>
										Rate Card
										<small className='ms-2'>
											Item:{' '}
											{selectTable.values.selectedList.length
												? `${selectTable.values.selectedList.length} / `
												: null}
											{filteredData.length}
										</small>
									</CardTitle>
								</CardLabel>
								<CardActions>
									<Dropdown isButtonGroup>
										<Popovers
											desc={
												<DatePicker
													onChange={(item) => setDate(item)}
													date={date}
													color={process.env.REACT_APP_PRIMARY_COLOR}
												/>
											}
											placement='bottom-end'
											className='mw-100'
											trigger='click'>
											<Button color='success' isLight icon='WaterfallChart'>
												{moment(date).format('MMM Do')}
											</Button>
										</Popovers>
										<DropdownToggle>
											<Button color='success' isLight />
										</DropdownToggle>
										<DropdownMenu isAlignmentEnd>
											<DropdownItem>
												<span>Last Hour</span>
											</DropdownItem>
											<DropdownItem>
												<span>Last Day</span>
											</DropdownItem>
											<DropdownItem>
												<span>Last Week</span>
											</DropdownItem>
											<DropdownItem>
												<span>Last Month</span>
											</DropdownItem>
										</DropdownMenu>
									</Dropdown>
									<Button
										color='info'
										icon='CloudDownload'
										isLight
										tag='a'
										to='/somefile.txt'
										target='_blank'
										download>
										Export
									</Button>
									<Dropdown className='d-inline'>
										<DropdownToggle hasIcon={false}>
											<Button color='light' icon='MoreHoriz' />
										</DropdownToggle>
										<DropdownMenu isAlignmentEnd>
											<DropdownItem>
												<Button icon='Edit'>Edit</Button>
											</DropdownItem>
											<DropdownItem>
												<Button icon='Delete'>Delete</Button>
											</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</CardActions>
							</CardHeader>
							<CardBody className='table-responsive' isScrollable>
								<table className='table table-modern table-hover'>
									<thead>
										<tr>
											<th scope='col'>{SelectAllCheck}</th>
											<th scope='col'>#</th>
											<th scope='col'>Image</th>
											<th scope='col'>Name</th>
											<th scope='col'>Sales</th>
											<th scope='col'>Stock</th>
											<th scope='col'>Price</th>
											<th scope='col'>Store</th>
											<th scope='col' className='text-end'>
												Actions
											</th>
										</tr>
									</thead>
									<tbody>
										{filteredData.map((i) => (
											<CommonTableRow
												key={i.id}
												// eslint-disable-next-line react/jsx-props-no-spreading
												{...i}
												selectName='selectedList'
												selectOnChange={selectTable.handleChange}
												selectChecked={selectTable.values.selectedList.includes(
													i.id.toString(),
												)}
											/>
										))}
									</tbody>
								</table>
							</CardBody>
							<CardFooter className='justify-content-center'>
								<Button color='dark' className='px-5 py-3'>
									Load More
								</Button>
							</CardFooter>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default editProfilPage;
