import { IoIosArrowDown } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
const Header = () => {
	return (
		<>
			<div className='min-h-fit bg-black w-full py-3'>
				<div className='flex items-center justify-center h-fit sm:text-sm font-light text-white  container mx-auto md:gap-5 gap-1 flex-wrap text-[10px]'>
					<span>
						Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
					</span>
					<NavLink to='/shop' className='font-medium underline'>
						ShopNow
					</NavLink>
					<div className=' flex items-center justify-center gap-3'>
						<span>English</span>
						<IoIosArrowDown />
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
