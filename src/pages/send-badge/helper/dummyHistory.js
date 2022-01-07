import moment from 'moment';
import Img1 from '../../../assets/img/scene1.png';
import Img2 from '../../../assets/img/scene2.png';
import Img3 from '../../../assets/img/scene3.png';
import Img4 from '../../../assets/img/scene4.png';
import Img5 from '../../../assets/img/scene5.png';
import Img6 from '../../../assets/img/scene6.png';
import TIKTOK from '../../../common/data/enumColors';

const data = [
	{
		id: 1,
		date:
			moment().format('YYYY') + moment().format('MM') + moment().add(1, 'days').format('DD'),
		link: 'www.campaign.com/1',
		total: 3,
		image: Img1,
		send: 2,
		description: 'Lorem ipsum doler amet',
	},
	{
		id: 2,
		date:
			moment().format('YYYY') + moment().format('MM') + moment().add(2, 'days').format('DD'),
		link: 'www.campaign.com/2',
		total: 10,
		image: Img2,
		send: 1,
		description: 'Lorem ipsum doler amet',
	},
	{
		id: 3,
		date:
			moment().format('YYYY') + moment().format('MM') + moment().add(3, 'days').format('DD'),
		link: 'www.campaign.com/3',
		total: 16,
		image: Img3,
		send: 4,
		description: 'Lorem ipsum doler amet',
	},
	{
		id: 4,
		date:
			moment().format('YYYY') + moment().format('MM') + moment().add(1, 'days').format('DD'),
		link: 'www.campaign.com/3',
		total: 11,
		image: Img4,
		send: 6,
		description: 'Lorem ipsum doler amet',
	},
	{
		id: 5,
		date:
			moment().format('YYYY') + moment().format('MM') + moment().add(5, 'days').format('DD'),
		link: 'www.campaign.com/4',
		total: 4,
		image: Img5,
		send: 1,
		description: 'Lorem ipsum doler amet',
	},
	{
		id: 6,
		date:
			moment().format('YYYY') + moment().format('MM') + moment().add(6, 'days').format('DD'),
		link: 'www.campaign.com/5',
		total: 34,
		image: Img6,
		send: 6,
		description: 'Lorem ipsum doler amet',
	},
	{
		id: 7,
		date:
			moment().format('YYYY') + moment().format('MM') + moment().add(1, 'days').format('DD'),
		link: 'www.campaign.com/6',
		total: 10,
		image: Img1,
		send: 5,
		description: 'Lorem ipsum doler amet',
	},
	{
		id: 8,
		date:
			moment().format('YYYY') + moment().format('MM') + moment().add(9, 'days').format('DD'),
		link: 'www.campaign.com/7',
		total: 10,
		image: Img6,
		send: 1,
		description: 'Lorem ipsum doler amet',
	},
];

export default data;
