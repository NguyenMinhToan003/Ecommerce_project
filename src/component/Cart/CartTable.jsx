import {
	MdOutlineKeyboardArrowUp,
	MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { IoCloseSharp } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
const CartTable = (props) => {
	const {
		listCart,
		quantity,
		handleChangeQuantity,
		handleChangeQuantityInput,
		handlerRemoveCartItem,
	} = props;
	return (
		<table className='container mx-auto border-collapse '>
			<thead className='text-justify'>
				<tr className='px-10 py-6 text-[16px] h-[72px] w-full font-normal'>
					<th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
						Product
					</th>
					<th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
						Price
					</th>
					<th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
						Color
					</th>
					<th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
						Size
					</th>
					<th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
						Quantity
					</th>
					<th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
						Total
					</th>
				</tr>
			</thead>
			<tbody>
				{listCart.map((item, index) => (
					<tr
						key={index}
						className='text-[16px] w-full items-center  border-b-2 peerbg-inherit hover:bg-slate-200'>
						<td className='relative '>
							<div className='h-[120px] flex justify-start items-center gap-3'>
								<NavLink to={`/detail?id=${item.id}`} className='block h-full'>
									<img className='h-full' src={item.img} alt={item.name} />
								</NavLink>
								<span className='border-t-0 px-6  border-l-0 border-r-0 whitespace-nowrap p-4 text-left font-semibold'>
									{item.name}
								</span>
							</div>
							<div
								className='absolute top-0 -left-1 w-[18px] h-[18px] rounded-full bg-[#db4444] text-white cursor-pointer flex items-center justify-center hover:bg-black peer-hover:bg-black '
								onClick={() => {
									handlerRemoveCartItem(index);
								}}>
								<IoCloseSharp />
							</div>
						</td>
						<td className='px-6 py-3'>{item.price}</td>
						<td className='px-6 py-3'>
							<div style={{ background: item.color }} className='w-9 h-4'></div>
						</td>
						<td className='px-6 py-3'>{item.size}</td>

						<td className='relative  w-[100px]'>
							<input
								type='number'
								onChange={(event) => {
									handleChangeQuantityInput(event.target.value, index);
								}}
								value={quantity[index]}
								className='w-[100px] h-[44px] border-2 border-[#808080] rounded-md pl-4 px-4'
							/>
							<div className='absolute top-1/2 right-4 flex flex-col items-center justify-between -translate-y-1/2'>
								<MdOutlineKeyboardArrowUp
									className='cursor-pointer'
									onClick={() => handleChangeQuantity(1, index)}
								/>
								<MdOutlineKeyboardArrowDown
									className='cursor-pointer'
									onClick={() => handleChangeQuantity(-1, index)}
								/>
							</div>
						</td>
						<td className='border-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4 text-left font-semibold'>
							{item.price * quantity[index]}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
export default CartTable;
