import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PrivateRoute = ({ children }) => {
	const auth = useSelector((state) => state.account.isAuth);
	console.log('>>>> auth private:', auth);
	return auth ? <>{children}</> : <Navigate to='/login' />;
};

export default PrivateRoute;
