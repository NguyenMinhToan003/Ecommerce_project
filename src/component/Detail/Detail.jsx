import IconStar from '../../assets/icons/IconStar';
import IconHeart from '../../assets/icons/Heart';
import IconBus from '../../assets/icons/IconBus';
import IconDelivery from '../../assets/icons/IconDelivery';

import './Detail.css';
import Size from './Size';
import Color from './Color';
import { useEffect, useState } from 'react';
import { addCartItem } from '../../Redux/CartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { DetailProductService } from '../../services/ProductService';
import { useSearchParams } from 'react-router-dom';

const Detail = (props) => {
	const [queryParameters] = useSearchParams();
	const dispatch = useDispatch();
	const [count, setCount] = useState(1);
	const [color, setColor] = useState([]);
	const [size, setSize] = useState([]);
	const [choiseColor, setChoiseColor] = useState('');
	const [choiseSize, setChoiseSize] = useState('');
	const [colorHeart, setColorHeart] = useState('none');
	const [item, setItem] = useState({
		id: '',
		name: '',
		star: 5,
		price: 0,
		size: [],
		color: [],
		detail: '',
		image: [],
	});
	const fetchData = async () => {
		const response = await DetailProductService(queryParameters.get('id'));
		if (response && response.EC === 0) {
			const data = {
				id: response.DT.id,
				name: response.DT.name,
				star: response.DT.star,
				price: response.DT.price,
				size: response.DT.size.split(','),
				color: response.DT.color.split(','),
				detail: response.DT.detail,
				image: response.DT.image.split(','),
			};
			setChoiseColor(data.color[0]);
			setChoiseSize(data.size[0]);
			setItem(data);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handlerSetColor = (color) => {
		setChoiseColor(color);
	};

	const handlerSetSize = (size) => {
		setChoiseSize(size);
	};

	const handlerBuy = () => {
		console.log({
			data: {
				...item,
				color: choiseColor,
				size: choiseSize,
				quantity: count,
				img: item.image[0],
			},
			index: -1,
		});
		dispatch(
			addCartItem({
				data: {
					...item,
					color: choiseColor,
					size: choiseSize,
					quantity: count,
					img: item.image[0],
				},
				index: -1,
			})
		);
		toast.success('Added to Cart');
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

	return (
		<div className='container mx-auto px-2 mt-56'>
			<div className='max-w-[1170px] min-h-[600px] mx-auto grid lg:grid-cols-[170px,minmax(auto,_1fr),400px] grid-cols-2 gap-9'>
				<div className='lg:flex lg:flex-col items-center justify-between gap-4 grid grid-cols-2'>
					{item &&
						item.image &&
						item.image.map((el, index) => {
							if (index === item.image.length - 1 || index === 0) return '';
							return <img src={el} alt='product' />;
						})}
				</div>
				<div className='flex justify-center items-center '>
					<img
						src={item.image[0]}
						alt='product'
						className='w-full object-fill'
					/>
				</div>
				<div className='flex justify-start flex-col lg:col-span-1 col-span-2 mt-30'>
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
						adhesive for easy bubble free install & mess free removal.
						<br />
						{item.detail}
					</p>
					<hr className='my-6' />
					<div className='flex gap-3'>
						<span>Colours:</span>
						<Color
							colorAmount={item.color}
							handlerSetColor={handlerSetColor}
							coloring={choiseColor}
							handlerChoiseColor={setChoiseColor}
						/>
					</div>
					<div className='mt-6 peer flex gap-3 '>
						<span>Size:</span>
						<Size
							sizeAmount={item.size}
							handlerSetSize={handlerSetSize}
							sizing={choiseSize}
						/>
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
								className='w-10 h-11 border-[1px] border-[#db4444] bg-[#db4444] rounded-r-md text-white'
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
								<p className='text-[16px]'>Free Delivery</p>
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
