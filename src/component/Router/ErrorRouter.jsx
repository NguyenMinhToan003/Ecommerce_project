const ErrorRouter = () => {
	return (
		<div className='flex justify-center items-center flex-col space-x-2 container mx-auto '>
			<h1 className='lg:text-[110px] text-7xl  font-medium'>404 Not Found</h1>
			<p className='pt-10 pb-20 text-[16px]'>
				Your visited page not found. You may go home page.
			</p>
			<button className='bg-[#db4444] font-medium py-4 px-12 rounded-md text-white'>
				Back to home page
			</button>
		</div>
	);
};
export default ErrorRouter;
