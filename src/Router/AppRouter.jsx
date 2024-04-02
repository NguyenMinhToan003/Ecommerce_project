import { Routes, Route } from 'react-router-dom';
import Home from '../component/Home/Home';
import Login from '../component/Login/Login';
import Index from '../component/Home';
import SignUp from '../component/SignUp/SignUp';
import Account from '../component/Account/Account';
import Profile from '../component/Account/Profile';
import Contact from '../component/Contact/Contact';
import ErrorRouter from './ErrorRouter';
import Cart from '../component/Cart/Cart';
import Detail from '../component/Detail/Detail';
import Billing from '../component/Billing/Billing';
import PrivateRoute from './PrivateRouter';
import MissRouter from './MissRouter';
const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />}>
				<Route index element={<Index />} />
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
			<Route path='login' element={<Login />} />
			<Route path='signup' element={<SignUp />} />
		</Routes>
	);
};
export default AppRouter;
