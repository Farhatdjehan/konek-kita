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
import USERS from '../../common/data/userDummyData';
import { generalMenu } from '../../menu';
import { Link } from 'react-router-dom';

const DeliverableProgram = () => {
	const formik = useFormik({
		initialValues: {
			link_program: '',
			link_socmed: '',
			insight: '',
			username: '',
		},
		// validate,
		onSubmit: () => {
			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Updated Successfully</span>
				</span>,
				"The user's account details have been successfully updated.",
			);
		},
	});
	return (
		<PageWrapper title={generalMenu.sendBadge.text}>
			<Page container='fluid'>
				<div className='row'>
					<div className='col-12'>
						<Card>
							<CardHeader borderSize={1}>
								<CardLabel icon='SendAndArchive' iconColor='info'>
									<CardTitle>Deliverable Program</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody isScrollable>
								<div className='row g-4 mb-3'>
									<div className='col-lg-5'>
										<div className='mb-3'>
											<FormGroup id='link_program' label='Link Program'>
												<Input
													placeholder='Link'
													autoComplete='additional-name'
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.link_program}
													isValid={formik.isValid}
													isTouched={formik.touched.link_program}
													invalidFeedback={formik.errors.link_program}
													validFeedback='Looks good!'
												/>
											</FormGroup>
										</div>
										<div className='mb-3'>
											<FormGroup id='link_socmed' label='Link Sosial Media'>
												<Input
													placeholder='Link Endorse'
													autoComplete='additional-name'
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.link_socmed}
													isValid={formik.isValid}
													isTouched={formik.touched.link_socmed}
													invalidFeedback={formik.errors.link_socmed}
													validFeedback='Looks good!'
												/>
											</FormGroup>
										</div>
										<div className='mb-3'>
											<FormGroup id='insight' label='Upload Insight'>
												<Input type='file' autoComplete='photo' />
											</FormGroup>
										</div>
										<div className='mb-3'>
											<FormGroup id='username' label='Penikmat Karya'>
												<Input
													placeholder='Username'
													autoComplete='username'
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.username}
													isValid={formik.isValid}
													isTouched={formik.touched.username}
													invalidFeedback={formik.errors.username}
													validFeedback='Looks good!'
												/>
											</FormGroup>
										</div>
										<div className='mb-3'>
											<FormGroup id='pesan' label='Pesan'>
												<Textarea
													placeholder='Pesan'
													rows={6}
													autoComplete='family-name'
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.comment}
													isValid={formik.isValid}
													isTouched={formik.touched.comment}
													invalidFeedback={formik.errors.comment}
													validFeedback='Looks good!'
												/>
											</FormGroup>
										</div>
									</div>
								</div>
								<div className='row  mb-5'>
									<div className='col-lg-5 d-flex justify-content-between'>
										<Button
											color='info'
											isLink
											type='reset'
											onClick={formik.resetForm}>
											Reset
										</Button>

										<Button
											type='submit'
											icon='Save'
											color='info'
											isOutline
											isDisable={!formik.isValid && !!formik.submitCount}>
											Save
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default DeliverableProgram;
