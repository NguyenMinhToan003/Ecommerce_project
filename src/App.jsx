import AppRouter from './component/Router/AppRouter';
import { ToastContainer } from 'react-toastify';
function App() {
	return (
		<>
			<div className='font-poppins'>
				<AppRouter />
				<ToastContainer
					position='bottom-center'
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='colored'
					transition:Slide
				/>
			</div>
		</>
	);
}

export default App;
