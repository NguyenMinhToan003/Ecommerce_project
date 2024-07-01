import IconHeart from '../../assets/icons/Heart';
import { FiSearch } from 'react-icons/fi';
import IconAvatar from '../../assets/icons/Avatar';
import IconCart from '../../assets/icons/Cart';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AccountDropdown from './AccountDropdown';
import SearchList from './SearchList';
import { useState } from 'react';
const Nav = () => {
	const number = useSelector((state) => state.cart.list.length);
	const [statusSearch, setSearchStatus] = useState(false);
	const [searchKey, setSearchKey] = useState('');
	const menu = [
		{ title: 'Home', link: '/' },
		{ title: 'Contact', link: '/contact' },
		{ title: 'About', link: '/about' },
		{ title: 'Sign Up', link: '/signup' },
		{ title: 'Dashboard', link: 'dashboard' },
	];
	const button = [
		{ icon: <IconHeart color-='none' />, link: '/like' },
		{ icon: <IconCart number={number} />, link: '/cart' },
		{ icon: <IconAvatar />, link: '/account' },
	];
	const handlerOnSearch = (e) => {
		setSearchStatus(true);
		setSearchKey(e.target.value);
	};
	return (
		<>
			<div className='py-3 container mx-auto flex flex-col items-center  justify-between lg:flex-row '>
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
					<div className='flex items-center w-full gap-6 relative'>
						{statusSearch == true && (
							<div
								className='fixed top-0 left-0 right-0 bottom-0'
								onClick={() => setSearchStatus(false)}></div>
						)}
						<SearchList searchKey={searchKey} statusSearch={statusSearch} />
						<div className=' relative '>
							<input
								className='w-72 bg-[#f5f5f5] pl-5 py-3 pr-8  '
								placeholder='What are you looking for?'
								onChange={(e) => handlerOnSearch(e)}
								onClick={() => setSearchStatus(true)}
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
