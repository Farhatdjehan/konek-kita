import React, { useState } from 'react';
import { useFormik } from 'formik';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
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
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import Textarea from '../../components/bootstrap/forms/Textarea';
import { personalMenu } from '../../menu';

const SendBadgePage = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			userName: '',
			comment: '',
			linkBrief: '',
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
		<PageWrapper title={personalMenu.sendBadge.text}>
			<Page container='fluid'>
				<div className='row'>
					<div className='col-12'>
						<Card>
							<CardHeader borderSize={1}>
								<CardLabel icon='Lock' iconColor='info'>
									<CardTitle>Send Badge Love</CardTitle>
								</CardLabel>
								<CardActions>
									{/* <Link
										to={`${personalMenu.sendBadge.subMenu.sendBadgeDetail.path}`}>
										<Button color='primary' icon='Eye' isLight>
											Lihat History
										</Button>
									</Link> */}
									<Button color='primary' icon='Heart'>
										12
									</Button>
								</CardActions>
							</CardHeader>
							<CardBody isScrollable>
								<div className='row g-4 mb-3'>
									<div className='col-lg-5'>
										<FormGroup id='username' label='Name'>
											<Input
												placeholder='Name'
												autoComplete='additional-name'
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
								</div>
								<div className='row g-4 mb-3'>
									<div className='col-lg-5'>
										<FormGroup id='username' label='Username'>
											<Input
												placeholder='Username'
												autoComplete='additional-name'
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.userName}
												isValid={formik.isValid}
												isTouched={formik.touched.userName}
												invalidFeedback={formik.errors.userName}
												validFeedback='Looks good!'
											/>
										</FormGroup>
									</div>
								</div>
								<div className='row g-4 mb-3'>
									<div className='col-lg-5'>
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
								<div className='row g-4 mb-5'>
									<div className='col-lg-5'>
										<FormGroup id='linkBriefKerja' label='Link Brief Kerja'>
											<Input
												placeholder='Link Brief Kerja'
												autoComplete='username'
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.linkBrief}
												isValid={formik.isValid}
												isTouched={formik.touched.linkBrief}
												invalidFeedback={formik.errors.linkBrief}
												validFeedback='Looks good!'
											/>
										</FormGroup>
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

export default SendBadgePage;
