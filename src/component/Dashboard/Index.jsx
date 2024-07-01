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
			<div className='overflow-x-auto shadow-lg rounded  bg-white  mx-auto xl:w-10/12 w-full'>
				<PageUser listUser={listUser} setStatusModel={setStatusModel} />
			</div>
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
		</div>
	);
};
export default IndexDashboard;
