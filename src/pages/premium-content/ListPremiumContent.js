import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import moment from 'moment';
import { useFormik } from 'formik';
import classNames from 'classnames';
import { getUserDataWithId } from '../../common/data/userDummyData';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Page from '../../layout/Page/Page';
import data from '../../common/data/dummyPremiumContent';
import PlaceholderImage from '../../components/extras/PlaceholderImage';
import Input from '../../components/bootstrap/forms/Input';
import Badge from '../../components/bootstrap/Badge';
import Pic from '../../assets/img/wanna/richie/richie.png';
import Pic2 from '../../assets/img/wanna/richie/richie2.png';
import Pic3 from '../../assets/img/wanna/richie/richie3.png';
import Pic4 from '../../assets/img/wanna/richie/richie4.png';
import Pic5 from '../../assets/img/wanna/richie/richie5.png';
import Pic6 from '../../assets/img/wanna/richie/richie6.png';
import Pic7 from '../../assets/img/wanna/richie/richie7.png';
import Pic8 from '../../assets/img/wanna/richie/richie8.png';
import Button from '../../components/bootstrap/Button';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../components/bootstrap/Card';
import Avatar from '../../components/Avatar';
import Icon from '../../components/icon/Icon';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../components/bootstrap/Dropdown';
import dummyEventsData from '../../common/data/dummyEventsData';
import { priceFormat } from '../../helpers/helpers';
import EVENT_STATUS from '../../common/data/enumEventStatus';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Alert from '../../components/bootstrap/Alert';
import COLORS from '../../common/data/enumColors';
import tableData from '../../common/data/dummyProductData';
import CommonGridProductItem from '../common/CommonGridProductItem';
import { dashboardMenu } from '../../menu';
import dataRanking from '../../common/data/dummyRankingData';

const validate = (values) => {
	const errors = {};

	if (!values.name) {
		errors.name = 'Required';
	} else if (values.name.length < 3) {
		errors.name = 'Must be 3 characters or more';
	} else if (values.name.length > 20) {
		errors.name = 'Must be 20 characters or less';
	}

	if (!values.price) {
		errors.price = 'Required';
	} else if (values.price < 0) {
		errors.price = 'Price should not be 0';
	}

	if (!values.stock) {
		errors.stock = 'Required';
	}

	if (!values.category) {
		errors.category = 'Required';
	} else if (values.category.length < 3) {
		errors.category = 'Must be 3 characters or more';
	} else if (values.category.length > 20) {
		errors.category = 'Must be 20 characters or less';
	}

	return errors;
};

const ListPremiumContent = () => {
	const [dataProduct, setDataProduct] = useState(tableData);
	const [selectedImage, setSelectedImage] = useState(null);
	const [gallerySeeAll, setGallerySeeAll] = useState(false);
	// BEGIN :: List Tab
	const LIST_TAB = {
		LIVESESSION: 'Live Session',
		LIVECHAT: 'Live Chat',
		FOTO: 'Foto',
		VIDEO: 'Video',
		SUARA: 'Suara',
	};
	const [dataModal, setDataModal] = useState();
	const [activeListTab, setActiveListTab] = useState(LIST_TAB.LIVESESSION);
	const handleActiveListTab = (tabName) => {
		setActiveListTab(tabName);
	};
	const getStatusActiveListTabColor = (tabName) => {
		if (activeListTab === tabName) return 'success';
		return 'light';
	};
	// END :: List Tab
	const [editPanel, setEditPanel] = useState(false);
	const [editItem, setEditItem] = useState(null);
	const { id } = useParams();
	const data = getUserDataWithId(1);
	const history = useHistory();
	function handleRemove(id) {
		const newData = dataProduct.filter((item) => item.id !== id);
		setDataProduct(newData);
	}
	function handleEdit(value) {
		// history.push(`${dashboardMenu.detailProduct.path}/${id}`);
		const newData = dataProduct.filter((item) => item.id === id);
		setEditItem(newData[0]);
		setDataModal(value);
	}
	function handleDetailPage() {
		history.push(`${dashboardMenu.gallery.subMenu.detailPortofolio.path}`);
	}
	const [dayHours] = useState({
		series: [
			{
				data: [8, 12, 15, 20, 15, 22, 9],
			},
		],
		options: {
			colors: [process.env.REACT_APP_DANGER_COLOR],
			chart: {
				type: 'radar',
				width: 200,
				height: 200,
				sparkline: {
					enabled: true,
				},
			},
			xaxis: {
				categories: [
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday',
					'Saturday',
					'Sunday',
				],
				convertedCatToNumeric: false,
			},
			tooltip: {
				theme: 'dark',
				fixed: {
					enabled: false,
				},
				x: {
					show: true,
				},
				y: {
					title: {
						// eslint-disable-next-line no-unused-vars
						formatter(seriesName) {
							return 'Hours';
						},
					},
				},
			},
			stroke: {
				curve: 'smooth',
				width: 2,
			},
			plotOptions: {
				radar: {
					polygons: {
						strokeColors: `${COLORS.DANGER.code}50`,
						strokeWidth: 1,
						connectorColors: `${COLORS.DANGER.code}50`,
					},
				},
			},
		},
	});
	const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'dark'];
	const userTasks = dummyEventsData.filter((f) => f.assigned.username === data.username);
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
			{/* <SubHeader>
				<SubHeaderLeft>
					<Button
						color='info'
						isLink
						icon='ArrowBack'
						tag='a'
						to={menuSidebar.appointment.subMenu.employeeList.path}>
						Back to List
					</Button>
					<SubheaderSeparator />
					<CommonAvatarTeam isAlignmentEnd>
						<strong>Sports</strong> Team
					</CommonAvatarTeam>
				</SubHeaderLeft>
				<SubHeaderRight>
					<span className='text-muted fst-italic me-2'>Last update:</span>
					<span className='fw-bold'>13 hours ago</span>
				</SubHeaderRight>
			</SubHeader> */}
			<Page>
				<div className='row'>
					<div className='col-md-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='Lock' iconColor='success'>
									<CardTitle tag='h4' className='h5'>
										Konten Premium List
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
								{activeListTab === LIST_TAB.LIVECHAT && (
									<div className='row g-4'></div>
								)}
								{activeListTab === LIST_TAB.FOTO && (
									<div className='row g-4'>
										{data.length > 0
											? data.map((item, index) => {
													return (
														<div className='col-md-4'>
															<Card
																className='cursor-pointer shadow-3d-primary shadow-3d-hover'
																// onClick={handleOnClick}
															>
																<CardBody>
																	{/* <div
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
													</div> */}
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

						{/* <Card className='shadow-3d-primary'>
							<CardHeader>
								<CardActions>
									<Link to='/edit-profile'>
										<Button icon='Info' color='info'>
											Lihat Selengkapnya
										</Button>
									</Link>
								</CardActions>
							</CardHeader>
							<CardBody>
								
							</CardBody>
						</Card> */}
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ListPremiumContent;
