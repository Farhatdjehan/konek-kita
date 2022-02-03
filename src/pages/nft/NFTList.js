import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Select from '../../components/bootstrap/forms/Select';
import EthLogo from '../../assets/img/eth.png';
import Card, { CardBody, CardTitle } from '../../components/bootstrap/Card';
import Badge from '../../components/bootstrap/Badge';
import data from './helper/dummyNFT';
import { dashboardMenu, menuSidebar } from '../../menu';
import Icon from '../../components/icon/Icon';
import Avatar from '../../components/Avatar';
import Button from '../../components/bootstrap/Button';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../components/bootstrap/Dropdown';
import Input from '../../components/bootstrap/forms/Input';

const Item = ({
	id,
	thumbnail,
	title,
	verification,
	current_price,
	last_price,
	author,
	avatar,
}) => {
	const history = useHistory();
	const handleOnClick = (e) => {
		console.log(e);
	};
	return (
		<Card className='cursor-pointer shadow-3d-primary shadow-3d-hover' onClick={handleOnClick}>
			<CardBody>
				<div
					className={classNames(
						'ratio ratio-1x1',
						'rounded-2',
						'mb-3',
						'position-relative',
					)}>
					<img
						src={thumbnail}
						alt=''
						width='100%'
						height='auto'
						className='object-fit-contain p-3'
					/>
					<Badge
						id='suit'
						color='success'
						className='position-absolute w-auto h-auto px-3 py-2'>
						Smart Contract
					</Badge>
				</div>
				<CardTitle>{title}</CardTitle>
				<div className='mb-3'>
					<Avatar src={avatar} width={30} height={30} className='me-2' />
					{author}
					{verification === true ? <Icon icon='Verified' className='ms-2' /> : null}
				</div>
				<div>
					<div>Price</div>
					<div className='d-flex'>
						<div className='me-2'>
							<img style={{ width: '20px' }} src={EthLogo} />
						</div>
						<div className='h4 fw-bold'>
							{current_price}
							<span className='ms-1 text-muted h6'>{last_price}</span>
						</div>
					</div>
				</div>
				<div className='row g-2'>
					<Button color='info'>Beli</Button>
				</div>
			</CardBody>
		</Card>
	);
};

const NFTList = () => {
	return (
		<PageWrapper title='NFT | Jual Beli NFT-mu disini!!'>
			<Page>
				<div className='row'>
					<div className='col-12 col-md-8 text-left my-3 my-md-5'>
						<span className='display-5 fw-bold'>Beli NFT</span>
					</div>
					<div className='col-12 col-md-4 my-3 my-md-5 d-flex justify-content-end'>
						<div className='d-flex'>
							<div className='me-2'>
								<form className=' text-end rounded-3 '>
									<Dropdown>
										<DropdownToggle>
											<Button color='info' icon='FilterAlt' isLight>
												Filter
											</Button>
										</DropdownToggle>
										<DropdownMenu isAlignmentEnd size='lg'>
											<div className='px-2'>
												<Input
													placeholder='Harga'
													type='number'
													className='mb-3'
												/>
												<div className='w-100 text-end'>
													<Button color='info'>Filter</Button>
												</div>
											</div>
										</DropdownMenu>
									</Dropdown>
								</form>
							</div>
							<div className='me-2'>
								<Button color='info' icon='Collections' isDisable>
									My Collection
								</Button>
							</div>
							<div className='me-2'>
								<Button color='success' isDisable>
									Sell NFT
								</Button>
							</div>
						</div>
					</div>
					{data.map((item) => (
						<div key={item.id} className='col-xl-3 col-lg-4 col-md-6'>
							{/* eslint-disable-next-line react/jsx-props-no-spreading */}
							<Item {...item} />
						</div>
					))}
				</div>
			</Page>
		</PageWrapper>
	);
};

export default NFTList;
