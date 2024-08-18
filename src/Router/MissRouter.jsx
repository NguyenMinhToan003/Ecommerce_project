import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const MissRouter = ({ children }) => {
	const navigate = useNavigate();
	const auth = useSelector((state) => state.account.isAuth) || false;
	const dashboard = useSelector((state) => state.account.data.group_id);
	const nonSecurePaths = ['/login', '/signup'];
	if (dashboard && nonSecurePaths.includes(window.location.pathname))
		return navigate(-1);
	else if (dashboard === 1) return <>{children}</>;
	return !auth ? <>{children}</> : <Navigate to='/' />;
};

export default MissRouter;
