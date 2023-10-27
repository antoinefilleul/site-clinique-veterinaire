import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Acceuil from './pages/acceuil.tsx'
import Chirurgie from './pages/chirurgie';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "chirurgie",
    element: <Chirurgie />,
  },
  {
    path: "/",
    element: <Acceuil />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)
