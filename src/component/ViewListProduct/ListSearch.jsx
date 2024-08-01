import { useEffect, useState } from 'react';
import { SearchProductService } from '../../services/ProductService';
import ItemSearchProduct from './itemSearchProduct';
import { FaQuestion } from 'react-icons/fa';

import { useSearchParams } from 'react-router-dom';
const ListSearch = (props) => {
	const [queryParameters] = useSearchParams();
	const name = queryParameters.get('name');
	const [ls, setLs] = useState([]);
	const fetchProduct = async () => {
		try {
			const response = await SearchProductService(name, 100, 1);
			console.log('Fetched products:', response.DT);
			if (response && response.EC === 0) {
				let products = response.DT.map((item) => {
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
			<ul className='mx-auto grid grid-cols-5  gap-4'>
				{ls &&
					ls.map((item, index) => (
						<li
							key={index}
							className='flex item-center w-full h-[500px] hover:shadow-lg hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all ease-in-out '>
							<ItemSearchProduct item={item} />
						</li>
					))}
				{ls.length == 0 && (
					<div className='h-[400px] w-full gap-4 text-violet-700 text-[16px] pt-6 italic flex justify-center items-center flex-col'>
						<FaQuestion className='text-[60px]' />
						<p>Not found</p>
					</div>
				)}
			</ul>
		</div>
	);
};
export default ListSearch;
