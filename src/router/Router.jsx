import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Details from "../components/Cards";
import Navbar from "../components/Navbar";
 
import Login from "../pages/Login";

import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile"; 
 
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
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
