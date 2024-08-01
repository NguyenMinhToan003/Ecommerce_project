import ReactPaginate from 'react-paginate';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { OrdersServices } from '../../services/Orders';
const TableOrders = () => {
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [totalPage, setTotalPage] = useState(0);
	const fetchData = async () => {
		const response = await OrdersServices(limit, page);
		console.log(response);
		if (response && response.EC === 0) {
			setData(response.DT.listShipping);
			setTotalPage(response.DT.totalPage);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);
	useEffect(() => {
		fetchData();
	}, [page]);
	const handlePageClick = (event) => {
		setPage(event.selected + 1);
	};
	return (
		<>
			<div class='block w-full overflow-x-auto'>
				<table class='items-center bg-transparent w-full border-collapse '>
					<thead>
						<tr>
							<th class='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
								id
							</th>
							<th class='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
								user name
							</th>

							<th class='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
								amount($)
							</th>
							<th class='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
								shipping address
							</th>
							<th class='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
								proructs
							</th>
						</tr>
					</thead>

					<tbody>
						{data.map((item) => (
							<>
								<tr className='bg-inherit hover:bg-slate-200'>
									<td class='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
										{item.id}
									</td>
									<td class='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
										{item.User.name}
									</td>

									<td
										title={`${item.amount}$ and ${item.OrderDetails.length} products`}
										class='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 hover:underline cursor-pointer hover:text-blue-700 hover:italic'>
										{item.amount}
										<span className='text-purple-500 italic '>
											({item.OrderDetails.length})
										</span>
									</td>
									<td class='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
										{item.address}
									</td>
									<td class='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
										<NavLink
											to={`/dashboard/orders/detail?id=${item.id}`}
											className='underline text-blue-600'>
											View
										</NavLink>
									</td>
								</tr>
							</>
						))}
					</tbody>
				</table>
			</div>
			<ReactPaginate
				nextLabel='next >'
				onPageChange={handlePageClick}
				pageRangeDisplayed={3}
				marginPagesDisplayed={2}
				pageCount={totalPage - 1}
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
		</>
	);
};
export default TableOrders;
