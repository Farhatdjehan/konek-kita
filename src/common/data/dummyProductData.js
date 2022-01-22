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

const data = [
	{
		id: 1,
		image: BeveledCone,
		name: 'Paket Gold',
		benefit: 'Post, Video, Story (1 Minggu)',
		color: process.env.REACT_APP_SUCCESS_COLOR,
		price: 3200000,
		category: 'umum'
	},
	{
		id: 2,
		image: CloudBall,
		name: 'Paket Silver',
		benefit: 'Post, Video (1 Minggu)',
		color: process.env.REACT_APP_SUCCESS_COLOR,
		price: 2400000,
		category: 'umum'
	},
	{
		id: 3,
		image: Quadrilateral,
		name: 'Paket Bronze',
		benefit: 'Post (1 Minggu)',
		color: process.env.REACT_APP_WARNING_COLOR,
		price: 1200000,
		category: 'umum'
	},
	{
		id: 4,
		image: BendyRectangle,
		name: 'Paket UMKM 1',
		benefit: 'Post, Video, Story (1 Minggu)',
		color: process.env.REACT_APP_WARNING_COLOR,
		price: 500000,
		category: 'umkm'
	},
	{
		id: 5,
		image: Infinity,
		name: 'Paket UMKM 2',
		benefit: 'Post, Video (1 Minggu)',
		color: process.env.REACT_APP_WARNING_COLOR,
		price: 400000,
		category: 'umkm'
	},
	{
		id: 6,
		image: HardSharpDonut,
		name: 'Paket UMKM 3',
		benefit: 'Post (1 Minggu)',
		color: process.env.REACT_APP_WARNING_COLOR,
		price: 300000,
		category: 'umkm'
	},
];
export default data;
