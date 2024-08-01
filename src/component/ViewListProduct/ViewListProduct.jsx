import ItemProduct from './ItemProduct';
import { getProductByCatagory } from '../../services/CatagoryServices';
import { useEffect, useState } from 'react';
const ViewListProduct = (props) => {
	const { catalory } = props;
	const [listProduct, setListProduct] = useState([]);
	const fetchProduct = async () => {
		console.log(catalory);
		const res = await getProductByCatagory(catalory);
		if (res && res.EC === 0) {
			const data = res.DT.map((item) => {
				return {
					id: item.id,
					image: item.image.split(',')[0],
					name: item.name,
					sale: item.Price,
					price: item.price,
					star: item.star,
					view: 88,
					countDown: 40,
				};
			});
			setListProduct(data);
		}
	};
	useEffect(() => {
		fetchProduct();
	}, [catalory]);

	return (
		<ul className='mt-14 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto items-center gap-[30px] '>
			{listProduct.map((item, index) => {
				return (
					<li key={index}>
						<ItemProduct product={item} />
					</li>
				);
			})}
		</ul>
	);
};
export default ViewListProduct;
