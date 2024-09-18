import Main from "../Home/Home";
import Register from "../Home/User/Register/Register";
import LoginPage from "../Home/User/Login/LoginPage";
import UserAccount from "../Home/User/Account/UserAccount";
import Posts from "../Home/Categories/Posts/Posts";
import PostForm from "../Home/Categories/Posts/PostForm";
import Attendence from "../Home/Categories/Attendence/Attendence";
import PageNotFound from '../Home/PagenotFound/Pagenotfound'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const UserLoginStatus = localStorage.getItem('isLoggedIn');

  return UserLoginStatus === 'true' ? element : <Navigate to="/e-portal/login" />;
};

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="posts" element={<Posts />} />
          </Route>
          <Route path="e-portal/register" element={<Register />} />
          <Route path="e-portal/login" element={<LoginPage />} />
          <Route path="e-portal" element={<Main />} />
          <Route path="*" element={<PageNotFound/>}/>
          <Route
            path="e-portal/UserAccount"
            element={<PrivateRoute element={<UserAccount />} />}
          /> 
          <Route
            path="e-portal/postData"
            element={<PrivateRoute element={<PostForm />} />}
          />
          <Route
            path="e-portal/attendence" element={<PrivateRoute element={<Attendence />} />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
