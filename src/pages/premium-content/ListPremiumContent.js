import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import classNames from 'classnames';
import USERS, { getUserDataWithId } from '../../common/data/userDummyData';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Page from '../../layout/Page/Page';
import dataContent from '../../common/data/dummyPremiumContent';
import Badge from '../../components/bootstrap/Badge';
import Button from '../../components/bootstrap/Button';
import ChatList from '../chat/ChatList';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../components/bootstrap/Card';
import eventList from '../../common/data/events';
import Icon from '../../components/icon/Icon';
import { personalMenu } from '../../menu';
import CHATS from '../../common/data/chatDummyData';
import Chat, { ChatGroup } from '../../components/Chat';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../components/bootstrap/Modal';
import { OffCanvasTitle } from '../../components/bootstrap/OffCanvas';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import {
	CalendarTodayButton,
	CalendarViewModeButtons,
	getLabel,
	getUnitType,
	getViews,
} from '../../components/extras/calendarHelper';
import moment from 'moment';
import Textarea from '../../components/bootstrap/forms/Textarea';
import Select from '../../components/bootstrap/forms/Select';

const localizer = momentLocalizer(moment);
const now = new Date();

const myEventsList = [{ start: new Date(), end: new Date(), title: 'special event' }];

const ListPremiumContent = () => {
	// BEGIN :: List Tab
	const TABS = {
		CHLOE: USERS.CHLOE,
	};
	const [activeTab, setActiveTab] = useState(TABS.CHLOE);
	function getMessages() {
		return CHATS.CHLOE_VS_JOHN;
	}
	const LIST_TAB = {
		LIVESESSION: 'Live Session',
		LIVECHAT: 'Live Chat',
		FOTO: 'Foto',
		VIDEO: 'Video',
		SUARA: 'Suara',
	};

	const [upcomingEventsInfoOffcanvas, setUpcomingEventsInfoOffcanvas] = useState(false);
	const [activeListTab, setActiveListTab] = useState(LIST_TAB.LIVESESSION);
	const handleActiveListTab = (tabName) => {
		setActiveListTab(tabName);
	};
	const getStatusActiveListTabColor = (tabName) => {
		if (activeListTab === tabName) return 'success';
		return 'light';
	};
	// END :: List Tab
	// Selected Event
	const [eventItem, setEventItem] = useState(null);

	// Events
	const [events, setEvents] = useState(eventList);

	const [editItem, setEditItem] = useState(null);
	const [viewMode, setViewMode] = useState(Views.MONTH);
	const [dataDetail, setDataDetail] = useState();
	const [date, setDate] = useState(new Date());
	const [modal, setModal] = useState(false);
	const [value, setValue] = useState();
	const [eventAdding, setEventAdding] = useState(false);
	const data = getUserDataWithId(1);
	const history = useHistory();
	const filterData = dataContent.filter((f) => f.type === activeListTab);

	const Item = ({ id, title, desc, user, image, type, tags, color, categories, content }) => {
		const history = useHistory();
		const handleOnClick = useCallback(
			() => history.push(`${personalMenu.detailPremiumContent.path}/${id}`),
			[history, id],
		);
		return (
			<Card className='cursor-pointer shadow-3d-primary shadow-3d-hover'>
				<CardBody>
					<div
						className={classNames(
							'ratio ratio-1x1',
							'rounded-2',
							// `bg-l10-${color}`,
							'mb-3',
						)}>
						<img
							onClick={handleOnClick}
							src={image}
							alt=''
							width='100%'
							height='auto'
							className='object-fit-contain p-3'
						/>
					</div>
					<CardTitle>{title}</CardTitle>
					<p className='text-muted truncate-line-2'>{desc}</p>
					<div className='row g-2'>
						{tags &&
							// eslint-disable-next-line react/prop-types
							tags.map((e, i) => (
								<div key={i} className='col-auto'>
									<Badge isLight className='px-3 py-2'>
										{e.tags_name}
									</Badge>
								</div>
							))}
					</div>
					<div className='mt-3 w-100 text-end'>
						<Button onClick={() => handleModal(type, id)} color='info' icon='Edit'>
							Edit
						</Button>
					</div>
				</CardBody>
			</Card>
		);
	};

	const handleOnClick = useCallback(
		() => history.push(`${personalMenu.premiumContent.subMenu.detailPremiumContent.path}/1`),
		[history],
	);
	// Change view mode
	const handleViewMode = (e) => {
		setDate(moment(e)._d);
		setViewMode(Views.DAY);
	};
	// View modes; Month, Week, Work Week, Day and Agenda
	const views = getViews();

	// New Event
	const handleSelect = ({ start, end }) => {
		setEventAdding(true);
		setEventItem({ start, end });
	};
	const formik = useFormik({
		initialValues: {
			name: '',
			price: '',
			desc: '',
		},
		// onSubmit: onFormSubmit,
	});
	const formikAdd = useFormik({
		initialValues: {
			judulkonten: '',
			tag: '',
			tipekonten: ``,
			link: '',
			desc: '',
		},
	});
	useEffect(() => {
		if (editItem) {
			console.log(editItem);
			formikAdd.setValues({
				judulkonten: editItem.title,
				tag: editItem.tags?.map((item) => {
					item?.tags_name;
				}),
				tipekonten: editItem.type,
				link: editItem.link,
				desc: editItem.desc,
			});
		}
		return () => {
			formikAdd.setValues({
				judulkonten: '',
				tag: '',
				tipekonten: ``,
				link: '',
				desc: '',
			});
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [editItem]);

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

	const handleModal = (type, id) => {
		const newData = dataContent.filter((item) => item.id === id);
		setEditItem(newData[0]);
		setValue(type);
		setUpcomingEventsInfoOffcanvas(!upcomingEventsInfoOffcanvas);
	};

	return (
		<PageWrapper title='Konten Premium'>
			<Page>
				<div className='row'>
					<div className='col-md-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='Lock' iconColor='success'>
									<CardTitle tag='h4' className='h5'>
										List Konten Premium
									</CardTitle>
								</CardLabel>
								<CardActions className='d-flex'>
									<div className='bg-light p-2 rounded-3'>
										{Object.keys(LIST_TAB).map((key) => (
											<Button
												key={key}
												color={getStatusActiveListTabColor(LIST_TAB[key])}
												onClick={() => handleActiveListTab(LIST_TAB[key])}>
												{LIST_TAB[key]}
											</Button>
										))}
									</div>
								</CardActions>
							</CardHeader>
							<CardBody className='table-responsive'>
								{activeListTab === LIST_TAB.LIVESESSION && (
									<div>
										<div className='row g-4'>
											<div className='col-md-12'>
												<div className='mt-5'>
													<div className='d-flex align-items-center w-100 justify-content-between'>
														<div className='h4 fw-bold mb-3'>
															List Live Session
														</div>
														<div className='mb-3 text-end'>
															<Button
																onClick={() =>
																	handleModal('Live Session')
																}
																color='info'
																icon='Add'>
																Tambah Jadwal
															</Button>
														</div>
													</div>
													<div className='mb-3'>
														<Card>
															<CardHeader>
																<CardLabel iconColor='success'>
																	<CardTitle
																		tag='h4'
																		className='h5'>
																		<Icon
																			icon='VideoCall'
																			size='2x'
																			className='me-2'
																			color='danger'
																		/>
																		Live Session #2
																	</CardTitle>
																</CardLabel>
															</CardHeader>
															<CardBody>
																<div className='mb-3'>
																	<div>
																		<Icon icon='Info' />{' '}
																		12/12/2022
																	</div>
																</div>
																<div className='text-end'>
																	<Button
																		onClick={() =>
																			handleModal(
																				'Live Session', 
																			)
																		}
																		className='me-3'
																		color='success'>
																		Edit Jadwal
																	</Button>
																	<Button color='info' isLight>
																		Join Live Session
																	</Button>
																</div>
															</CardBody>
														</Card>
													</div>
												</div>
												<Card>
													<CardHeader>
														<CardActions>
															<CalendarTodayButton
																unitType={unitType}
																date={date}
																setDate={setDate}
																viewMode={viewMode}
															/>
														</CardActions>
														<CardActions>
															<CalendarViewModeButtons
																setViewMode={setViewMode}
																viewMode={viewMode}
															/>
														</CardActions>
													</CardHeader>
													<CardBody>
														<Calendar
															style={{ height: 450 }}
															toolbar={false}
															localizer={localizer}
															events={myEventsList}
															views={views}
															view={viewMode}
															startAccessor='start'
															endAccessor='end'
															onView={handleViewMode}
															eventPropGetter={eventStyleGetter}
														/>
													</CardBody>
												</Card>
											</div>
											{/* <div className='col-md-4'>
											<Card>
												<CardHeader>
													<CardTitle>Live Chat</CardTitle>
												</CardHeader>
												<CardBody>
													<Chat>
														{getMessages(activeTab).map((msg) => (
															<ChatGroup
																messages={msg.messages}
																user={msg.user}
																isReply={msg.isReply}
															/>
														))}
													</Chat>
												</CardBody>
											</Card>
										</div> */}
										</div>
									</div>
								)}
								{activeListTab === LIST_TAB.LIVECHAT && <ChatList />}
								{activeListTab === LIST_TAB.FOTO && (
									<div>
										<div className='mb-3 text-end'>
											<Button
												onClick={() => handleModal('photo')}
												color='info'
												icon='Upload'>
												Upload Foto
											</Button>
										</div>
										<div className='row g-4'>
											{filterData.length > 0
												? filterData.map((item, index) => (
														<div
															key={index}
															className='col-xl-3 col-lg-4 col-md-6'>
															<Item {...item} />
														</div>
												  ))
												: null}
										</div>
									</div>
								)}
								{activeListTab === LIST_TAB.VIDEO && (
									<div>
										<div className='mb-3 text-end'>
											<Button
												onClick={() => handleModal('Video')}
												color='info'
												icon='Upload'>
												Upload Video
											</Button>
										</div>
										<div className='row g-4'>
											{filterData.length > 0
												? filterData.map((item, index) => (
														<div
															key={index}
															className='col-xl-3 col-lg-4 col-md-6'>
															<Item {...item} />
														</div>
												  ))
												: null}
										</div>
									</div>
								)}
								{activeListTab === LIST_TAB.SUARA && (
									<div>
										<div className='mb-3 text-end'>
											<Button
												onClick={() => handleModal('Suara')}
												color='info'
												icon='Upload'>
												Upload Suara
											</Button>
										</div>
										<div className='row g-4'>
											{filterData.length > 0
												? filterData.map((item, index) => (
														<div
															key={index}
															className='col-xl-3 col-lg-4 col-md-6'>
															<Item {...item} />
														</div>
												  ))
												: null}
										</div>
									</div>
								)}
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
			<Modal
				setIsOpen={setUpcomingEventsInfoOffcanvas}
				isOpen={upcomingEventsInfoOffcanvas}
				titleId='upcomingEdit'
				isCentered
				isScrollable
				size='lg'>
				<ModalHeader setIsOpen={setUpcomingEventsInfoOffcanvas}>
					<OffCanvasTitle id='upcomingEdit'>Edit Konten</OffCanvasTitle>
				</ModalHeader>
				<ModalBody>
					<div className='row g-4'>
						<div className='col-12'>
							<FormGroup id='judulkonten' label='Judul Konten'>
								<Input
									placeholder='Judul Konten'
									onChange={formikAdd.handleChange}
									value={formikAdd.values.judulkonten}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='tag' label='Tag'>
								<Input
									placeholder='Tag'
									onChange={formikAdd.handleChange}
									value={formikAdd.values.tag}
								/>
							</FormGroup>
						</div>
						{value === 'Foto' ? (
							<div className='col-6'>
								<FormGroup id='tag' label='Upload Foto'>
									<Input type='file' autoComplete='photo' />
								</FormGroup>
							</div>
						) : value === 'Live Session' ? (
							<div className='col-12'>
								<FormGroup id='link' label='Link Zoom'>
									<Input
										placeholder='Link Zoom'
										onChange={formikAdd.handleChange}
										value={formikAdd.values.link}
									/>
								</FormGroup>
							</div>
						) : value === 'Video' ? (
							<>
								<div className='col-5'>
									<FormGroup id='link' label='Upload Video'>
										<Input type='file' autoComplete='Video' />
									</FormGroup>
								</div>
								<div className='col-2 d-flex justify-content-center align-items-center'>
									atau
								</div>
								<div className='col-5'>
									<FormGroup id='link' label='Link Video'>
										<Input
											placeholder='Link Video'
											onChange={formikAdd.handleChange}
											value={formikAdd.values.link}
										/>
									</FormGroup>
								</div>
							</>
						) : value === 'Suara' ? (
							<>
								<div className='col-5'>
									<FormGroup id='link' label='Upload Suara'>
										<Input type='file' autoComplete='suara' />
									</FormGroup>
								</div>
								<div className='col-2 d-flex justify-content-center align-items-center'>
									atau
								</div>
								<div className='col-5'>
									<FormGroup id='link' label='Link Suara'>
										<Input
											placeholder='Link Suara'
											onChange={formikAdd.handleChange}
											value={formikAdd.values.link}
										/>
									</FormGroup>
								</div>
							</>
						) : null}

						<div className='col-12'>
							<Card isCompact className='mb-3'>
								<CardHeader>
									<CardLabel>
										<CardTitle>Deskripsi</CardTitle>
									</CardLabel>
								</CardHeader>
								<CardBody>
									<FormGroup id='desc'>
										<Textarea
											rows={8}
											onChange={formikAdd.handleChange}
											value={formikAdd.values.desc}
										/>
									</FormGroup>
								</CardBody>
							</Card>
						</div>
					</div>
				</ModalBody>
				<ModalFooter className='bg-transparent'>
					<Button
						color='info'
						icon='Upload'
						onClick={() => setUpcomingEventsInfoOffcanvas(false)}>
						Upload
					</Button>
				</ModalFooter>
			</Modal>
			<Modal
				setIsOpen={setModal}
				isOpen={modal}
				titleId='form'
				isCentered
				isScrollable
				size='lg'>
				<ModalHeader setIsOpen={setModal}>
					<OffCanvasTitle id='form'>Tambahkan Live Session</OffCanvasTitle>
				</ModalHeader>
				<ModalBody>
					<div className='row g-4'>
						<form>
							<div className='row g-4'>
								<div className='col-12'>
									<FormGroup
										id='livesession_name'
										label='Nama Live Session'
										isFloating>
										<Input
											placeholder='Judul Live Session'
											// onChange={formik.handleChange}
											// value={formik.values.name}
										/>
									</FormGroup>
								</div>
								<div className='col-6'>
									<FormGroup id='start_date' label='Start Date'>
										<Input
											placeholder='Date'
											// onChange={formik.handleChange}
											// value={formik.values.start_date}
											type='date'
										/>
									</FormGroup>
								</div>
								<div className='col-6'>
									<FormGroup id='end_date' label='End Date'>
										<Input
											placeholder='Date'
											// onChange={formik.handleChange}
											// value={formik.values.end_date}
											type='date'
										/>
									</FormGroup>
								</div>
							</div>
						</form>
					</div>
				</ModalBody>
				<ModalFooter className='bg-transparent'>
					<Button color='info' icon='Save' onClick={() => setModal(false)}>
						Simpan
					</Button>
				</ModalFooter>
			</Modal>
		</PageWrapper>
	);
};

export default ListPremiumContent;
