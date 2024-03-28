import { Routes, Route, Router } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Index from '../Home';
import SignUp from '../SignUp/SignUp';
import Account from '../Account/Account';
import Profile from '../Account/Profile';
import Contact from '../Contact/Contact';
import ErrorRouter from './ErrorRouter';
import Cart from '../Cart/Cart';
import Detail from '../Detail/Detail';
import BillingDetail from '../BillingDetail/BillingDetail';

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />}>
				<Route index element={<Index />} />
				<Route path='login' element={<Login />} />
				<Route path='signup' element={<SignUp />} />
				<Route path='cart' element={<Cart />} />
				<Route path='detail' element={<Detail />} />
				<Route path='billingDetail' element={<BillingDetail />} />
				<Route path='account' element={<Account />}>
					<Route path='profile' element={<Profile />} />
				</Route>
				<Route path='contact' element={<Contact />} />
				<Route path='*' element={<ErrorRouter />} />
			</Route>
		</Routes>
	);
};
export default AppRouter;
