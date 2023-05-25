import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FaqPage from './pages/Faq';
import InformacionPage from './pages/Informacion';
import LinksPage from './pages/Links';

const router = createBrowserRouter([
  {
    path: "/",
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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

