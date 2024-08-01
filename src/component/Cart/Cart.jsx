import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import CartTable from './CartTable';

import { AiOutlineMessage } from 'react-icons/ai';

import { useEffect, useState } from 'react';
import { addCartItem, removeCartItem } from '../../Redux/CartSlice';

const Cart = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const listCart = useSelector((state) => state.cart.list);
	const [Shipping, setShipping] = useState(0);
	const [quantity, setQuantity] = useState([]);

	useEffect(() => {
		// Đồng bộ hóa quantity với listCart khi listCart thay đổi
		setQuantity(listCart.map((item) => item.quantity));
	}, [listCart]);

	const handlerCancelPage = () => {
		navigate(-1);
	};

	const handleChangeQuantity = (value, index) => {
		const valueNumber = +value;
		if (valueNumber === -1 && quantity[index] === 1) return;
		setQuantity((prev) =>
			prev.map((item, idx) => (idx === index ? item + valueNumber : item))
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

	const handleChangeQuantityInput = (value, index) => {
		const valueNumber = +value;
		setQuantity((prev) =>
			prev.map((item, idx) => (idx === index ? valueNumber : item))
		);
		dispatch(
			addCartItem({
				data: {
					...listCart[index],
					quantity: valueNumber,
				},
				index: index,
			})
		);
	};
	const handlerRemoveCartItem = (index) => {
		dispatch(removeCartItem(index));
	};

	return (
		<>
			{listCart && listCart.length > 0 ? (
				<div className='block w-full overflow-x-auto'>
					<CartTable
						listCart={listCart}
						quantity={quantity}
						handleChangeQuantity={handleChangeQuantity}
						handleChangeQuantityInput={handleChangeQuantityInput}
						handlerRemoveCartItem={handlerRemoveCartItem}
					/>
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
									Proceed to checkout
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
