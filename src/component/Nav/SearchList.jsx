import IconStar from '../../assets/icons/IconStar';
import { FaHotjar } from 'react-icons/fa';
import { SearchProductService } from '../../services/ProductService';
import { useEffect, useState, useCallback } from 'react';

const debounce = (func, delay) => {
	let timeoutId;
	return (...args) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func.apply(null, args);
		}, delay);
	};
};

const SearchList = (props) => {
	const { searchKey, statusSearch, setStatus } = props;
	const [products, setProducts] = useState([]);
	const [message, setMessage] = useState('Search product by name');

	const fetchData = async (trimmedSearchKey) => {
		if (trimmedSearchKey === '') {
			setProducts([]);
			setMessage('Search product by name');
			setStatus(false);
			return;
		}

		const response = await SearchProductService(trimmedSearchKey, 6, 1);

		if (response.EC === 0) {
			setProducts(response.DT);
			setMessage(response.EM);
		} else {
			setProducts([]);
			setMessage(response.EM);
		}
	};

	const debouncedFetchData = useCallback(debounce(fetchData, 500), []);

	useEffect(() => {
		const trimmedSearchKey = searchKey.trim();
		debouncedFetchData(trimmedSearchKey);
	}, [searchKey, debouncedFetchData]);

	return (
		statusSearch && (
			<ul className='absolute top-[100%] left-0 bg-cyan-50 right-0 rounded-sm p-4 flex flex-col gap-1 shadow-2xl'>
				<div className='flex justify-between items-center'>
					<h4 className='font-bold text-lime-800 mb-5'>RESULT</h4>
					<a
						href={`/search?name=${searchKey}`}
						className='px-4 py-2 rounded-md bg-green-700 text-white'>
						Search
					</a>
				</div>
				{products.length > 0 ? (
					products.map((item, index) => {
						const imageUrl = item.image.split(',')[0];
						return (
							<li key={index}>
								<a
									href={`/detail?id=${item.id}`}
									className='flex h-14 w-full bg-red'>
									<div className='max-w-16 h-14 flex justify-center items-center bg-slate-400 rounded-sm shadow-lg'>
										<img
											src={imageUrl}
											alt='imageProduct'
											className='w-full h-full p-1 object-scale-down'
										/>
									</div>
									<div className='flex-1 h-full bg-white text-start p-1'>
										<div className='font-medium'>{item.name}</div>
										<div className='flex gap-4 text-[12px] items-center justify-between'>
											<p>
												<IconStar count={item.star} />
											</p>
											<div className='flex items-center gap-2'>
												<div className='text-[#db4444] flex items-center gap-1'>
													<FaHotjar />
													<span>{item.view}</span>
												</div>
												|
												<div className='text-orange-700'>
													<span>SALE {item.countDown}%</span>
												</div>
											</div>
										</div>
									</div>
									<div className='w-14 h-full bg-teal-700 flex justify-center items-center'>
										<p className='text-white'>{item.price}$</p>
									</div>
								</a>
							</li>
						);
					})
				) : (
					<p className='text-center text-red-500 italic'>{message}</p>
				)}
			</ul>
		)
	);
};

export default SearchList;
