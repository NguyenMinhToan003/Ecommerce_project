import { MdDashboardCustomize } from 'react-icons/md';
import { FaTable } from 'react-icons/fa6';
import { MdPayments } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { FaFile } from 'react-icons/fa';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import './Dashboard.css';
const Dashboard = () => {
	const menu = [
		{
			title: 'Dashboard',
			link: '/dashboard',
			icon: <MdDashboardCustomize />,
		},
		{ title: 'Table', link: '/table', icon: <FaTable /> },
		{ title: 'Billing', link: '/about', icon: <MdPayments /> },
	];
	const profile = [
		{ title: 'Profile', link: '/profile', icon: <CgProfile /> },
		{ title: 'Create Account', link: '/signup', icon: <FaFile /> },
		{ title: 'Logout', link: '/logout', icon: <RiLogoutCircleRLine /> },
	];
	return (
		<>
			<div className='grid grid-cols-[246px_minmax(0,_1fr)] gap-[33px] container mx-auto mt-10'>
				<div className='bg-[#f8f9fa]'>
					<ul>
						{menu.map((item, index) => (
							<li className='dash' key={index}>
								<NavLink
									to={item.link}
									className='flex items-center gap-3 py-4 pl-[14px] rounded-[15px] text-[#A0AEC0] text-[12px] font-bold'>
									<div className='icon w-[30px] h-[30px] rounded-[15px] text-[#4FD1C5] flex justify-center items-center text-[15px] bg-white '>
										{item.icon}
									</div>
									<p>{item && item.title}</p>
								</NavLink>
							</li>
						))}
					</ul>
					<ul>
						<h4 className='text-[#2D3748] text-[12px] font-bold pl-[14px] pt-4 uppercase'>
							Account Pages
						</h4>
						{profile.map((item, index) => (
							<li className='dash' key={index}>
								<NavLink
									to={item.link}
									className='flex items-center gap-3 py-4 pl-[14px] rounded-[15px] text-[#A0AEC0] text-[12px] font-bold'>
									<div className='icon w-[30px] h-[30px] rounded-[15px] text-[#4FD1C5] flex justify-center items-center text-[15px] bg-white '>
										{item.icon}
									</div>
									<p>{item && item.title}</p>
								</NavLink>
							</li>
						))}
					</ul>
				</div>
				<div className='bg-orange-100'></div>
			</div>
		</>
	);
};

export default Dashboard;
