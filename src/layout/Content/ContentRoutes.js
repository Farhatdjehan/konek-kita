import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { dashboardMenu, editPage, menuSidebar } from '../../menu';
import Login from '../../pages/presentation/auth/Login';

const LANDING = {
	DASHBOARD_BOOKING: lazy(() => import('../../pages/dashboard/DashboardPage')),
	EDITPROFIL: lazy(() => import('../../pages/edit-profil/EditProfil')),
	PROFIL: lazy(() => import('../../pages/profil/ProfilPage')),
	PREMIUM_CONTENT: lazy(() => import('../../pages/premium-content/PremiumContent')),
	GALLERY_PREMIUM: lazy(() => import('../../pages/gallery-content/GalleryContent')),
	GALLERY_BOOTCAMP: lazy(() => import('../../pages/gallery-bootcamp/GalleryBootcamp')),
	GALLERY_UMKM: lazy(() => import('../../pages/gallery-umkm/GalleryUmkm')),
	DETAIL_PRODUCT: lazy(() => import('../../pages/gallery-umkm/DetailProduct')),
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
			<Route exact path={dashboardMenu.profilId.path} component={LANDING.PROFIL} />
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
				path={`${dashboardMenu.detailProduct.path}/:id`}
				component={LANDING.DETAIL_PRODUCT}
			/>
			<Route
				exact
				path={dashboardMenu.openWorkList.path}
				component={LANDING.OPEN_WORK_LIST}
			/>
			<Route
				exact
				path={dashboardMenu.premiumContent.path}
				component={LANDING.PREMIUM_CONTENT}
			/>
			<Route
				exact
				path={dashboardMenu.galleryPremium.path}
				component={LANDING.GALLERY_PREMIUM}
			/>
			<Route
				exact
				path={dashboardMenu.galleryBootcamp.path}
				component={LANDING.GALLERY_BOOTCAMP}
			/>
			{/* Auth */}
			<Route exact path={menuSidebar.page404.path} component={AUTH.PAGE_404} />
			<Route exact path={menuSidebar.login.path} component={Login} />
			<Route exact path={menuSidebar.signUp.path}>
				<Login isSignUp />
			</Route>
			<Route component={AUTH.PAGE_404} />
		</Switch>
	);
};

export default ContentRoutes;
