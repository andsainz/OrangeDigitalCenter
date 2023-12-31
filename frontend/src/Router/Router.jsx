import { createBrowserRouter } from 'react-router-dom';
import Root from './Root.jsx';
import Home from '../pages/home/Home.jsx';
import LoginForm from '../pages/login/Login.jsx';
import NewsletterSubs from '../pages/newsletterSubs/NewsletterSubs.jsx';
import DiscoverODC from '../pages/odc/Odc.jsx';
import RegisterForm from '../pages/registerForm/RegisterForm.jsx';
import AdminForm from '../pages/adminDashboard/adminForm/AdminForm.jsx';
import DetailedPage from '../pages/detailedPage/DetailedPage.jsx';
import AdminHome from '../pages/adminDashboard/adminHome/AdminHome.jsx';
import AdminEditForm from '../pages/adminDashboard/adminEditForm/AdminEditForm.jsx';
import AdminList from '../pages/adminDashboard/adminList/AdminList.jsx';
import PrivacyPolicy from '../pages/privacyPolicy/PrivacyPolicy.jsx';
import { WithAdminAuth } from './WithAdminAuth.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/newsletter',
        element: <NewsletterSubs />,
      },
      {
        path: '/odc',
        element: <DiscoverODC />,
      },
      {
        path: '/registerform',
        element: <RegisterForm />,
      },
      {
        path: '/activities/:activity_id',
        element: <DetailedPage />,
      },
      {
        path: '/login',
        element: <LoginForm />,
      },
      {
        path: '/privacypolicy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/admin/home',
        element: <WithAdminAuth><AdminHome /></WithAdminAuth>,
      },
      {
        path: '/admin/activitypost',
        element: <WithAdminAuth><AdminForm /></WithAdminAuth>,
      },
      {
        path: '/admin/editform/:activity_id',
        element: <WithAdminAuth><AdminEditForm /></WithAdminAuth>,
      },
      {
        path: '/admin/adminlist',
        element: <WithAdminAuth><AdminList /></WithAdminAuth>,
      },
    ],
  },
]);

export default router;