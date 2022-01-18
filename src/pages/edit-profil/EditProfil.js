import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Views } from 'react-big-calendar';
import moment from 'moment';
import { Calendar as DatePicker } from 'react-date-range';
import { useHistory } from 'react-router-dom';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../layout/SubHeader/SubHeader';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '../../components/bootstrap/Modal';
import Pic from '../../assets/img/wanna/richie/richie.png';
import Pic2 from '../../assets/img/wanna/richie/richie2.png';
import Pic3 from '../../assets/img/wanna/richie/richie3.png';
import Pic4 from '../../assets/img/wanna/richie/richie4.png';
import Pic5 from '../../assets/img/wanna/richie/richie5.png';
import Pic6 from '../../assets/img/wanna/richie/richie6.png';
import Pic7 from '../../assets/img/wanna/richie/richie7.png';
import Pic8 from '../../assets/img/wanna/richie/richie8.png';
import data from '../../common/data/dummyProductData';
import Button from '../../components/bootstrap/Button';
import useSelectTable from '../../hooks/useSelectTable';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../components/bootstrap/Dropdown';
import CommonTableRow from '../common/CommonTableRow';
import Page from '../../layout/Page/Page';
import Card, {
	CardActions,
	CardBody,
	CardFooter,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../components/bootstrap/Card';
import Avatar from '../../components/Avatar';
import User1Webp from '../../assets/img/wanna/wanna2.webp';
import User1Img from '../../assets/img/wanna/wanna2.png';
import Input from '../../components/bootstrap/forms/Input';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import CommonDesc from '../../components/common/CommonDesc';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Icon from '../../components/icon/Icon';
import eventList from '../../common/data/events';
import { getLabel, getUnitType, getViews } from '../../components/extras/calendarHelper';
import CommonMyWallet from '../common/CommonMyWallet';
import Popovers from '../../components/bootstrap/Popovers';
import showNotification from '../../components/extras/showNotification';
import { dashboardMenu, editPage } from '../../menu';
import classNames from 'classnames';
import { OffCanvasTitle } from '../../components/bootstrap/OffCanvas';

const EditProfil = () => {
	const history = useHistory();
	const [dataUser, setDataUser] = useState({
		first_name: '',
		last_name: '',
		display_name: '',
		email_address: '',
		about_me: '',
		current_password: '',
		new_password: '',
		confirm_password: '',
	});
	const [dataSosmed, setDataSosmed] = useState({
		instagram: '',
		twitter: '',
		facebook: '',
		linked_in: '',
	});
	const [dataSkill, setDataSkill] = useState({
		skill_industry_one: '',
		skill_industry_two: '',
	});
	const TABS = {
		ACCOUNT_DETAIL: 'Detail Account',
		SOCIAL_MEDIA: 'Social Media',
		SKILL: 'Skill & Industry',
		PORTO: 'Portofolio',
		MY_WALLET: 'My Balance & Card',
	};
	const [activeTab, setActiveTab] = useState(TABS.ACCOUNT_DETAIL);
	const [modal, setModal] = useState(false);
	//
	// Events
	const [events, setEvents] = useState(eventList);
	//
	const [filterMenu, setFilterMenu] = useState(false);
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

	const formikPorto = useFormik({
		initialValues: {
			creators: '',
			brand: '',
			client: '',
			link: '',
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

	const filteredData = data;
	function handleDetailPage() {
		history.push(`${dashboardMenu.gallery.subMenu.detailPortofolio.path}`);
	}
	const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'dark'];
	const images = [
		{ id: 'Pic', img: Pic },
		{ id: 'Pic2', img: Pic2 },
		{ id: 'Pic3', img: Pic3 },
		{ id: 'Pic4', img: Pic4 },
		{ id: 'Pic5', img: Pic5 },
		{ id: 'Pic6', img: Pic6 },
		{ id: 'Pic7', img: Pic7 },
		{ id: 'Pic8', img: Pic8 },
	];
	const _gallery = (
		<div className='row g-4'>
			{images.map((item, index) => (
				<div key={item.id} className='col-xxl-2 col-lg-3 col-md-6'>
					<button
						onClick={handleDetailPage}
						className={classNames(
							'ratio ratio-1x1',
							'rounded-2',
							'border-0',
							`bg-l25-${colors[index % 7]}`,
							`bg-l10-${colors[index % 7]}-hover`,
						)}>
						<img
							src={item.img}
							alt={item.id}
							width='100%'
							height='auto'
							className='object-fit-contain p-4'
						/>
					</button>
				</div>
			))}
		</div>
	);
	// const { selectTable, SelectAllCheck } = useSelectTable(filteredData);
	const handleChange = (e) => {
		const newData = { ...dataUser };
		const newDataSosmed = { ...dataSosmed };
		newData[e.target.id] = e.target.value;
		if (
			e.target.id === 'instagram' ||
			e.target.id === 'twitter' ||
			e.target.id === 'facebook' ||
			e.target.id === 'linked_in'
		) {
			newDataSosmed[e.target.id] = e.target.value;
			setDataSosmed(newDataSosmed);
		} else {
			newData[e.target.id] = e.target.value;
			setDataUser(newData);
		}
	};

	const handleReset = (type_tab) => {
		if (type_tab === 'biodata') {
			setDataUser({
				first_name: '',
				last_name: '',
				display_name: '',
				email_address: '',
				about_me: '',
			});
		} else if (type_tab === 'sosmed') {
			setDataSosmed({
				instagram: '',
				twitter: '',
				facebook: '',
				linked_in: '',
			});
		} else {
			setDataSkill({
				skill_industry_one: '',
				skill_industry_two: '',
			});
		}
	};

	const handleAddPorto = () => {
		setModal(true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		showNotification(
			<span className='d-flex align-items-center'>
				<Icon icon='Info' size='lg' className='me-1' />
				<span>Updated Successfully</span>
			</span>,
			"The user's account details have been successfully updated.",
		);
	};
	return (
		<PageWrapper title={editPage.editProfil.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Button color='info' isLink icon='ArrowBack' onClick={() => history.goBack()}>
						Cancel Edit
					</Button>
					<SubheaderSeparator />
					<Avatar srcSet={User1Webp} src={User1Img} size={32} />
					<span>
						<strong>Anya Geraldine</strong>
					</span>
					<span className='text-muted'>Edit User</span>
				</SubHeaderLeft>
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
									<div className='col-12'>
										<Button
											icon='Picture'
											color='info'
											className='w-100 p-3'
											isLight={TABS.PORTO !== activeTab}
											onClick={() => setActiveTab(TABS.PORTO)}>
											{TABS.PORTO}
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
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-xxl-10 col-xl-9 col-lg-7'>
						{TABS.ACCOUNT_DETAIL === activeTab && (
							<Card stretch tag='form' noValidate onSubmit={handleSubmit}>
								<CardHeader>
									<CardLabel icon='Contacts' iconColor='info'>
										<CardTitle>Account Details</CardTitle>
									</CardLabel>
									<CardActions>
										<Dropdown>
											<DropdownToggle>
												<Button color='info' icon='FilterAlt' isLight>
													Tipe Akun
												</Button>
											</DropdownToggle>
											<DropdownMenu isAlignmentEnd size='sm'>
												<DropdownItem>Single</DropdownItem>
												<DropdownItem>Manager</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</CardActions>
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
														id='first_name'
														label='First Name'
														isFloating>
														<Input
															placeholder='First Name'
															name='first_name'
															onChange={handleChange}
															value={dataUser.first_name}
														/>
													</FormGroup>
												</div>
												<div className='col-lg-6'>
													<FormGroup
														id='last_name'
														label='Last Name'
														isFloating>
														<Input
															placeholder='Last Name'
															name='last_name'
															onChange={handleChange}
															value={dataUser.last_name}
														/>
													</FormGroup>
												</div>
												<div className='col-lg-6'>
													<FormGroup
														id='display_name'
														label='Display Name'
														isFloating
														formText='This will be how your name will be displayed in the account section and in reviews'>
														<Input
															placeholder='Display Name'
															name='display_name'
															onChange={handleChange}
															value={dataUser.display_name}
														/>
													</FormGroup>
												</div>
												<div className='col-lg-6'>
													<FormGroup
														id='email_address'
														label='Email address'
														isFloating>
														<Input
															type='email'
															placeholder='Email address'
															onChange={handleChange}
															value={dataUser.email_address}
														/>
													</FormGroup>
												</div>
												<div className='col-lg-12'>
													<FormGroup
														id='about_me'
														label='About Me'
														isFloating>
														<Input
															type='text'
															placeholder='Tell me about yourself'
															onChange={handleChange}
															value={dataUser.about_me}
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
														id='current_password'
														label='Current password'
														isFloating>
														<Input
															type='password'
															name='current_password'
															placeholder='Current password'
															onChange={handleChange}
															value={dataUser.current_password}
														/>
													</FormGroup>
												</div>
												<div className='col-xl-4'>
													<FormGroup
														id='new_password'
														label='New password'
														isFloating>
														<Input
															type='password'
															name='new_password'
															placeholder='New password'
															onChange={handleChange}
															value={dataUser.new_password}
														/>
													</FormGroup>
												</div>
												<div className='col-xl-4'>
													<FormGroup
														id='confirm_password'
														label='Confirm new password'
														isFloating>
														<Input
															type='password'
															name='confirm_password'
															placeholder='Confirm password'
															onChange={handleChange}
															value={dataUser.confirm_password}
														/>
													</FormGroup>
												</div>
											</div>
										</CardBody>
										<CardFooter>
											<CommonDesc>Leave blank to leave unchanged.</CommonDesc>
										</CardFooter>
									</Card>
									<CardFooter className='d-flex flex-row'>
										<div>
											<Button
												className='me-4'
												color='info'
												isLink
												type='reset'
												onClick={() => handleReset('biodata')}>
												Reset
											</Button>
										</div>
										<div>
											<Button type='submit' icon='Save' color='info'>
												Save
											</Button>
										</div>
									</CardFooter>
								</CardBody>
							</Card>
						)}
						{TABS.SOCIAL_MEDIA === activeTab && (
							<Card stretch tag='form' noValidate onSubmit={handleSubmit}>
								<CardHeader>
									<CardLabel icon='GroupWork' iconColor='info'>
										<CardTitle>{TABS.SOCIAL_MEDIA}</CardTitle>
									</CardLabel>
								</CardHeader>
								<CardBody className='pb-0'>
									<div className='row g-4'>
										<div className='col-lg-12'>
											<FormGroup id='instagram' label='Instagram' isFloating>
												<Input
													type='text'
													onChange={handleChange}
													placeholder='Instagram'
													value={dataSosmed.instagram}
													name='instagram'
												/>
											</FormGroup>
										</div>
										<div className='col-lg-12'>
											<FormGroup id='twitter' label='Twitter' isFloating>
												<Input
													onChange={handleChange}
													value={dataSosmed.twitter}
													name='twitter'
												/>
											</FormGroup>
										</div>
										<div className='col-lg-12'>
											<FormGroup id='facebook' label='Facebook' isFloating>
												<Input
													onChange={handleChange}
													value={dataSosmed.facebook}
													name='facebook'
												/>
											</FormGroup>
										</div>
										<div className='col-lg-12'>
											<FormGroup id='linked_in' label='Linked In' isFloating>
												<Input
													onChange={handleChange}
													value={dataSosmed.linked_in}
													name='linked_in'
												/>
											</FormGroup>
										</div>
									</div>
								</CardBody>
								<CardFooter className='d-flex flex-row'>
									<div>
										<Button
											color='info'
											isLink
											type='reset'
											onClick={() => handleReset('sosmed')}>
											Reset
										</Button>
									</div>
									<div>
										<Button type='submit' icon='Save' color='info'>
											Save
										</Button>
									</div>
								</CardFooter>
							</Card>
						)}

						{TABS.SKILL === activeTab && (
							<Card stretch tag='form' noValidate onSubmit={handleSubmit}>
								<CardHeader>
									<CardLabel icon='StackedBarChart' iconColor='info'>
										<CardTitle>{TABS.SKILL}</CardTitle>
									</CardLabel>
								</CardHeader>
								<CardBody className='pb-0' isScrollable>
									<div className='row g-4'>
										<div className='col-lg-12'>
											<FormGroup
												id='skill_industry_one'
												label='Skill'
												isFloating>
												<Input
													name='skill_industry_one'
													onChange={handleChange}
													value={dataSkill.skill_industry_one}
												/>
											</FormGroup>
										</div>
										<div className='col-lg-12'>
											<FormGroup
												id='skill_industry_two'
												label='Industry'
												isFloating>
												<Input
													name='skill_industry_two'
													onChange={handleChange}
													value={dataSkill.skill_industry_two}
												/>
											</FormGroup>
										</div>
									</div>
								</CardBody>
								<CardFooter className='d-flex flex-row'>
									<div>
										<Button
											color='info'
											isLink
											type='reset'
											onClick={() => handleReset('skill')}>
											Reset
										</Button>
									</div>
									<div>
										<Button type='submit' icon='Save' color='info'>
											Save
										</Button>
									</div>
								</CardFooter>
							</Card>
						)}

						{TABS.PORTO === activeTab && (
							<Card stretch tag='form' noValidate onSubmit={handleSubmit}>
								<CardHeader>
									<CardLabel icon='StackedBarChart' iconColor='info'>
										<CardTitle>{TABS.PORTO}</CardTitle>
									</CardLabel>
									<CardActions>
										<Button onClick={handleAddPorto} color='info' icon='Add'>
											Tambah
										</Button>
									</CardActions>
								</CardHeader>
								<CardBody className='pb-0' isScrollable>
									{_gallery}
								</CardBody>
								<CardFooter className='d-flex flex-row'>
									<div>
										<Button
											color='info'
											isLink
											type='reset'
											onClick={() => handleReset('skill')}>
											Reset
										</Button>
									</div>
									<div>
										<Button type='submit' icon='Save' color='info'>
											Save
										</Button>
									</div>
								</CardFooter>
							</Card>
						)}

						{TABS.MY_WALLET === activeTab && <CommonMyWallet />}
					</div>
					<div className='col-12'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='RateReview' iconColor='info'>
									<CardTitle>Rate Card</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody className='table-responsive' isScrollable>
								<table className='table table-modern table-hover'>
									<thead>
										<tr>
											{/* <th scope='col'>{SelectAllCheck}</th> */}
											<th scope='col'>#</th>
											<th scope='col'>Nama Paket</th>
											<th scope='col'>Harga Paket</th>
											<th scope='col'>Benefit</th>
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
												// selectOnChange={selectTable.handleChange}
												// selectChecked={selectTable.values.selectedList.includes(
												// 	i.id.toString(),
												// )}
											/>
										))}
									</tbody>
								</table>
							</CardBody>
							{/* <CardFooter className='justify-content-center'>
								<Button color='dark' className='px-5 py-3'>
									Load More
								</Button>
							</CardFooter> */}
						</Card>
					</div>
				</div>
			</Page>
			<Modal
				setIsOpen={setModal}
				isOpen={modal}
				titleId='upcomingEdit'
				isCentered
				isScrollable
				size='lg'>
				<ModalHeader setIsOpen={setModal}>
					<OffCanvasTitle id='upcomingEdit'>Tambahkan Portofolio</OffCanvasTitle>
				</ModalHeader>
				<ModalBody>
					<div className='row g-4'>
						<div className='col-5'>
							<Input type='file' autoComplete='photo' />
						</div>
						<div className='col-12'>
							<FormGroup id='namapekarya' label='Nama Pekarya' isFloating>
								<Input
									placeholder='Mention Pekarya'
									onChange={formikPorto.handleChange}
									value={formikPorto.values.creators}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='namabrand' label='Nama Brand' isFloating>
								<Input
									placeholder='Nama Brand'
									onChange={formikPorto.handleChange}
									value={formikPorto.values.brand}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='namaklien' label='Nama Klien' isFloating>
								<Input
									placeholder='Nama Klien'
									onChange={formikPorto.handleChange}
									value={formikPorto.values.client}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='linktoko' label='Link Toko' isFloating>
								<Input
									placeholder='Link Toko Anda'
									onChange={formikPorto.handleChange}
									value={formikPorto.values.link}
								/>
							</FormGroup>
						</div>
					</div>
				</ModalBody>
				<ModalFooter className='bg-transparent'>
					<Button icon='Save' color='info' onClick={() => setModal(false)}>
						Save
					</Button>
				</ModalFooter>
			</Modal>
		</PageWrapper>
	);
};

export default EditProfil;
