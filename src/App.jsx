import AppRouter from './Router/AppRouter';
import { ToastContainer } from 'react-toastify';
import {
	accessTokenService,
	refreshTokenService,
} from './services/UserServices';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setAccount } from './Redux/AccountSlice';
import Loading from './component/Loading/Loading';

function App() {
	const dispatch = useDispatch();
	const fetchDataAccount = async () => {
		try {
			let data = 1;
			let response = await accessTokenService();
			if (response && response.EC === -1) {
				response = await refreshTokenService();
			}
			if (response && response.EC === 0) {
				const user = response.DT.user;
				const id = user.id;
				const name = user.name;
				const email = user.email;
				const phone = user.phone;
				const address = user.address;
				const avatar = user.avatar;
				const group_id = user.group.id;
				data = { id, name, email, phone, address, avatar, group_id };
				dispatch(setAccount(data));
			}
		} catch (error) {
			dispatch(setAccount({}));
		}
	};
	useEffect(() => {
		fetchDataAccount();
	}, []);

	return (
		<>
			<div className='font-poppins'>
				<Loading />
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
