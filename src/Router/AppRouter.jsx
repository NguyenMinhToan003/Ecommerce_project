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
import UploadProduct from '../component/UploadProduct/UploadProduct';
import MissRouter from './MissRouter';
const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />}>
				<Route index element={<Index />} />
				<Route path='cart' element={<Cart />} />
				<Route
					path='billing'
					element={
						<PrivateRoute>
							<Billing />
						</PrivateRoute>
					}
				/>
				<Route
					path='uploadProduct'
					element={
						<PrivateRoute>
							<UploadProduct />
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
			<Route
				path='login'
				element={
					<MissRouter>
						<Login />
					</MissRouter>
				}
			/>
			<Route
				path='signup'
				element={
					<MissRouter>
						<SignUp />
					</MissRouter>
				}
			/>
		</Routes>
	);
};
export default AppRouter;
