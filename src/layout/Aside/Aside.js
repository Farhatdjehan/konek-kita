import React, { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Brand from '../Brand/Brand';
import Navigation from '../Navigation/Navigation';
import User from '../User/User';
import { dashboardMenu } from '../../menu';
import ThemeContext from '../../contexts/themeContext';
import Card, { CardBody } from '../../components/bootstrap/Card';

import Hand from '../../assets/img/hand.png';
import HandWebp from '../../assets/img/hand.webp';
import Button from '../../components/bootstrap/Button';
import Tooltips from '../../components/bootstrap/Tooltips';
import useDeviceScreen from '../../hooks/useDeviceScreen';

const Aside = () => {
	const { asideStatus, setAsideStatus } = useContext(ThemeContext);
	const deviceScreen = useDeviceScreen();
	const mobileDesign = deviceScreen?.width <= process.env.REACT_APP_MOBILE_BREAKPOINT_SIZE;
	const touchButton = deviceScreen?.width > process.env.REACT_APP_ASIDE_MINIMIZE_BREAKPOINT_SIZE;
	const isModernDesign = process.env.REACT_APP_MODERN_DESGIN === 'true';

	const asideWidthWithSpace =
		(parseInt(process.env.REACT_APP_ASIDE_WIDTH_PX, 10) +
			parseInt(process.env.REACT_APP_SPACER_PX, 10)) *
		-1;

	const constraintsRef = useRef(null);
	const x = useMotionValue(
		process.env.REACT_APP_ASIDE_TOUCH_STATUS === 'true' ? 0 : asideWidthWithSpace,
	);
	const [touchStatus, setTouchStatus] = useState(!x.get());
	const left = useTransform(
		x,
		[-100, -90, -10, 0],
		[asideWidthWithSpace, asideWidthWithSpace, 0, 0],
	);

	// X value get
	useEffect(() => {
		function updateX() {
			const X = x.get();
			setTouchStatus(!X);
		}

		const unsubscribeX = x.onChange(updateX);

		return () => {
			unsubscribeX();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Set Aside & Touch Button value
	useEffect(() => {
		if (!touchButton) {
			x.set(0);
		}
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [touchButton, deviceScreen.width]);

	//  for start minimize aside
	useEffect(() => {
		if (!asideStatus) {
			x.set(0);
			setTouchStatus(false);
		}
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [asideStatus]);

	const [doc, setDoc] = useState(false);

	const { t } = useTranslation(['translation', 'menu']);

	return (
		<>
			<motion.aside
				style={touchButton ? { left } : { left: mobileDesign ? null : '0rem' }}
				className={classNames(
					'aside',
					{ open: asideStatus },
					{
						'aside-touch-bar': touchButton && isModernDesign,
						'aside-touch-bar-close': !touchStatus && touchButton && isModernDesign,
						'aside-touch-bar-open': touchStatus && touchButton && isModernDesign,
					},
				)}>
				<div className='aside-head'>
					<Brand asideStatus={asideStatus} setAsideStatus={setAsideStatus} />
				</div>
				<div className='aside-body'>
					<Navigation menu={dashboardMenu} id='aside-dashboard' />
					{/* {!doc && (
						<>
							<NavigationLine />
							<Navigation menu={menuSidebar} id='aside-demo-pages' />
							<NavigationLine />
						
						</>
					)} */}

					{/* {doc && (
						<>
							<NavigationLine />
							<Navigation menu={componentsMenu} id='aside-menu-two' />
							<NavigationLine />
						</>
					)} */}

					{asideStatus && doc && (
						<Card className='m-3 '>
							<CardBody className='pt-0'>
								<img
									srcSet={HandWebp}
									src={Hand}
									alt='Hand'
									width={130}
									height={130}
								/>
								<p className='h4 text-dark'>{t('Everything is ready!')}</p>
								<Button
									color='info'
									isLight
									className='w-100'
									onClick={() => setDoc(false)}>
									{t('Demo Pages')}
								</Button>
							</CardBody>
						</Card>
					)}
				</div>
				<div className='aside-foot'>
					{/* <nav aria-label='aside-bottom-menu'>
						<div className='navigation'>
							<div
								role='presentation'
								className='navigation-item cursor-pointer'
								onClick={() => setDoc(!doc)}>
								<span className='navigation-link navigation-link-pill'>
									<span className='navigation-link-info'>
										<Icon
											icon={doc ? 'ToggleOn' : 'ToggleOff'}
											color={doc ? 'success' : null}
											className='navigation-icon'
										/>
										<span className='navigation-text'>
											{t('Documentation')}
										</span>
									</span>
								</span>
							</div>
						</div>
					</nav> */}
					<User />
				</div>
			</motion.aside>
			{asideStatus && touchButton && isModernDesign && (
				<>
					<motion.div className='aside-drag-area' ref={constraintsRef} />
					<Tooltips title='Toggle Aside' flip={['top', 'right']}>
						<motion.div
							className='aside-touch'
							drag='x'
							whileDrag={{ scale: 1.2 }}
							whileHover={{ scale: 1.1 }}
							dragConstraints={constraintsRef}
							// onDrag={(event, info) => console.log(info.point.x, info.point.y)}
							dragElastic={0.1}
							style={{ x, zIndex: 1039 }}
							onClick={() => x.set(x.get() === 0 ? asideWidthWithSpace : 0)}
						/>
					</Tooltips>
				</>
			)}
		</>
	);
};

export default Aside;
