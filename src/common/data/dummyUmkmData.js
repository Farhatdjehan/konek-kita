import BeveledCone from '../../assets/img/abstract/beveled-cone.png';
import CloudBall from '../../assets/img/abstract/cloud-ball.png';
import Quadrilateral from '../../assets/img/abstract/quadrilateral.png';
import HardSharpDonut from '../../assets/img/abstract/hald-sharp-donut.png';
import BendyRectangle from '../../assets/img/abstract/bendy-rectangle.png';
import Infinity from '../../assets/img/abstract/infinity.png';
import Octahedron from '../../assets/img/abstract/octahedron.png';
import Triangle from '../../assets/img/abstract/triangle.png';
import SquiglyGlobe from '../../assets/img/abstract/squigly-globe.png';
import Dodecagon from '../../assets/img/abstract/dodecagon.png';
import BeveledCube from '../../assets/img/abstract/beveled-cube.png';
import Cylinder from '../../assets/img/abstract/cylinder.png';

const dataUmkm = [
	{
		id: 1,
		image: BeveledCone,
		name: 'Membangun Negeri dengan Langkah Sukses',
		desc:
			'Kali ini, Kementrian Pariwisata ingin melaksanakan acara terakbar di tahun 2022 ini!',
		series: [
			{
				data: [25, 66, 41, 89, 63],
			},
		],
		color: process.env.REACT_APP_SUCCESS_COLOR,
		stock: 380,
		price: 3200000,
		store: 'Company A',
		file: 'Figma',
		point: 20,
	},
	{
		id: 2,
		image: CloudBall,
		name: 'Bantu Promosikan Jeruk Bali di Dunia!',
		desc: 'Post, Video (1 Minggu)',
		series: [
			{
				data: [12, 24, 33, 12, 48],
			},
		],
		color: process.env.REACT_APP_SUCCESS_COLOR,
		stock: 1245,
		price: 2400000,
		store: 'Company A',
		file: 'Figma',
		point: 10,
	},
	{
		id: 3,
		image: Quadrilateral,
		name: 'Yuk! Donasikan Harta Kamu di sini',
		desc: 'Post (1 Minggu)',
		series: [
			{
				data: [34, 32, 36, 34, 34],
			},
		],
		color: process.env.REACT_APP_WARNING_COLOR,
		stock: 27,
		price: 1200000,
		store: 'Company D',
		file: 'XD',
		point: 40,
	},
	{
		id: 4,
		image: HardSharpDonut,
		name: 'Bantu Saudara Kita yang Berada di Jombang',
		desc: '3D Shapes',
		series: [
			{
				data: [54, 34, 42, 23, 12],
			},
		],
		color: process.env.REACT_APP_DANGER_COLOR,
		stock: 219,
		price: 16,
		store: 'Company C',
		file: 'Sketch',
		point: 20,
	},
	{
		id: 5,
		image: BendyRectangle,
		name: 'Kita Nabung Yuk!',
		desc: '3D Shapes',
		series: [
			{
				data: [23, 21, 12, 34, 14],
			},
		],
		color: process.env.REACT_APP_DANGER_COLOR,
		stock: 219,
		price: 16,
		store: 'Company A',
		file: 'Figma',
		point: 10,
	},
	{
		id: 6,
		image: Infinity,
		name: 'Kita Bisa Jadi Juara!',
		desc: '3D Shapes',
		series: [
			{
				data: [23, 13, 34, 41, 38],
			},
		],
		color: process.env.REACT_APP_SUCCESS_COLOR,
		stock: 219,
		price: 16,
		store: 'Company C',
		file: 'Figma',
		point: 50,
	},
	// {
	// 	id: 7,
	// 	image: Octahedron,
	// 	name: 'Octahedron',
	// 	desc: '3D Shapes',
	// 	series: [
	// 		{
	// 			data: [21, 34, 23, 12, 67],
	// 		},
	// 	],
	// 	color: process.env.REACT_APP_SUCCESS_COLOR,
	// 	stock: 498,
	// 	price: 18,
	// 	store: 'Company B',
	// 	file: 'Figma',
	// },
	// {
	// 	id: 8,
	// 	image: Triangle,
	// 	name: 'Triangle',
	// 	desc: '3D Shapes',
	// 	series: [
	// 		{
	// 			data: [18, 32, 26, 15, 34],
	// 		},
	// 	],
	// 	color: process.env.REACT_APP_SUCCESS_COLOR,
	// 	stock: 219,
	// 	price: 16,
	// 	store: 'Company B',
	// 	file: 'Figma',
	// },
	// {
	// 	id: 9,
	// 	image: SquiglyGlobe,
	// 	name: 'SquiglyGlobe',
	// 	desc: '3D Shapes',
	// 	series: [
	// 		{
	// 			data: [18, 32, 26, 15, 34],
	// 		},
	// 	],
	// 	color: process.env.REACT_APP_SUCCESS_COLOR,
	// 	stock: 219,
	// 	price: 16,
	// 	store: 'Company C',
	// 	file: 'Figma',
	// },
	// {
	// 	id: 10,
	// 	image: Dodecagon,
	// 	name: 'Dodecagon',
	// 	desc: '3D Shapes',
	// 	series: [
	// 		{
	// 			data: [18, 32, 26, 15, 34],
	// 		},
	// 	],
	// 	color: process.env.REACT_APP_SUCCESS_COLOR,
	// 	stock: 219,
	// 	price: 16,
	// 	store: 'Company A',
	// 	file: 'Figma',
	// },
	// {
	// 	id: 11,
	// 	image: BeveledCube,
	// 	name: 'Beveled Cube',
	// 	desc: '3D Shapes',
	// 	series: [
	// 		{
	// 			data: [18, 32, 26, 15, 34],
	// 		},
	// 	],
	// 	color: process.env.REACT_APP_SUCCESS_COLOR,
	// 	stock: 219,
	// 	price: 16,
	// 	store: 'Company A',
	// 	file: 'Figma',
	// },
	// {
	// 	id: 12,
	// 	image: Cylinder,
	// 	name: 'Cylinder',
	// 	desc: '3D Shapes',
	// 	series: [
	// 		{
	// 			data: [18, 32, 26, 15, 34],
	// 		},
	// 	],
	// 	color: process.env.REACT_APP_SUCCESS_COLOR,
	// 	stock: 219,
	// 	price: 16,
	// 	store: 'Company B',
	// 	file: 'Figma',
	// },
];
export default dataUmkm;
