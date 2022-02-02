import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Select from '../../components/bootstrap/forms/Select';
import Card, { CardBody, CardTitle } from '../../components/bootstrap/Card';
import Badge from '../../components/bootstrap/Badge';
import data, { CATEGORIES } from './helper/dummyCertificateList';
import { personalMenu, menuSidebar } from '../../menu';
import Icon from '../../components/icon/Icon';
import Button from '../../components/bootstrap/Button';

// eslint-disable-next-line react/prop-types
const Item = ({ id, image, title, author, date, description, tags, color }) => {
	const history = useHistory();
	// const handleOnClick = useCallback(
	// 	() => history.push(`${personalMenu.gallery.subMenu.detailProgramContent.path}/${id}`),
	// 	[history, id],
	// );
	return (
		<Card
			className='cursor-pointer shadow-3d-primary shadow-3d-hover'
			// onClick={handleOnClick}
		>
			<CardBody>
				<div className={classNames('ratio ratio-1x1', 'rounded-2', 'mb-3')}>
					<img
						src={image}
						alt=''
						width='100%'
						height='auto'
						className='object-fit-contain p-3'
					/>
				</div>
				<CardTitle>{title}</CardTitle>
				<p className='text-muted mb-2'>
					<Icon className='me-2' icon='CalendarFill' />
					{date}
				</p>

				<p className='text-muted'>
					<Icon className='me-2' icon='Person' />
					{author}
				</p>
			</CardBody>
		</Card>
	);
};

const CertificateList = () => {
	const [filterableData, setFilterableData] = useState(data);
	const searchAndFilterData = (searchValue, category) => {
		let tempData = data;

		if (category)
			tempData = data.filter((item) =>
				item.categories.find((categ) => categ.value === category),
			);

		return tempData.filter((item) => {
			return (
				item.title.toLowerCase().includes(searchValue) ||
				item.description.toLowerCase().includes(searchValue) ||
				item.content.toLowerCase().includes(searchValue) ||
				item.categories.find((categ) => categ.text.toLowerCase().includes(searchValue)) ||
				item.tags.find((tag) => tag.text.toLowerCase().includes(searchValue))
			);
		});
	};

	const debounce = (func, wait) => {
		let timeout;

		return function executedFunction(...args) {
			const later = () => {
				clearTimeout(timeout);
				func(...args);
			};

			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		};
	};

	const onFormSubmit = (values) => {
		const searchValue = values.search.toString().toLowerCase();
		const newData = searchAndFilterData(searchValue, values.category);

		if (!values.search && !values.category) {
			setFilterableData(data);
		} else {
			setFilterableData(newData);
		}
	};

	const formik = useFormik({
		initialValues: {
			search: '',
			category: '',
		},
		onSubmit: onFormSubmit,
		onReset: () => setFilterableData(data),
	});

	return (
		<PageWrapper title={personalMenu.sendBadge.subMenu.certificateUpload.text}>
			<Page>
				<div className='row'>
					<div className='col-10 text-left my-3 my-md-5'>
						<span className='display-5 fw-bold'>
							{personalMenu.sendBadge.subMenu.certificateUpload.text}
						</span>
					</div>
					<div className='col-auto text-end my-3 my-md-5'>
						<Button color='info'>Upload Sertifikat</Button>
					</div>
				</div>
				<div className='row mb-5'>
					{filterableData.map((item) => (
						<div key={item.id} className='col-xl-3 col-lg-4 col-md-6'>
							{/* eslint-disable-next-line react/jsx-props-no-spreading */}
							<Item {...item} />
						</div>
					))}
				</div>
			</Page>
		</PageWrapper>
	);
};

export default CertificateList;
