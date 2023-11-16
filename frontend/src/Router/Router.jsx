// Router.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Root from './Root';
import Home from '../pages/home/Home.jsx';
import Login from '../pages/Login/Login';
import Detailed from '../pages/detailed/Detailed';
import Discover from '../pages/Odc/Odc.jsx';
import Register from '../pages/register/Register.jsx';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={<Root />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="activities/:activity_id"
          element={<Detailed />}
        />
        <Route
          path="login/*"
          element={<Login />}
        />
        <Route
          path="odc/*"
          element={<Discover />}
        />
        <Route
          path="register"
          element={<Register />}
        />
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;


