import { CiCircleAlert } from 'react-icons/ci';
import { IoSearch } from 'react-icons/io5';
import { IoMdSettings } from 'react-icons/io';
import PageUser from './PageUser';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import { getListUserService } from '../../services/UserServices';
import ModelOption from './ModelOption';
const IndexDashboard = () => {
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(5);
	const [listUser, setListUser] = useState([]);
	const [totalPage, setTotalPage] = useState(0);
	const [statusModel, setStatusModel] = useState(false);
	const handlePageClick = (event) => {
		setPage(event.selected + 1);
	};
	const fetchListUser = async () => {
		const response = await getListUserService(page, limit);
		if (response && response.EC == 0) {
			setListUser(response.DT.listUsers);
			setTotalPage(response.DT.totalPage);
		}
	};
	useEffect(() => {
		fetchListUser();
	}, []);
	useEffect(() => {
		fetchListUser();
	}, [page]);
	return (
		<div>
			<ModelOption statusModel={statusModel} setStatusModel={setStatusModel} />
			<div className='flex justify-between items-center mb-10'>
				<h2 className='font-bold text-[14px]'>Table</h2>
				<div className='flex justify-center items-center gap-4 cursor-pointer'>
					<div className='relative'>
						<IoSearch className='absolute top-1/2 left-2 -translate-y-1/2 ' />
						<input
							type='text'
							placeholder='Search'
							className='w-52 py-[10.75px] pl-[37px] pr-[13.5px] border-[0.5] border-[#E2E8F0] rounded-[15px] text-[#2D3748] text-[14px] font-normal focus:outline-none focus:border-[#3182CE] shadow-md'
						/>
					</div>
					<IoMdSettings className='text-[#707f95] cursor-pointer' />
					<CiCircleAlert className='text-[#707f95] cursor-pointer' />
				</div>
			</div>
			<div className=' relative'>
				<table className='table-fixed w-full'>
					<caption className='text-[#2D3748] text-[18px] font-bold text-left mb-6'>
						User List
					</caption>
					<thead>
						<tr className='text-left text-[#A0AEC0] font-normal text-[10px] border-b-[1px] border-[#E2E8F0]'>
							<th className='uppercase w-5'>id</th>
							<th className='uppercase md:w-60 w-72'>User</th>
							<th className='uppercase w-20 lg:table-cell hidden'>Gender</th>
							<th className='uppercase w-20 md:table-cell hidden'>Function</th>
							<th className='uppercase w-20 xl:table-cell hidden'>Status</th>
							<th className='uppercase w-20 '>Action</th>
						</tr>
					</thead>
					<tbody>
						<PageUser listUser={listUser} setStatusModel={setStatusModel} />
					</tbody>
					<ReactPaginate
						nextLabel='next >'
						onPageChange={handlePageClick}
						pageRangeDisplayed={3}
						marginPagesDisplayed={2}
						pageCount={totalPage}
						previousLabel='< previous'
						pageClassName='page-item'
						pageLinkClassName='page-link'
						previousClassName='page-item'
						previousLinkClassName='page-link'
						nextClassName='page-item'
						nextLinkClassName='page-link'
						breakLabel='...'
						breakClassName='page-item'
						breakLinkClassName='page-link'
						containerClassName='pagination'
						activeClassName='active'
						renderOnZeroPageCount={null}
					/>
				</table>
			</div>
		</div>
	);
};
export default IndexDashboard;
