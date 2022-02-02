import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../layout/SubHeader/SubHeader';
import moment from 'moment';
import { useFormik } from 'formik';
import classNames from 'classnames';
import { getUserDataWithId } from '../../common/data/userDummyData';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Page from '../../layout/Page/Page';
import transaction from './helper/dummyTransaction';
import PlaceholderImage from '../../components/extras/PlaceholderImage';
import Input from '../../components/bootstrap/forms/Input';
import Badge from '../../components/bootstrap/Badge';
import Button from '../../components/bootstrap/Button';
import ChatList from '../chat/ChatList';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../components/bootstrap/Card';
import Avatar from '../../components/Avatar';
import Icon from '../../components/icon/Icon';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../components/bootstrap/Dropdown';
import dummyEventsData from '../../common/data/dummyEventsData';
import { priceFormat } from '../../helpers/helpers';
import EVENT_STATUS from '../../common/data/enumEventStatus';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Alert from '../../components/bootstrap/Alert';
import COLORS from '../../common/data/enumColors';
import tableData from '../../common/data/dummyProductData';
import CommonGridProductItem from '../common/CommonGridProductItem';
import { personalMenu } from '../../menu';
import dataRanking from '../../common/data/dummyRankingData';
import SvgExclamationDiamondFill from '../../components/icon/bootstrap/ExclamationDiamondFill';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../components/bootstrap/Modal';
import { OffCanvasTitle } from '../../components/bootstrap/OffCanvas';
import Checks from '../../components/bootstrap/forms/Checks';
import Select from '../../components/bootstrap/forms/Select';

const MySaldo = () => {
	const [modal, setModal] = useState(false);
	return (
		<PageWrapper title='Konten Premium'>
			<SubHeader>
				<SubHeaderLeft></SubHeaderLeft>
				<SubHeaderRight>
					<Button onClick={() => setModal(true)} icon='AttachMoney' color='info'>
						Withdraw
					</Button>
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-8 text-left my-5'>
						<div className='display-5 fw-bold'>History Transaksi</div>
					</div>
					<div className='col-12 mx-auto text-center mt-2 mb-5'>
						<form className='row bg-l10-primary pb-4 px-3 mx-0 g-4 rounded-3'>
							<div className='col-md-4'>
								<FormGroup>
									<Input
										size='lg'
										id='example'
										type='date'
										value='Change value'
										placeholder='Pilih Tanggal'
									/>
								</FormGroup>
							</div>
							<div className='col-md-4'>
								<Select
									id='category'
									size='lg'
									ariaLabel='Category'
									placeholder='Semua Metode'
									list={[
										{
											text: 'value 1',
											value: 1,
										},
									]}
									className='rounded-1 bg-white'
								/>
							</div>
							<div className='col-md-4'>
								<Select
									id='category'
									size='lg'
									ariaLabel='Category'
									placeholder='Semua Transaksi'
									list={[
										{
											text: 'value 1',
											value: 1,
										},
									]}
									className='rounded-1 bg-white'
								/>
							</div>
						</form>
					</div>

					<div className='col-12'>
						<Card>
							<CardBody>
								<div className='row'>
									<div className='col-md-8'>
										{transaction.map((item, index) => {
											return (
												<Card>
													<CardHeader className='pb-0'>
														<CardLabel iconColor='success'>
															<CardTitle>{item.date}</CardTitle>
														</CardLabel>
														<CardActions>
															<Badge
																color={
																	item.status === 'Gagal'
																		? `danger`
																		: `success`
																}
																className='px-3 py-2'>
																{item.status}
															</Badge>
														</CardActions>
													</CardHeader>
													<CardBody className='pt-0'>
														<div>
															<div className='mb-3 d-flex align-items-center'>
																<Icon
																	icon='Money'
																	size='2x'
																	color='success'
																	className='me-2'
																/>
																<div className='h6 text-muted mb-0'>
																	{item.title}
																</div>
															</div>
															<div className='h6 text-muted'>
																{item.desc}
															</div>
															<div>{item.time}</div>
														</div>
													</CardBody>
												</Card>
											);
										})}
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
			<Modal setIsOpen={setModal} isOpen={modal} isCentered isScrollable>
				<ModalHeader>
					<OffCanvasTitle>Withdraw</OffCanvasTitle>
				</ModalHeader>
				<ModalBody>
					<FormGroup label='Jumlah yang ditarik' className='mb-3'>
						<Input type='number'></Input>
					</FormGroup>
					<div>
						<Checks type='checkbox' label='Setuju dengan pengaturan' />
					</div>
				</ModalBody>
				<ModalFooter>
					<Button color='info'>Submit</Button>
				</ModalFooter>
			</Modal>
		</PageWrapper>
	);
};

export default MySaldo;
