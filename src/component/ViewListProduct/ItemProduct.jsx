import { GoHeartFill } from 'react-icons/go';
import { BsEye } from 'react-icons/bs';
import IconStar from '../../assets/icons/IconStar';
const ItemProduct = ({ product }) => {
	return (
		<div className='w-[270px] h-[322px] flex flex-col justify-between mb-[30px]'>
			<div className='bg-[#f5f5f5] flex justify-center items-center h-[250px] rounded-md relative'>
				<img src={product.image} alt={product.name} />
				<div className='absolute top-3 right-3 flex flex-col gap-2'>
					<div className='w-[34px] h-[34px] rounded-full flex justify-center items-center bg-white '>
						<GoHeartFill />
					</div>
					<div className='w-[34px] h-[34px] rounded-full flex justify-center items-center bg-white '>
						<BsEye />
					</div>
				</div>
			</div>

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
