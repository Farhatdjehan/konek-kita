import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { dashboardMenu, editPage, menuSidebar } from '../../menu';
import Login from '../../pages/presentation/auth/Login';

const LANDING = {
	DASHBOARD_BOOKING: lazy(() => import('../../pages/dashboard/DashboardPage')),
	EDITPROFIL: lazy(() => import('../../pages/edit-profil/EditProfil')),
	PROFIL: lazy(() => import('../../pages/profil/ProfilPage')),
	PREMIUM_CONTENT: lazy(() => import('../../pages/premium-content/PremiumContent')),
	LIST_PREMIUM_CONTENT: lazy(() => import('../../pages/premium-content/ListPremiumContent')),
	MY_BADGE: lazy(() => import('../../pages/my-badge/MyBadge')),
	MY_CERT: lazy(() => import('../../pages/my-certificate/CertificateList')),
	DETAIL_PORTOFOLIO: lazy(() => import('../../pages/portofolio/DetailPortofolio')),
	GALLERY_BOOTCAMP: lazy(() => import('../../pages/gallery-bootcamp/GalleryBootcamp')),
	PROGRAM_GALLERY: lazy(() => import('../../pages/umkm/ProgramGallery')),
	UMKM_PROGRAM: lazy(() => import('../../pages/umkm/UmkmProgram')),
	DELIVERABLE_PROGRAM: lazy(() => import('../../pages/umkm/DeliverableProgram')),
	DETAIL_PRODUCT: lazy(() => import('../../pages/umkm/DetailProduct')),
	OPEN_WORK_LIST: lazy(() => import('../../pages/open-work-list/OpenWorkList')),
	DIRECT_CAMPAIGN: lazy(() => import('../../pages/soon-badge/DirectCampaign')),
	CATALOGUE_DIRECT_CAMPAIGN: lazy(() => import('../../pages/soon-badge/CatalogueDirectCampaign')),
	SEND_BADGE: lazy(() => import('../../pages/send-badge/SendBadgePage')),
	SEND_BADGE_DETAIL: lazy(() => import('../../pages/send-badge/HistorySendBadge')),
	CAMPAIGN_DETAIL: lazy(() => import('../../pages/send-badge/DetailCampaign')),
	OPEN_COLLABS: lazy(() => import('../../pages/open-collaboration/OpenCollaboration')),
	COLLABS_LIST: lazy(() => import('../../pages/collabs-list/CollabsList')),
	REQUEST_WORK: lazy(() => import('../../pages/request-work/RequestWork')),
	REQUEST_COLLABS: lazy(() => import('../../pages/request-collab-list/RequestCollabList')),
	DETAIL_PAGE: lazy(() => import('../../pages/request-work/DetailPage')),
	DETAIL_PAGE_BOOTCAMP: lazy(() => import('../../pages/gallery-bootcamp/DetailPageBootcamp')),
	DETAIL_PAGE_OPEN_WORK: lazy(() => import('../../pages/open-work-list/DetailPageOpenWorker')),
	DETAIL_PAGE_COLLAB: lazy(() => import('../../pages/collabs-list/DetailPageCollabs')),
	DETAIL_PAGE_REQ_COLLAB: lazy(() =>
		import('../../pages/request-collab-list/DetailPageReqCollab'),
	),
	DETAIL_PAGE_OPEN_COLLAB: lazy(() =>
		import('../../pages/open-collaboration/DetailPageOpenCollab'),
	),
	SHARE_CONNECT: lazy(() => import('../../pages/share-connection/ShareKoneksi')),
	JOIN_COMMUNITY: lazy(() => import('../../pages/share-connection/JoinCommunity')),
	MY_SALDO: lazy(() => import('../../pages/saldo/MySaldo')),
	MY_NFT: lazy(() => import('../../pages/nft/NFTList')),
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
				path={dashboardMenu.worklist.subMenu.reqWorkList.path}
				component={LANDING.REQUEST_WORK}
			/>
			<Route
				exact
				path={dashboardMenu.collaboration.subMenu.reqCollabsList.path}
				component={LANDING.REQUEST_COLLABS}
			/>
			<Route
				exact
				path={dashboardMenu.collaboration.subMenu.openCollaboration.path}
				component={LANDING.OPEN_COLLABS}
			/>
			<Route
				exact
				path={dashboardMenu.collaboration.subMenu.collabsList.path}
				component={LANDING.COLLABS_LIST}
			/>
			<Route
				exact
				path={dashboardMenu.sendBadge.subMenu.mybadge.path}
				component={LANDING.MY_BADGE}
			/>
			<Route
				exact
				path={dashboardMenu.sendBadge.subMenu.certificateList.path}
				component={LANDING.MY_CERT}
			/>

			<Route
				exact
				path={`${dashboardMenu.worklist.subMenu.detailProgram.path}/:id`}
				component={LANDING.DETAIL_PAGE}
			/>
			{/* <Route
				exact
				path={`${dashboardMenu.gallery.subMenu.detailProgramContent.path}/:id`}
				component={LANDING.DETAIL_PAGE_CONTENT}
			/> */}
			<Route
				exact
				path={`${dashboardMenu.bootcamp.subMenu.detailProgramBootcamp.path}/:id`}
				component={LANDING.DETAIL_PAGE_BOOTCAMP}
			/>
			<Route
				exact
				path={`${dashboardMenu.worklist.subMenu.detailProgramOpenWorker.path}/:id`}
				component={LANDING.DETAIL_PAGE_OPEN_WORK}
			/>
			<Route
				exact
				path={`${dashboardMenu.collaboration.subMenu.detailProgramCollab.path}/:id`}
				component={LANDING.DETAIL_PAGE_COLLAB}
			/>
			<Route
				exact
				path={`${dashboardMenu.collaboration.subMenu.detailProgramReqCollab.path}/:id`}
				component={LANDING.DETAIL_PAGE_REQ_COLLAB}
			/>
			<Route
				exact
				path={`${dashboardMenu.collaboration.subMenu.detailProgramOpenCollab.path}/:id`}
				component={LANDING.DETAIL_PAGE_OPEN_COLLAB}
			/>
			<Route
				exact
				path={dashboardMenu.dashboardBooking.path}
				component={LANDING.DASHBOARD_BOOKING}
			/>
			<Route exact path={editPage.editProfil.path} component={LANDING.EDITPROFIL} />
			<Route
				exact
				path={dashboardMenu.umkm.subMenu.programGallery.path}
				component={LANDING.PROGRAM_GALLERY}
			/>
			<Route
				exact
				path={dashboardMenu.umkm.subMenu.umkmProgram.path}
				component={LANDING.UMKM_PROGRAM}
			/>
			<Route
				exact
				path={dashboardMenu.umkm.subMenu.deliverableProgram.path}
				component={LANDING.DELIVERABLE_PROGRAM}
			/>
			<Route
				exact
				path={`${dashboardMenu.detailProduct.path}/:id`}
				component={LANDING.DETAIL_PRODUCT}
			/>
			<Route
				exact
				path={dashboardMenu.worklist.subMenu.openWorkList.path}
				component={LANDING.OPEN_WORK_LIST}
			/>
			<Route
				exact
				path={dashboardMenu.worklist.subMenu.directCampaign.path}
				component={LANDING.DIRECT_CAMPAIGN}
			/>
			<Route
				exact
				path={dashboardMenu.worklist.subMenu.katalogDirectCampaign.path}
				component={LANDING.CATALOGUE_DIRECT_CAMPAIGN}
			/>

			<Route
				exact
				path={dashboardMenu.sendBadge.subMenu.sendBadgeLove.path}
				component={LANDING.SEND_BADGE}
			/>
			<Route
				exact
				path={dashboardMenu.sendBadge.subMenu.sendBadgeDetail.path}
				component={LANDING.SEND_BADGE_DETAIL}
			/>
			<Route
				exact
				path={`${dashboardMenu.sendBadge.subMenu.detailCampaign.path}/:id`}
				component={LANDING.CAMPAIGN_DETAIL}
			/>
			<Route
				exact
				path={dashboardMenu.premiumContent.subMenu.tablePremiumContent.path}
				component={LANDING.PREMIUM_CONTENT}
			/>
			<Route
				exact
				path={dashboardMenu.premiumContent.subMenu.premiumContentList.path}
				component={LANDING.LIST_PREMIUM_CONTENT}
			/>
			<Route
				exact
				path={dashboardMenu.detailPortofolio.path}
				component={LANDING.DETAIL_PORTOFOLIO}
			/>
			<Route
				exact
				path={dashboardMenu.bootcamp.subMenu.galleryBootcamp.path}
				component={LANDING.GALLERY_BOOTCAMP}
			/>
			<Route exact path={dashboardMenu.shareSupport.path} component={LANDING.SHARE_CONNECT} />
			<Route
				exact
				path={dashboardMenu.joinKomunitas.path}
				component={LANDING.JOIN_COMMUNITY}></Route>
			<Route exact path={dashboardMenu.saldo.path} component={LANDING.MY_SALDO}></Route>

			<Route exact path={dashboardMenu.menuNFT.path} component={LANDING.MY_NFT}></Route>

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
