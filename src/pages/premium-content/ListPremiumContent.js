import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import classNames from 'classnames';
import USERS, { getUserDataWithId } from '../../common/data/userDummyData';
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
import Icon from '../../components/icon/Icon';
import { dashboardMenu } from '../../menu';
import CHATS from '../../common/data/chatDummyData';
import Chat, { ChatGroup } from '../../components/Chat';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../components/bootstrap/Modal';
import { OffCanvasTitle } from '../../components/bootstrap/OffCanvas';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';

const Item = ({ id, title, desc, user, image, tags, color, categories, content }) => {
	const history = useHistory();
	const handleOnClick = useCallback(
		() =>
			history.push(`${dashboardMenu.premiumContent.subMenu.detailPremiumContent.path}/${id}`),
		[history, id],
	);
	return (
		<Card className='cursor-pointer shadow-3d-primary shadow-3d-hover' onClick={handleOnClick}>
			<CardBody>
				<div
					className={classNames(
						'ratio ratio-1x1',
						'rounded-2',
						// `bg-l10-${color}`,
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
			</CardBody>
		</Card>
	);
};

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
	const [activeListTab, setActiveListTab] = useState(LIST_TAB.LIVESESSION);
	const handleActiveListTab = (tabName) => {
		setActiveListTab(tabName);
	};
	const getStatusActiveListTabColor = (tabName) => {
		if (activeListTab === tabName) return 'success';
		return 'light';
	};
	// END :: List Tab
	const [editItem, setEditItem] = useState(null);
	const [modal, setModal] = useState(false);
	const data = getUserDataWithId(1);
	const history = useHistory();
	const filterData = dataContent.filter((f) => f.type === activeListTab);
	const filterVideo = dataContent.filter((f) => f.type === 'Video');

	const filterSuara = dataContent.filter((f) => f.type === 'Suara');

	const handleOnClick = useCallback(
		() => history.push(`${dashboardMenu.premiumContent.subMenu.detailPremiumContent.path}/1`),
		[history],
	);

	const formik = useFormik({
		initialValues: {
			name: '',
			price: '',
			desc: '',
		},
		// onSubmit: onFormSubmit,
	});

	useEffect(() => {
		if (editItem) {
			formik.setValues({
				name: editItem.name,
				price: editItem.price,
				stock: editItem.stock,
				category: editItem.category,
			});
		}
		return () => {
			formik.setValues({
				name: '',
				price: '',
				stock: '',
				category: '',
			});
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [editItem]);
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
									<div className='row g-4'>
										<div className='col-md-8'>
											<img
												src='/static/media/scene1.edf253f4.png'
												alt='Tes'
												width='100%'
												height='auto'
												className='object-fit-contain p-5'
											/>
											<div>
												<Card>
													<CardHeader>
														<CardLabel iconColor='success'>
															<CardTitle tag='h4' className='h4'>
																<Icon
																	icon='Schedule'
																	size='2x'
																	className='me-2'
																	color='success'
																/>
																Jadwal Live Session
															</CardTitle>
														</CardLabel>
														<CardActions>
															<Button
																onClick={() => setModal(true)}
																icon='Add'
																color='success'>
																Tambah Jadwal
															</Button>
														</CardActions>
													</CardHeader>
													<CardBody>
														<ul className='list-group'>
															<li className='list-group-item border-start-0 border-end-0 border-1 rounded-0'>
																<div className='d-flex justify-content-between my-3'>
																	<div>
																		<div className='mb-3'>
																			12 Jan 2021
																		</div>
																		<div className='h5 fw-700 '>
																			Live Ngobrol Sama Akuuuu
																		</div>
																	</div>
																	<div>16.00-18.00</div>
																</div>
															</li>
														</ul>
													</CardBody>
												</Card>
											</div>
										</div>
										<div className='col-md-4'>
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
										</div>
									</div>
								)}
								{activeListTab === LIST_TAB.LIVECHAT && <ChatList />}
								{activeListTab === LIST_TAB.FOTO && (
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
								)}
								{activeListTab === LIST_TAB.VIDEO && (
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
								)}
								{activeListTab === LIST_TAB.SUARA && (
									<div className='row g-4'>
										{filterSuara.length > 0
											? filterSuara.map((item, index) => {
													return (
														<div key={index} className='col-md-4'>
															<Card
																className='cursor-pointer shadow-3d-primary shadow-3d-hover'
																// onClick={handleOnClick}
															>
																<CardBody>
																	<div
																		className={classNames(
																			'ratio ratio-1x1',
																			'rounded-2',
																			// `bg-l10-${color}`,
																			'mb-3',
																		)}>
																		<img
																			src={item.image}
																			alt=''
																			width='100%'
																			height='auto'
																			className='object-fit-contain p-3'
																		/>
																	</div>
																	<CardTitle>
																		{item.title}
																	</CardTitle>
																	<p className='text-muted truncate-line-2'>
																		{item.desc}
																	</p>
																	<div className='row g-2'>
																		{item.tags &&
																			// eslint-disable-next-line react/prop-types
																			item.tags.map(
																				(e, i) => (
																					<div
																						key={i}
																						className='col-auto'>
																						<Badge
																							isLight
																							className='px-3 py-2'>
																							{
																								e.tags_name
																							}
																						</Badge>
																					</div>
																				),
																			)}
																	</div>
																</CardBody>
															</Card>
														</div>
													);
											  })
											: null}
									</div>
								)}
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
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
