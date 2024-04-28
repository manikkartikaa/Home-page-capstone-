import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import LandingPage from './LandingPage';
import LoadingScreenRevise from './LoadingScreenRevise';
import AboutUsPage from './AboutUsPage';
import DetailFurniturePageRevise from './DetailFurniturePageRevise';
import FurniturePageRevise from './FurniturePageRevise';
import RecomendationPageRevise from './RecomendationPageRevise';

/*ini ngatur path nya, elementnya aja diganti*/
const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/LandingPage', element: <LandingPage /> },
{ path: '/LoadingScreenRevise', element: <LoadingScreenRevise /> },
{ path: '/AboutUsPage', element: <AboutUsPage /> },
{ path: '/DetailFurniturePageRevise', element: <DetailFurniturePageRevise /> },
{ path: '/FurniturePageRevise', element: <FurniturePageRevise /> },
{ path: '/RecomendationPageRevise', element: <RecomendationPageRevise /> },

]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}