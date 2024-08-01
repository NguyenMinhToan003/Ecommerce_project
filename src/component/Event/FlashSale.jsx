import React, { useEffect, useState } from 'react';
import ItemFlashSale from './ItemFlashSale';
import IconArrowRight from '../../assets/icons/ArrowRight';
import IconArrowLeft from '../../assets/icons/ArrowLeft';
import './FlashSale.css';
import { GetProductService } from '../../services/ProductService';

const FlashSale = () => {
	const [listProduct, setListProduct] = useState([]);
	const [time, setTime] = useState([]);

	// Function to get current time values
	const oclock = () => {
		let day = new Date().getDate();
		let hour = new Date().getHours();
		let minute = new Date().getMinutes();
		let second = new Date().getSeconds();
		let timeValues = [
			{ time: 'Days', value: day },
			{ time: 'Hours', value: hour },
			{ time: 'Minutes', value: minute },
			{ time: 'Seconds', value: second },
		];
		return timeValues;
	};

	// Update time values every second
	useEffect(() => {
		const interval = setInterval(() => {
			setTime(oclock());
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	// Function to fetch products from API
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
				setListProduct(products);
			}
		} catch (error) {
			console.error('Error fetching products:', error);
		}
	};

	useEffect(() => {
		fetchProduct();
	}, []);
	return (
		<>
			<div className='container mx-auto mt-11 flex flex-col'>
				<div className='h-10 flex items-center gap-5 mb-6'>
					<div className='h-full w-5 bg-[#db4444] rounded'></div>
					<div className='text-[#db4444]'>Today’s</div>
				</div>
				<div className='flex justify-between container mx-auto'>
					<div className='flex md:gap-20 gap-15 lg:flex-row flex-col'>
						<div className='text-4xl'>Flash Sales</div>
						<ul className='w-12 flex gap-9'>
							{time.map((item, index) => (
								<>
									<li className='flex flex-col' key={index}>
										<span className='text-sm'>{item.time}</span>
										<span className='font-bold text-2xl'>{item.value}</span>
									</li>
									{index < time.length - 1 && (
										<span className='text-2xl text-[#db4444] font-bold'>:</span>
									)}
								</>
							))}
						</ul>
					</div>
					<div className='flex'>
						<div className='arrow'>
							<IconArrowRight color='black' />
						</div>
						<div className='arrow'>
							<IconArrowLeft color='black' />
						</div>
					</div>
				</div>
			</div>
			<ul className='flex overflow-x-scroll gap-8 mt-10  lg:ml-20 ml-5 flex-nowrap no-scrollbar '>
				{listProduct.map((item, index) => (
					<li key={index}>
						<ItemFlashSale item={item} />
					</li>
				))}
			</ul>
			<a
				href='#'
				className='mx-auto block px-12 py-4 rounded bg-[#db4444] text-white w-60 mt-20'>
				View All Products
			</a>
		</>
	);
};

export default FlashSale;
