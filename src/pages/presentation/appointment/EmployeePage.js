import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import classNames from 'classnames';
import { getUserDataWithId } from '../../../common/data/userDummyData';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader';
import Modal, { ModalBody, ModalHeader, ModalTitle } from '../../../components/bootstrap/Modal';
import Pic from '../../../assets/img/wanna/richie/richie.png';
import Pic2 from '../../../assets/img/wanna/richie/richie2.png';
import Pic3 from '../../../assets/img/wanna/richie/richie3.png';
import Pic4 from '../../../assets/img/wanna/richie/richie4.png';
import Pic5 from '../../../assets/img/wanna/richie/richie5.png';
import Pic6 from '../../../assets/img/wanna/richie/richie6.png';
import Pic7 from '../../../assets/img/wanna/richie/richie7.png';
import Pic8 from '../../../assets/img/wanna/richie/richie8.png';
import Button from '../../../components/bootstrap/Button';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Avatar from '../../../components/Avatar';
import Icon from '../../../components/icon/Icon';
import { menuSidebar } from '../../../menu';
import Badge from '../../../components/bootstrap/Badge';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import Chart from '../../../components/extras/Chart';
import dummyEventsData from '../../../common/data/dummyEventsData';
import { priceFormat } from '../../../helpers/helpers';
import EVENT_STATUS from '../../../common/data/enumEventStatus';
import Alert from '../../../components/bootstrap/Alert';
import CommonAvatarTeam from '../../../components/common/CommonAvatarTeam';
import COLORS from '../../../common/data/enumColors';
import tableData from '../../../common/data/dummyProductData';
import CommonGridProductItem from '../../common/CommonGridProductItem';

const EmployeePage = () => {
	const [dataProduct, setDataProduct] = useState(tableData);
	const [selectedImage, setSelectedImage] = useState(null);
	const [gallerySeeAll, setGallerySeeAll] = useState(false);
	const [editItem, setEditItem] = useState(null);
	const { id } = useParams();
	const data = getUserDataWithId(id);
	function handleRemove(id) {
		const newData = dataProduct.filter((item) => item.id !== id);
		setDataProduct(newData);
	}
	function handleEdit(id) {
		const newData = dataProduct.filter((item) => item.id === id);
		setEditItem(newData[0]);
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
						type='button'
						onClick={() => setSelectedImage(item.img)}
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
	return (
		<PageWrapper title={`${data.name} ${data.surname}`}>
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
				<div className='pt-3 pb-5 d-flex align-items-center'>
					<span className='display-4 fw-bold me-3'>{`${data.name} ${data.surname}`}</span>
					<span className='border border-success border-2 text-success fw-bold px-3 py-2 rounded'>
						{data.position}
					</span>
				</div>
				<div className='row'>
					<div className='col-lg-4'>
						<Card className='shadow-3d-info'>
							<CardBody>
								<div className='row g-5'>
									<div className='col-12 d-flex justify-content-center'>
										<Avatar
											src={data.src}
											srcSet={data.srcSet}
											color={data.color}
											isOnline={data.isOnline}
										/>
									</div>
									<div className='col-12'>
										<div className='row g-2'>
											<div className='col-12'>
												<div className='d-flex align-items-center'>
													<div className='flex-shrink-0'>
														<Icon icon='Mail' size='3x' color='info' />
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															{`${data.username}@site.com`}
														</div>
														<div className='text-muted'>
															Email Address
														</div>
													</div>
												</div>
											</div>
											<div className='col-12'>
												<div className='d-flex align-items-center'>
													<div className='flex-shrink-0'>
														<Icon icon='Tag' size='3x' color='info' />
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															{`@${data.username}`}
														</div>
														<div className='text-muted'>
															Social name
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</CardBody>
						</Card>
						{/* <Card>
							<CardHeader>
								<CardLabel icon='Stream' iconColor='warning'>
									<CardTitle>Skill</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								{data.services ? (
									<div className='row g-2'>
										{data?.services.map((service) => (
											<div key={service.name} className='col-auto'>
												<Badge
													isLight
													color={service.color}
													className='px-3 py-2'>
													<Icon
														icon={service.icon}
														size='lg'
														className='me-1'
													/>
													{service.name}
												</Badge>
											</div>
										))}
									</div>
								) : (
									<div className='row'>
										<div className='col'>
											<Alert
												color='warning'
												isLight
												icon='Report'
												className='mb-0'>
												No results to show
											</Alert>
										</div>
									</div>
								)}
							</CardBody>
						</Card> */}
						{/* <Card>
							<CardHeader>
								<CardLabel icon='ShowChart' iconColor='secondary'>
									<CardTitle>Statics</CardTitle>
								</CardLabel>
								<CardActions>
									Only in <strong>{moment().format('MMM')}</strong>.
								</CardActions>
							</CardHeader>
							<CardBody>
								<div className='row g-4 align-items-center'>
									<div className='col-xl-6'>
										<div className='d-flex align-items-center bg-l10-warning rounded-2 p-3'>
											<div className='flex-shrink-0'>
												<Icon icon='DoneAll' size='3x' color='warning' />
											</div>
											<div className='flex-grow-1 ms-3'>
												<div className='fw-bold fs-3 mb-0'>15</div>
												<div className='text-muted mt-n2 truncate-line-1'>
													Completed tasks
												</div>
											</div>
										</div>
									</div>
									<div className='col-xl-6'>
										<div className='d-flex align-items-center bg-l10-info rounded-2 p-3'>
											<div className='flex-shrink-0'>
												<Icon icon='Savings' size='3x' color='info' />
											</div>
											<div className='flex-grow-1 ms-3'>
												<div className='fw-bold fs-3 mb-0'>1,280</div>
												<div className='text-muted mt-n2 truncate-line-1'>
													Earning
												</div>
											</div>
										</div>
									</div>
									<div className='col-xl-6'>
										<div className='d-flex align-items-center bg-l10-primary rounded-2 p-3'>
											<div className='flex-shrink-0'>
												<Icon
													icon='Celebration'
													size='3x'
													color='primary'
												/>
											</div>
											<div className='flex-grow-1 ms-3'>
												<div className='fw-bold fs-3 mb-0'>76</div>
												<div className='text-muted mt-n2 truncate-line-1'>
													Occupancy
												</div>
											</div>
										</div>
									</div>
									<div className='col-xl-6'>
										<div className='d-flex align-items-center bg-l10-success rounded-2 p-3'>
											<div className='flex-shrink-0'>
												<Icon icon='Timer' size='3x' color='success' />
											</div>
											<div className='flex-grow-1 ms-3'>
												<div className='fw-bold fs-3 mb-0'>42</div>
												<div className='text-muted mt-n2'>Hours</div>
											</div>
										</div>
									</div>
								</div>
							</CardBody>
						</Card> */}
						<Card>
							<CardHeader>
								<CardLabel>
									<CardTitle>About Me</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
									vitae velit efficitur nulla dignissim commodo nec vitae odio.
									Proin ut risus metus. Aenean dui lectus, laoreet at ornare et,
									pellentesque id mauris. Morbi a molestie elit. Nunc eget mi in
									lectus rutrum venenatis. Duis dapibus porta justo, nec dapibus
									tellus condimentum ultrices. In hac habitasse platea dictumst.
									Nulla facilisi. Aenean consequat gravida felis vitae vestibulum.
									Suspendisse lacinia ex sed tellus imperdiet, ut lacinia odio
									rutrum.
								</p>
								<p>
									Pellentesque vel sem bibendum, tristique urna a, lacinia tortor.
									Suspendisse dapibus lectus id venenatis tincidunt. Proin tempor
									lorem non arcu rutrum interdum. Cras sit amet ultricies lacus,
									vitae luctus nunc. Sed commodo hendrerit augue, et aliquet sem
									commodo in. Pellentesque in diam eros. Sed quis sapien eros. Sed
									eleifend at arcu vitae sagittis.
								</p>
								<p>
									Morbi at fringilla lorem. Nulla eu odio a ante vulputate
									finibus. Duis congue finibus nibh fermentum.
								</p>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-8'>
						<Card className='shadow-3d-primary'>
							<CardHeader>
								<CardLabel icon='Summarize' iconColor='success'>
									<CardTitle tag='h4' className='h5'>
										Badge
									</CardTitle>
								</CardLabel>
								<CardActions>
									<Dropdown>
										<DropdownToggle>
											<Button color='info' icon='Compare' isLight>
												Compared to{' '}
												<strong>{moment().format('YYYY') - 1}</strong>.
											</Button>
										</DropdownToggle>
										<DropdownMenu isAlignmentEnd size='sm'>
											<DropdownItem>
												<span>{moment().format('YYYY') - 2}</span>
											</DropdownItem>
											<DropdownItem>
												<span>{moment().format('YYYY') - 3}</span>
											</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</CardActions>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-md-6'>
										<Card
											className='bg-l25-primary bg-l10-primary-hover transition-base rounded-2 mb-4'
											shadow='sm'>
											<CardHeader className='bg-transparent'>
												<CardLabel>
													<CardTitle tag='h4' className='h5'>
														Work
													</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<div className='d-flex align-items-center pb-3'>
													<div className='flex-shrink-0'>
														<Icon
															icon='EmojiEmotions'
															size='4x'
															color='primary'
														/>
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-3 mb-0'>
															100%
															<span className='text-info fs-5 fw-bold ms-3'>
																0
																<Icon icon='TrendingFlat' />
															</span>
														</div>
														<div className='text-muted'>
															Compared to ($5000 last year)
														</div>
													</div>
												</div>
											</CardBody>
										</Card>
										<Card
											className='bg-l25-success bg-l10-success-hover transition-base rounded-2 mb-0'
											shadow='sm'>
											<CardHeader className='bg-transparent'>
												<CardLabel>
													<CardTitle tag='h4' className='h5'>
														Certificate
													</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<div className='d-flex align-items-center pb-3'>
													<div className='flex-shrink-0'>
														<Icon
															icon='CardMembership'
															size='4x'
															color='success'
														/>
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-3 mb-0'>
															1
															<span className='text-success fs-5 fw-bold ms-3'>
																-50%
																<Icon icon='TrendingDown' />
															</span>
														</div>
														<div className='text-muted'>
															Compared to (2 last week)
														</div>
													</div>
												</div>
											</CardBody>
										</Card>
									</div>
									<div className='col-md-6'>
										<Card
											className='bg-l25-danger bg-l10-danger-hover transition-base rounded-2 mb-0'
											stretch
											shadow='sm'>
											<CardHeader className='bg-transparent'>
												<CardLabel>
													<CardTitle tag='h4' className='h5'>
														Love
													</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody className='pt-0'>
												{/* <Chart
													className='d-flex justify-content-center'
													series={dayHours.series}
													options={dayHours.options}
													type={dayHours.options.chart.type}
													height={dayHours.options.chart.height}
													width={dayHours.options.chart.width}
												/> */}
												<div className='d-flex align-items-center pb-3'>
													<div className='flex-shrink-0'>
														<Icon
															icon='AddTask'
															size='4x'
															color='danger'
														/>
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-3 mb-0'>
															~22H
															<span className='text-danger fs-5 fw-bold ms-3'>
																+12.5%
																<Icon icon='TrendingUp' />
															</span>
														</div>
														<div className='text-muted'>
															Compared to (~19H 30M last week)
														</div>
													</div>
												</div>
											</CardBody>
										</Card>
									</div>
									<div className='col-md-12'>
										<Card
											className='bg-l25-danger bg-l10-danger-hover transition-base rounded-2 mb-0'
											stretch
											shadow='sm'>
											<CardHeader className='bg-transparent'>
												<CardLabel>
													<CardTitle tag='h4' className='h5'>
														Engadgement Rate
													</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody className='pt-0'>
												<div className='d-flex align-items-center pb-3'>
													<div className='flex-shrink-0'>
														<Icon
															icon='Timer'
															size='4x'
															color='danger'
														/>
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-3 mb-0'>
															~22H
															<span className='text-danger fs-5 fw-bold ms-3'>
																+12.5%
																<Icon icon='TrendingUp' />
															</span>
														</div>
														<div className='text-muted'>
															Compared to (~19H 30M last week)
														</div>
													</div>
												</div>
											</CardBody>
										</Card>
									</div>
								</div>
							</CardBody>
						</Card>
						<Card>
							<CardHeader>
								<CardLabel icon='PhotoSizeSelectActual' iconColor='info'>
									<CardTitle>Photos and Videos</CardTitle>
								</CardLabel>
								<CardActions>
									<Button
										color='info'
										isLight
										onClick={() => setGallerySeeAll(true)}>
										See All
									</Button>
								</CardActions>
							</CardHeader>
							<CardBody>{_gallery}</CardBody>
						</Card>
						<Modal setIsOpen={setSelectedImage} isOpen={!!selectedImage} isCentered>
							<ModalHeader setIsOpen={setSelectedImage}>
								<ModalTitle id='preview'>Preview</ModalTitle>
							</ModalHeader>
							<ModalBody>
								<img src={selectedImage} alt='eneme' />
							</ModalBody>
						</Modal>
						<Modal
							setIsOpen={setGallerySeeAll}
							isOpen={gallerySeeAll}
							fullScreen
							titleId='gallery-full'>
							<ModalHeader setIsOpen={setGallerySeeAll}>
								<ModalTitle id='gallery-full'>Gallery</ModalTitle>
							</ModalHeader>
							<ModalBody>{_gallery}</ModalBody>
						</Modal>
					</div>
				</div>
				<div className='display-4 fw-bold py-3'>Rate Card</div>
				<div className='row'>
					{dataProduct.map((item) => (
						<div key={item.id} className='col-xxl-3 col-xl-4 col-md-6'>
							<CommonGridProductItem
								id={item.id}
								name={item.name}
								category={item.category}
								img={item.image}
								color={item.color}
								series={item.series}
								price={item.price}
								editAction={() => {
									setEditPanel(true);
									handleEdit(item.id);
								}}
								deleteAction={() => handleRemove(item.id)}
							/>
						</div>
					))}
				</div>
				<div className='row'>
					<div className='col-xxl-12 col-xl-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='GraphicEq' iconColor='danger'>
									<CardTitle>
										<CardLabel>Ranking</CardLabel>
									</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='table-responsive'>
									<table className='table table-modern mb-0'>
										<thead>
											<tr>
												<th>Date / Time</th>
												<th>Customer</th>
												<th>Service</th>
												<th>Duration</th>
												<th>Payment</th>
												<th>Status</th>
											</tr>
										</thead>
										<tbody>
											{userTasks.map((item) => (
												<tr key={item.id}>
													<td>
														<div className='d-flex align-items-center'>
															<span
																className={classNames(
																	'badge',
																	'border border-2 border-light',
																	'rounded-circle',
																	'bg-success',
																	'p-2 me-2',
																	`bg-${item.status.color}`,
																)}>
																<span className='visually-hidden'>
																	{item.status.name}
																</span>
															</span>
															<span className='text-nowrap'>
																{moment(
																	`${item.date} ${item.time}`,
																).format('MMM Do YYYY, h:mm a')}
															</span>
														</div>
													</td>
													<td>
														<div>
															<div>{item.customer.name}</div>
															<div className='small text-muted'>
																{item.customer.email}
															</div>
														</div>
													</td>
													<td>{item.service.name}</td>
													<td>{item.duration}</td>
													<td>
														{item.payment && priceFormat(item.payment)}
													</td>
													<td>
														<Dropdown>
															<DropdownToggle hasIcon={false}>
																<Button
																	isLink
																	color={item.status.color}
																	icon='Circle'
																	className='text-nowrap'>
																	{item.status.name}
																</Button>
															</DropdownToggle>
															<DropdownMenu>
																{Object.keys(EVENT_STATUS).map(
																	(key) => (
																		<DropdownItem key={key}>
																			<div>
																				<Icon
																					icon='Circle'
																					color={
																						EVENT_STATUS[
																							key
																						].color
																					}
																				/>
																				{
																					EVENT_STATUS[
																						key
																					].name
																				}
																			</div>
																		</DropdownItem>
																	),
																)}
															</DropdownMenu>
														</Dropdown>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
								{!userTasks.length && (
									<Alert color='warning' isLight icon='Report' className='mt-3'>
										There is no scheduled and assigned task.
									</Alert>
								)}
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default EmployeePage;
