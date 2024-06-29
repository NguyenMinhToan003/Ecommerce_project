import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';
import { AiOutlineMessage } from 'react-icons/ai';
import {
	MdOutlineKeyboardArrowUp,
	MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { useEffect, useState } from 'react';
import { addCartItem, removeCartItem } from '../../Redux/CartSlice';

const Cart = () => {
	const dispatch = useDispatch();
	const [Shipping, setShipping] = useState(0);
	const [quantity, setQuantity] = useState([]);
	const navigate = useNavigate();
	const listCart = useSelector((state) => state.cart.list);

	useEffect(() => {
		setQuantity(listCart.map((item) => item.quantity));
	}, []);

	const handlerCancelPage = () => {
		navigate(-1);
	};

	const handerChangeQuantity = (value, index) => {
		const valueNumber = +value;
		if (value === -1 && quantity[index] === 1) return;
		else
			setQuantity(
				quantity.map((item, idx) => (idx === index ? item + valueNumber : item))
			);
		dispatch(
			addCartItem({
				data: {
					...listCart[index],
					quantity: listCart[index].quantity + valueNumber,
				},
				index: index,
			})
		);
	};

	const handerChangeQuantityInput = (value, index) => {
		const valueNumber = +value;
		setQuantity(
			quantity.map((item, idx) => (idx === index ? valueNumber : item))
		);
		dispatch(
			addItem({
				data: {
					...listCart[index],
					quantity: valueNumber,
				},
				index: index,
			})
		);
	};

	return (
		<>
			{listCart.length > 0 ? (
				<div className='container mx-auto'>
					<table className='max-w-[1170px] xl:w-[1170px] mx-auto border-separate border-spacing-10'>
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
									<tr
										key={index}
										className='px-10 py-6 text-[16px] h-[72px] w-full items-center  border-b-2'>
										<td className='relative '>
											<span className='h-[40px] flex justify-start items-center gap-3'>
												<img className='h-full' src={item.img} />
												{item.name}
											</span>
											<div
												className='absolute top-0 -left-10 w-[18px] h-[18px] rounded-full bg-[#db4444] text-white cursor-pointer flex items-center justify-center'
												onClick={() => {
													dispatch(removeCartItem(index));
												}}>
												<IoCloseSharp />
											</div>
										</td>
										<td>{item.price}</td>
										<td className='relative w-[80px]'>
											<input
												type='number'
												onChange={(event) => {
													handerChangeQuantityInput(event.target.value, index);
												}}
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
					<div className='max-w-[1170px] xl:w-[1170px] mx-auto flex justify-between items-center mt-6 '>
						<button
							className='rounded-md px-12 py-4 border-2 border-[#717171]  hover:text-white hover:bg-black'
							onClick={() => handlerCancelPage()}>
							Return To Shop
						</button>
						<button className='rounded-md px-12 py-4 border-2 border-[#717171] hover:text-white hover:bg-black'>
							Update Cart
						</button>
					</div>
					<div className='flex justify-between items-start w-full mt-20 max-w-[1170px] xl:w-[1170px] mx-auto xl:flex-row flex-col gap-10'>
						<div className='flex gap-4 mx-auto xl:mx-0'>
							<input
								className='px-6 py-4 rounded-md border-2 border-[#7d8184]'
								placeholder='Coupon Code'
							/>
							<button className='px-12 w-[211px] rounded-md bg-[#db4444] text-white font-medium text-[16px]'>
								Apply Coupon
							</button>
						</div>
						<div className='w-[470px] h-[324px] border-2 border-black rounded-md py-8 px-6 text-[16px] xl:mx-0 mx-auto'>
							<h3 className='text-[20px] font-medium'>Cart Total</h3>
							<div className='flex justify-between items-center mt-8 mb-4'>
								<p>Subtotal:</p>
								<p>
									{listCart.reduce((total, item, index) => {
										return total + item.price * quantity[index];
									}, 0)}
								</p>
							</div>
							<hr className='my-4' />
							<div className='flex justify-between items-center'>
								<p>Shipping:</p>
								<p>Free</p>
							</div>
							<hr className='my-4' />
							<div className='flex justify-between items-center '>
								<p>Total:</p>
								<p>
									{listCart.reduce((total, item, index) => {
										return total + item.price * quantity[index];
									}, 0) - Shipping}
								</p>
							</div>
							<div className='flex justify-center items-center'>
								<NavLink
									to='/billing'
									className='py-4 px-12 rounded-md bg-[#db4444] text-white font-medium text-[16px] '>
									Procees to checkout
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className='container mx-auto flex justify-center items-center h-[80vh]'>
					<div className='flex justify-center items-center flex-col gap-3'>
						<AiOutlineMessage className='w-10 h-10' />
						<p className='text-2xl font-medium'>Nothing item to cart</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Cart;
