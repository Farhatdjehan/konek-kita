import Img1 from '../../../assets/img/scene1.png';
import COLORS from '../../../common/data/enumColors';

const TAGS = {
	NPM: {
		text: 'NPM',
		color: COLORS.SUCCESS.name,
	},
	YARN: {
		text: 'Yarn',
		color: COLORS.DANGER.name,
	},
	BOOTSTRAP: {
		text: 'Bootstrap',
		color: COLORS.PRIMARY.name,
	},
	DEPENDENCIES: {
		text: 'Dependencies',
		color: COLORS.INFO.name,
	},
};

export const CATEGORIES = {
	INSTAGRAM: {
		value: 'instagram',
		text: 'Instagram',
	},
	TWITTER: {
		value: 'twitter',
		text: 'Twitter',
	},
	COLORS: {
		value: 'colors',
		text: 'Tiktok',
	},
};

const data = [
	{
		id: 1,
		title: 'Influencer 2.0',
		date: '21/12/2021',
		image: Img1,
		author: 'Kementrian Kreatif Indonesia',
	},
];

export default data;
