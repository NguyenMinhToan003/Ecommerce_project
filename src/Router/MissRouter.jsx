import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const MissRouter = ({ children }) => {
	const auth = useSelector((state) => state.account.isAuth) || false;
	console.log('>>>> auth miss:', auth);
	return !auth ? <>{children}</> : <Navigate to='/' />;
};

export default MissRouter;
