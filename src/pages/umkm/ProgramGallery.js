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

const ProgramGallery = () => {
	const [data, setData] = useState(tableData);
	const [editItem, setEditItem] = useState(null);
	const [editPanel, setEditPanel] = useState(false);

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
				<div className='d-flex justify-content-between'>
					<div className='display-4 fw-bold pt-3 pb-5'>
						{generalMenu.umkm.subMenu.programGallery.text}
					</div>
				</div>
				<div className='row'>
					{data.map((item) => (
						<div key={item.id} className='col-xxl-3 col-xl-4 col-md-6'>
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
						</div>
					))}
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ProgramGallery;
