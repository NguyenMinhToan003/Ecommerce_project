import { MdDashboardCustomize } from 'react-icons/md';
import { FaTable } from 'react-icons/fa6';
import { MdPayments } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { FaFile } from 'react-icons/fa';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { NavLink, Outlet } from 'react-router-dom';
import { FaQuestion } from 'react-icons/fa6';

import './Dashboard.css';
const Dashboard = () => {
	const menu = [
		{
			title: 'Dashboard',
			link: '/',
			icon: <MdDashboardCustomize />,
		},
		{ title: 'Table', link: '/dashboard/table', icon: <FaTable /> },
		{ title: 'Payments', link: '/dashboard/payments', icon: <MdPayments /> },
	];
	const profile = [
		{ title: 'Profile', link: '/dashboard/profile', icon: <CgProfile /> },
		{
			title: 'Create Account',
			link: '/dashboard/createAccount',
			icon: <FaFile />,
		},
		{ title: 'Logout', link: '/logout', icon: <RiLogoutCircleRLine /> },
	];
	return (
		<>
			<div className='bg-[#f8f9fa]'>
				<div className='grid xl:grid-cols-[246px_minmax(0,_1fr)] lg:grid-cols-[200px_minmax(0,_1fr)] grid-cols-[60px_minmax(0,_1fr)] xl:gap-[33px] lg:gap-[24px] gap-0 container mx-auto mt-10 '>
					<div>
						<ul>
							{menu.map((item, index) => (
								<li className='dash' key={index}>
									<NavLink to={item.link} className='link' title={item.title}>
										<div className='icon'>{item.icon}</div>
										<p className='title'>{item && item.title}</p>
									</NavLink>
								</li>
							))}
						</ul>
						<ul>
							<h4 className='text-[#2D3748] text-[12px] text-wrap  font-bold pl-[14px] pt-4 py-6 uppercase xl:inline-block hidden'>
								Account Pages
							</h4>
							{profile.map((item, index) => (
								<li className='dash' key={index}>
									<NavLink to={item.link} className='link' title={item.title}>
										<div className='icon'>{item.icon}</div>
										<p className='title'>{item && item.title}</p>
									</NavLink>
								</li>
							))}
						</ul>
						<div
							className='h-fit rounded-[15px] bg-[#4FD1C5] p-4 text-white xl:block flex justify-center items-center flex-col '
							title='need Help'>
							<div className='w-[35px] h-[35px] rounded-md bg-white flex justify-center items-center'>
								<FaQuestion className='p-[0.5px] rounded-full bg-[#4FD1C5] text-white' />
							</div>
							<p className='text-[14px] mt-5'>Need Help?</p>
							<p className='text-3 mb-[8.5px] xl:inline-block hidden '>
								Please checkout docs
							</p>
							<button className='py-[10px] text-center text-[#2d3748] font-bold text-[10px] rounded-[12px] bg-white w-full xl:block hidden'>
								Documentation
							</button>
						</div>
					</div>
					<div className='h-[1000px] px-[21px] py-[28px]'>
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
