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
import ViewListProduct from '../component/ViewListProduct/ViewListProduct';
import Catalory from '../component/Catalory/Catalory';
import LeaderRouter from './LeaderRouter';
import Dashboard from '../component/Dashboard/Dashboard';
import IndexDashboard from '../component/Dashboard/Index';
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
				<Route path='catalory' element={<Catalory />}>
					<Route
						path='phone'
						element={<ViewListProduct catalory={'phone'} />}
					/>
					<Route
						path='camera'
						element={<ViewListProduct catalory={'camera'} />}
					/>
					<Route path='pc' element={<ViewListProduct catalory={'pc'} />} />
					<Route
						path='headphone'
						element={<ViewListProduct catalory={'headphone'} />}
					/>
					<Route
						path='watch'
						element={<ViewListProduct catalory={'watch'} />}
					/>
					<Route
						path='gaming'
						element={<ViewListProduct catalory={'gaming'} />}
					/>
				</Route>
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
			<Route
				path='dashboard'
				element={
					<LeaderRouter>
						<Dashboard />
					</LeaderRouter>
				}>
				<Route index element={<IndexDashboard />} />
				<Route path='profile' element={<IndexDashboard />} />
				<Route path='table' element={<IndexDashboard />} />
				<Route path='createAccount' element={<IndexDashboard />} />
				<Route path='logout' element={<IndexDashboard />} />
				<Route path='payments' element={<IndexDashboard />} />
			</Route>
		</Routes>
	);
};
export default AppRouter;
