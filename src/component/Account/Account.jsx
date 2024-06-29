import { NavLink, Outlet } from 'react-router-dom';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './Account.css';
const Account = () => {
	const data = JSON.parse(localStorage.getItem('data'));
	const manage = [
		{ title: 'My Profile', path: '/account/profile' },
		{ title: 'Address Book', path: '/account/address' },
		{ title: 'My Payment Options', path: '/payment' },
	];
	const order = [
		{ title: 'My Returns', path: '/account/returns' },
		{ title: 'My Cancellations', path: '/account/cancellations' },
	];
	const wishList = [];
	return (
		<>
			<div className='container mx-auto relative text-[16px] font-normal mt-36'>
				<div className='flex justify-end gap-1 mb-20 text-[14px]'>
					<span>Welcome! </span>
					<span className='text-[#db4444]'>{data.name}</span>
				</div>

				<div className='grid grid-cols-[200px,870px] gap-40 max-w-[1170px] mx-auto '>
					<div className='flex flex-col gap-8 '>
						<ul className='list'>
							<h3 className='h3'>Manage My Account</h3>
							{manage.map((item, index) => {
								return (
									<NavLink key={10 + index} to={item.path} className='item'>
										{item.title}
									</NavLink>
								);
							})}
						</ul>
						<ul className='list'>
							<h3 className='h3'>My Orders</h3>
							{order.map((item, index) => {
								return (
									<NavLink
										className='ml-[25px]  text-[#878787]'
										key={index + 100}
										to={item.path}>
										{item.title}
									</NavLink>
								);
							})}
						</ul>
						<ul className='list'>
							<h3 className='h3'>My WishList</h3>
							{wishList.length === 0 ? (
								<span>Your wishlist is empty</span>
							) : (
								wishList.map((item, index) => {
									return (
										<NavLink
											className='ml-[25px] text-[#878787]'
											key={index + 1000}
											to={item.path}>
											{item.title}
										</NavLink>
									);
								})
							)}
						</ul>
					</div>
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default Account;
