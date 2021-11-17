import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import { menuSidebar } from '../../../menu';

const Sales = () => {
	return (
		<PageWrapper title={menuSidebar.crm.subMenu.sales.text}>
			<SubHeader>
				<SubHeaderLeft>left</SubHeaderLeft>
				<SubHeaderRight>Right</SubHeaderRight>
			</SubHeader>
			<Page>Sales</Page>
		</PageWrapper>
	);
};

export default Sales;
