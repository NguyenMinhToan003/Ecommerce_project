import avatar from '../../assets/images/avatar.png';
const PageUser = (props) => {
	const { listUser } = props;

	return (
		<>
			{listUser.map((item, index) => {
				return (
					<tr className='border-b-[1px] border-[#E2E8F0]'>
						<td className='py-3 pr-2'>
							<p className='text-[#2D3748] text-[14px] font-normal'>
								{item.id}
							</p>
						</td>
						<td className='py-3 pr-2'>
							<div className='flex gap-[15px] '>
								<div className='flex items-center w-[40px] h-[40px] rounded-lg'>
									<img
										className='w-full h-full rounded-lg object-cover'
										src={item.avatar ? item.avatar : avatar}
										alt='avatar'
									/>
								</div>
								<div className='w-full'>
									<p className='font-bold text-[#2D3748] text-[14px]'>
										{item.name}
									</p>
									<p className='text-[#718096] text-[14px] font-normal'>
										{item.email}
									</p>
								</div>
							</div>
						</td>
						<td className='py-3 pr-2'>
							<p className='text-[#2D3748] text-[14px] font-normal'>
								{item.gender === 0 ? 'Male' : 'Famale'}
							</p>
						</td>
						<td className='py-3 pr-2'>
							<p className='text-[#2D3748] text-[14px] font-bold'>
								{(item.Group && item.Group.name) || 'No group'}
							</p>
							<p className='text-[#718096] text-[14px] font-normal'>
								organization
							</p>
						</td>
						<td className='py-3 pr-2'>
							<p className='text-[#2D3748] text-[14px] font-normal'>
								{item.logoutAt !== null ? 'Active' : 'Inactive'}
							</p>
						</td>
						<td>
							<button className='cursor-pointer text-[#718096]  py-1 text-3 '>
								Delete
							</button>
						</td>
					</tr>
				);
			})}
		</>
	);
};
export default PageUser;
