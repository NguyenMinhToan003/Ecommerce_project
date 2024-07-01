import ListOrders from './TableOrders';
const Orders = (props) => {
	return (
		<>
			<div class='py-1 bg-blueGray-50 '>
				<div class='w-full  mb-12 xl:mb-0 px-4 mx-auto mt-24'>
					<div class='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded '>
						<div class='rounded-t mb-0 px-4 py-3 border-0'>
							<div class='flex flex-wrap items-center'>
								<div class='relative w-full px-4 max-w-full flex-grow flex-1'>
									<h3 class='font-semibold text-base text-blueGray-700'>
										Page Orders
									</h3>
								</div>
								<div class='relative w-full px-4 max-w-full flex-grow flex-1 text-right'>
									<a
										href='#'
										class='bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
										type='button'>
										Reload
									</a>
								</div>
							</div>
						</div>

						<ListOrders />
					</div>
				</div>
			</div>
		</>
	);
};
export default Orders;
