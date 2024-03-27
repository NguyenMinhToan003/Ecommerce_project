import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	MdOutlineKeyboardArrowUp,
	MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { useEffect, useState } from 'react';

const Cart = () => {
	const [quantity, setQuantity] = useState([]);
	const navigate = useNavigate();
	const listCart = useSelector((state) => state.cart.list);

	useEffect(() => {
		setQuantity(listCart.map((item) => item.quantity));
		console.log(quantity);
	}, []);
	const handlerCancelPage = () => {
		navigate(-1);
	};
	const handerChangeQuantity = (value, index) => {
		if (value === -1 && quantity[index] === 1) return;
		else
			setQuantity(
				quantity.map((item, idx) => (idx === index ? item + value : item))
			);
	};

	return (
		<>
			<div className='container mx-auto'>
				<table className='w-[1170px] mx-auto border-separate border-spacing-10'>
					<thead className='text-justify'>
						<tr className='px-10 py-6 text-[16px] h-[72px] w-full font-normal'>
							<th>Product</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						{listCart.map((item, index) => {
							return (
								<tr className='px-10 py-6 text-[16px] h-[72px] w-full items-center '>
									<td>{item.name}</td>
									<td>{item.price}</td>
									<td className='relative   w-[80px]'>
										<input
											type='text'
											value={quantity[index]}
											className='w-[72px] h-[44px] border-2 border-[#808080] rounded-md pl-4 px-4'
										/>
										<div className='absolute top-1/2 right-4 flex flex-col items-center justify-between -translate-y-1/2'>
											<MdOutlineKeyboardArrowUp
												className='cursor-pointer'
												onClick={() => handerChangeQuantity(1, index)}
											/>
											<MdOutlineKeyboardArrowDown
												className='cursor-pointer'
												onClick={() => handerChangeQuantity(-1, index)}
											/>
										</div>
									</td>
									<td>{item.price * quantity[index]}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<div className='max-w-[1170px] mx-auto flex justify-between items-center mt-6'>
					<button
						className='  rounded-md px-12 py-4 border-2 border-[#717171]  hover:text-white hover:bg-black'
						onClick={() => handlerCancelPage()}>
						Return To Shop
					</button>
					<button className='rounded-md px-12 py-4 border-2 border-[#717171] hover:text-white hover:bg-black'>
						Update Cart
					</button>
				</div>
				<div className='flex justify-between items-start mt-20 max-w-[1170px] mx-auto'>
					<div className='flex gap-4'>
						<input
							className='px-6 py-4 rounded-md border-2 border-[#7d8184]'
							placeholder='Coupon Code'
						/>
						<button className='px-12 w-[211px] rounded-md bg-[#db4444] text-white font-medium text-[16px]'>
							Apply Coupon
						</button>
					</div>
					<div className='w-[470px] h-[324px] border-2 border-black rounded-md py-8 px-6 text-[16px]'>
						<h3 className='text-[20px] font-medium'>Cart Total</h3>
						<div className='flex justify-between items-center mt-8 mb-4'>
							<p>Subtotal:</p>
							<p>$1750</p>
						</div>
						<hr className='my-4' />
						<div className='flex justify-between items-center'>
							<p>Shipping:</p>
							<p>Free</p>
						</div>
						<hr className='my-4' />
						<div className='flex justify-between items-center '>
							<p>Total:</p>
							<p>$1750</p>
						</div>
						<div className='flex justify-center items-center'>
							<button className='py-4 px-12 rounded-md bg-[#db4444] text-white font-medium text-[16px] '>
								Procees to checkout
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Cart;
