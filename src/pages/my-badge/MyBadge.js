import React from 'react';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Alert from '../../components/bootstrap/Alert';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../components/bootstrap/Card';
import Icon from '../../components/icon/Icon';
import Button from '../../components/bootstrap/Button';

const MyBadge = () => {
	return (
		<PageWrapper title='Badge Saya'>
			<div className='container'>
				<div className='row'>
					{/* <div className='col-8 text-left my-3'>
						<span className='display-5 fw-bold '>Badge Saya</span>
					</div> */}

					<Card>
						<CardHeader className='bg-transparent'>
							<CardLabel>
								<CardTitle tag='h4' className='h4'>
									<Icon className='me-2' icon='Badge' size='3x' color='success' />
									Badge Saya
								</CardTitle>
							</CardLabel>
						</CardHeader>
						<CardBody>
							<div className='row'>
								<div className='col-12 text-left my-3'>
									<Alert
										color='warning'
										isLight
										icon='Report'
										className='wrapping-alert'>
										<div className='mb-3'>
											Untuk mendapatkan badge tambahan.. upload campaign kamu,
											terima kiriman badge work dari sesama pekarya, buat
											kolaborasi kamu sendiri ,jadilah partisipan kolaborasi ,
											dan upload file sertifikat anda
										</div>
										<Button color='info'>Tentang Badge</Button>
									</Alert>
								</div>
								<div className='col-md-4'>
									<Card
										className='bg-l25-success bg-l10-success-hover transition-base rounded-2 mb-4'
										shadow='sm'>
										<CardHeader className='bg-transparent'>
											<CardLabel>
												<CardTitle tag='h4' className='h5'>
													<Icon
														className='me-2'
														icon='EmojiEmotions'
														size='3x'
														color='success'
													/>
													Work
												</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody>
											<div className='d-flex align-items-center pb-3'>
												<div className='flex-grow-1'>
													<div className='fw-bold display-4 mb-3 position-relative'>
														14
														<span className='text-success fs-5 ms-2 fw-bold position-absolute'>
															<Icon icon='TrendingUp' />
														</span>
													</div>
													<div className='text-muted'>
														<span className='text-success fs-5 fw-bold'>
															+12
														</span>{' '}
														dari minggu kemarin
													</div>
												</div>
											</div>
										</CardBody>
									</Card>
								</div>
								<div className='col-md-4'>
									<Card
										className='bg-l25-danger bg-l10-danger-hover transition-base rounded-2 mb-4'
										shadow='sm'>
										<CardHeader className='bg-transparent'>
											<CardLabel>
												<CardTitle tag='h4' className='h5'>
													<Icon
														className='me-2'
														icon='HeartFill'
														size='3x'
														color='danger'
													/>
													Love
												</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody>
											<div className='d-flex align-items-center pb-3'>
												<div className='flex-grow-1'>
													<div className='fw-bold display-4 mb-3 position-relative'>
														12
														<span className='text-danger fs-5 ms-2 fw-bold position-absolute'>
															<Icon icon='TrendingFlat' />
														</span>
													</div>
													<div className='text-muted'>
														<span className='text-danger fs-5 fw-bold'>
															+0
														</span>{' '}
														dari minggu kemarin
													</div>
												</div>
											</div>
										</CardBody>
									</Card>
								</div>
								<div className='col-md-4'>
									<Card
										className='bg-l25-primary bg-l10-primary-hover transition-base rounded-2 mb-4'
										shadow='sm'>
										<CardHeader className='bg-transparent'>
											<CardLabel>
												<CardTitle tag='h4' className='h5'>
													<Icon
														className='me-2'
														icon='CardMembership'
														size='3x'
														color='primary'
													/>
													Certificate
												</CardTitle>
											</CardLabel>

											<CardActions>
												<Button isDisable>Lihat Detail</Button>
											</CardActions>
										</CardHeader>
										<CardBody>
											<div className='d-flex align-items-center pb-3'>
												<div className='flex-grow-1'>
													<div className='fw-bold display-4 mb-3 position-relative'>
														1
														<span className='text-info fs-5 ms-2 fw-bold position-absolute'>
															<Icon icon='TrendingFlat' />
														</span>
													</div>
													<div className='text-muted'>
														<span className='text-info fs-5 fw-bold'>
															+1
														</span>{' '}
														dari minggu kemarin
													</div>
												</div>
											</div>
										</CardBody>
									</Card>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
			{/* <SubHeader>
				<SubHeaderLeft>
					<Button color='info' isLink icon='ArrowBack' onClick={() => history.goBack()}>
						Back to List
					</Button>
					<SubheaderSeparator />
					{!!item.tags &&
						// eslint-disable-next-line react/prop-types
						item.tags.map((tag) => (
							<div key={tag.text} className='col-auto'>
								<Badge isLight color={tag.color} className='px-3 py-2'>
									{tag.text}
								</Badge>
							</div>
						))}
				</SubHeaderLeft>
			</SubHeader> */}
			<Page></Page>
		</PageWrapper>
	);
};

export default MyBadge;
