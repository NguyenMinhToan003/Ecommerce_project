import { Navigate } from 'react-router-dom';

const LeaderRouter = ({ children }) => {
	const data = JSON.parse(localStorage.getItem('data'));
	const group_id = +(data && data.group_id);
	console.log('LeaderRouter', group_id);
	return group_id === 1 ? <>{children}</> : <Navigate to='/' />;
};

export default LeaderRouter;
