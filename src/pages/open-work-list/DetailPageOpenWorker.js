import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import classNames from 'classnames';
import data from './helper/dummyCampaignData';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../layout/SubHeader/SubHeader';
import Button from '../../components/bootstrap/Button';
import Avatar from '../../components/Avatar';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Badge from '../../components/bootstrap/Badge';
import USERS from '../../common/data/userDummyData';
import { priceFormat } from '../../helpers/helpers';
import Icon from '../../components/icon/Icon';
import UserImageWebp3 from '../../assets/img/wanna/wanna3.webp';
import UserImage3 from '../../assets/img/wanna/wanna3.png';

const DetailPageOpenWorker = () => {
	const { id } = useParams();
	const history = useHistory();
	const itemData = data.filter((item) => item.id.toString() === id.toString());
	const item = itemData[0];

	return (
		<PageWrapper title={item.title}>
			<SubHeader>
				<SubHeaderLeft>
					<Button color='info' isLink icon='ArrowBack' onClick={() => history.goBack()}>
						Back to List
					</Button>
					<SubheaderSeparator />
					{/* {!!item.tags &&
						// eslint-disable-next-line react/prop-types
						item.tags.map((tag) => (
							<div key={tag.text} className='col-auto'>
								<Badge isLight color={tag.color} className='px-3 py-2'>
									{tag.text}
								</Badge>
							</div>
						))} */}
				</SubHeaderLeft>
				<SubHeaderRight>
					<Button icon='Check' color='info'>
						Join
					</Button>
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='display-4 fw-bold pt-3 pb-5'>{item.title}</div>
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
								alt={item.title}
								width='100%'
								height='auto'
								className='object-fit-contain p-5'
							/>
						</div>
					</div>
					<div className='col-12'>
						<div>
							<h6>
								<b>Pembuat</b>
							</h6>
							<Avatar
								srcSet={UserImageWebp3}
								src={UserImage3}
								size={28}
								border={2}
								className='me-2'
							/>
							<span>
								<Link to='#'>
									{item.user}
									<Icon className='ms-2' color='info' icon='Verified' />
								</Link>
							</span>
						</div>
					</div>
					<div className='col-12'>
						<div className='text-muted mb-2'>
							<b>Budget : </b> {priceFormat(item.budget)}
						</div>
						<div className='text-muted mb-2 d-flex'>
							<b>Minimal Badge : </b>
							<div className='d-flex ms-1'>
								<div className='me-2'>
									<Icon icon='HeartFill' color='danger' className='me-1' />4
								</div>
								<div className='me-2'>
									<Icon icon='EmojiEmotions' color='success' className='me-1' />2
								</div>
							</div>
						</div>
						<div className='text-muted mb-2 d-flex'>
							<b>Media Promosi : </b>
							<div className='d-flex ms-1 align-items-center'>
								<div className='me-2'>
									<Icon icon='Check' /> Instagram
								</div>
								<div className='me-2'>
									<Icon icon='Check' /> Tiktok
								</div>
							</div>
						</div>
						<div className='text-muted mb-2 d-flex'>
							<b>Minimal Ranking : </b>
							<div className='d-flex ms-1'>40</div>
						</div>
						<div className='text-muted mb-2 d-flex'>
							<b>Negara, Provinsi : </b>
							<div className='d-flex ms-1'>Indonesia, DKI Jakarta</div>
						</div>
						<div className='text-muted mb-2 d-flex'>
							<b>Kota : </b>
							<div className='d-flex ms-1'>Jakarta</div>
						</div>
					</div>
					<div className='col-12'>{item.content || null}</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default DetailPageOpenWorker;
