import IconStar from '../../assets/icons/IconStar';
import IconHeart from '../../assets/icons/Heart';
import IconEye from '../../assets/icons/IconEye';
import { BsPersonFillCheck } from 'react-icons/bs';
import { useState } from 'react';
const ItemFlashSale = (props) => {
	const [colorHeart, setColorHeart] = useState('none');
	let { image, name, User, price, star, counDown } = props.item;

	return (
		<>
			<div className='w-[270px] h-auto group p-4 '>
				<div className='w-full h-[250px] bg-[#f5f5f5] flex justify-center items-center relative '>
					<img src={image} className='w-full h-full object-scale-down' />
					{counDown && (
						<div className='absolute top-3 left-3 py-1 px-3 rounded-md text-[#fafafa] bg-[#db4444] text-[12px]'>
							-{counDown}%
						</div>
					)}
					<div className='flex flex-col gap-3 absolute top-3 right-3'>
						<div
							onClick={() => {
								setColorHeart(colorHeart === 'none' ? '#de5454' : 'none');
							}}>
							<IconHeart color={colorHeart} />
						</div>
						<IconEye />
					</div>

					<div className='absolute bottom-0 left-0 right-0 bg-black text-[#f4f4f4] h-10  justify-center items-center font-medium text-xl invisible group-hover:visible flex  rounded-b-lg cursor-pointer'>
						Add To Cart
					</div>
				</div>
				<div className='mt-6 flex flex-col justify-start gap-2'>
					<span className='font-medium text-[16px]'>{name}</span>
					<div className=' flex items-center gap-3'>
						<span className='text-[#de5454]'>
							${price * (counDown ? counDown : 100 / 100)}
						</span>
						{counDown && (
							<span className='text-[#9c9c9c] line-through'>${price}</span>
						)}
					</div>
					<div>
						<IconStar count={star} />
					</div>
					<div className='flex items-center gap-2 text-[12px] text-gray-600 font-light'>
						<div className='w-6 h-6 rounded-full bg-cyan-100 flex justify-center items-center shadow-sm'>
							<BsPersonFillCheck className=' text-cyan-700 text-[15px]' />
						</div>
						<span className='italic'>{User.name}</span>
					</div>
				</div>
			</div>
		</>
	);
};
export default ItemFlashSale;
