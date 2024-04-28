import AppRouter from './Router/AppRouter';
import { ToastContainer } from 'react-toastify';
import { accessTokenService } from './services/UserServices';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setAccount } from './Redux/AccountSlice';

function App() {
	const dispatch = useDispatch();

	const fetchDataAccount = async () => {
		const response = await accessTokenService();
		console.log(response);
		if (response && response.EC === 0) {
			console.log('check');
			const user = response.DT.user;
			const id = user.id;
			const name = user.name;
			const email = user.email;
			const phone = user.phone;
			const address = user.address;
			const avatar = user.avatar;
			const group_id = user.group.id;
			const token = response.DT.token;
			const data = { id, name, email, phone, address, avatar, group_id, token };
			console.log(data);
			dispatch(setAccount(data));
		}
	};

	useEffect(() => {
		fetchDataAccount();
	}, []);

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
