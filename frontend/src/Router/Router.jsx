import { createBrowserRouter } from "react-router-dom";
import Root from './Root.jsx'
import Home from '../pages/home/Home.jsx'
import LoginForm from "../pages/Login/Login.jsx";
import NewsletterSubs from "../pages/newsletterSubs/NewsletterSubs.jsx";
import DiscoverODC from "../pages/Odc/Odc.jsx";
import RegisterForm from '../pages/registerForm/RegisterForm.jsx'
import AdminForm from "../pages/adminDashboard/adminForm.jsx";
import DetailedPage from "../pages/detailedPage/DetailedPage.jsx";
import PopUp from "../Components/popUpSubs/PopUp.jsx"
import AdminRegister from "../pages/adminDashboard/adminRegister/AdminRegister.jsx";
import PrivacyPolicy from "../pages/privacyPolicy/PrivacyPolicy.jsx";
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
        path: "/odc",
        element: <DiscoverODC />,
      },
      {
        path: "/registerform",
        element: <RegisterForm />,
      },
      {
        path: "/activities/:activity_id",
        element: <DetailedPage />,
      },
      {
        path: "/admin/login",
        element: <LoginForm />,
      },
      {
        path: "/admin/activitypost",
        element: <AdminForm />,
      },
      {
        path: "/admin/register",
        element:<AdminRegister />
      },
      {
        path: "/privacypolicy",
        element:<PrivacyPolicy />
      }
    ],
  },
]);

export default router;