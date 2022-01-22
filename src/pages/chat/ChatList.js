import React, { useContext, useState } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../layout/SubHeader/SubHeader';
import Button from '../../components/bootstrap/Button';
import Page from '../../layout/Page/Page';
import Card, {
	CardActions,
	CardBody,
	CardFooter,
	CardFooterLeft,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../components/bootstrap/Card';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Chat, { ChatAvatar, ChatGroup, ChatListItem } from '../../components/Chat';
import InputGroup from '../../components/bootstrap/forms/InputGroup';
import Textarea from '../../components/bootstrap/forms/Textarea';
import USERS from '../../common/data/userDummyData';
import Icon from '../../components/icon/Icon';
import ThemeContext from '../../contexts/themeContext';
import { dashboardMenu, menuSidebar } from '../../menu';
import CHATS from '../../common/data/chatDummyData';
import CommonChatStatus from '../common/CommonChatStatus';

const ChatList = () => {
	const history = useHistory();

	const TABS = {
		CHLOE: USERS.CHLOE,
		GRACE: USERS.GRACE,
		JANE: USERS.JANE,
		RYAN: USERS.RYAN,
		ELLA: USERS.ELLA,
		SAM: USERS.SAM,
	};
	const [activeTab, setActiveTab] = useState(TABS.CHLOE);

	function getMessages(ACTIVE_TAB) {
		if (ACTIVE_TAB === USERS.CHLOE) {
			return CHATS.CHLOE_VS_JOHN;
		}
		if (ACTIVE_TAB === USERS.GRACE) {
			return CHATS.GRACE_VS_JOHN;
		}
		if (ACTIVE_TAB === USERS.JANE) {
			return CHATS.JANE_VS_JOHN;
		}
		if (ACTIVE_TAB === USERS.RYAN) {
			return CHATS.RYAN_VS_JOHN;
		}

		if (ACTIVE_TAB === USERS.ELLA) {
			return CHATS.ELLA_VS_JOHN;
		}
		if (ACTIVE_TAB === USERS.SAM) {
			return CHATS.SAM_VS_JOHN;
		}
		return null;
	}

	const { mobileDesign } = useContext(ThemeContext);
	const [listShow, setListShow] = useState(true);

	const getListShow = (TAB_NAME) => {
		setActiveTab(TAB_NAME);
		if (mobileDesign) {
			setListShow(false);
		}
	};

	return (
		<PageWrapper className='px-0' title='Chat List'>
			<Page className='px-0'>
				<div className='row h-100'>
					{(listShow || !mobileDesign) && (
						<div className='col-lg-4 col-md-6'>
							<Card stretch className='overflow-hidden'>
								<CardBody isScrollable className='p-0'>
									<Card shadow='none' className='mb-0'>
										<CardHeader className='sticky-top'>
											<CardLabel icon='AccountCircle' iconColor='success'>
												<CardTitle>Online</CardTitle>
												<CardSubTitle>3 users</CardSubTitle>
											</CardLabel>
										</CardHeader>
										<CardBody className='border-bottom border-light'>
											<div className='row'>
												<ChatListItem
													onClick={() => getListShow(TABS.CHLOE)}
													isActive={activeTab === TABS.CHLOE}
													src={USERS.CHLOE.src}
													srcSet={USERS.CHLOE.srcSet}
													name={USERS.CHLOE.name}
													surname={USERS.CHLOE.surname}
													isOnline={USERS.CHLOE.isOnline}
													color={USERS.CHLOE.color}
													lastSeenTime={moment()
														.add(-1, 'week')
														.fromNow()}
													latestMessage='Wah lagi full sampe tanggal 12 Januari nih aku'
												/>
												<ChatListItem
													onClick={() => getListShow(TABS.GRACE)}
													isActive={activeTab === TABS.GRACE}
													src={USERS.GRACE.src}
													srcSet={USERS.GRACE.srcSet}
													name={USERS.GRACE.name}
													surname={USERS.GRACE.surname}
													isOnline={USERS.GRACE.isOnline}
													color={USERS.GRACE.color}
													unreadMessage={13}
													lastSeenTime={moment()
														.add(-1, 'hour')
														.fromNow()}
													latestMessage='Wih menarik tuh, start kapan kira-kira?'
												/>
												<ChatListItem
													onClick={() => getListShow(TABS.JANE)}
													isActive={activeTab === TABS.JANE}
													src={USERS.JANE.src}
													srcSet={USERS.JANE.srcSet}
													name={USERS.JANE.name}
													surname={USERS.JANE.surname}
													isOnline={USERS.JANE.isOnline}
													color={USERS.JANE.color}
													unreadMessage={1}
													lastSeenTime={moment()
														.add(-3, 'hour')
														.fromNow()}
													latestMessage='Online user
													Baik nih.. Gimana bro?'
												/>
											</div>
										</CardBody>
									</Card>
									<Card shadow='none' className='mb-0'>
										<CardHeader className='sticky-top'>
											<CardLabel icon='AccountCircle' iconColor='danger'>
												<CardTitle>Offline</CardTitle>
												<CardSubTitle>3 users</CardSubTitle>
											</CardLabel>
										</CardHeader>
										<CardBody>
											<div className='row'>
												<ChatListItem
													onClick={() => getListShow(TABS.RYAN)}
													isActive={activeTab === TABS.RYAN}
													src={USERS.RYAN.src}
													srcSet={USERS.RYAN.srcSet}
													name={USERS.RYAN.name}
													surname={USERS.RYAN.surname}
													isOnline={USERS.RYAN.isOnline}
													color={USERS.RYAN.color}
													lastSeenTime={moment().add(-3, 'day').fromNow()}
													latestMessage='Halo mas'
												/>
												<ChatListItem
													onClick={() => getListShow(TABS.ELLA)}
													isActive={activeTab === TABS.ELLA}
													src={USERS.ELLA.src}
													srcSet={USERS.ELLA.srcSet}
													name={USERS.ELLA.name}
													surname={USERS.ELLA.surname}
													isOnline={USERS.ELLA.isOnline}
													color={USERS.ELLA.color}
													lastSeenTime={moment().fromNow()}
													latestMessage='Baik kok aku'
												/>
												<ChatListItem
													onClick={() => getListShow(TABS.SAM)}
													isActive={activeTab === TABS.SAM}
													src={USERS.SAM.src}
													srcSet={USERS.SAM.srcSet}
													name={USERS.SAM.name}
													surname={USERS.SAM.surname}
													isOnline={USERS.SAM.isOnline}
													color={USERS.SAM.color}
													lastSeenTime={moment()
														.add(-5, 'week')
														.fromNow()}
													latestMessage='Halo mas, mau join event kita gak?'
												/>
											</div>
										</CardBody>
									</Card>
								</CardBody>
								<CardFooter>
									<CardFooterLeft className='w-100'>
										<Button
											icon='Logout'
											color='danger'
											isLight
											className='w-100 p-3'
											onClick={() =>
												history.push(`${menuSidebar.login.path}`)
											}>
											Logout
										</Button>
									</CardFooterLeft>
								</CardFooter>
							</Card>
						</div>
					)}
					{(!listShow || !mobileDesign) && (
						<div className='col-lg-8 col-md-6'>
							<Card stretch>
								<CardHeader>
									<CardActions>
										<div className='d-flex align-items-center'>
											<ChatAvatar
												// eslint-disable-next-line react/jsx-props-no-spreading
												{...activeTab}
												className='me-3'
											/>
											<div className='fw-bold'>
												{`${activeTab.name} ${activeTab.surname}`}
											</div>
										</div>
									</CardActions>
								</CardHeader>
								<CardBody isScrollable>
									<Chat>
										{getMessages(activeTab).map((msg) => (
											<ChatGroup
												messages={msg.messages}
												user={msg.user}
												isReply={msg.isReply}
											/>
										))}
									</Chat>
								</CardBody>
								<CardFooter className='d-block'>
									<InputGroup>
										<Textarea />
										<Button color='info' icon='Send'>
											SEND
										</Button>
									</InputGroup>
								</CardFooter>
							</Card>
						</div>
					)}
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ChatList;
