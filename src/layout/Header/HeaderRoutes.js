import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import ComponentsHeader from '../../pages/common/Headers/ComponentsHeader';
import FormHeader from '../../pages/common/Headers/FormHeader';
import ChartsHeader from '../../pages/common/Headers/ChartsHeader';
import ContentHeader from '../../pages/common/Headers/ContentHeader';
import UtilitiesHeader from '../../pages/common/Headers/UtilitiesHeader';
import IconHeader from '../../pages/common/Headers/IconHeader';
import ExtrasHeader from '../../pages/common/Headers/ExtrasHeader';
import DefaultHeader from '../../pages/common/Headers/DefaultHeader';
import ProfilePageHeader from '../../pages/common/Headers/ProfilePageHeader';
import ProductsHeader from '../../pages/common/Headers/ProductsHeader';
import ProductListHeader from '../../pages/common/Headers/ProductListHeader';
import DashboardBookingHeader from '../../pages/common/Headers/DashboardBookingHeader';
import { componentsMenu, menuSidebar } from '../../menu';

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
			{/* 
			<Route path={dashboardMenu.summary.path} exact component={SummaryHeader} /> */}

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
