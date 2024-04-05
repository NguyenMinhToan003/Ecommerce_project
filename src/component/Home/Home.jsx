import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
const Home = () => {
	return (
		<>
			<div>
				<div className='fixed top-0 left-0 right-0 bg-white z-[100]  mb-7'>
					<Header />
					<Nav />
					<hr />
				</div>

				<div className='mt-[120px] '>
					<Outlet />
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Home;
