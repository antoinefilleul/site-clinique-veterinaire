import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import headers from '../layout/button.tsx';
import MenuListComposition from '../layout/button.tsx'
import image from './image.jpg';

export default function Eboutique() {
    return (
        <div>
            <h1>E-BOUTIQUE</h1>
            <h2>Nous travaillons avec Chronovet. C’est un site de vente en ligne de produits vétérinaires en vente sans ordonnance. Vous y trouverez de l’alimentation, des produits d’hygiène... aux prix d’internet. Vous précisez que vous voulez être livré à notre clinique et en 24 à 48 h, vos produits sont chez nous, vous n’avez plus qu’à passer les chercher.</h2>
        </div>
    )
}