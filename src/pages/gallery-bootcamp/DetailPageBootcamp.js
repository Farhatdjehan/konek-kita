import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import classNames from 'classnames';
import data from './helper/dummyBootcampData';
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
import Card, { CardBody, CardHeader } from '../../components/bootstrap/Card';
import Icon from '../../components/icon/Icon';

import UserImageWebp3 from '../../assets/img/wanna/wanna3.webp';
import UserImage3 from '../../assets/img/wanna/wanna3.png';
const DetailPageBootcamp = () => {
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
			</SubHeader>
			<Page>
				<div className='row g-4 mt-2'>
					<div className='col-8 '>
						<div
							className={classNames(
								'ratio ratio-21x9',
								'rounded-2',
								`bg-l10-${item.color}`,
								'mb-3',
								'position-relative',
							)}>
							<img
								src={item.image}
								alt={item.title}
								width='100%'
								height='auto'
								className='object-fit-contain p-5'
							/>
							<Badge className='position-absolute h-auto w-auto px-4 py-3'>
								Rating : 4.6
							</Badge>
						</div>
						<div className='display-5 fw-bold pt-3 pb-4'>{item.title}</div>

						<div className='mb-4'>{item.content}</div>
					</div>

					<div className='col-4'>
						<h3 className='text-muted'>
							<Card>
								<CardBody>
									<div className='d-flex align-items-center mb-4'>
										<Avatar
											srcSet={UserImageWebp3}
											src={UserImage3}
											size={28}
											border={2}
											className='me-2'
										/>
										<span>
											<Link to='#'>
												<div className='h5 mb-0'>Formasi 1</div>
											</Link>
										</span>
									</div>
									<div className='w-100 text-end'>
										<Button color='info' icon='Add'>
											Join
										</Button>
									</div>
								</CardBody>
							</Card>
						</h3>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default DetailPageBootcamp;
