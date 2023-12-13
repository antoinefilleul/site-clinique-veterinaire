import React from 'react'
import ReactDOM from 'react-dom/client'
import Accueil from './pages/accueil.tsx'
import Chirurgie from './pages/chirurgie.tsx';
import Medecine from './pages/medecine.tsx';
import Vaccins from './pages/vaccins.tsx';
import Urgence from './pages/urgence.tsx';
import Laboratoire from './pages/laboratoire.tsx';
import Eboutique from './pages/e-boutique.tsx';
import Depot from './pages/depot.tsx';
import Imagerie from './pages/imagerie.tsx';
import Mode_de_vie from './pages/mode_de_vie.tsx';
import Sterilisation from './pages/steril.tsx';
import Consult from './pages/consult.tsx';
import Contact from './pages/contact.tsx';
import Lutte_parasitaire from './pages/parasites.tsx';
import { ErrorPage } from './error.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: 'Imagerie',
    element: <Imagerie/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: 'Mode_de_vie',
    errorElement: <ErrorPage/>,
    element: <Mode_de_vie/>
  },
  {
    path: 'Sterilisation',
    errorElement: <ErrorPage/>,
    element: <Sterilisation/>
  },
  {
    path: 'Consult',
    errorElement: <ErrorPage/>,
    element: <Consult/>
  },
  {
    path: 'Contact',
    errorElement: <ErrorPage/>,
    element: <Contact/>
  },
  {
    path: 'Lutte antiparasitaire',
    errorElement: <ErrorPage/>,
    element: <Lutte_parasitaire/>
  },
  {
    path: 'Chirurgie',
    errorElement: <ErrorPage/>,
    element: <Chirurgie/>
  },
  {
    path: 'Medecine',
    errorElement: <ErrorPage/>,
    element: <Medecine/>
  },
  {
    path: 'Vaccins',
    errorElement: <ErrorPage/>,
    element: <Vaccins/>
  },
  {
    path: 'Urgence',
    errorElement: <ErrorPage/>,
    element: <Urgence/>
  },
  {
    path: 'Laboratoire',
    errorElement: <ErrorPage/>,
    element: <Laboratoire/>
  },
  {
    path: 'E-boutique',
    errorElement: <ErrorPage/>,
    element: <Eboutique/>
  },
  {
    path: 'Depot',
    errorElement: <ErrorPage/>,
    element: <Depot/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
);
