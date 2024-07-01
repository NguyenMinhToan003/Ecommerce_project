import avatar from '../../assets/images/avatar.png';
import { BsGenderFemale } from 'react-icons/bs';
import { BsGenderMale } from 'react-icons/bs';
const PageUser = (props) => {
	const { listUser, setStatusModel } = props;

	return (
		<>
			{listUser.map((item, index) => {
				return (
					<tr className=' last:border-b-[1px] border-[#E2E8F0]'>
						<td className='py-3 pr-2 '>
							<div className='flex gap-[15px] '>
								<div className='flex flex-shrink-0 items-center w-[45px] h-[45px]  rounded-lg'>
									<img
										className='w-full h-full rounded-lg object-cover'
										src={item.avatar ? item.avatar : avatar}
										alt='avatar'
									/>
								</div>
								<div className='truncate flex flex-col gap-2'>
									<div className='font-bold text-[#2D3748] text-[14px]'>
										<p>{item.name}</p>
									</div>
									<p className='text-[#718096] text-[14px] font-normal italic'>
										{item.email}
									</p>
									<dl className='xl:hidden flex items-center gap-2 '>
										<dt className='sr-only'>gender</dt>
										<dd className='text-[#718096] text-[14px] font-normal lg:hidden table-cell rounded-full p-2 bg-white shadow-md'>
											{+item.gender === 0 ? (
												<BsGenderMale className='text-blue-700' />
											) : (
												<BsGenderFemale className='text-pink-500' />
											)}
										</dd>
										<dt className='sr-only'>Status</dt>
										<dd className='text-[#718096] text-[14px] font-normal'>
											{item.logoutAt !== null ? (
												<p className='text-white text-[14px] font-bold py-[2.5px] px-[10px] rounded-[8px] bg-[#48bb78] w-fit'>
													Online
												</p>
											) : (
												<p className='text-white text-[14px] font-bold py-[2.5px] px-[10px] rounded-[8px] bg-[#cbd5e0] w-fit'>
													Offline
												</p>
											)}
										</dd>
										<dt className='sr-only'>Function</dt>
										<dd className='text-white text-[14px] font-bold md:hidden table-cell bg-[#4fd1c5] w-fit py-[2.5px] px-[10px] rounded-[8px] '>
											{(item.Group && item.Group.name) || 'No group'}
										</dd>
									</dl>
								</div>
							</div>
						</td>
						<td className='py-3 pr-2 lg:table-cell hidden '>
							<p className='text-[#2D3748] text-[14px] font-normal'>
								{+item.gender === 0 ? 'Male' : 'Famale'}
							</p>
						</td>
						<td className='py-3 pr-2 md:table-cell hidden'>
							<p className='text-[#2D3748] text-[14px] font-bold'>
								{(item.Group && item.Group.name) || 'No group'}
							</p>
						</td>
						<td className='py-3 pr-2 xl:table-cell hidden'>
							{item.logoutAt !== null ? (
								<p className='text-white text-[14px] font-bold py-[2.5px] px-[10px] rounded-[8px] bg-[#48bb78] w-fit'>
									Online
								</p>
							) : (
								<p className='text-white text-[14px] font-bold py-[2.5px] px-[10px] rounded-[8px] bg-[#cbd5e0] w-fit'>
									Offline
								</p>
							)}
						</td>
						<td>
							<button
								className='cursor-pointer text-[#718096]  py-1 text-3'
								onClick={() => props.setStatusModel(true)}>
								Edit
							</button>
						</td>
					</tr>
				);
			})}
		</>
	);
};
export default PageUser;
