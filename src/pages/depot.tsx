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
import styles from './acceuil.module.scss'

export default function Depot() {
    return(
        <div>
            <h1>DEPOT MINUTE</h1>
            <h2>Comme les gens travaillent, et que de notre côté, notre planning peut être plein à l’heure où vous pouvez venir, nous avons développer ce « concept » de « drive-in »: vous nous
prévenez à l’avance, vous déposez votre animal à l’accueil où nous vous ferons remplir un questionnaire de santé pour pouvoir examiner l’animal, ainsi qu’un devis approximatif. Nous examinerons l’animal ensuite, nous vous appellerons pour vous donner des nouvelles. Si l’examen médical révèle des problèmes qui nécessitent des investigations ou des soins qui dépassent le devis, nous vous demanderons votre accord par mail. Puis, l’animal vous sera rendu à un horaire qui sera prévu ensemble.
</h2>
        </div>
    )
}