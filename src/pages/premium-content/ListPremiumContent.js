import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import classNames from 'classnames';
import { getUserDataWithId } from '../../common/data/userDummyData';
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
	CardTitle,
} from '../../components/bootstrap/Card';
import Icon from '../../components/icon/Icon';
import { dashboardMenu } from '../../menu';

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
										<div className='col-md-4'>
											<Card>
												<CardHeader>
													<CardLabel iconColor='success'>
														<CardTitle tag='h4' className='h5'>
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
													<div className='d-flex justify-content-between align-items-center'>
														<div>
															<Icon icon='Info' /> 12/12/2022
														</div>
														<Button color='info'>
															Join Live Session
														</Button>
													</div>
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
		</PageWrapper>
	);
};

export default ListPremiumContent;
