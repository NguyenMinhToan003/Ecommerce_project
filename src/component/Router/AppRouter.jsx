import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Index from "../Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Index />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};
export default AppRouter;
