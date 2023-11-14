import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from './Root'
import Home from '../pages/home/Home'
import Login from '../pages/Login/Login'
import Detailed from '../pages/detailed/Detailed'

const Router = (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />}>
       <Route index element={<Home />} />
       <Route path="activities/:activity_id" element={<Detailed />} />
       <Route path="login/*" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );

export default Router;
