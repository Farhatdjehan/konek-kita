import React, { useState } from 'react';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Alert from '../../components/bootstrap/Alert';
import Card, {
	CardActions,
	CardBody,
	CardFooter,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../components/bootstrap/Card';
import Icon from '../../components/icon/Icon';
import Button from '../../components/bootstrap/Button';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import { useFormik } from 'formik';

import { useClipboard } from 'use-clipboard-copy';
import showNotification from '../../components/extras/showNotification';
import Modal, { ModalBody, ModalHeader } from '../../components/bootstrap/Modal';
import { OffCanvasTitle } from '../../components/bootstrap/OffCanvas';
const JoinCommunity = () => {
	const [modal, setModal] = useState(false);
	const formik = useFormik({
		initialValues: {
			linkonekios: 'www.konekios.com/register',
			linkonekita: 'www.konekita.com/register',
			linkonekoin: 'www.konekoin.com/register',
		},
	});

	const clipboard = useClipboard();
	return (
		<PageWrapper title='Badge Saya'>
			<Page>
				<div className='row'>
					{/* <div className='col-8 text-left my-3'>
						<span className='display-5 fw-bold '>Badge Saya</span>
					</div> */}

					<Card className='shadow-3d-primary'>
						<CardHeader borderSize={1} className='bg-transparent'>
							<CardLabel>
								<CardTitle tag='h4' className='h4'>
									<Icon className='me-2' icon='Add' size='3x' color='info' />
									Join Komunitas
								</CardTitle>
							</CardLabel>
						</CardHeader>
						<CardBody>
							<div className='row'>
								<div className='col-md-4'>
									<Card
										className='bg-l25-info transition-base rounded-2 mb-4'
										shadow='sm'>
										<CardHeader className='bg-transparent pb-1'>
											<CardLabel>
												<CardTitle tag='h4' className='h4'>
													Komunitas 1
												</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody className='pt-1'>
											<div className='d-flex align-items-center pb-3'>
												{/* <Icon icon='Info' className='me-2' /> */}
												<div className='text-muted mb-5'>
													Gabung dengan komunitas 1 sekarang juga!
												</div>
											</div>
											<FormGroup className='d-flex'>
												<Button color='info' onClick={() => setModal(true)}>
													Join
												</Button>
											</FormGroup>
										</CardBody>
									</Card>
								</div>
								<div className='col-md-4'>
									<Card
										className='bg-l25-info transition-base rounded-2 mb-4'
										shadow='sm'>
										<CardHeader className='bg-transparent pb-1'>
											<CardLabel>
												<CardTitle tag='h4' className='h4'>
													Komunitas 2
												</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody className='pt-1'>
											<div className='d-flex align-items-center pb-3'>
												{/* <Icon icon='Info' className='me-2' /> */}
												<div className='text-muted mb-5'>
													Gabung dengan komunitas 2 sekarang juga!
												</div>
											</div>
											<FormGroup className='d-flex'>
												<Button color='info' onClick={() => setModal(true)}>
													Join
												</Button>
											</FormGroup>
										</CardBody>
									</Card>
								</div>
								<div className='col-md-4'>
									<Card
										className='bg-l25-info transition-base rounded-2 mb-4'
										shadow='sm'>
										<CardHeader className='bg-transparent pb-1'>
											<CardLabel>
												<CardTitle tag='h4' className='h4'>
													Komunitas 3
												</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody className='pt-1'>
											<div className='d-flex align-items-center pb-3'>
												{/* <Icon icon='Info' className='me-2' /> */}
												<div className='text-muted mb-5'>
													Gabung dengan komunitas 3 sekarang juga!
												</div>
											</div>
											<FormGroup className='d-flex'>
												<Button color='info' onClick={() => setModal(true)}>
													Join
												</Button>
											</FormGroup>
										</CardBody>
									</Card>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
				<Modal
					setIsOpen={setModal}
					isOpen={modal}
					titleId='form'
					isCentered
					isScrollable
					size='lg'>
					<ModalHeader setIsOpen={setModal}>
						<OffCanvasTitle id='form'>Isi data diri</OffCanvasTitle>
					</ModalHeader>
					<ModalBody></ModalBody>
				</Modal>
			</Page>
		</PageWrapper>
	);
};

export default JoinCommunity;
