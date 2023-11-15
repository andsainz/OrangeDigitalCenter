import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from './Root'
import Home from '../pages/home/Home.jsx'
import Login from '../pages/Login/Login'
import Detailed from '../pages/detailed/Detailed'
import Discover from '../pages/Odc/Odc'

const Router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="activities/:activity_id" element={<Detailed />} />
        <Route path="login/*" element={<Login />} />
        <Route path="odc/*" element={<Discover />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
