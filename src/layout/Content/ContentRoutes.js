import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { dashboardMenu, auth, editPage } from '../../menu';
import Login from '../../pages/auth/Login';

const LANDING = {
	DASHBOARD_BOOKING: lazy(() => import('../../pages/dashboard/DashboardBookingPage')),
	EDITPROFIL: lazy(() => import('../../pages/edit-profil/EditProfil')),
	PROFIL: lazy(() => import('../../pages/profil/ProfilPage')),
	PREMIUM_CONTENT: lazy(() => import('../../pages/premium-content/EditInModalPage')),
	GALLERY_PREMIUM: lazy(() => import('../../pages/gallery-content/GalleryContent')),
	GALLERY_PREMIUM_ID: lazy(() => import('../../pages/gallery-content/DetailGalleryContent')),
	GALLERY_BOOTCAMP: lazy(() => import('../../pages/gallery-bootcamp/GalleryBootcamp')),
	GALLERY_BOOTCAMP_ID: lazy(() => import('../../pages/gallery-bootcamp/DetailGalleryBootcamp')),
	GALLERY_UMKM: lazy(() => import('../../pages/gallery-umkm/GalleryUmkm')),
	GALLERY_UMKM_DETAIL: lazy(() => import('../../pages/gallery-umkm/GalleryUmkmDetail')),
	OPEN_WORK_LIST: lazy(() => import('../../pages/open-work-list/OpenWorkList')),
	OPEN_COLLABS: lazy(() => import('../../pages/open-collaboration/OpenCollaboration')),
	COLLABS_LIST: lazy(() => import('../../pages/collabs-list/CollabsList')),
	REQUEST_WORK: lazy(() => import('../../pages/request-work/RequestWork')),
	REQUEST_COLLABS: lazy(() => import('../../pages/request-collab-list/RequestCollabList')),
};

const AUTH = {
	PAGE_404: lazy(() => import('../../pages/presentation/auth/Page404')),
};

const ContentRoutes = () => {
	const location = useLocation();
	return (
		<Switch location={location}>
			{/* Landing */}
			<Route exact path={`${dashboardMenu.profilID.path}/:id`} component={LANDING.PROFIL} />
			<Route
				exact
				path={dashboardMenu.openCollaboration.path}
				component={LANDING.OPEN_COLLABS}
			/>
			<Route exact path={dashboardMenu.reqWorkList.path} component={LANDING.REQUEST_WORK} />
			<Route
				exact
				path={dashboardMenu.reqCollabsList.path}
				component={LANDING.REQUEST_COLLABS}
			/>
			<Route exact path={dashboardMenu.collabsList.path} component={LANDING.COLLABS_LIST} />
			<Route
				exact
				path={dashboardMenu.dashboardBooking.path}
				component={LANDING.DASHBOARD_BOOKING}
			/>
			<Route exact path={editPage.editProfil.path} component={LANDING.EDITPROFIL} />

			<Route exact path={dashboardMenu.galleryUmkm.path} component={LANDING.GALLERY_UMKM} />
			<Route
				exact
				path={`${dashboardMenu.galleryUmkmID.path}/:id`}
				component={LANDING.GALLERY_UMKM_DETAIL}
			/>

			<Route
				exact
				path={dashboardMenu.openWorkList.path}
				component={LANDING.OPEN_WORK_LIST}
			/>
			<Route
				exact
				path={dashboardMenu.contentGallery.path}
				component={LANDING.PREMIUM_CONTENT}
			/>
			<Route
				exact
				path={dashboardMenu.galleryPremium.path}
				component={LANDING.GALLERY_PREMIUM}
			/>
			<Route
				exact
				path={`${dashboardMenu.galleryPremium.path}/:id`}
				component={LANDING.GALLERY_PREMIUM_ID}
			/>
			<Route
				exact
				path={dashboardMenu.galleryBootcamp.path}
				component={LANDING.GALLERY_BOOTCAMP}
			/>
			<Route
				exact
				path={`${dashboardMenu.galleryBootcampID.path}/:id`}
				component={LANDING.GALLERY_BOOTCAMP_ID}
			/>

			{/* Auth */}
			<Route exact path={auth.page404.path} component={AUTH.PAGE_404} />
			<Route exact path={auth.login.path} component={Login} />
			<Route exact path={auth.signUp.path}>
				<Login isSignUp />
			</Route>
			<Route component={AUTH.PAGE_404} />
		</Switch>
	);
};

export default ContentRoutes;
