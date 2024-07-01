import { useSelector } from 'react-redux';
import IconBanking from '../../assets/images/iconBanking.png';
import { useState } from 'react';
import { ShippingServices } from '../../services/Shipping';
import { toast } from 'react-toastify';
const Billing = () => {
	const [Shipping, setShipping] = useState(0);
	const userID = useSelector((state) => state.account.data.id);
	const [listCart, setListCart] = useState(
		useSelector((state) => state.cart.list)
	);
	const felds = [
		'First Name',
		'Company Name',
		'Street Address',
		'Apartment, floor, etc. (optional)',
		'Town / City',
		'Phone Number',
		'Email Address',
	];
	const shiping = async (listCart) => {
		let products = listCart.map((item) => ({
			id: item.id,
			quantity: item.quantity,
			size: item.size,
			color: item.color,
			price: item.price,
		}));
		const data = {
			products: products,
			userID: userID,
		};

		const response = await ShippingServices(data);
		if (response && response.EC === 0) {
			toast.success(response.EM);
		} else toast.error(response.EM);
	};
	return (
		<div className='max-w-[1170px] mx-auto p-[15px] grid xl:grid-cols-2 grid-cols-1 gap-10'>
			<div className='w-[470px] flex flex-col gap-[32px] mx-auto'>
				{felds.map((item, index) => {
					return (
						<>
							<div className='flex flex-col g-2 '>
								<label className='text-[#7d8184] text-[16px]'>{item}</label>
								<input className='px-4 py-2 bg-[#f5f5f5] rounded-r-md' />
							</div>
						</>
					);
				})}
				<div className='flex gap-4 items-center'>
					<input
						type='radio'
						className='w-6 h-6 bg-transparent checked:bg-[#db4444] appearance-none rounded-[3px] border-2 border-[#db4444]'
					/>
					<label className='font-medium text-[16px]'>
						Save this information htmlFor faster check-out next time
					</label>
				</div>
			</div>
			<div className='w-[527px] flex g flex-col mx-auto'>
				{listCart.map((item, index) => {
					return (
						<>
							<div className='flex justify-between items-center mb-[32px]'>
								<span>{item.name}</span>
								<span>quanlity:{item.quantity}</span>
								<span>${item.price}</span>
							</div>
						</>
					);
				})}
				<div className='flex  justify-between items-center'>
					<span>Subtotal:</span>
					<span>
						{listCart.reduce((total, item, index) => {
							return total + item.price * item.quantity;
						}, 0)}
					</span>
				</div>
				<hr className='my-4' />
				<div className='flex  justify-between items-center'>
					<span>Shipping:</span>
					<span>{Shipping ? Shipping : 'Free'}</span>
				</div>
				<hr className='my-4' />
				<div className='flex  justify-between items-center'>
					<span>Total:</span>
					<span>
						{listCart.reduce((total, item, index) => {
							return total + item.price * item.quantity;
						}, 0) - Shipping}
					</span>
				</div>

				<div className='mt-8 gap-4 flex justify-between items-center '>
					<div className='flex items-center gap-4 w-full'>
						<input type='radio' name='cash' id='bank' className='w-5 h-6' />
						<label
							htmlFor='bank'
							className='flex justify-between items-center w-full '>
							<span>Bank</span>
							<img src={IconBanking} />
						</label>
					</div>
				</div>
				<div className='mt-8 gap-4 flex items-center '>
					<input
						type='radio'
						name='cash'
						id='delivery'
						checked
						className='w-5 h-6'
					/>
					<label htmlFor='delivery'>Cash on delivery</label>
				</div>
				<div className='flex gap-4 justify-between items-center my-8'>
					<input className='border-[2px] border-[#7d8184] rounded-md px-6 py-4 w-full' />
					<button className='px-12 py-4 rounded-md bg-[#db4444] text-white text-[16px] font-medium min-w-max'>
						Apply Coupon
					</button>
				</div>
				<button
					className='px-12 py-4 rounded-md bg-[#db4444] text-white text-[16px] font-medium'
					onClick={() => shiping(listCart)}>
					Place Order
				</button>
			</div>
		</div>
	);
};
export default Billing;
