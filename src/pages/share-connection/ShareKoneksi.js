import React from 'react';
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
const ShareKoneksi = () => {
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
									<Icon className='me-2' icon='Share' size='3x' color='info' />
									Sebarkan Koneksi
								</CardTitle>
							</CardLabel>
						</CardHeader>
						<CardBody>
							<div className='row'>
								<div className='col-md-12'>
									<Card
										className='bg-l25-success transition-base rounded-2 mb-4'
										shadow='sm'>
										<CardHeader className='bg-transparent pb-1'>
											<CardLabel>
												<CardTitle tag='h4' className='h4'>
													Join Komunitas!
												</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody className='pt-1'>
											<div className='d-flex align-items-center pb-3'>
												{/* <Icon icon='Info' className='me-2' /> */}
												<div className='text-muted mb-5'>
													Temui komunitas yang ada di sekitar mu!
												</div>
											</div>

											<Button color='success'>Join Now!</Button>
										</CardBody>
									</Card>
								</div>
								<div className='col-md-4'>
									<Card
										className='bg-l25-success transition-base rounded-2 mb-4'
										shadow='sm'>
										<CardHeader className='bg-transparent pb-1'>
											<CardLabel>
												<CardTitle tag='h4' className='h4'>
													Registrasi Konekios
												</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody className='pt-1'>
											<div className='d-flex align-items-center pb-3'>
												{/* <Icon icon='Info' className='me-2' /> */}
												<div className='text-muted mb-5'>
													Temui komunitas yang ada di sekitar mu!
												</div>
											</div>
											<FormGroup className='d-flex'>
												<Input
													type='text'
													value={formik.values.linkonekios}
													className='me-3'
												/>
												<Button
													color='info'
													onClick={() => {
														clipboard.copy(formik.values.linkonekios);
														showNotification(
															'Copy link to clipboard',
															<div></div>,
														);
													}}>
													{' '}
													Copy
												</Button>
											</FormGroup>
										</CardBody>
									</Card>
								</div>
								<div className='col-md-4'>
									<Card
										className='bg-l25-success transition-base rounded-2 mb-4'
										shadow='sm'>
										<CardHeader className='bg-transparent pb-1'>
											<CardLabel>
												<CardTitle tag='h4' className='h4'>
													Registrasi Konekita
												</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody className='pt-1'>
											<div className='d-flex align-items-center pb-3'>
												{/* <Icon icon='Info' className='me-2' /> */}
												<div className='text-muted mb-5'>
													Temui komunitas yang ada di sekitar mu!
												</div>
											</div>
											<FormGroup className='d-flex'>
												<Input
													type='text'
													value={formik.values.linkonekita}
													className='me-3'
												/>
												<Button
													color='info'
													onClick={() => {
														clipboard.copy(formik.values.linkonekita);
														showNotification(
															'Copy link to clipboard',
															<div></div>,
														);
													}}>
													{' '}
													Copy
												</Button>
											</FormGroup>
										</CardBody>
									</Card>
								</div>
								<div className='col-md-4'>
									<Card
										className='bg-l25-success transition-base rounded-2 mb-4'
										shadow='sm'>
										<CardHeader className='bg-transparent pb-1'>
											<CardLabel>
												<CardTitle tag='h4' className='h4'>
													Registrasi Konekoin
												</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody className='pt-1'>
											<div className='d-flex align-items-center pb-3'>
												{/* <Icon icon='Info' className='me-2' /> */}
												<div className='text-muted mb-5'>
													Temui komunitas yang ada di sekitar mu!
												</div>
											</div>
											<FormGroup className='d-flex'>
												<Input
													type='text'
													value={formik.values.linkonekoin}
													className='me-3'
												/>
												<Button
													color='info'
													onClick={() => {
														clipboard.copy(formik.values.linkonekoin);
														showNotification(
															'Copy link to clipboard',
															<div></div>,
														);
													}}>
													{' '}
													Copy
												</Button>
											</FormGroup>
										</CardBody>
									</Card>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ShareKoneksi;
