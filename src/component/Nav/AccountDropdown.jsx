import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import IconHeart from '../../assets/Icons/Heart';
import IconAvatar from '../../assets/Icons/Avatar';
import IconCart from '../../assets/Icons/Cart';
import { IoCloseSharp } from 'react-icons/io5';
import { resetCartStore } from '../../Redux/CartSlice';
import { resetAccount } from '../../Redux/AccountSlice';

const AccountDropdown = () => {
	const number = useSelector((state) => state.cart.list.length);
	const dispastch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);
	const button = [
		{ icon: <IconHeart color-='none' />, link: '/like', title: 'Like' },
		{ icon: <IconCart number={number} />, link: '/cart', title: 'Cart' },
		{ icon: <IconAvatar />, link: '/account', title: 'Account' },
	];

	const handlerLogout = () => {
		setIsOpen(false);
		dispastch(resetCartStore());
		dispastch(resetAccount());
		toast.success('Logout Successfully');
	};
	return (
		<>
			{isOpen && (
				<div
					className='bg-slate-900 opacity-60 fixed top-0 left-0 right-0 bottom-0 z-40 '
					onClick={() => {
						setIsOpen(!isOpen);
					}}></div>
			)}
			<div className='relative   bg-slate-500 z-50'>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='rounded-lg bg-gray-900  text-center align-middle  text-xs font-bold  text-white shadow-md shadow-gray-900/10 px-4 py-2  h-9'>
					{isOpen ? (
						<IoCloseSharp className='w-full h-full' />
					) : (
						<MdMenu className='w-full  h-full' />
					)}
				</button>
				{isOpen && (
					<ul className='absolute z-10 min-w-[180px]  rounded-md border  bg-white p-3  text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none right-0 mt-2'>
						<li
							className=' w-full cursor-pointer  rounded-md px-3 pt-[9px] pb-2 text-start leading-tight'
							key='drop-1 '
							onClick={() => {
								setIsOpen(!isOpen);
							}}>
							<NavLink to='/changePassword'>Change Password</NavLink>
						</li>
						<li
							className=' w-full cursor-pointer  rounded-md px-3 pt-[9px] pb-2 text-start leading-tight'
							key='drop-2'
							onClick={() => {
								setIsOpen(!isOpen);
							}}>
							<NavLink
								to='/login'
								onClick={() => {
									handlerLogout();
								}}>
								Logout
							</NavLink>
						</li>
						<li
							key='drop-3'
							className=' w-full cursor-pointer  rounded-md px-3 pt-[9px] pb-2 text-start leading-tight'>
							<NavLink
								to='/uploadProduct'
								onClick={() => {
									setIsOpen(!isOpen);
								}}>
								You want add products
							</NavLink>
						</li>
						{button.map((item, index) => {
							return (
								<li
									className=' w-full cursor-pointer  rounded-md px-3 pt-[9px] pb-2 text-start xl:hidden block leading-tight  items-center'
									key={`drop+${index}`}>
									<NavLink
										to={item.link}
										className='flex gap-4 items-center justify-between'
										onClick={() => {
											setIsOpen(!isOpen);
										}}>
										{item.icon}
										<span>{item.title}</span>
									</NavLink>
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</>
	);
};
export default AccountDropdown;
