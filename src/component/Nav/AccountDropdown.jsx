import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import IconHeart from '../../assets/icons/Heart';
import IconAvatar from '../../assets/icons/Avatar';
import IconCart from '../../assets/icons/Cart';
import { IoCloseSharp } from 'react-icons/io5';
import { resetCartStore } from '../../Redux/CartSlice';
import { resetAccount } from '../../Redux/AccountSlice';
import { TbLogout2 } from 'react-icons/tb';
import { MdOutlineChangeCircle } from 'react-icons/md';
import { FaFolderPlus } from 'react-icons/fa';
import { logoutService } from '../../services/UserServices';

const AccountDropdown = () => {
	const navigate = useNavigate();
	const number = useSelector((state) => state.cart.list.length);
	const idUser = useSelector((state) => state.account.data.id);
	const dispastch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);
	const button = [
		{ icon: <IconHeart color-='none' />, link: '/like', title: 'Like' },
		{ icon: <IconCart number={number} />, link: '/cart', title: 'Cart' },
		{ icon: <IconAvatar />, link: '/account', title: 'Account' },
	];

	const handlerLogout = async () => {
		const result = await logoutService({ id: idUser });
		if (result && result.EC === 0) {
			dispastch(resetCartStore());
			dispastch(resetAccount());
			toast.success(result.EM);
			navigate('/login');
			localStorage.removeItem('guestLoading');
		} else {
			toast.error(result.EM);
		}
	};
	return (
		<>
			{isOpen && (
				<div
					className='bg-slate-900 opacity-60 fixed top-0 left-0 right-0 bottom-0 z-40 transition-all duration-300 ease-in-out'
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
					<ul className='absolute z-10 w-[225px]  rounded-md border  bg-white p-3  text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none right-0 mt-2'>
						<li
							className=' w-full cursor-pointer  rounded-md px-3 pt-[9px] pb-2 text-start leading-tight'
							key='drop-1 '
							onClick={() => {
								setIsOpen(!isOpen);
							}}>
							<NavLink
								to='/changePassword'
								className='flex  items-center w-fulll gap-3'>
								<MdOutlineChangeCircle />
								<span>Change Password</span>
							</NavLink>
						</li>
						<li
							className=' w-full cursor-pointer  rounded-md px-3 pt-[9px] pb-2 text-start leading-tight '
							key='drop-2'
							onClick={() => {
								setIsOpen(!isOpen);
							}}>
							<NavLink
								to='/login'
								className='flex items-center w-full gap-3'
								onClick={() => {
									handlerLogout();
								}}>
								<TbLogout2 />
								<span>Logout</span>
							</NavLink>
						</li>
						<li
							key='drop-3'
							className=' w-full cursor-pointer  rounded-md px-3 pt-[9px] pb-2 text-start leading-tight'>
							<NavLink
								to='/uploadProduct'
								className='flex items-center w-full gap-3'
								onClick={() => {
									setIsOpen(!isOpen);
								}}>
								<FaFolderPlus />
								<span>Upload </span>
							</NavLink>
						</li>
						{button.map((item, index) => {
							return (
								<li
									className=' w-full cursor-pointer  rounded-md px-3 pt-[9px] pb-2 text-start xl:hidden block leading-tight  items-center'
									key={`drop+${index}`}>
									<NavLink
										to={item.link}
										className='flex  items-center gap-3'
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
