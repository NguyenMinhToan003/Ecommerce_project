import avatar from '../../assets/images/avatar.png';
import { BsGenderFemale } from 'react-icons/bs';
import { BsGenderMale } from 'react-icons/bs';
const PageUser = (props) => {
	const { listUser, setStatusModel } = props;

	return (
		<>
			<table class=' bg-transparent  border-collapse w-full'>
				<thead>
					<tr className=' text-black font-normal text-[10px] border-b-[1px] border-[#E2E8F0]'>
						<th className='px-6 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
							User
						</th>
						<th className='px-6 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
							Gender
						</th>
						<th className='px-6 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
							Function
						</th>
						<th className='px-6 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
							Status
						</th>
						<th className='px-6 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{listUser.map((item, index) => {
						const { avatar, Group, logoutAt, gender, name, email } = item;
						return (
							<tr>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left '>
									<div className='flex items-center gap-2'>
										<div className='flex flex-shrink-0 items-center w-[45px] h-[45px]  rounded-lg'>
											<img
												className='w-full h-full rounded-lg object-cover'
												src={avatar ? avatar : avatar}
												alt='avatar'
											/>
										</div>
										<div>
											<p className='font-bold'>{name}</p>
											<p className='italic'>{email}</p>
										</div>
									</div>
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 '>
									<p>
										{+gender === 0 ? (
											<BsGenderMale className='text-blue-800 text-lg' />
										) : (
											<BsGenderFemale className='text-pink-800 text-lg' />
										)}
									</p>
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									<p>{(Group && Group.name) || 'No group'}</p>
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									{logoutAt !== null ? (
										<p className='text-white text-[14px] font-bold py-[2.5px] px-[10px] rounded-[8px] bg-[#48bb78] w-fit'>
											Online
										</p>
									) : (
										<p className='text-white text-[14px] font-bold py-[2.5px] px-[10px] rounded-[8px] bg-[#cbd5e0] w-fit'>
											Offline
										</p>
									)}
								</td>
								<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
									<button
										className='cursor-pointer text-[#718096]  py-1 text-3'
										onClick={() => {
											props.setStatusModel(true);
											props.setChooseUserId(item.id);
										}}>
										Edit
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};
export default PageUser;
