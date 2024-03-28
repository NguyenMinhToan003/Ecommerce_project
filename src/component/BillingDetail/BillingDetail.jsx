import IconBkBank from '../../assets/Icons/IconBkBank';
import { useSelector } from 'react-redux';
import IconBanking from '../../assets/Image/iconBanking.png';
import { useEffect, useState } from 'react';
import { list } from 'postcss';
const BillingDetail = () => {
	const [Shipping, setShipping] = useState(0);

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
	return (
		<div className='max-w-[1170px] mx-auto p-[15px] grid grid-cols-2'>
			<div className='max-w-[470px] flex flex-col gap-[32px] '>
				{felds.map((item, index) => {
					return (
						<>
							<div className='flex flex-col g-2'>
								<label className='text-[#7d8184] text-[16px]'>{item}</label>
								<input className='px-4 py-2 bg-[#f5f5f5] rounded-r-md' />
							</div>
						</>
					);
				})}
				<div className='flex gap-4 items-center'>
					<input
						type='radio'
						className='w-6 h-6 checked:bg-[#db4444] appearance-none rounded-[3px] border-2 border-[#db4444]'
					/>
					<label className='font-medium text-[16px]'>
						Save this information for faster check-out next time
					</label>
				</div>
			</div>
			<div className='w-[527px] flex g flex-col'>
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
					<div className='flex items-center gap-4'>
						<input type='radio' name='cash' id='bank' className='w-5 h-6' />
						<label htmlFor='bank'>Bank</label>
					</div>
					<div>
						<img src={IconBanking} />
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
				<button className='px-12 py-4 rounded-md bg-[#db4444] text-white text-[16px] font-medium'>
					Place Order
				</button>
			</div>
		</div>
	);
};
export default BillingDetail;
