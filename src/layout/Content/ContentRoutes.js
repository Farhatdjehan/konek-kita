import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { componentsMenu, dashboardMenu, menuSidebar, layoutMenu } from '../../menu';
import Login from '../../pages/presentation/auth/Login';

const LANDING = {
	DASHBOARD: lazy(() => import('../../pages/dashboard/DashboardPage')),
	DASHBOARD_BOOKING: lazy(() => import('../../pages/dashboard/DashboardBookingPage')),
	SUMMARY: lazy(() => import('../../pages/SummaryPage')),
	EDITPROFIL: lazy(() => import('../../pages/presentation/demo-pages/EditFluidPage')),
	PROFIL: lazy(() => import('../../pages/presentation/appointment/EmployeePage')),
	PREMIUM_CONTENT: lazy(() => import('../../pages/presentation/demo-pages/EditInModalPage')),
	GALLERY_PREMIUM: lazy(() => import('../../pages/gallery-content/GalleryContent')),
	GALLERY_BOOTCAMP: lazy(() => import('../../pages/gallery-bootcamp/GalleryBootcamp')),
};

const SINGLE = {
	BOXED: lazy(() => import('../../pages/presentation/single-pages/SingleBoxedPage')),
	FLUID: lazy(() => import('../../pages/presentation/single-pages/SingleFluidPage')),
};

const LIST = {
	BOXED: lazy(() => import('../../pages/presentation/demo-pages/ListBoxedPage')),
	FLUID: lazy(() => import('../../pages/presentation/demo-pages/ListFluidPage')),
};

const GRID = {
	BOXED: lazy(() => import('../../pages/presentation/demo-pages/GridBoxedPage')),
};

const EDIT = {
	BOXED: lazy(() => import('../../pages/presentation/demo-pages/EditBoxedPage')),
	WIZARD: lazy(() => import('../../pages/presentation/demo-pages/EditWizardPage')),
	IN_CANVAS: lazy(() => import('../../pages/presentation/demo-pages/EditInCanvasPage')),
};

const KNOWLEDGE = {
	VIEW: lazy(() => import('../../pages/presentation/knowledge/KnowledgeViewPage')),
};

const AUTH = {
	PAGE_404: lazy(() => import('../../pages/presentation/auth/Page404')),
};

const APP = {
	SALES: {
		TRANSACTIONS: lazy(() => import('../../pages/presentation/sales/TransActionsPage')),
		PRODUCTS: lazy(() => import('../../pages/presentation/sales/SalesListPage')),
		PRODUCTS_GRID: lazy(() => import('../../pages/presentation/sales/ProductsGridPage')),
		PRODUCTS_VIEW: lazy(() => import('../../pages/presentation/sales/ProductViewPage')),
	},
	APPOINTMENT: {
		CALENDAR: lazy(() => import('../../pages/presentation/appointment/CalendarPage')),
		EMPLOYEE_LIST: lazy(() => import('../../pages/presentation/appointment/EmployeeList')),

		APPOINTMENT_LIST: lazy(() =>
			import('../../pages/presentation/appointment/AppointmentList'),
		),
	},
	CHAT: {
		WITH_LIST: lazy(() => import('../../pages/presentation/chat/WithListChatPage')),
		ONLY_LIST: lazy(() => import('../../pages/presentation/chat/OnlyListChatPage')),
	},
	PROJECT_MANAGEMENT: {
		PROJECTS_LIST: lazy(() =>
			import('../../pages/presentation/project-management/ProjectManagementsList'),
		),
		PROJECT: lazy(() =>
			import('../../pages/presentation/project-management/ProjectManagementsProject'),
		),
	},
	CRM: {
		CRM_DASHBOARD: lazy(() => import('../../pages/presentation/crm/CrmDashboard')),
		CUSTOMERS: lazy(() => import('../../pages/presentation/crm/CustomersList')),
		CUSTOMER: lazy(() => import('../../pages/presentation/crm/Customer')),
		SALES: lazy(() => import('../../pages/presentation/crm/Sales')),
		INVOICE: lazy(() => import('../../pages/presentation/crm/Invoice')),
	},
};

// const PAGE_LAYOUTS = {
// 	HEADER_SUBHEADER: lazy(() =>
// 		import('../../pages/presentation/page-layouts/HeaderAndSubheader'),
// 	),
// 	HEADER: lazy(() => import('../../pages/presentation/page-layouts/OnlyHeader')),
// 	SUBHEADER: lazy(() => import('../../pages/presentation/page-layouts/OnlySubheader')),
// 	CONTENT: lazy(() => import('../../pages/presentation/page-layouts/OnlyContent')),
// 	BLANK: lazy(() => import('../../pages/presentation/page-layouts/Blank')),
// 	ASIDE: lazy(() => import('../../pages/presentation/aside-types/DefaultAsidePage')),
// 	MINIMIZE_ASIDE: lazy(() => import('../../pages/presentation/aside-types/MinimizeAsidePage')),
// };

// Content Page
const CONTENT = {
	TYPOGRAPHY: lazy(() => import('../../pages/documentation/content/TypographyPage')),
	IMAGES: lazy(() => import('../../pages/documentation/content/ImagesPage')),
	TABLES: lazy(() => import('../../pages/documentation/content/TablesPage')),
	FIGURES: lazy(() => import('../../pages/documentation/content/FiguresPage')),
};

// Components Page
const COMPONENTS_PAGE = {
	ACCORDION: lazy(() => import('../../pages/documentation/components/AccordionPage')),
	ALERT: lazy(() => import('../../pages/documentation/components/AlertPage')),
	BADGE: lazy(() => import('../../pages/documentation/components/BadgePage')),
	BREADCRUMB: lazy(() => import('../../pages/documentation/components/BreadcrumbPage')),
	BUTTON: lazy(() => import('../../pages/documentation/components/ButtonPage')),
	BUTTON_GROUP: lazy(() => import('../../pages/documentation/components/ButtonGroupPage')),
	CARD: lazy(() => import('../../pages/documentation/components/CardPage')),
	CAROUSEL: lazy(() => import('../../pages/documentation/components/CarouselPage')),
	COLLAPSE: lazy(() => import('../../pages/documentation/components/CollapsePage')),
	DROPDOWN: lazy(() => import('../../pages/documentation/components/DropdownsPage')),
	LIST_GROUP: lazy(() => import('../../pages/documentation/components/ListGroupPage')),
	MODAL: lazy(() => import('../../pages/documentation/components/ModalPage')),
	NAVS_TABS: lazy(() => import('../../pages/documentation/components/NavsTabsPage')),
	OFF_CANVAS: lazy(() => import('../../pages/documentation/components/OffCanvasPage')),
	PAGINATION: lazy(() => import('../../pages/documentation/components/PaginationPage')),
	POPOVERS: lazy(() => import('../../pages/documentation/components/PopoversPage')),
	PROGRESS: lazy(() => import('../../pages/documentation/components/ProgressPage')),
	SCROLLSPY: lazy(() => import('../../pages/documentation/components/ScrollspyPage')),
	SPINNER: lazy(() => import('../../pages/documentation/components/SpinnersPage')),
	TABLE: lazy(() => import('../../pages/documentation/components/TablePage')),
	TOASTS: lazy(() => import('../../pages/documentation/components/ToastsPage')),
	TOOLTIP: lazy(() => import('../../pages/documentation/components/TooltipPage')),
};

// Forms Page
const FORMS_PAGE = {
	FORM_GROUP: lazy(() => import('../../pages/documentation/forms/FormGroupPage')),
	FORM_CONTROLS: lazy(() => import('../../pages/documentation/forms/FormControlsPage')),
	SELECT: lazy(() => import('../../pages/documentation/forms/SelectPage')),
	CHECKS_AND_RADIO: lazy(() => import('../../pages/documentation/forms/ChecksAndRadioPage')),
	RANGE: lazy(() => import('../../pages/documentation/forms/RangePage')),
	INPUT_GROUP: lazy(() => import('../../pages/documentation/forms/InputGroupPage')),
	VALIDATION: lazy(() => import('../../pages/documentation/forms/ValidationPage')),
	WIZARD: lazy(() => import('../../pages/documentation/forms/WizardPage')),
};

// Icons Page
const ICONS = {
	ICON: lazy(() => import('../../pages/documentation/icons/IconPage')),
	BOOTSTRAP: lazy(() => import('../../pages/documentation/icons/BootstrapIconPage')),
	MATERIAL: lazy(() => import('../../pages/documentation/icons/MaterialPage')),
};

// Extras Page
const EXTRA = {
	NOTIFICATION: lazy(() => import('../../pages/documentation/extras/NotificationPage')),
	HOOKS: lazy(() => import('../../pages/documentation/extras/HooksPage')),
};

// Charts Page
const CHARTS_PAGE = {
	GENERAL_USAGE: lazy(() => import('../../pages/documentation/charts/ChartGeneralUsagePage')),
	SPARKLINE: lazy(() => import('../../pages/documentation/charts/ChartSparklinePage')),
	LINE: lazy(() => import('../../pages/documentation/charts/ChartLinePage')),
	AREA: lazy(() => import('../../pages/documentation/charts/ChartAreaPage')),
	COLUMN: lazy(() => import('../../pages/documentation/charts/ChartColumnPage')),
	BAR: lazy(() => import('../../pages/documentation/charts/ChartBarPage')),
	MIXED: lazy(() => import('../../pages/documentation/charts/ChartMixedPage')),
	TIMELINE: lazy(() => import('../../pages/documentation/charts/ChartTimelinePage')),
	CANDLESTICK: lazy(() => import('../../pages/documentation/charts/ChartCandlestickPage')),
	BOX_WHISKER: lazy(() => import('../../pages/documentation/charts/ChartBoxWhiskerPage')),
	PIE_DONUT: lazy(() => import('../../pages/documentation/charts/ChartPieDonutPage')),
	RADAR: lazy(() => import('../../pages/documentation/charts/ChartRadarPage')),
	POLAR: lazy(() => import('../../pages/documentation/charts/ChartPolarPage')),
	RADIAL_BAR: lazy(() => import('../../pages/documentation/charts/ChartRadialBarPage')),
	BUBBLE: lazy(() => import('../../pages/documentation/charts/ChartBubblePage')),
	SCATTER: lazy(() => import('../../pages/documentation/charts/ChartScatterPage')),
	HEAT_MAP: lazy(() => import('../../pages/documentation/charts/ChartHeatMapPage')),
	TREE_MAP: lazy(() => import('../../pages/documentation/charts/ChartTreeMapPage')),
};

// Utilities Pages
const UTILITIES = {
	API: lazy(() => import('../../pages/documentation/utilities/ApiPage')),
	BACKGROUND: lazy(() => import('../../pages/documentation/utilities/BackgroundPage')),
	BORDERS: lazy(() => import('../../pages/documentation/utilities/BordersPage')),
	COLORS: lazy(() => import('../../pages/documentation/utilities/ColorsPage')),
	DISPLAY: lazy(() => import('../../pages/documentation/utilities/DisplayPage')),
	FLEX: lazy(() => import('../../pages/documentation/utilities/FlexPage')),
	FLOAT: lazy(() => import('../../pages/documentation/utilities/FloatPage')),
	INTERACTIONS: lazy(() => import('../../pages/documentation/utilities/InteractionsPage')),
	OVERFLOW: lazy(() => import('../../pages/documentation/utilities/OverflowPage')),
	POSITION: lazy(() => import('../../pages/documentation/utilities/PositionPage')),
	SHADOWS: lazy(() => import('../../pages/documentation/utilities/ShadowsPage')),
	SIZING: lazy(() => import('../../pages/documentation/utilities/SizingPage')),
	SPACING: lazy(() => import('../../pages/documentation/utilities/SpacingPage')),
	TEXT: lazy(() => import('../../pages/documentation/utilities/TextPage')),
	VERTICAL_ALIGN: lazy(() => import('../../pages/documentation/utilities/VerticalAlignPage')),
	VISIBILITY: lazy(() => import('../../pages/documentation/utilities/VisibilityPage')),
};

const ContentRoutes = () => {
	const location = useLocation();
	return (
		<Switch location={location}>
			{/* App */}
			{/* Sales */}
			<Route
				exact
				path={menuSidebar.sales.subMenu.transactions.path}
				component={APP.SALES.TRANSACTIONS}
			/>
			<Route
				exact
				path={menuSidebar.sales.subMenu.salesList.path}
				component={APP.SALES.PRODUCTS}
			/>
			<Route
				exact
				path={menuSidebar.sales.subMenu.productsGrid.path}
				component={APP.SALES.PRODUCTS_GRID}
			/>
			<Route
				exact
				path={`${menuSidebar.sales.subMenu.productID.path}/:id`}
				component={APP.SALES.PRODUCTS_VIEW}
			/>
			{/* Appointment */}
			<Route
				exact
				path={menuSidebar.appointment.subMenu.calendar.path}
				component={APP.APPOINTMENT.CALENDAR}
			/>
			<Route
				exact
				path={menuSidebar.appointment.subMenu.employeeList.path}
				component={APP.APPOINTMENT.EMPLOYEE_LIST}
			/>
			<Route
				exact
				path={`${menuSidebar.appointment.subMenu.employeeID.path}/:id`}
				component={LANDING.PROFIL}
			/>
			<Route
				exact
				path={menuSidebar.appointment.subMenu.appointmentList.path}
				component={APP.APPOINTMENT.APPOINTMENT_LIST}
			/>

			{/* Chat */}
			<Route
				exact
				path={menuSidebar.chat.subMenu.withListChat.path}
				component={APP.CHAT.WITH_LIST}
			/>
			<Route
				exact
				path={menuSidebar.chat.subMenu.onlyListChat.path}
				component={APP.CHAT.ONLY_LIST}
			/>

			{/* Project Management */}
			<Route
				exact
				path={menuSidebar.projectManagement.subMenu.list.path}
				component={APP.PROJECT_MANAGEMENT.PROJECTS_LIST}
			/>
			<Route
				exact
				path={`${menuSidebar.projectManagement.subMenu.itemID.path}/:id`}
				component={APP.PROJECT_MANAGEMENT.PROJECT}
			/>
			{/* CRM */}
			<Route
				exact
				path={menuSidebar.crm.subMenu.dashboard.path}
				component={APP.CRM.CRM_DASHBOARD}
			/>
			<Route
				exact
				path={menuSidebar.crm.subMenu.customersList.path}
				component={APP.CRM.CUSTOMERS}
			/>
			<Route
				exact
				path={`${menuSidebar.crm.subMenu.customerID.path}/:id`}
				component={APP.CRM.CUSTOMER}
			/>

			{/* <Route exact path={menuSidebar.crm.subMenu.sales.path} component={APP.CRM.SALES} /> */}
			{/* <Route */}
			{/*	exact */}
			{/*	path={`${menuSidebar.crm.subMenu.invoiceID.path}/:id`} */}
			{/*	component={APP.CRM.INVOICE} */}
			{/* /> */}

			{/* Landing */}
			{/* <Route exact path={dashboardMenu.dashboard.path} component={LANDING.DASHBOARD} /> */}
			<Route
				exact
				path={dashboardMenu.dashboardBooking.path}
				component={LANDING.DASHBOARD_BOOKING}
			/>
			<Route exact path={dashboardMenu.editProfilePage.path} component={LANDING.EDITPROFIL} />
			{/* <Route exact path={dashboardMenu.summary.path} component={LANDING.SUMMARY} /> */}

			{/* Single Pages */}
			<Route
				exact
				path={menuSidebar.singlePages.subMenu.boxedSingle.path}
				component={SINGLE.BOXED}
			/>
			<Route
				exact
				path={menuSidebar.singlePages.subMenu.fluidSingle.path}
				component={SINGLE.FLUID}
			/>

			{/* List */}
			<Route
				exact
				path={menuSidebar.listPages.subMenu.listBoxed.path}
				component={LIST.BOXED}
			/>
			<Route
				exact
				path={menuSidebar.listPages.subMenu.listFluid.path}
				component={LIST.FLUID}
			/>

			{/*	Grid */}
			<Route
				exact
				path={menuSidebar.gridPages.subMenu.gridBoxed.path}
				component={GRID.BOXED}
			/>
			<Route
				exact
				path={menuSidebar.gridPages.subMenu.gridFluid.path}
				component={GRID.FLUID}
			/>

			{/* Edit Pages */}
			<Route
				exact
				path={menuSidebar.editPages.subMenu.editBoxed.path}
				component={EDIT.BOXED}
			/>

			<Route
				exact
				path={menuSidebar.editPages.subMenu.editWizard.path}
				component={EDIT.WIZARD}
			/>
			<Route
				exact
				path={menuSidebar.editPages.subMenu.editInCanvas.path}
				component={EDIT.IN_CANVAS}
			/>
			<Route
				exact
				path={dashboardMenu.editInModal.path}
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

			<Route
				exact
				path={`${menuSidebar.knowledge.subMenu.itemID.path}/:id`}
				component={KNOWLEDGE.VIEW}
			/>

			{/* Auth */}
			<Route exact path={menuSidebar.page404.path} component={AUTH.PAGE_404} />
			<Route exact path={menuSidebar.login.path} component={Login} />
			<Route exact path={menuSidebar.signUp.path}>
				<Login isSignUp />
			</Route>

			{/* Page Layout Types */}
			{/* <Route path={layoutMenu.blank.path} component={PAGE_LAYOUTS.BLANK} />
			<Route
				path={layoutMenu.pageLayout.subMenu.headerAndSubheader.path}
				component={PAGE_LAYOUTS.HEADER_SUBHEADER}
			/>
			<Route
				path={layoutMenu.pageLayout.subMenu.onlyHeader.path}
				component={PAGE_LAYOUTS.HEADER}
			/>
			<Route
				path={layoutMenu.pageLayout.subMenu.onlySubheader.path}
				component={PAGE_LAYOUTS.SUBHEADER}
			/>
			<Route
				path={layoutMenu.pageLayout.subMenu.onlyContent.path}
				component={PAGE_LAYOUTS.CONTENT}
			/>
			<Route
				path={layoutMenu.asideTypes.subMenu.defaultAside.path}
				component={PAGE_LAYOUTS.ASIDE}
			/>
			<Route
				path={layoutMenu.asideTypes.subMenu.minimizeAside.path}
				component={PAGE_LAYOUTS.MINIMIZE_ASIDE}
			/> */}

			{/* DOCUMENTATION */}
			{/* Content */}
			<Route
				path={componentsMenu.content.subMenu.typography.path}
				component={CONTENT.TYPOGRAPHY}
			/>
			<Route path={componentsMenu.content.subMenu.images.path} component={CONTENT.IMAGES} />
			<Route path={componentsMenu.content.subMenu.tables.path} component={CONTENT.TABLES} />
			<Route path={componentsMenu.content.subMenu.figures.path} component={CONTENT.FIGURES} />

			{/* Components  */}
			<Route
				path={componentsMenu.components.subMenu.navsTabs.path}
				component={COMPONENTS_PAGE.NAVS_TABS}
			/>
			<Route
				path={componentsMenu.components.subMenu.tooltip.path}
				component={COMPONENTS_PAGE.TOOLTIP}
			/>
			<Route
				path={componentsMenu.components.subMenu.toasts.path}
				component={COMPONENTS_PAGE.TOASTS}
			/>
			<Route
				path={componentsMenu.components.subMenu.scrollspy.path}
				component={COMPONENTS_PAGE.SCROLLSPY}
			/>
			<Route
				path={componentsMenu.components.subMenu.carousel.path}
				component={COMPONENTS_PAGE.CAROUSEL}
			/>
			<Route
				path={componentsMenu.components.subMenu.spinners.path}
				component={COMPONENTS_PAGE.SPINNER}
			/>
			<Route
				path={componentsMenu.components.subMenu.listGroup.path}
				component={COMPONENTS_PAGE.LIST_GROUP}
			/>
			<Route
				path={componentsMenu.components.subMenu.breadcrumb.path}
				component={COMPONENTS_PAGE.BREADCRUMB}
			/>
			<Route
				path={componentsMenu.components.subMenu.collapse.path}
				component={COMPONENTS_PAGE.COLLAPSE}
			/>
			<Route
				path={componentsMenu.components.subMenu.pagination.path}
				component={COMPONENTS_PAGE.PAGINATION}
			/>
			<Route
				path={componentsMenu.components.subMenu.progress.path}
				component={COMPONENTS_PAGE.PROGRESS}
			/>
			<Route
				path={componentsMenu.components.subMenu.card.path}
				component={COMPONENTS_PAGE.CARD}
			/>
			<Route
				path={componentsMenu.components.subMenu.button.path}
				component={COMPONENTS_PAGE.BUTTON}
			/>
			<Route
				path={componentsMenu.components.subMenu.buttonGroup.path}
				component={COMPONENTS_PAGE.BUTTON_GROUP}
			/>
			<Route
				path={componentsMenu.components.subMenu.alert.path}
				component={COMPONENTS_PAGE.ALERT}
			/>
			<Route
				path={componentsMenu.components.subMenu.badge.path}
				component={COMPONENTS_PAGE.BADGE}
			/>
			<Route
				path={componentsMenu.components.subMenu.popovers.path}
				component={COMPONENTS_PAGE.POPOVERS}
			/>
			<Route
				path={componentsMenu.components.subMenu.dropdowns.path}
				component={COMPONENTS_PAGE.DROPDOWN}
			/>
			<Route
				path={componentsMenu.components.subMenu.accordion.path}
				component={COMPONENTS_PAGE.ACCORDION}
			/>
			<Route
				path={componentsMenu.components.subMenu.modal.path}
				component={COMPONENTS_PAGE.MODAL}
			/>
			<Route
				path={componentsMenu.components.subMenu.offcanvas.path}
				component={COMPONENTS_PAGE.OFF_CANVAS}
			/>
			<Route
				path={componentsMenu.components.subMenu.table.path}
				component={COMPONENTS_PAGE.TABLE}
			/>

			{/* Icons */}
			<Route path='/icons/icon' component={ICONS.ICON} />
			<Route path='/icons/material' component={ICONS.MATERIAL} />
			<Route path='/icons/bootstrap-icon' component={ICONS.BOOTSTRAP} />

			{/* Extras */}
			<Route path='/notifications' component={EXTRA.NOTIFICATION} />
			<Route path='/hooks' component={EXTRA.HOOKS} />

			{/* Forms */}
			<Route path='/forms/form-group' component={FORMS_PAGE.FORM_GROUP} />
			<Route path='/forms/form-controls' component={FORMS_PAGE.FORM_CONTROLS} />
			<Route path='/forms/select' component={FORMS_PAGE.SELECT} />
			<Route path='/forms/checks-and-radio' component={FORMS_PAGE.CHECKS_AND_RADIO} />
			<Route path='/forms/range' component={FORMS_PAGE.RANGE} />
			<Route path='/forms/input-group' component={FORMS_PAGE.INPUT_GROUP} />
			<Route path='/forms/validation' component={FORMS_PAGE.VALIDATION} />
			<Route path='/forms/wizard' component={FORMS_PAGE.WIZARD} />

			{/* Charts */}
			<Route path='/charts/general-usage' component={CHARTS_PAGE.GENERAL_USAGE} />
			<Route path='/charts/sparkline' component={CHARTS_PAGE.SPARKLINE} />
			<Route path='/charts/line' component={CHARTS_PAGE.LINE} />
			<Route path='/charts/area' component={CHARTS_PAGE.AREA} />
			<Route path='/charts/column' component={CHARTS_PAGE.COLUMN} />
			<Route path='/charts/bar' component={CHARTS_PAGE.BAR} />
			<Route path='/charts/mixed' component={CHARTS_PAGE.MIXED} />
			<Route path='/charts/timeline' component={CHARTS_PAGE.TIMELINE} />
			<Route path='/charts/candlestick' component={CHARTS_PAGE.CANDLESTICK} />
			<Route path='/charts/box-whisker' component={CHARTS_PAGE.BOX_WHISKER} />
			<Route path='/charts/pie-donut' component={CHARTS_PAGE.PIE_DONUT} />
			<Route path='/charts/radar' component={CHARTS_PAGE.RADAR} />
			<Route path='/charts/polar' component={CHARTS_PAGE.POLAR} />
			<Route path='/charts/radial-bar' component={CHARTS_PAGE.RADIAL_BAR} />
			<Route path='/charts/bubble' component={CHARTS_PAGE.BUBBLE} />
			<Route path='/charts/scatter' component={CHARTS_PAGE.SCATTER} />
			<Route path='/charts/heat-map' component={CHARTS_PAGE.HEAT_MAP} />
			<Route path='/charts/tree-map' component={CHARTS_PAGE.TREE_MAP} />

			{/* Utilities */}
			<Route path='/utilities/api' component={UTILITIES.API} />
			<Route path='/utilities/background' component={UTILITIES.BACKGROUND} />
			<Route path='/utilities/borders' component={UTILITIES.BORDERS} />
			<Route path='/utilities/colors' component={UTILITIES.COLORS} />
			<Route path='/utilities/display' component={UTILITIES.DISPLAY} />
			<Route path='/utilities/flex' component={UTILITIES.FLEX} />
			<Route path='/utilities/float' component={UTILITIES.FLOAT} />
			<Route path='/utilities/interactions' component={UTILITIES.INTERACTIONS} />
			<Route path='/utilities/overflow' component={UTILITIES.OVERFLOW} />
			<Route path='/utilities/position' component={UTILITIES.POSITION} />
			<Route path='/utilities/shadows' component={UTILITIES.SHADOWS} />
			<Route path='/utilities/sizing' component={UTILITIES.SIZING} />
			<Route path='/utilities/spacing' component={UTILITIES.SPACING} />
			<Route path='/utilities/text' component={UTILITIES.TEXT} />
			<Route path='/utilities/vertical-align' component={UTILITIES.VERTICAL_ALIGN} />
			<Route path='/utilities/visibility' component={UTILITIES.VISIBILITY} />

			<Route component={AUTH.PAGE_404} />
		</Switch>
	);
};

export default ContentRoutes;
