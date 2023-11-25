// ProtectedAdminRoute.jsx
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedAdminRoute = ({ component: Component, ...rest }) => {
    const token = Cookies.get('adminToken');

    return (
        <Route
            {...rest}
            render={(props) =>
                token ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default ProtectedAdminRoute;
