import AppRouter from './Router/AppRouter';
import { ToastContainer } from 'react-toastify';
import { accessTokenService } from './services/UserServices';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setAccount } from './Redux/AccountSlice';
import Loading from './component/Loading/Loading';
import { useNavigate } from 'react-router-dom';

function App() {
	const navigate = useNavigate();
	let guestLoading = localStorage.getItem('guestLoading');
	if (guestLoading === null) {
		localStorage.setItem('guestLoading', JSON.stringify(true));
	}
	const dispatch = useDispatch();
	const fetchDataAccount = async () => {
		const response = await accessTokenService();
		if (response && response.EC === 0) {
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
			dispatch(setAccount(data));
		} else if (!(guestLoading = localStorage.getItem('guestLoading'))) {
			console.log('>>>> redirect with app:');
			navigate('/login');
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
