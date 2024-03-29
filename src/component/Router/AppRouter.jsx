import { Routes, Route } from 'react-router-dom';
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
import Billing from '../Billing/Billing';
import PrivateRoute from './PrivateRouter';
const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />}>
				<Route index element={<Index />} />
				<Route path='login' element={<Login />} />
				<Route path='signup' element={<SignUp />} />
				<Route
					path='cart'
					element={
						<PrivateRoute>
							<Cart />
						</PrivateRoute>
					}
				/>
				<Route
					path='billing'
					element={
						<PrivateRoute>
							<Billing />
						</PrivateRoute>
					}
				/>
				<Route path='detail' element={<Detail />} />

				<Route
					path='account'
					element={
						<PrivateRoute>
							<Account />
						</PrivateRoute>
					}>
					<Route path='profile' element={<Profile />} />
				</Route>
				<Route path='contact' element={<Contact />} />
				<Route path='*' element={<ErrorRouter />} />
			</Route>
		</Routes>
	);
};
export default AppRouter;
