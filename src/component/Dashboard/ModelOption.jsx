import avatar from '../../assets/images/avatar.png';
import { IoPencil } from 'react-icons/io5';
import { FaStackOverflow } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { IoMdSave } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';
import LoadingEvent from '../Loading/LoadingEvent';

const ModelOption = (props) => {
	const { statusModel, setStatusModel } = props;

	return (
		<div
			className={
				statusModel
					? 'fixed  left-0 right-0 top-0 bottom-0 z-[100000] backdrop-blur-sm bg-black/30 '
					: ''
			}>
			<div
				className={
					statusModel
						? 'fixed bottom-0 left-[15px] right-[15px] bg-white rounded-tr-[15px] rounded-tl-[15px] p-[18px] pb-24 shadow-2xl border border-gray-200 transition-all ease-in-out duration-300'
						: 'fixed bottom-[-200%] left-[15px] right-[15px] bg-white rounded-tr-[15px] rounded-tl-[15px] p-[18px] pb-24 shadow-2xl border border-gray-200 transition-all ease-in-out duration-300'
				}>
				<div className='w-full h-fit'>
					<div className='flex justify-end items-center gap-3 model'>
						<button className='bg-orange-500'>
							<MdDeleteForever />
							<span>Delete</span>
						</button>
						<button className='bg-green-500'>
							<IoMdSave />
							<span>Save</span>
						</button>
						<button
							onClick={() => setStatusModel(!statusModel)}
							className='bg-red-500 z-[10000000000]'>
							<IoCloseSharp />
							<span>Cancel</span>
						</button>
					</div>
					<div className=' flex justify-between items-center h-[133px] backdrop-blur-sm bg-white/80'>
						<div className='flex justify-center items-center gap-[22px]'>
							<div className='w-20 h-20 rounded-2xl relative'>
								<img
									className='w-full h-full rounded-2xl object-cover'
									src={avatar}
									alt='avatar'
								/>
								<div className='absolute -bottom-[5px] -right-[5px] w-7 h-7 rounded-[8px] shadow-md bg-white flex justify-center items-center'>
									<IoPencil className='text-[#4FD1C5] w-3 h-3' />
								</div>
							</div>
							<div>
								<p className='text-[18px] font-bold text-gray-700'>
									Nguyen Minh Toan
								</p>
								<p className='text-[14px] font-normal text-[#718096]'>
									dh521119044444@student.stu.edu.vn
								</p>
							</div>
						</div>
						<div className='flex justify-center items-center'>
							<button className='flex justify-center items-center gap-4 py-[10px] px-[30px] rounded-[12px] bg-white shadow-lg text-center'>
								<FaStackOverflow />
								<p>Overview</p>
							</button>
						</div>
					</div>
					<table className='w-full formUserChange'>
						<caption className='text-left font-bold text-[18px] uppercase my-4'>
							platform settings
						</caption>
						<thead className='text-left'>
							<tr>
								<th>Setting</th>
								<th>Value</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<label htmlFor='name'>Username</label>
								</td>
								<td>
									<input id='name' type='text' />
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor='email'>Email</label>
								</td>
								<td>
									<input id='email' type='email' />
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor='address'>Address</label>
								</td>
								<td>
									<input id='address' />
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor='role'>Role</label>
								</td>
								<td>
									<select id='role'>
										<option value='1'>Admin</option>
										<option value='2'>Developer</option>
										<option value='3'>User</option>
									</select>
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor='gender'>Gender</label>
								</td>
								<td className='flex justify-start items-center gap-3'>
									<label htmlFor='male'>
										<p className='text-blue-500'>Male</p>
									</label>
									<input
										className='radioGender'
										type='radio'
										value='0'
										name='gender'
										id='male'
									/>
									<label htmlFor='female'>
										<p className='text-pink-500'>Female</p>
									</label>
									<input
										className='radioGender'
										type='radio'
										value='1'
										name='gender'
										id='female'
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ModelOption;
