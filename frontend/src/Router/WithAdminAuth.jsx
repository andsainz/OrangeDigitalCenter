import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export function WithAdminAuth({ children }) {
    const location = useLocation();
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
}
