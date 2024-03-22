import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Index from ".";
const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <hr className="my-7" />
      <Index />
    </>
  );
};

export default Home;
