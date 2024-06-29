import { Navigate } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
	const data = JSON.parse(localStorage.getItem('data'));
	if (!data) {
		console.log('>>>> redirect with private:');
		return <Navigate to='/login' />;
	} else if (data.id === '') {
		console.log('>>>> redirect with private:');
		return <Navigate to='/login' />;
	}
	return <>{children}</>;
};

export default PrivateRoute;
