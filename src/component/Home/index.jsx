import imageBg from '../../assets/images/Main_Home.jpg';
import IconApple from '../../assets/icons/iconApple';
import IconArrowLeft from '../../assets/icons/ArrowLeft';
import ArrowLeftMenu from '../../assets/icons/ArrowLeftMenu';
import FlashSale from '../Event/FlashSale';
import Catalory from '../Catalory/Catalory';
const Index = () => {
	const menu = [
		'Woman’s Fashion',
		'Men’s Fashion',
		'Electronics',
		'Home & Lifestyle',
		'Medicine',
		'Sports & Outdoor',
		'Baby’s & Toys',
		'Groceries & Pets',
		'Health & Beauty',
	];
	return (
		<>
			<div className='container mx-auto grid xl:grid-cols-[200px_minmax(0,_1fr)] gap-11  lg:grid-cols-[auto_minmax(0,_1fr)] lg:mt-32 mt-56'>
				<ul className=' grid grid-rows-9  px-4 border-r-[0.5px] '>
					{menu.map((item, index) => {
						return (
							<>
								<li
									className='flex items-center justify-between'
									key={`menu+${index}`}>
									<div key={item}>{item}</div>
									{index === 0 || index === 1 ? <ArrowLeftMenu /> : ' '}
								</li>
							</>
						);
					})}
				</ul>
				<div className='px-10 py-10 w-full h-fit relative bg-black text-white pl-16 pt-14 '>
					<div className='w-1/2'>
						<IconApple />
						<span className='md:text-[16px] text-[10px] '>
							iPhone 14 Series
						</span>
						<h1 className='md:text-5xl text-lx max-w-72 md:mt-5 mt-2 md:mb-6 md-2 leading-10'>
							Up to 10% off Voucher
						</h1>
						<div className='flex gap-4 items-center'>
							<a className='underline'>Shop Now</a>
							<IconArrowLeft color='white' />
						</div>
					</div>
					<div className='w-1/2 md:h-full h-auto absolute right-0 top-1/2 -translate-y-1/2  object-cover'>
						<img src={imageBg} className=' h-full ' />
					</div>
				</div>
			</div>
			<Catalory />
			<FlashSale />
		</>
	);
};

export default Index;
