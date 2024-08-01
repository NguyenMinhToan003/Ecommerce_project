import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
	const isAuth = useSelector((state) => state.account.isAuth);

	if (!isAuth) {
		console.log('>>>> redirect with private:');
		return <Navigate to='/login' />;
	} else if (isAuth.id === '') {
		console.log('>>>> redirect with private:');
		return <Navigate to='/login' />;
	}
	return <>{children}</>;
};

export default PrivateRoute;
