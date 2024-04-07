import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
const Header = () => {
	return (
		<>
			<div className=' h-12  bg-black'>
				<div className='flex items-center justify-center h-full text-sm font-light text-white relative container mx-auto gap-4'>
					<span>
						Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
					</span>
					<a className='font-medium underline'>ShopNow</a>
					<div className=' flex  items-center justify-center absolute top-2/4 right-14 -translate-y-1/2 gap-3'>
						<span>English</span>
						<MdOutlineKeyboardArrowDown />
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
