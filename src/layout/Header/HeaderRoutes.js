import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import SummaryHeader from '../../pages/common/Headers/SummaryHeader';
import DashboardHeader from '../../pages/common/Headers/DashboardHeader';
import ComponentsHeader from '../../pages/common/Headers/ComponentsHeader';
import FormHeader from '../../pages/common/Headers/FormHeader';
import ChartsHeader from '../../pages/common/Headers/ChartsHeader';
import ContentHeader from '../../pages/common/Headers/ContentHeader';
import UtilitiesHeader from '../../pages/common/Headers/UtilitiesHeader';
import IconHeader from '../../pages/common/Headers/IconHeader';
import ExtrasHeader from '../../pages/common/Headers/ExtrasHeader';
import PageLayoutHeader from '../../pages/common/Headers/PageLayoutHeader';
import DefaultHeader from '../../pages/common/Headers/DefaultHeader';
import ProfilePageHeader from '../../pages/common/Headers/ProfilePageHeader';
import ProductsHeader from '../../pages/common/Headers/ProductsHeader';
import ProductListHeader from '../../pages/common/Headers/ProductListHeader';
import DashboardBookingHeader from '../../pages/common/Headers/DashboardBookingHeader';
import { componentsMenu, dashboardMenu, menuSidebar, layoutMenu } from '../../menu';

const HeaderRoutes = () => {
	const location = useLocation();

	//	Add paths to the array that you don't want to be "Header".
	const withoutHeaderPages = [
		// layoutMenu.pageLayout.subMenu.onlySubheader.path,
		// layoutMenu.pageLayout.subMenu.onlyContent.path,
		// layoutMenu.blank.path,
		menuSidebar.login.path,
		menuSidebar.signUp.path,
		menuSidebar.page404.path,
	];

	return (
		<Switch location={location}>
			{/* BEGIN :: Custom Headers */}
			{/* <Route
				path={[dashboardMenu.dashboard.path, menuSidebar.projectManagement.subMenu.list.path]}
				exact
				component={DashboardHeader}
			/> */}
			<Route
				path={[
					// dashboardMenu.dashboardBooking.path,
					menuSidebar.appointment.subMenu.calendar.path,
					menuSidebar.appointment.subMenu.employeeList.path,
					menuSidebar.listPages.subMenu.listFluid.path,
					`${menuSidebar.editPages.path}/:path?`,
					`${menuSidebar.appointment.subMenu.employeeID.path}/:path?`,
					`${menuSidebar.projectManagement.subMenu.itemID.path}/:path?`,
				]}
				exact
				component={DashboardBookingHeader}
			/>
{/* 
			<Route path={dashboardMenu.summary.path} exact component={SummaryHeader} /> */}

			<Route
				path={[
					menuSidebar.singlePages.subMenu.fluidSingle.path,
					menuSidebar.singlePages.subMenu.boxedSingle.path,
					menuSidebar.sales.subMenu.transactions.path,
					menuSidebar.chat.subMenu.withListChat.path,
					menuSidebar.chat.subMenu.onlyListChat.path,
					`${menuSidebar.knowledge.subMenu.itemID.path}/:id`,
					menuSidebar.crm.subMenu.dashboard.path,
					menuSidebar.crm.subMenu.customersList.path,
					`${menuSidebar.crm.subMenu.customerID.path}/:id`,
				]}
				exact
				component={ProfilePageHeader}
			/>

			<Route
				path={[
					menuSidebar.gridPages.subMenu.gridBoxed.path,
					menuSidebar.gridPages.subMenu.gridFluid.path,
				]}
				exact
				component={ProductsHeader}
			/>
			<Route
				path={[
					menuSidebar.listPages.subMenu.listBoxed.path,
					menuSidebar.sales.subMenu.salesList.path,
					menuSidebar.sales.subMenu.productsGrid.path,
					`${menuSidebar.sales.subMenu.productID.path}/:id`,
				]}
				exact
				component={ProductListHeader}
			/>

			<Route path={`${componentsMenu.components.path}/:path?`} component={ComponentsHeader} />
			<Route path={`${componentsMenu.forms.path}/:path?`} component={FormHeader} />
			<Route path={`${componentsMenu.charts.path}/:path?`} component={ChartsHeader} />
			<Route path={`${componentsMenu.content.path}/:path?`} component={ContentHeader} />
			<Route path={`${componentsMenu.utilities.path}/:path?`} component={UtilitiesHeader} />
			<Route path={`${componentsMenu.icons.path}/:path?`} component={IconHeader} />
			<Route path={`${componentsMenu.extra.path}/:path?`} component={ExtrasHeader} />
			{/* <Route
				path={[
					`${layoutMenu.asideTypes.path}/:path?`,
					layoutMenu.pageLayout.subMenu.headerAndSubheader.path,
					layoutMenu.pageLayout.subMenu.onlyHeader.path,
				]}
				exact
				component={PageLayoutHeader}
			/> */}
			{/* END :: Custom Headers */}

			{/* BEGIN :: Without Header */}
			{withoutHeaderPages.map((path) => (
				<Route key={path} path={path} exact />
			))}
			{/* BEGIN :: Without Header */}

			<Route component={DefaultHeader} />
		</Switch>
	);
};

export default HeaderRoutes;
