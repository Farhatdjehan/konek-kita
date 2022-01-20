import Img1 from '../../../assets/img/scene1.png';
import Img2 from '../../../assets/img/scene2.png';
import Img3 from '../../../assets/img/scene3.png';
import Img4 from '../../../assets/img/scene4.png';
import Img5 from '../../../assets/img/scene5.png';
import Img6 from '../../../assets/img/scene6.png';
import COLORS from '../../../common/data/enumColors';

const TAGS = {
	PUBLIC: {
		text: 'Public Relation',
		color: COLORS.SUCCESS.name,
	},
	ENTERTAINING: {
		text: 'Entertaining',
		color: COLORS.DANGER.name,
	},
};

export const CATEGORIES = {
	UMUM: {
		value: 'umum',
		text: 'Umum',
	},
	DIRECT: {
		value: 'direct',
		text: 'Direct Collabs',
	},
};

const data = [
	{
		id: 1,
		title: 'Bikin project bareng yuk nya!',
		description: '',
		user: 'Karin Novilda',
		image: Img1,
		tags: [TAGS.PUBLIC, TAGS.ENTERTAINING],
		color: COLORS.WARNING.name,
		categories: [CATEGORIES.DIRECT],
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis faucibus interdum. Donec dapibus fringilla elementum. Pellentesque et quam quis mauris suscipit laoreet. Integer a eleifend magna. Quisque iaculis massa sit amet molestie eleifend. Nunc id finibus massa, vel eleifend turpis. Maecenas interdum neque non neque porta venenatis. Duis nec viverra nisi. Aenean enim nulla, egestas at congue et, vehicula eget sem. Donec molestie bibendum fermentum. Sed tempor, augue sit amet scelerisque vehicula, lacus nunc eleifend tellus, at lobortis felis erat eu dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas libero mi, lacinia a purus sagittis, aliquam fringilla magna. Mauris commodo mollis iaculis. Cras metus mauris, tincidunt ac dapibus in, facilisis vel ipsum.',
	},
	{
		id: 2,
		title: 'Jadi bintang video klip aku yuk?',
		description: '',
		user: 'Raisa Andriana',
		image: Img2,
		tags: [TAGS.PUBLIC, TAGS.ENTERTAINING],
		color: COLORS.PRIMARY.name,
		categories: [CATEGORIES.DIRECT],
		content:
			'Aliquam sodales tempor ullamcorper. Quisque non nibh consequat, dapibus magna et, commodo erat. Proin fringilla nibh mollis, vestibulum dui a, laoreet purus. Aliquam vehicula libero est, ut ornare quam eleifend at. Cras accumsan interdum nulla ut accumsan. Duis ornare, est vel rutrum bibendum, magna odio vehicula sem, non hendrerit dui eros ac erat. Sed et justo ac elit pellentesque ornare sit amet quis magna. Curabitur sagittis, leo pulvinar imperdiet consectetur, libero nisi rhoncus magna, non facilisis tortor mi et felis. Ut aliquet diam at eros faucibus, quis gravida nisl volutpat. Quisque eu nibh orci. Praesent posuere orci ligula, a lacinia mauris venenatis non.',
	},
	{
		id: 3,
		title: 'Ikut project aku yuk',
		description: '',
		user: 'Rizki Febrian',
		image: Img3,
		tags: [TAGS.PUBLIC, TAGS.ENTERTAINING],
		color: COLORS.DANGER.name,
		categories: [CATEGORIES.UMUM],
		content:
			'Pellentesque vehicula dolor a nisi tincidunt, vitae ornare enim tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc viverra neque vel diam hendrerit volutpat. Pellentesque placerat justo a sollicitudin molestie. Etiam bibendum lacus nec tortor viverra, a consectetur neque elementum. Donec at sodales purus. Fusce in urna ac elit pulvinar efficitur in non eros. Praesent eleifend, dolor nec sollicitudin eleifend, est massa egestas metus, vitae aliquet magna erat sed turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris rutrum a augue et suscipit. In id augue ullamcorper libero tincidunt luctus.',
	},
];

export default data;
