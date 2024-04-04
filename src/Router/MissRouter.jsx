import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const MissRouter = ({ children }) => {
	const auth = useSelector((state) => state.account) || false;
	console.log('>>>> auth:', auth);
	return auth ? <>{children}</> : <Navigate to='/' />;
};

export default MissRouter;
