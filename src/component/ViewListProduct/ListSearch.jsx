import { useEffect, useState } from 'react';
import { GetProductService } from '../../services/ProductService';
import ItemSearchProduct from './itemSearchProduct';

const ListSearch = (props) => {
	const { catalory } = props;
	const [ls, setLs] = useState([]);
	const fetchProduct = async () => {
		try {
			const response = await GetProductService(1, 10);
			console.log('Fetched products:', response);
			if (response && response.EC === 0) {
				let products = response.DT.record.map((item) => {
					if (item.image) {
						let firstImage = item.image.split(',')[0];
						return { ...item, image: firstImage };
					}
					return item;
				});
				setLs(products);
			}
		} catch (error) {
			console.error('Error fetching products:', error);
		}
	};

	useEffect(() => {
		fetchProduct();
	}, []);

	return (
		<div className='container mx-auto'>
			<ul className='mx-auto'>
				{ls.map((item, index) => (
					<li
						key={index}
						className='inline-block 2xl:w-1/6 sm:w-1/3 lg:w-1/4 xl:w-1/5   '>
						<ItemSearchProduct item={item} />
					</li>
				))}
			</ul>
		</div>
	);
};
export default ListSearch;
