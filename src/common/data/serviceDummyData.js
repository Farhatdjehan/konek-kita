const surfing = {
	name: 'Campaign',
	icon: 'Campaign',
	color: 'info',
};
const kiteSurfing = {
	name: 'Promosi',
	icon: 'ChatBubble',
	color: 'danger',
};
const tennis = {
	name: 'Charity',
	icon: 'TableChart',
	color: 'success',
};
const kayaking = {
	name: 'Live Music',
	icon: 'QueueMusic',
	color: 'info',
};
const handball = {
	name: 'Sosialisasi',
	icon: 'PeopleOutline',
	color: 'warning',
};
const iceSkating = {
	name: 'Webinar',
	icon: 'VideoCall',
	color: 'info',
};
const snowboarding = {
	name: 'Campaign 2',
	icon: 'Campaign',
	color: 'warning',
};
const volleyball = {
	name: 'Education',
	icon: 'Book',
	color: 'warning',
};
const cricket = {
	name: 'Talk Show',
	icon: 'Chat',
	color: 'success',
};
const yoga = {
	name: 'Video Short',
	icon: 'Videocam',
	color: 'success',
};
const hiking = {
	name: 'Seminar',
	icon: 'MarkChatUnread',
	color: 'danger',
};
const football = {
	name: 'Social',
	icon: 'SocialDistance',
	color: 'success',
};

const SERVICES = {
	SURFING: surfing,
	KITE_SURFING: kiteSurfing,
	TENNIS: tennis,
	KAYAKING: kayaking,
	HANDBALL: handball,
	ICE_SKATING: iceSkating,
	SNOWBOARDING: snowboarding,
	VOLLEYBALL: volleyball,
	CRICKET: cricket,
	YOGA: yoga,
	HIKING: hiking,
	FOOTBALL: football,
};

export function getServiceDataWithServiceName(serviceName) {
	return SERVICES[
		Object.keys(SERVICES).filter((f) => SERVICES[f].name.toString() === serviceName)
	];
}

export default SERVICES;
