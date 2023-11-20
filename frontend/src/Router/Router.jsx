import { createBrowserRouter } from "react-router-dom";
import Root from './Root.jsx'
import Home from '../pages/home/Home.jsx'
import LoginForm from "../pages/Login/Login.jsx";
import NewsletterSubs from "../pages/newsletterSubs/NewsletterSubs.jsx";
import DiscoverODC from "../pages/Odc/Odc.jsx";
import RegisterForm from '../pages/registerForm/RegisterForm.jsx'
import AdminForm from "../pages/adminDashboard/adminForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/newsletter",
        element: <NewsletterSubs/>,
      },
      {
        path: "/odc*",
        element: <DiscoverODC />,
      },
      {
        path: "/registerform",
        element: <RegisterForm />,
      },
      {
        path: "/admin/login",
        element: <LoginForm />,
      },
      {
        path: "/admin/activitypost",
        element: <AdminForm />,
      }
    ],
  },
]);

export default router;