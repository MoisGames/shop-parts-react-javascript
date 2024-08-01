import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {SHOP_ROUTE} from '../utils/const'
import {isAuth} from '../index'
import { publicRoutes } from '../Routes';

const AppRouter = () => {
    return (
        <Routes>
            return (
                {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />} exact />
                )}
            )
            <Route path='*' element = {<Navigate to={SHOP_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;