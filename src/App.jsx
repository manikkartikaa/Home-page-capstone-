import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import LandingPage from './LandingPage';

const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/LandingPage', element: <LandingPage /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}