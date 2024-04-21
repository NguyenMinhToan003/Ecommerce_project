import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import CataPhone from '../../assets/icons/CataPhone';
import CataCamera from '../../assets/icons/CataCamera';
import CataPC from '../../assets/icons/CataPC';
import CataHeadPhone from '../../assets/icons/CataHeadPhone';
import CataWatch from '../../assets/icons/CataWatch';
import CataGamimg from '../../assets/icons/CataGamimg';
import { NavLink, Outlet } from 'react-router-dom';
import './Catalory.css';
const Catalory = () => {
	const list = [
		{
			title: 'Phones',
			icon: <CataPhone color={'black'} />,
			link: '/catalory/phone',
		},
		{
			title: 'Camera',
			icon: <CataCamera color={'black'} />,
			link: '/catalory/camera',
		},
		{ title: 'PC', icon: <CataPC color={'black'} />, link: '/catalory/pc' },
		{
			title: 'HeadPhone',
			icon: <CataHeadPhone color={'black'} />,
			link: '/catalory/headphone',
		},
		{
			title: 'Watch',
			icon: <CataWatch color={'black'} />,
			link: '/catalory/watch',
		},
		{
			title: 'Gaming',
			icon: <CataGamimg color={'black'} />,
			link: '/catalory/gaming',
		},
	];

	return (
		<div className='container mx-auto mt-24 flex flex-col'>
			<div className='h-10 flex items-center gap-5 mb-6'>
				<div className='h-full w-5 bg-[#db4444] rounded'></div>
				<div className='text-[#db4444]'>Categories</div>
			</div>
			<div className='flex justify-between items-center'>
				<p className='text-[26px] font-semibold'>Browse By Category</p>
				<div className='flex gap-2'>
					<div className='w-12 h-12 bg-[#f5f5f5] rounded-full flex justify-center items-center'>
						<FaArrowLeft />
					</div>
					<div className='w-12 h-12 bg-[#f5f5f5] rounded-full flex justify-center items-center'>
						<FaArrowRight />
					</div>
				</div>
			</div>
			<div>
				<ul className='grid xl:grid-cols-6  md:grid-cols-4 grid-cols-3  gap-4 mt-[60px] mx-auto'>
					{list.map((item, index) => {
						return (
							<li key={`cata+${index}`} className='peer'>
								<NavLink
									to={item.link}
									className='flex flex-col items-center justify-center w-[170px] h-[145px] border border-[#b3b3b3] text-black rounded-md bg-transparent hover:bg-[#db4444] hover:text-white '>
									<div className='w-20 h-20 flex justify-center items-center'>
										{item.icon}
									</div>
									<p className='mt-2'>{item.title}</p>
								</NavLink>
							</li>
						);
					})}
				</ul>
			</div>
			<Outlet />
		</div>
	);
};
export default Catalory;
