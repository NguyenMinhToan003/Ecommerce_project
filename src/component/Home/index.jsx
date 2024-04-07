import imageBg from '../../assets/Image/Main_Home.jpg';
import IconApple from '../../assets/Icons/iconApple';
import IconArrowLeft from '../../assets/Icons/ArrowLeft';
import ArrowLeftMenu from '../../assets/Icons/ArrowLeftMenu';
import FlashSale from '../Event/FlashSale';
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
			<div className='container mx-auto grid xl:grid-cols-[200px_minmax(0,_1fr)] gap-11  lg:grid-cols-[auto_minmax(0,_1fr)]'>
				<ul className=' grid grid-rows-9  px-4 border-r-[0.5px] '>
					{menu.map((item, index) => {
						return (
							<>
								<div className='flex items-center justify-between'>
									<li key={item}>{item}</li>
									{index === 0 || index === 1 ? <ArrowLeftMenu /> : ' '}
								</div>
							</>
						);
					})}
				</ul>
				<div className='px-10 py-10 max-w-full h-full relative bg-black text-white pl-16 pt-14 '>
					<div>
						<IconApple />
						<span className='text-[16px]'>iPhone 14 Series</span>
						<h1 className='text-5xl max-w-72 mt-5 mb-6 leading-10'>
							Up to 10% off Voucher
						</h1>
						<div className='flex gap-4 items-center'>
							<a className='underline'>Shop Now</a>
							<IconArrowLeft color='white' />
						</div>
					</div>
					<img
						src={imageBg}
						className=' h-full w-1/2 absolute right-0 top-0  object-cover'
					/>
				</div>
			</div>
			<FlashSale />
		</>
	);
};

export default Index;
