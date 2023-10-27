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

export default function Urgence() {
    return (
        <div>
            <h1>URGENCES</h1>
            <h2>En cas d’urgence pendant les heures d’ouverture, appelez-nous avant de venir : d’une part, nous pourrons évaluer avec vous par téléphone le degré d’urgence et apaiser vos craintes, nous pourrons aussi vous donner des conseils ( par exemple, en cas de contact avec des chenilles processionnaires, bien rincer l’animal avant de l’amener) et d’autre part, cela nous permettra de préparer ce qu’il faut pour vous recevoir le plus efficacement possible. En dehors des heures d’ouverture, nous avons signé une permanence de continuité de soins avec le Centre Hospitalier Vétérinaire Aquivet , 19 allée de la forêt à Eysines. Leur numéro de téléphone est le 05 56 95 01 01.
</h2>
        </div>
    )
}