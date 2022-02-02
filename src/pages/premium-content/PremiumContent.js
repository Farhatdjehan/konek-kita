import React, { useState } from 'react';
import moment from 'moment';
import { useFormik } from 'formik';
import classNames from 'classnames';
import { Calendar as DatePicker } from 'react-date-range';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../layout/SubHeader/SubHeader';
import Icon from '../../components/icon/Icon';
import Button from '../../components/bootstrap/Button';
import Page from '../../layout/Page/Page';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../components/bootstrap/Card';
import { priceFormat } from '../../helpers/helpers';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../components/bootstrap/Modal';
import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../components/bootstrap/OffCanvas';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import Textarea from '../../components/bootstrap/forms/Textarea';
import Checks from '../../components/bootstrap/forms/Checks';
import Popovers from '../../components/bootstrap/Popovers';
import data from '../../common/data/dummyPremiumContent';
import USERS from '../../common/data/userDummyData';
import { personalMenu } from '../../menu';
import Select from '../../components/bootstrap/forms/Select';
import { Options } from '../../components/bootstrap/Option';

const EditInModalPage = () => {
	const [value, setValue] = useState('add');
	const [dataDetail, setDataDetail] = useState();
	// BEGIN :: Upcoming Events
	const [upcomingEventsInfoOffcanvas, setUpcomingEventsInfoOffcanvas] = useState(false);
	const handleUpcomingDetails = () => {
		setUpcomingEventsInfoOffcanvas(!upcomingEventsInfoOffcanvas);
	};

	const [upcomingEventsEditOffcanvas, setUpcomingEventsEditOffcanvas] = useState(false);
	const handleUpcomingEdit = (type) => {
		setValue(type);
		// if (value === !undefined) {
		setDataDetail(value);
		// }
		setUpcomingEventsEditOffcanvas(!upcomingEventsEditOffcanvas);
	};
	// END :: Upcoming Events

	const formik = useFormik({
		initialValues: {
			judulkonten: value === 'add' ? 'tes' : 'dua',
			tag: '',
			tipekonten: ``,
			link: '',
			desc: '',
		},
	});
	return (
		<PageWrapper title={personalMenu.premiumContent.text}>
			{/* <SubHeader>
				<SubHeaderLeft>
					<Icon icon='Info' className='me-2' size='2x' />
					<span className='text-muted'>
						You have <Icon icon='TaskAlt' color='success' className='mx-1' size='lg' />{' '}
						3 approved appointments and{' '}
						<Icon icon='Alarm' color='warning' className='mx-1' size='lg' /> 4 pending
						appointments for today ya!.
					</span>
				</SubHeaderLeft>
				<SubHeaderRight>
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
						<Button color='light'>
							{`${moment(date).startOf('weeks').format('MMM Do')} - ${moment(date)
								.endOf('weeks')
								.format('MMM Do')}`}
						</Button>
					</Popovers>
				</SubHeaderRight>
			</SubHeader> */}
			<Page container='fluid'>
				<div className='row'>
					<div className='col-12'>
						<Card>
							<CardHeader borderSize={1}>
								<CardLabel icon='Lock' iconColor='info'>
									<CardTitle>Premium Content</CardTitle>
								</CardLabel>
								<CardActions>
									<Button
										color='info'
										icon='Upload'
										onClick={() => handleUpcomingEdit('add')}>
										Upload
									</Button>
								</CardActions>
							</CardHeader>
							<CardBody className='table-responsive'>
								<table className='table table-modern'>
									<thead>
										<tr>
											<th>Judul</th>
											<th>Deskripsi</th>
											<th>Tag</th>
											<th>Tipe</th>
											<th>Link</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{data.map((item) => (
											<tr key={item.id}>
												<td>
													<div className='d-flex'>
														<div className='flex-grow-1 ms-3 d-flex align-items-center'>
															{item.title}
														</div>
													</div>
												</td>
												<td>
													<span className='text-nowrap'>
														{/* {moment(`${item.date} ${item.time}`).format(
															'MMM Do YYYY, h:mm a',
														)} */}
														<div>{item.desc}</div>
													</span>
												</td>
												<td>
													<div>
														{item.tag &&
															item.tag?.map((e, i) => {
																return e.tags_name;
															})}
													</div>
												</td>
												<td>{item.type}</td>
												<td>{item.link}</td>
												<td>
													<Button
														isOutline
														color='dark'
														className='border-light text-nowrap'
														icon='Edit'
														onClick={() => handleUpcomingEdit('edit')}>
														Edit
													</Button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</CardBody>
						</Card>

						<OffCanvas
							setOpen={setUpcomingEventsInfoOffcanvas}
							isOpen={upcomingEventsInfoOffcanvas}
							titleId='upcomingDetails'
							isModalStyle
							isBackdrop={false}>
							<OffCanvasHeader setOpen={setUpcomingEventsInfoOffcanvas}>
								<OffCanvasTitle id='upcomingDetails'>
									Customer: Alison Berry
								</OffCanvasTitle>
							</OffCanvasHeader>
							<OffCanvasBody>
								<Card>
									<CardBody>
										<div className='row g-4'>
											<div className='col-12'>
												<FormGroup
													id='dateInfo'
													name='date'
													label='Date/Time'>
													<Input
														value={moment(
															`${data.find((e) => e.id === 1).date} ${
																data.find((e) => e.id === 1).time
															}`,
														).format('MMM Do YYYY, h:mm a')}
														readOnly
														disabled
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup id='noteInfo' name='note' label='Note'>
													<Textarea
														value={formik.values.note}
														readOnly
														disabled
													/>
												</FormGroup>
											</div>
										</div>
									</CardBody>
								</Card>
							</OffCanvasBody>
						</OffCanvas>

						<Modal
							setIsOpen={setUpcomingEventsEditOffcanvas}
							isOpen={upcomingEventsEditOffcanvas}
							titleId='upcomingEdit'
							isCentered
							isScrollable
							size='lg'>
							<ModalHeader setIsOpen={setUpcomingEventsEditOffcanvas}>
								<OffCanvasTitle id='upcomingEdit'>Edit Konten</OffCanvasTitle>
							</ModalHeader>
							<ModalBody>
								<div className='row g-4'>
									<div className='col-12'>
										<FormGroup id='judulkonten' label='Judul Konten' isFloating>
											<Input
												placeholder='Judul Konten'
												onChange={formik.handleChange}
												value={formik.values.title}
											/>
										</FormGroup>
									</div>
									<div className='col-12'>
										<FormGroup id='tag' label='Tag' isFloating>
											<Input
												placeholder='Tag'
												onChange={formik.handleChange}
												value={formik.values.tag}
											/>
										</FormGroup>
									</div>
									<div className='col-12'>
										<FormGroup
											id='tipekonten'
											label='Tipe Konten'
											className='mb-3'>
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
									{formik.values.tipekonten === '1' ? (
										<div className='col-6'>
											<Input type='file' autoComplete='photo' />
										</div>
									) : formik.values.tipekonten === '2' ? (
										<div className='col-12'>
											<FormGroup id='link' label='Link Zoom' isFloating>
												<Input
													placeholder='Link Zoom'
													onChange={formik.handleChange}
													value={formik.values.link}
												/>
											</FormGroup>
										</div>
									) : formik.values.tipekonten === '3' ? (
										<>
											<div className='col-5'>
												<Input type='file' autoComplete='video' />
											</div>
											<div className='col-2 d-flex justify-content-center'>
												atau
											</div>
											<div className='col-5'>
												<FormGroup id='link' label='Link Video' isFloating>
													<Input
														placeholder='Link Video'
														onChange={formik.handleChange}
														value={formik.values.link}
													/>
												</FormGroup>
											</div>
										</>
									) : formik.values.tipekonten === '4' ? (
										<>
											<div className='col-5'>
												<Input type='file' autoComplete='suara' />
											</div>
											<div className='col-2 d-flex justify-content-center'>
												atau
											</div>
											<div className='col-5'>
												<FormGroup id='link' label='Link Suara' isFloating>
													<Input
														placeholder='Link Suara'
														onChange={formik.handleChange}
														value={formik.values.link}
													/>
												</FormGroup>
											</div>
										</>
									) : null}

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
							</ModalBody>
							<ModalFooter className='bg-transparent'>
								<Button
									color='info'
									icon='Upload'
									onClick={() => setUpcomingEventsEditOffcanvas(false)}>
									Upload
								</Button>
							</ModalFooter>
						</Modal>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default EditInModalPage;
