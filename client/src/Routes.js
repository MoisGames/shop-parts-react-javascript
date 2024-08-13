import {
    SHOP_ROUTE, 
    BASKET_ROUTE, 
    OUR_SHOPS_ROUTE, 
    CONTACTS_ROUTE, 
    WHOLE_SALERS_ROUTE,
    PART_ROUTE,
    ADMIN_ROUTE,
        } from './utils/const'
import Shop from './pages/Shop'
import Basket from './pages/Basket'
import OurShops from './pages/OurShops'
import Contacts from './pages/Contacts'
import WholeSalers from './pages/WholeSalers'
import PartPage from './pages/PartPage'
import { Component } from 'react'
import Admin from './pages/Admin'

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop 
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: OUR_SHOPS_ROUTE,
        Component: OurShops
    }
    ,
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: WHOLE_SALERS_ROUTE,
        Component: WholeSalers
    },
    {
        path: PART_ROUTE + '/:id',
        Component: PartPage
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    
]