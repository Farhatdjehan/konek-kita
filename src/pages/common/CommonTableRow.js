import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Checks from '../../components/bootstrap/forms/Checks';
import Chart from '../../components/extras/Chart';
import Badge from '../../components/bootstrap/Badge';
import Button from '../../components/bootstrap/Button';
import { personalMenu, menuSidebar, generalMenu } from '../../menu';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../components/bootstrap/Modal';
import { OffCanvasTitle } from '../../components/bootstrap/OffCanvas';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';

const CommonTableRow = ({
	// eslint-disable-next-line react/prop-types
	id,
	// eslint-disable-next-line react/prop-types
	image,
	// eslint-disable-next-line react/prop-types
	name,
	// eslint-disable-next-line react/prop-types
	benefit,
	category,
	// eslint-disable-next-line react/prop-types
	series,
	// eslint-disable-next-line react/prop-types
	color,
	// eslint-disable-next-line react/prop-types
	stock,
	// eslint-disable-next-line react/prop-types
	price,
	// eslint-disable-next-line react/prop-types
	store,
	// eslint-disable-next-line react/prop-types
	selectOnChange,
	// eslint-disable-next-line react/prop-types
	selectChecked,
	// eslint-disable-next-line react/prop-types
	selectName,
	handleAdd,
}) => {
	const [upcomingEventsEditOffcanvas, setUpcomingEventsEditOffcanvas] = useState(false);
	const address = useLocation();
	const addressUrl = address.pathname.split('/');
	const dummyOptions = {
		colors: [color],
		chart: {
			type: 'line',
			width: 100,
			height: 35,
			sparkline: {
				enabled: true,
			},
		},
		tooltip: {
			theme: 'dark',
			fixed: {
				enabled: false,
			},
			x: {
				show: false,
			},
			y: {
				title: {
					// eslint-disable-next-line no-unused-vars
					formatter(seriesName) {
						return '';
					},
				},
			},
		},
		stroke: {
			curve: 'smooth',
			width: 2,
		},
	};
	const formik = useFormik({
		initialValues: {
			name: '',
			price: '',
			desc: '',
		},
		// onSubmit: onFormSubmit,
	});

	const handleUpcomingEdit = () => {
		setUpcomingEventsEditOffcanvas(!upcomingEventsEditOffcanvas);
	};
	return (
		<>
			<tr>
				{addressUrl[1] === 'edit-profile' ? (
					<>
						<td>
							<Link to={`${generalMenu.detailProduct.path}/${id}`}>
								<img src={image} alt={name} width={54} height={54} />
							</Link>
						</td>
						<td>
							<div>
								<Link to={`${generalMenu.detailProduct.path}/${id}`}>{name}</Link>
							</div>
						</td>
						<td>
							<span>
								{price.toLocaleString('id-ID', {
									style: 'currency',
									currency: 'IDR',
								})}
							</span>
						</td>
						<td>
							<div>{category}</div>
						</td>
						<td>
							<div className='text-muted'>
								<small>{benefit}</small>
							</div>
						</td>
						<td className='text-end'>
							<Button
								color='dark'
								isLight
								icon='Edit'
								tag='a'
								onClick={handleUpcomingEdit}
							/>
						</td>
					</>
				) : (
					<>
						<th scope='row'>
							<Checks
								id={id.toString()}
								name={selectName}
								value={id}
								onChange={selectOnChange}
								checked={selectChecked}
							/>
						</th>
						<th scope='row'>{id}</th>
						<td>
							<Link to={`${personalMenu.detailProduct.path}/${id}`}>
								<img src={image} alt={name} width={54} height={54} />
							</Link>
						</td>
						<td>
							<div>
								<Link to={`${personalMenu.detailProduct.path}/${id}`}>{name}</Link>
								<div className='text-muted'>
									<small>{category}</small>
								</div>
							</div>
						</td>
						<td>
							<Chart
								series={series}
								options={dummyOptions}
								type={dummyOptions.chart.type}
								height={dummyOptions.chart.height}
								width={dummyOptions.chart.width}
							/>
						</td>
						<td>
							<span>{stock}</span>
						</td>
						<td>
							<span>
								{price.toLocaleString('id-ID', {
									style: 'currency',
									currency: 'IDR',
								})}
							</span>
						</td>
						<td className='h5'>
							<Badge
								color={
									(store === 'Company A' && 'danger') ||
									(store === 'Company B' && 'warning') ||
									(store === 'Company C' && 'success') ||
									'info'
								}>
								{store}
							</Badge>
						</td>
						<td className='text-end'>
							<Button
								color='dark'
								isLight
								icon='Edit'
								tag='a'
								to={`${personalMenu.detailProduct.path}/${id}`}
							/>
						</td>
					</>
				)}
			</tr>
			<Modal
				setIsOpen={setUpcomingEventsEditOffcanvas}
				isOpen={upcomingEventsEditOffcanvas}
				titleId='upcomingEdit'
				isCentered
				isScrollable
				size='lg'>
				<ModalHeader setIsOpen={setUpcomingEventsEditOffcanvas}>
					<OffCanvasTitle id='upcomingEdit'>Edit Rate Card</OffCanvasTitle>
				</ModalHeader>
				<ModalBody>
					<div className='row g-4'>
						<div className='col-12'>
							<Input type='file' autoComplete='photo' />
						</div>
						<div className='col-12'>
							<FormGroup id='namapaket' label='Nama Paket' isFloating>
								<Input
									placeholder='Nama Paket'
									onChange={formik.handleChange}
									value={name}
								/>
							</FormGroup>
						</div>

						<div className='col-12'>
							<FormGroup id='hargapaket' label='Harga Paket' isFloating>
								<Input
									placeholder='Harga Paket'
									onChange={formik.handleChange}
									value={price}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='description' label='Description' isFloating>
								<Input
									placeholder='Deskripsi Paket'
									onChange={formik.handleChange}
									value={category}
								/>
							</FormGroup>
						</div>
					</div>
				</ModalBody>
				<ModalFooter className='bg-transparent'>
					<Button
						color='info'
						icon='Save'
						onClick={() => setUpcomingEventsEditOffcanvas(false)}>
						Save
					</Button>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default CommonTableRow;
