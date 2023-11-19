// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from './Router/Router';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById('root'));
root.render(<Router />);

