import React, { useContext, useLayoutEffect, useRef } from 'react';
import { ThemeProvider } from 'react-jss';
import ReactNotification from 'react-notifications-component';
import { useFullscreen } from 'react-use';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import ThemeContext from '../contexts/themeContext';

import Aside from '../layout/Aside/Aside';
import Wrapper from '../layout/Wrapper/Wrapper';
import Portal from '../layout/Portal/Portal';
import { menuSidebar } from '../menu';
import { Toast, ToastContainer } from '../components/bootstrap/Toasts';

function App() {
	const { fullScreenStatus, setFullScreenStatus, ...themeContext } = useContext(ThemeContext);

	const ref = useRef(null);

	useFullscreen(ref, fullScreenStatus, {
		onClose: () => setFullScreenStatus(false),
	});

	useLayoutEffect(() => {
		if (process.env.REACT_APP_MODERN_DESGIN === 'true') {
			document.body.classList.add('modern-design');
		} else {
			document.body.classList.remove('modern-design');
		}
	});

	const location = useLocation();

	//	Add paths to the array that you don't want to be "Aside".
	const withOutAsidePages = [
		menuSidebar.login.path,
		menuSidebar.signUp.path,
		// layoutMenu.blank.path
	];

	return (
		<ThemeProvider theme={themeContext?.appData}>
			<ToastProvider components={{ ToastContainer, Toast }}>
				<div
					ref={ref}
					className='app'
					style={{
						backgroundColor: fullScreenStatus && 'var(--bs-body-bg)',
						zIndex: fullScreenStatus && 1,
					}}>
					<Switch location={location}>
						{withOutAsidePages.map((path) => (
							<Route key={path} path={path} exact component={Wrapper} />
						))}
						<Route>
							<Aside />
							<Wrapper />
						</Route>
					</Switch>
				</div>
				<Portal id='portal-notification'>
					<ReactNotification />
				</Portal>
			</ToastProvider>
		</ThemeProvider>
	);
}

export default App;
