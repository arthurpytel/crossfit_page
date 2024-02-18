import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Form from './Tela_Formulario/Form';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/reserva",
    element: <Form/>
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


