import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "../components/Details";
import Navbar from "../components/Navbar";
 
import Login from "../pages/Login";
import Main from "../pages/Main";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile"; 
 
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newblog" element={<NewBlog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<PrivateRouter />}>
          <Route path="" element={<Details />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default AppRouter;
