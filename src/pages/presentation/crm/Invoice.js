import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import { menuSidebar } from '../../../menu';

const Invoice = () => {
	return (
		<PageWrapper title={menuSidebar.crm.subMenu.invoice.text}>
			<SubHeader>
				<SubHeaderLeft>left</SubHeaderLeft>
				<SubHeaderRight>Right</SubHeaderRight>
			</SubHeader>
			<Page>Invoice</Page>
		</PageWrapper>
	);
};

export default Invoice;
