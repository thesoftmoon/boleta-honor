import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import FaqPage from './pages/Faq';
import InformacionPage from './pages/Informacion';
import LinksPage from './pages/Links';
import ErrorPage from './pages/Error';

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  },
  {
    path: "/faq",
    element: <FaqPage />,
  },
  {
    path: "/informacion",
    element: <InformacionPage />,
  },
  {
    path: "/links",
    element: <LinksPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

