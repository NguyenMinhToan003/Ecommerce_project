import Image from '../../assets/images/item1.jpg';
import Image2 from '../../assets/images/item2.png';
import Image3 from '../../assets/images/item3.png';
import Image4 from '../../assets/images/item4.png';
import ItemProduct from './ItemProduct';

const ViewListProduct = (props) => {
	const { catalory } = props;
	const ls = [
		{
			image: Image2,
			name: 'HAVIT HV-G92 Gamepad',
			sale: 120,
			price: 160,
			star: 3,
			view: 88,
			counDown: 30,
		},
		{
			image: Image,
			name: 'AK-900 Wired Keyboard',
			sale: 120,
			price: 160,
			star: 5,
			view: 88,
			counDown: 40,
		},
		{
			image: Image3,
			name: 'IPS LCD Gaming Monitor',
			sale: 130,
			price: 160,
			star: 4,
			view: 88,
			counDown: 40,
		},
		{
			image: Image4,
			name: 'AK-900 Wired Keyboard',
			sale: 120,
			price: 160,
			star: 5,
			view: 88,
			counDown: 40,
		},

		{
			image: Image2,
			name: 'HAVIT HV-G92 Gamepad',
			sale: 120,
			price: 160,
			star: 3,
			view: 88,
			counDown: 30,
		},

		{
			image: Image2,
			name: 'HAVIT HV-G92 Gamepad',
			sale: 120,
			price: 160,
			star: 3,
			view: 88,
			counDown: 30,
		},
	];

	return (
		<div className='mt-14 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto items-center gap-[30px] '>
			{ls.map((item, index) => {
				return <ItemProduct product={item} />;
			})}
		</div>
	);
};
export default ViewListProduct;
