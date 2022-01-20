import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import classNames from 'classnames';
import data from '../../common/data/dummyUmkmData';
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
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import { useFormik } from 'formik';
import showNotification from '../../components/extras/showNotification';
import { useClipboard } from 'use-clipboard-copy';

const DetailProduct = () => {
	const { id } = useParams();
	const history = useHistory();
	const itemData = data.filter((item) => item.id.toString() === id.toString());
	const item = itemData[0];

	const formik = useFormik({
		initialValues: {
			link: 'www.program.com',
		},
	});

	const clipboard = useClipboard();

	return (
		<PageWrapper title={item.title}>
			<SubHeader>
				<SubHeaderLeft>
					<Button color='info' isLink icon='ArrowBack' onClick={() => history.goBack()}>
						Back to List
					</Button>
					<SubheaderSeparator />
					<Badge>+{item.point} Point</Badge>
					<Badge color='success'>+ Rp 2.000.000 </Badge>
				</SubHeaderLeft>
				<SubHeaderRight>
					<FormGroup className='d-flex'>
						<Input type='text' value={formik.values.link} className='me-3' />
						<Button
							color='info'
							onClick={() => {
								clipboard.copy(formik.values.link);
								showNotification('Copy link to clipboard', <div></div>);
							}}>
							{' '}
							Copy
						</Button>
					</FormGroup>
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='display-4 fw-bold pt-3 pb-5'>{item.name}</div>
				<div className='row g-4'>
					<div className='col-12'>
						<div
							className={classNames(
								'ratio ratio-21x9',
								'rounded-2',
								`bg-l10-${item.color}`,
								'mb-3',
							)}>
							<img
								src={item.image}
								alt={item.name}
								width='100%'
								height='auto'
								className='object-fit-contain p-5'
							/>
						</div>
					</div>
					<div className='col-12'>
						<p className='mb-1'>
							Imbal Badge :{' '}
							<Badge color='danger' className='me-2'>
								Love
							</Badge>
							<Badge color='success' className='me-2'>
								Work
							</Badge>
						</p>
						<p className='mb-1'>
							Sosial Media :{' '}
							<Badge color='info' className='me-2'>
								Tiktok
							</Badge>
							<Badge color='info' className='me-2'>
								Instagram
							</Badge>
						</p>
						<p className='mb-1'>Waktu : 12/12/2021</p>
					</div>
					<div className='col-12'>
						<h4>{item.desc}</h4>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default DetailProduct;
