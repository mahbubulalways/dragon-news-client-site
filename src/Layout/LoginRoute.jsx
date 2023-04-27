import React from 'react';
import NavDragon from '../Pages/Shared/NavDragon/NavDragon';
import { Outlet } from 'react-router-dom';

const LoginRoute = () => {
    return (
        <div>
            <NavDragon></NavDragon>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginRoute;