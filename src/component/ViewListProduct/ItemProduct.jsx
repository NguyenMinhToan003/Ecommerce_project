import { GoHeartFill } from 'react-icons/go';
import { BsEye } from 'react-icons/bs';
import IconStar from '../../assets/icons/IconStar';
const ItemProduct = ({ product }) => {
	return (
		<div className='w-[270px] h-[322px] flex flex-col justify-between mb-[30px]'>
			<a
				href={`/detail?id=${product.id}`}
				className='relative  bg-[#f5f5f5] flex justify-center items-center h-full w-full rounded-md '>
				{product.countDown && (
					<div className='absolute top-3 left-3 py-1 px-3 rounded-md text-[#fafafa] bg-[#db4444] text-[12px]'>
						-{product.countDown}%
					</div>
				)}
				<img
					src={product.image}
					alt={product.name}
					className='w-full h-full object-scale-down'
				/>
				<div className='absolute top-3 right-3 flex flex-col gap-2'>
					<div className='w-[34px] h-[34px] rounded-full flex justify-center items-center bg-white '>
						<GoHeartFill />
					</div>
					<div className='w-[34px] h-[34px] rounded-full flex justify-center items-center bg-white '>
						<BsEye />
					</div>
				</div>
			</a>

			<h2 className='text-[16px] font-medium'>{product.name}</h2>
			<div className='flex gap-2 items-center'>
				<span className='text-[#db4444] text-[16px] font-medium '>
					${product.price}
				</span>
				<IconStar count={product.star} />
			</div>
		</div>
	);
};
export default ItemProduct;
