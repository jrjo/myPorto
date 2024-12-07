import React from 'react';
import { Route, Routes  } from 'react-router-dom';
import Homepage from './components/HomePage';

export const routes = [
  {
    path: '/',
    element: <Homepage />,
    index: true,
  },
];

export const AppRoutes = () => {
  return <Routes>{routes.map((route) => (
    <Route key={route.path} element={route.element} {...route} />
  ))}</Routes>;
};