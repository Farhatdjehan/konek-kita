import web1 from '../../../assets/img/scene1.png';
import web2 from '../../../assets/img/scene2.png';
import web3 from '../../../assets/img/scene3.png';
import web4 from '../../../assets/img/scene4.png';
import user from '../../../assets/img/user.png';

const nft = [
	{
		id: 1,
		title: 'NFT1',
		thumbnail: web1,
		verification: true,
		current_price: 0.4,
		last_price: 0.35,
		avatar: user,
		author: 'Alex Pulindo',
	},
	{
		id: 2,
		title: 'NFT2',
		thumbnail: web1,
		verification: false,
		current_price: 0.2,
		last_price: 0.1,
		avatar: user,
		author: 'Juju',
	},
	{
		id: 3,
		title: 'NFT3',
		thumbnail: web1,
		verification: true,
		current_price: 0.3,
		last_price: 0.35,
		avatar: user,
		author: 'Gugun Morientes',
	},
	{
		id: 4,
		title: 'NFT4',
		thumbnail: web1,
		verification: false,
		current_price: 0.4,
		last_price: 0.35,
		avatar: user,
		author: 'Axel Witsel',
	},
];
export default nft;
