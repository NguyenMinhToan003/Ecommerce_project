import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LeaderRouter = ({ children }) => {
	const auth = useSelector((state) => state.account.isAuth);
	const group_id = useSelector((state) => state.account.data.group_id);
	const location = useLocation();

	return auth && group_id === 1 ? (
		children
	) : (
		<Navigate to='/' state={{ from: location }} />
	);
};

export default LeaderRouter;
