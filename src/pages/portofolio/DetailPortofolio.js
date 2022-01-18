import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import classNames from 'classnames';
// import data from './helper/dummyKnowledgeData';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../layout/SubHeader/SubHeader';
import Button, { ButtonGroup } from '../../components/bootstrap/Button';
import Avatar from '../../components/Avatar';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Badge from '../../components/bootstrap/Badge';
import USERS from '../../common/data/userDummyData';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '../../components/bootstrap/Modal';
import Input from '../../components/bootstrap/forms/Input';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import { OffCanvasTitle } from '../../components/bootstrap/OffCanvas';
import { useFormik } from 'formik';

const DetailPortofolio = () => {
	const [modal, setModal] = useState(false);
	const { id } = useParams();
	const history = useHistory();
	// const itemData = data.filter((item) => item.id.toString() === id.toString());
	// const item = itemData[0];
	const handleEdit = () => {
		setModal(true);
	};
	const formikPorto = useFormik({
		initialValues: {
			creators: '',
			brand: '',
			client: '',
			link: '',
		},
	});
	return (
		<PageWrapper title='Tes'>
			<SubHeader>
				<SubHeaderLeft>
					<Button color='info' isLink icon='ArrowBack' onClick={() => history.goBack()}>
						Back to List
					</Button>
					<SubheaderSeparator />

					<div className='col-auto'>
						<Badge isLight color='danger' className='px-3 py-2 me-3'>
							UMKM
						</Badge>
						<Badge isLight color='success' className='px-3 py-2'>
							Kolaborasi
						</Badge>
					</div>
				</SubHeaderLeft>
				<SubHeaderRight>
					<Button onClick={handleEdit} icon='Edit' color='info'>
						Edit
					</Button>
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='display-4 fw-bold pt-3 pb-5'>Indah rumahku, nyaman hidupku</div>
				<div className='row g-4'>
					<div className='col-12'>
						<div
							className={classNames(
								'ratio ratio-21x9',
								'rounded-2',
								// `bg-l10-${item.color}`,
								'mb-3',
							)}>
							<img
								src='/static/media/scene1.edf253f4.png'
								alt='Tes'
								width='100%'
								height='auto'
								className='object-fit-contain p-5'
							/>
						</div>
					</div>
					<div className='col-12'>
						<h6>Pekarya : Farhat, Awkarin</h6>
						<h6>Klien : Tokodok</h6>
						<h6>Brand : Unilever</h6>
					</div>
					<div className='col-12'>
						<h3 className='text-muted fw-bold'>Tumbuhan untuk menyejukkan rumahmu</h3>
					</div>
					<div className='col-12'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</div>
			</Page>
			<Modal
				setIsOpen={setModal}
				isOpen={modal}
				titleId='upcomingEdit'
				isCentered
				isScrollable
				size='lg'>
				<ModalHeader setIsOpen={setModal}>
					<OffCanvasTitle id='upcomingEdit'>Edit Portofolio</OffCanvasTitle>
				</ModalHeader>
				<ModalBody>
					<div className='row g-4'>
						<div className='col-5'>
							<Input type='file' autoComplete='photo' />
						</div>
						<div className='col-12'>
							<FormGroup id='namapekarya' label='Nama Pekarya' isFloating>
								<Input
									placeholder='Mention Pekarya'
									onChange={formikPorto.handleChange}
									value={formikPorto.values.creators}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='namabrand' label='Nama Brand' isFloating>
								<Input
									placeholder='Nama Brand'
									onChange={formikPorto.handleChange}
									value={formikPorto.values.brand}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='namaklien' label='Nama Klien' isFloating>
								<Input
									placeholder='Nama Klien'
									onChange={formikPorto.handleChange}
									value={formikPorto.values.client}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='linktoko' label='Link Toko' isFloating>
								<Input
									placeholder='Link Toko Anda'
									onChange={formikPorto.handleChange}
									value={formikPorto.values.link}
								/>
							</FormGroup>
						</div>
					</div>
				</ModalBody>
				<ModalFooter className='bg-transparent'>
					<Button icon='Save' color='info' onClick={() => setModal(false)}>
						Save
					</Button>
				</ModalFooter>
			</Modal>
		</PageWrapper>
	);
};

export default DetailPortofolio;
