import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import classNames from 'classnames';
import data from './helper/dummyPremiumContentData';
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
import Icon from '../../components/icon/Icon';

import UserImageWebp3 from '../../assets/img/wanna/wanna3.webp';
import UserImage3 from '../../assets/img/wanna/wanna3.png';

const DetailContentPremium = () => {
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
				</SubHeaderLeft>
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
							<h6>Pembuat</h6>
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

					<div className='col-12'>{item.content}</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default DetailContentPremium;
