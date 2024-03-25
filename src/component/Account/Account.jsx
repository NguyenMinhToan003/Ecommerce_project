import { NavLink, Outlet } from 'react-router-dom';
import './Account.css';
const Account = () => {
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
			<div className='container mx-auto'>
				<div>
					<span>Welcome!</span>
					<span> Md Rimel</span>
				</div>
				<div className='grid grid-cols-[200px,minmax(auto,_1fr)] gap-16'>
					<div className='flex flex-col gap-4 '>
						<ul className='list'>
							<h3 className='h3'>Manage My Account</h3>
							{manage.map((item, index) => {
								return (
									<NavLink key={index} to={item.path} className='item'>
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
										key={index}
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
											key={index}
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
