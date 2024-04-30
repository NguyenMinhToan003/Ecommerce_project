import IconHeart from '../../assets/icons/Heart';
import { FiSearch } from 'react-icons/fi';
import IconAvatar from '../../assets/icons/Avatar';
import IconCart from '../../assets/icons/Cart';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AccountDropdown from './AccountDropdown';
const Nav = () => {
	const number = useSelector((state) => state.cart.list.length);
	const menu = [
		{ title: 'Home', link: '/' },
		{ title: 'Contact', link: '/contact' },
		{ title: 'About', link: '/about' },
		{ title: 'Sign Up', link: '/signup' },
	];
	const button = [
		{ icon: <IconHeart color-='none' />, link: '/like' },
		{ icon: <IconCart number={number} />, link: '/cart' },
		{ icon: <IconAvatar />, link: '/account' },
	];
	return (
		<>
			<div className='my-3 container mx-auto flex flex-col items-center  justify-between lg:flex-row '>
				<div className='flex lg:w-1/2 container items-center justify-between lg:flex-row flex-col'>
					<span className='font-bold md:text-2xl pl-4 text-lg'>Exclusive</span>
					<ul className='flex items-center xl:gap-12 gap-5 w-fit  text-[#484848] '>
						{menu.map((item, index) => {
							return (
								<NavLink to={item.link} className='p-2' key={item.title}>
									{item.title}
								</NavLink>
							);
						})}
					</ul>
				</div>
				<div>
					<div className='flex items-center w-full gap-6'>
						<div className=' relative  '>
							<input
								className='w-72 bg-[#f5f5f5] pl-5 py-3 pr-8  '
								placeholder='What are you looking for?'
							/>
							<div className='absolute top-1/2 -translate-y-1/2 right-3 '>
								<FiSearch className='w-4 h-4' />
							</div>
						</div>
						<div className='flex items-center gap-3'>
							{button.map((item, index) => {
								return (
									<div className='xl:block hidden' key={`nav${index}`}>
										<NavLink to={item.link}>{item.icon}</NavLink>
									</div>
								);
							})}
							<AccountDropdown />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Nav;
