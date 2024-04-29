import { useSelector } from 'react-redux';

const Dashboard = () => {
	const auth = useSelector((state) => state.account.isAuth);
	const group_id = useSelector((state) => state.account.data.group_id);
	const check = auth && +group_id === 1;
	console.log('>>>> check leader:', check);
	return <>This is dashboard</>;
};

export default Dashboard;
