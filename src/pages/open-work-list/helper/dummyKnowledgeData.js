import Img1 from '../../../assets/img/scene1.png';
import Img2 from '../../../assets/img/scene2.png';
import Img3 from '../../../assets/img/scene3.png';
import Img4 from '../../../assets/img/scene4.png';
import Img5 from '../../../assets/img/scene5.png';
import Img6 from '../../../assets/img/scene6.png';
import COLORS from '../../../common/data/enumColors';

const TAGS = {
	CAMPAIGN: {
		text: 'CAMPAIGN',
		color: COLORS.SUCCESS.name,
	},
	SOCIAL: {
		text: 'Social',
		color: COLORS.DANGER.name,
	},
	CHARITY: {
		text: 'Charity',
		color: COLORS.PRIMARY.name,
	},
	REFFERAL: {
		text: 'Refferal',
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
	TIKTOK: {
		value: 'tiktok',
		text: 'Tiktok',
	},
};

const data = [
	{
		id: 1,
		title: 'Indonesia Maju Bersama UMKM',
		description: 'UMKM Maju, Indonesia Jaya',
		image: Img1,
		tags: [TAGS.CAMPAIGN, TAGS.SOCIAL, TAGS.CHARITY],
		color: COLORS.WARNING.name,
		categories: [CATEGORIES.DOCUMENTATION, CATEGORIES.SETTINGS],
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis faucibus interdum. Donec dapibus fringilla elementum. Pellentesque et quam quis mauris suscipit laoreet. Integer a eleifend magna. Quisque iaculis massa sit amet molestie eleifend. Nunc id finibus massa, vel eleifend turpis. Maecenas interdum neque non neque porta venenatis. Duis nec viverra nisi. Aenean enim nulla, egestas at congue et, vehicula eget sem. Donec molestie bibendum fermentum. Sed tempor, augue sit amet scelerisque vehicula, lacus nunc eleifend tellus, at lobortis felis erat eu dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas libero mi, lacinia a purus sagittis, aliquam fringilla magna. Mauris commodo mollis iaculis. Cras metus mauris, tincidunt ac dapibus in, facilisis vel ipsum.',
	},
	{
		id: 2,
		title: 'Sukseskan Usaha Kecil Para Pedagang!',
		description: 'Dukung usaha mereka untuk mensejahterakan rakyat',
		image: Img2,
		tags: [TAGS.CAMPAIGN, TAGS.SOCIAL, TAGS.REFFERAL],
		color: COLORS.PRIMARY.name,
		categories: [CATEGORIES.DOCUMENTATION],
		content:
			'Aliquam sodales tempor ullamcorper. Quisque non nibh consequat, dapibus magna et, commodo erat. Proin fringilla nibh mollis, vestibulum dui a, laoreet purus. Aliquam vehicula libero est, ut ornare quam eleifend at. Cras accumsan interdum nulla ut accumsan. Duis ornare, est vel rutrum bibendum, magna odio vehicula sem, non hendrerit dui eros ac erat. Sed et justo ac elit pellentesque ornare sit amet quis magna. Curabitur sagittis, leo pulvinar imperdiet consectetur, libero nisi rhoncus magna, non facilisis tortor mi et felis. Ut aliquet diam at eros faucibus, quis gravida nisl volutpat. Quisque eu nibh orci. Praesent posuere orci ligula, a lacinia mauris venenatis non.',
	},
	{
		id: 3,
		title: 'Kita Bersama UMKM #1',
		description:
			'UMKM maju dan UMKM bisa',
		image: Img3,
		tags: [TAGS.CAMPAIGN, TAGS.SOCIAL],
		color: COLORS.DANGER.name,
		categories: [CATEGORIES.DOCUMENTATION, CATEGORIES.SETTINGS],
		content:
			'Pellentesque vehicula dolor a nisi tincidunt, vitae ornare enim tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc viverra neque vel diam hendrerit volutpat. Pellentesque placerat justo a sollicitudin molestie. Etiam bibendum lacus nec tortor viverra, a consectetur neque elementum. Donec at sodales purus. Fusce in urna ac elit pulvinar efficitur in non eros. Praesent eleifend, dolor nec sollicitudin eleifend, est massa egestas metus, vitae aliquet magna erat sed turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris rutrum a augue et suscipit. In id augue ullamcorper libero tincidunt luctus.',
	},
	{
		id: 4,
		title: 'Kita Bersama UMKM #2',
		description:
			'UMKM maju dan UMKM bisa',
		image: Img4,
		tags: [TAGS.CAMPAIGN, TAGS.SOCIAL, TAGS.REFFERAL],
		color: COLORS.SUCCESS.name,
		categories: [CATEGORIES.DOCUMENTATION, CATEGORIES.SETTINGS],
		content:
			'Nam vitae blandit elit. Pellentesque efficitur venenatis finibus. Integer at ante rutrum, bibendum ipsum id, viverra mauris. Maecenas rhoncus ligula at lectus ullamcorper, sit amet suscipit massa tristique. Ut mattis feugiat ex, at finibus est ullamcorper in. Maecenas volutpat, odio id aliquam pulvinar, lectus velit malesuada sem, quis rutrum magna lectus quis lacus. Morbi egestas mollis nisl, quis ultrices enim iaculis vitae. Sed maximus blandit mollis. Vestibulum suscipit nibh sit amet vehicula rhoncus. Etiam gravida eu leo ac placerat. Integer vitae nunc ipsum. Phasellus maximus ullamcorper eros, nec blandit ex dignissim non. Donec vulputate molestie risus, vel hendrerit est aliquam vel.',
	},
	{
		id: 5,
		title: '#KitaBisa Tolong Pedagang Asongan',
		description:
			'#KitaBisa Tolong Pedagang Asongan',
		image: Img5,
		tags: [TAGS.CAMPAIGN, TAGS.SOCIAL],
		color: COLORS.INFO.name,
		categories: [CATEGORIES.SETTINGS],
		content:
			'Duis posuere risus in enim sagittis, et condimentum ligula eleifend. Phasellus elementum lectus nulla. Curabitur quis vulputate ex. Nunc quis mi nibh. Vivamus sed dictum sem. Suspendisse laoreet nisl sed diam scelerisque, at gravida dui fringilla. Maecenas vel pulvinar mi. Suspendisse suscipit rhoncus dignissim. Phasellus iaculis mattis lacus, id fermentum tortor consectetur nec. Morbi bibendum neque velit, in tincidunt magna molestie vitae. Sed ultrices orci non metus pellentesque consequat. Fusce ut eleifend neque. Nunc bibendum dapibus tortor. Mauris tincidunt auctor eros sed vehicula. Maecenas a lacinia nibh. Nulla in egestas enim.',
	},
	{
		id: 6,
		title: 'Maju Terus Indonesia',
		description: 'Indonesia Maju, Indonesia Jaya',
		image: Img2,
		tags: [TAGS.CAMPAIGN, TAGS.SOCIAL],
		color: COLORS.INFO.name,
		categories: [CATEGORIES.COLORS],
		content:
			'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi rhoncus, turpis mollis tincidunt feugiat, augue enim dapibus ipsum, et placerat neque nibh sit amet justo. Praesent venenatis ex eu massa aliquam congue eu sed diam. Vestibulum suscipit lacus et justo ornare, at rutrum erat malesuada. Fusce ut rutrum dui. Donec posuere fringilla urna, ut efficitur mi feugiat et. In ut elit at turpis dapibus pretium quis vel turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam rhoncus vel erat a finibus. Nulla facilisi. Suspendisse ornare rhoncus sollicitudin. Curabitur mollis, erat id tincidunt efficitur, arcu sem elementum enim, ac lacinia tortor purus vel ante. Nullam non feugiat magna.',
	},
];

export default data;
