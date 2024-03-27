import IconStar from '../../assets/Icons/IconStar';
import IconHeart from '../../assets/Icons/Heart';
import IconBus from '../../assets/Icons/IconBus';
import IconDelivery from '../../assets/Icons/IconDelivery';
import detail1 from '../../assets/Image/detail1.png';
import detail2 from '../../assets/Image/detail2.png';
import detail3 from '../../assets/Image/detail3.png';
import detail4 from '../../assets/Image/detail4.png';
import detail5 from '../../assets/Image/detail5.png';
import './Detail.css';
import Size from './Size';
import Color from './Color';
import { useState } from 'react';
import { addItem } from '../Cart/CartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Detail = (props) => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.list);
	const [count, setCount] = useState(1);
	const [color, setColor] = useState('');
	const [size, setSize] = useState('XS');
	const [colorHeart, setColorHeart] = useState('none');
	const handlerSetColor = (color) => {
		setColor(color);
	};
	const handlerSetSize = (size) => {
		setSize(size);
	};
	const handlerBuy = () => {
		dispatch(addItem({ ...item, color: color, size: size, quantity: count }));
	};

	const handlerColorHeart = () => {
		setColorHeart(colorHeart === 'none' ? '#db4444' : 'none');
	};
	const Count = (value) => {
		const constParse = +count;
		if ((count <= 1) & (value === -1)) return;
		setCount(constParse + value);
	};
	const handlerChangeQuantity = (event) => {
		const value = +event.target.value;
		if (isNaN(value)) setCount('');
		else setCount(value);
	};
	const list = [
		{
			id: 0,
			name: 'Havic HV G-92 Gamepad',
			star: 4,
			price: 192.0,
			size: ['XS', 'S', 'M', 'L', 'XL'],
			color: ['#ec4899', '#a855f7', '#22c55e', '#3b82f6'],

			detail:
				'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
		},
		{
			id: 1,
			name: 'Havic HV G-92 Gamepad',
			star: 4,
			price: 192.0,
			size: ['XS', 'S', 'M', 'L', 'XL'],
			color: ['#ec4899', '#a855f7', '#22c55e', '#3b82f6'],
			detail:
				'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
		},
		{
			id: 2,
			name: 'Havic HV G-92 Gamepad',
			star: 4,
			price: 192.0,
			size: ['XS', 'S', 'M', 'L', 'XL'],
			color: ['#ec4899', '#a855f7', '#22c55e', '#3b82f6'],
			detail:
				'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
		},
		{
			id: 3,
			name: 'Havic HV G-92 Gamepad',
			star: 4,
			price: 192.0,
			size: ['XS', 'S', 'M', 'L', 'XL'],
			color: ['#ec4899', '#a855f7', '#22c55e', '#3b82f6'],
			detail:
				'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
		},
	];

	const item = list[1];

	return (
		<div className='container mx-auto'>
			<div className='max-w-[1170px] min-h-[600px] mx-auto grid lg:grid-cols-[170px,minmax(auto,_1fr),400px] grid-cols-2'>
				<div className='lg:flex lg:flex-col items-center justify-between gap-4 grid grid-cols-2'>
					<img src={detail2} alt='product' />
					<img src={detail3} alt='product' />
					<img src={detail4} alt='product' />
					<img src={detail5} alt='product' />
				</div>
				<div className='flex justify-center items-center '>
					<img src={detail1} alt='product' />
				</div>
				<div className='flex justify-between flex-col lg:col-span-1 col-span-2 mt-30'>
					<div>
						<h3 className='text-[24px] font-semibold mb-4'>{item.name}</h3>
						<div className='mb-4 flex gap-4'>
							<IconStar count={+item.star} />
							<span className='text-[14px] pr-4 border-r-[1px] '>
								(150 Reviews)
							</span>
							<span className='text-[#99ffc2] text-[14px]'>In Stock</span>
						</div>
						<p className='text-[24px] mb-6'>${item.price}</p>
					</div>
					<p className='text-[14px]'>
						PlayStation 5 Controller Skin High quality vinyl with air channel
						adhesive for easy bubble free install & mess free removal Pressure
						sensitive.
					</p>
					<hr className='my-6' />
					<div className='flex gap-3'>
						<span>Colours:</span>
						<Color colorAmount={item.color} handlerSetColor={handlerSetColor} />
					</div>
					<div className='mt-6 peer flex  gap-3 '>
						<span>Size:</span>
						<Size sizeAmount={item.size} handlerSetSize={handlerSetSize} />
					</div>
					<div className='flex justify-between items-center mt-6'>
						<div className='flex justify-center items-center'>
							<button
								className='w-10 h-11 border-[1px] border-[#b4b4b4] rounded-l-md'
								onClick={() => Count(-1)}>
								-
							</button>
							<div>
								<input
									className='w-20 h-11 border-[1px] flex justify-center items-center border-[#b4b4b4] border-x-transparent text-center '
									value={count}
									onChange={(event) => handlerChangeQuantity(event)}
								/>
							</div>
							<button
								className='w-10 h-11 border-[1px]  border-[#db4444] bg-[#db4444]  rounded-r-md text-white'
								onClick={() => Count(1)}>
								+
							</button>
						</div>

						<button
							className='bg-[#db4444] px-12 py-[10px] rounded-md text-white'
							onClick={() => handlerBuy()}>
							Buy Now
						</button>
						<div onClick={handlerColorHeart}>
							<IconHeart color={colorHeart} />
						</div>
					</div>
					<div className='mt-10'>
						<div className='p-4 border-[1px] flex gap-4 border-black'>
							<div>
								<IconBus />
							</div>
							<div className='font-medium'>
								<p className='text-[16px] '>Free Delivery</p>
								<a className='underline text-[12px]'>
									Enter your postal code for Delivery Availability
								</a>
							</div>
						</div>
						<div className='p-4 pb-6 border-[1px] flex gap-4 border-black border-t-transparent'>
							<div>
								<IconDelivery />
							</div>
							<div className='font-medium'>
								<p className='text-[16px]'>Delivery</p>
								<p className='underline text-[12px]'>
									Free 30 Days Delivery Returns. Details
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Detail;
