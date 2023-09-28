import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MenuListComposition from './layout/button.tsx'
import Acceuil from './pages/acceuil.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MenuListComposition/>
    <Acceuil />
  </React.StrictMode>
)
