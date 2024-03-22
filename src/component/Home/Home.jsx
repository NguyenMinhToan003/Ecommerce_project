import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Nav />
        <hr className="my-7" />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Home;
