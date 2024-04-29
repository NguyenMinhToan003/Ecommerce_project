import { ColorRing } from 'react-loader-spinner';
const LoadingEvent = (props) => {
	const { check } = props;
	return (
		check && (
			<div className='fixed top-0 left-0 right-0 bg-[#0000008c] w-full h-full flex justify-center items-center flex-col z-[100000]'>
				<ColorRing
					visible={true}
					height='80'
					width='80'
					ariaLabel='blocks-loading'
					wrapperStyle={{}}
					wrapperClass='blocks-wrapper'
					colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
				/>
				<p className='text-center text-lg font-bold text-white'>Loading...</p>
			</div>
		)
	);
};
export default LoadingEvent;
