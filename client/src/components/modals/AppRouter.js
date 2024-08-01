import React from 'react';
import Routes, { Navigate, Route } from 'react-router-dom';
import {SHOP_ROUTE, BASKET_ROUTE} from './utils/'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='*' element = {<Navigate to={SHOP_ROUTE} />} />
            <Route path='/' element = {<Navigate to={SHOP_ROUTE} />} />
            <Route path={SHOP_ROUTE} element = {<Navigate to={SHOP_ROUTE} />} />
            <Route path={BASKET_ROUTE} element = {<Navigate to={BASKET_ROUTE} />} />
            
        </Routes>
    );
};

export default AppRouter;