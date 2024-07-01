import { NavLink } from 'react-router-dom';

const TableOrderDetail = (props) => {
	const { listProduct } = props;

	return (
		<>
			<div class='block w-full overflow-x-auto'>
				<table class='items-center bg-transparent w-full border-collapse '>
					<thead>
						<tr>
							<th class='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
								name
							</th>
							<th class='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
								price
							</th>

							<th class='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
								price-sale
							</th>
							<th class='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
								quantity
							</th>
							<th class='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
								total
							</th>
							<th class='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
								color
							</th>
							<th class='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
								size
							</th>
						</tr>
					</thead>

					<tbody>
						{listProduct &&
							listProduct.map((item) => (
								<>
									<tr className='bg-inherit hover:bg-slate-200'>
										<td class='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
											{item.Product.name}
										</td>
										<td class='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
											{item.Product.price}
										</td>

										<td
											title={`${item.price}$`}
											class='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 hover:underline cursor-pointer hover:text-blue-700 hover:italic'>
											{item.price}
										</td>
										<td class='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
											{item.quantity}
										</td>
										<td class='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
											{item.price * item.quantity}
										</td>
										<td class='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
											{item.color}
										</td>
										<td class='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
											{item.size}
										</td>
									</tr>
								</>
							))}
					</tbody>
				</table>
			</div>
		</>
	);
};
export default TableOrderDetail;
