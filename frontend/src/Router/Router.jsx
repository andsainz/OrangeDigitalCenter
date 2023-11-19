import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from './Root.jsx'
import Home from '../pages/home/Home.jsx'
import Login from '../pages/Login/Login.jsx'
import Detailed from '../pages/detailed/Detailed.jsx'
import Discover from '../pages/Odc/Odc.jsx'
import RegisterForm from '../pages/RegisterForm/RegisterForm.jsx';
import AdminForm from '../pages/adminDashboard/adminForm.jsx';

const Router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="activities/:activity_id" element={<Detailed />} />
        <Route path="login/*" element={<Login />} />
        <Route path="odc/*" element={<Discover />} />
        <Route path="registerform" element={<RegisterForm />} />
        <Route path="admin/activitypost" element={<AdminForm />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
