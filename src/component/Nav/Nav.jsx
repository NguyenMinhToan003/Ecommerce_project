import IconHeart from '../../assets/Icons/Heart';
import IconSearch from '../../assets/Icons/Search';
import IconAvatar from '../../assets/Icons/Avatar';
import IconCart from '../../assets/Icons/Cart';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
			<div className='mt-3 container mx-auto flex items-center xl:gap-32 lg:flex-row flex-col justify-between'>
				<div className='flex items-center justify-between xl:gap-40 gap-20 max-w-full'>
					<span className='font-bold text-2xl'>Exclusive</span>
					<ul className='flex items-center xl:gap-12 gap-5 min-w-max  text-[#484848] '>
						{menu.map((item, index) => {
							return (
								<NavLink to={item.link} className='p-2'>
									{item.title}
								</NavLink>
							);
						})}
					</ul>
				</div>
				<div>
					<div className='flex items-center flex-auto gap-6'>
						<div className=' relative  '>
							<input
								className='w-72 bg-[#f5f5f5] pl-5 py-3 pr-8  '
								placeholder='What are you looking htmlFor'
							/>
							<div className='absolute top-1/2 -translate-y-1/2 right-3 '>
								<IconSearch />
							</div>
						</div>
						<div className='flex items-center gap-3'>
							{button.map((item, index) => {
								return <NavLink to={item.link}>{item.icon}</NavLink>;
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Nav;
