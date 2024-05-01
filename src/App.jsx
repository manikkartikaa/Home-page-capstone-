import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import LandingPage from './LandingPage';
import LoadingScreenRevise from './LoadingScreenRevise';
import AboutUsPage from './AboutUsPage';
import DetailFurniturePageRevise from './DetailFurniturePageRevise';
import FurniturePageRevise from './FurniturePageRevise';
import RecomendationPageRevise from './RecomendationPageRevise';
import LandingPageMobRevise from './LandingPageMobRevise';
import AboutUsMob from './AboutUsMob';

/*ini ngatur path nya, elementnya aja diganti*/
const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
{ path: '/LandingPage', element: <LandingPage /> },
{ path: '/LoadingScreenRevise', element: <LoadingScreenRevise /> },
{ path: '/AboutUsPage', element: <AboutUsPage /> },
{ path: '/DetailFurniturePageRevise', element: <DetailFurniturePageRevise /> },
{ path: '/FurniturePageRevise', element: <FurniturePageRevise /> },
{ path: '/RecomendationPageRevise', element: <RecomendationPageRevise /> },
{ path: '/LandingPageMobRevise', element: <LandingPageMobRevise /> },
{ path: '/AboutUsMob', element: <AboutUsMob /> },



]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}