import { NavLink } from 'react-router-dom';

const TableOrderDetail = (props) => {
	const { listProduct } = props;

	return (
		<>
			<div className='block w-full overflow-x-auto'>
				<table className='items-center bg-transparent w-full border-collapse'>
					<thead>
						<tr>
							<th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
								Name
							</th>
							<th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
								Color
							</th>
							<th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
								Size
							</th>
							<th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
								Price
							</th>
							<th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
								Price Sale
							</th>
							<th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
								Quantity
							</th>
							<th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
								Total
							</th>
						</tr>
					</thead>

					<tbody>
						{listProduct &&
							listProduct.map((item) => (
								<tr key={item.id} className='bg-inherit hover:bg-slate-200'>
									<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-semibold'>
										{item.Product.name}
									</td>
									<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
										<div
											className='p-1 text-white '
											style={{ backgroundColor: item.color }}>
											{item.color}
										</div>
									</td>
									<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
										{item.size}
									</td>
									<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
										{item.Product.price}
									</td>
									<td
										title={`${item.price}$`}
										className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 hover:underline cursor-pointer hover:text-blue-700 hover:italic'>
										{item.price}
									</td>
									<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
										{item.quantity}
									</td>
									<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
										{item.price * item.quantity}
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</>
	);
};
export default TableOrderDetail;
