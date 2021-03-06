import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../layout/SubHeader/SubHeader';
import Button from '../../components/bootstrap/Button';
import CommonGridProductItem from '../common/CommonGridProductItem';
import tableData from '../../common/data/dummyUmkmData';
import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../components/bootstrap/OffCanvas';
import Card, { CardBody, CardHeader, CardLabel, CardTitle } from '../../components/bootstrap/Card';
import Badge from '../../components/bootstrap/Badge';
import Input from '../../components/bootstrap/forms/Input';
import PlaceholderImage from '../../components/extras/PlaceholderImage';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import { generalMenu, menuSidebar } from '../../menu';
import Breadcrumb from '../../components/bootstrap/Breadcrumb';
import Icon from '../../components/icon/Icon';
import { Link, useLocation } from 'react-router-dom';

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

const GalleryUmkm = () => {
	const [data, setData] = useState(tableData);
	const [editItem, setEditItem] = useState(null);
	const [editPanel, setEditPanel] = useState(false);
	const address = useLocation();
	const addressURL = address.pathname.split('/');
	function handleRemove(id) {
		const newData = data.filter((item) => item.id !== id);
		setData(newData);
	}

	function handleEdit(id) {
		const newData = data.filter((item) => item.id === id);
		setEditItem(newData[0]);
	}

	const formik = useFormik({
		initialValues: {
			name: '',
			price: '',
			stock: '',
			category: '',
		},
		validate,
		// eslint-disable-next-line no-unused-vars
		onSubmit: (values) => {
			setEditPanel(false);
		},
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
		<PageWrapper title={generalMenu.umkm.subMenu.programGallery.text}>
			<Page>
				<div>
					<div className='display-4 fw-bold pt-3 pb-4'>History Programku </div>
					<div className='text-muted h5 mb-5'>
						Terima kasih sudah berpartisipasi dalam membantu UMKM di Indonesia!
					</div>
				</div>
				<div className='row'>
					<div className='col-md-4'>
						<Card>
							<CardBody>
								<div className='d-flex justify-content-between pt-4 pb-3  border-bottom'>
									<div className='fw-600 h5'>Program yang kamu ikuti</div>
									<div className='h5'>
										<b>12</b>
									</div>
								</div>
								<div className='d-flex justify-content-between pt-4 pb-3 '>
									<div className='fw-600 h5'>Work badge didapatkan</div>
									<div className='h5'>
										<b>
											<Icon icon='EmojiEmotions' /> 321
										</b>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-md-8'>
						{addressURL[1] === 'umkm' && addressURL[2] === 'program' ? (
							<Card>
								<CardBody>
									{data.map((item) => (
										<div className='my-4 border-bottom'>
											<div className='text-muted mb-2'>12 Januari 2022</div>
											<div className='d-flex justify-content-between align-items-center mb-3'>
												<div>
													<div className='me-3' style={{ float: 'left' }}>
														<img
															src={item.image}
															alt=''
															width={62}
															height={62}
															className='mx-auto d-block img-fluid my-2'
														/>
													</div>
													<div>
														<div className='fw-bold h5 truncate-line-2'>
															{item.name}
														</div>
														<Link to='#' className='h6 truncate-line-1'>
															<Icon
																icon='HouseSiding'
																className='me-2'
															/>
															konekios.com/tokodok
														</Link>
													</div>
												</div>
												<div className='fw-bold'>
													<Icon
														icon='EmojiEmotions'
														color='success'
														size='2x'
														className='me-2'
													/>
													+10
												</div>
											</div>
										</div>
									))}
								</CardBody>
							</Card>
						) : (
							data.map((item) => (
								<CommonGridProductItem
									id={item.id}
									name={item.name}
									desc={item.desc}
									img={item.image}
									color={item.color}
									series={item.series}
									price={item.price}
									point={item.point}
									editAction={() => {
										setEditPanel(true);
										handleEdit(item.id);
									}}
									deleteAction={() => handleRemove(item.id)}
								/>
							))
						)}
					</div>
				</div>
			</Page>

			<OffCanvas
				setOpen={setEditPanel}
				isOpen={editPanel}
				isModalStyle
				tag='form'
				noValidate
				onSubmit={formik.handleSubmit}>
				<OffCanvasHeader setOpen={setEditPanel}>
					<OffCanvasTitle id='edit-panel'>
						{editItem?.name || 'New Product'}{' '}
						{editItem?.name ? (
							<Badge color='primary' isLight>
								Edit
							</Badge>
						) : (
							<Badge color='success' isLight>
								New
							</Badge>
						)}
					</OffCanvasTitle>
				</OffCanvasHeader>
				<OffCanvasBody>
					<Card>
						<CardHeader>
							<CardLabel icon='Photo' iconColor='info'>
								<CardTitle>Product Image</CardTitle>
							</CardLabel>
						</CardHeader>
						<CardBody>
							<div className='row'>
								<div className='col-12'>
									{editItem?.image ? (
										<img
											src={editItem.image}
											alt=''
											width={128}
											height={128}
											className='mx-auto d-block img-fluid mb-3'
										/>
									) : (
										<PlaceholderImage
											width={128}
											height={128}
											className='mx-auto d-block img-fluid mb-3 rounded'
										/>
									)}
								</div>
								<div className='col-12'>
									<div className='row g-4'>
										<div className='col-12'>
											<Input type='file' autoComplete='photo' />
										</div>
										<div className='col-12'>
											<Button
												color='dark'
												isLight
												icon='Delete'
												className='w-100'
												onClick={() => {
													setEditItem({ ...editItem, image: null });
												}}>
												Delete Image
											</Button>
										</div>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardLabel icon='Description' iconColor='success'>
								<CardTitle>Product Details</CardTitle>
							</CardLabel>
						</CardHeader>
						<CardBody>
							<div className='row g-4'>
								<div className='col-12'>
									<FormGroup id='name' label='Name' isFloating>
										<Input
											placeholder='Name'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.name}
											isValid={formik.isValid}
											isTouched={formik.touched.name}
											invalidFeedback={formik.errors.name}
											validFeedback='Looks good!'
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='price' label='Price' isFloating>
										<Input
											placeholder='Price'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.price}
											isValid={formik.isValid}
											isTouched={formik.touched.price}
											invalidFeedback={formik.errors.price}
											validFeedback='Looks good!'
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='stock' label='Stock' isFloating>
										<Input
											placeholder='Stock'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.stock}
											isValid={formik.isValid}
											isTouched={formik.touched.stock}
											invalidFeedback={formik.errors.stock}
											validFeedback='Looks good!'
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='category' label='Category' isFloating>
										<Input
											placeholder='Category'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.category}
											isValid={formik.isValid}
											isTouched={formik.touched.category}
											invalidFeedback={formik.errors.category}
											validFeedback='Looks good!'
										/>
									</FormGroup>
								</div>
							</div>
						</CardBody>
					</Card>
				</OffCanvasBody>
				<div className='p-3'>
					<Button
						color='info'
						icon='Save'
						type='submit'
						isDisable={!formik.isValid && !!formik.submitCount}>
						Save
					</Button>
				</div>
			</OffCanvas>
		</PageWrapper>
	);
};

export default GalleryUmkm;
