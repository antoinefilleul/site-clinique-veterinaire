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

export default function Imagerie() {
    return(
        <div>
            <h1>IMAGERIE</h1>
            <h2>C’est par ce terme que l’on regroupe les techniques qui permettent d’aller voir à l’intérieur du corps de votre animal.
Nous avons un appareil de radiologie numérique, qui permet de vous envoyer les radios par mail à la fin de la consultation, ainsi vous les avez avec vous, sans risquer de les perdre ou de les abimer.
L'échographie est basée sur l'utilisation des ultrasons , cet examen est complètement indolore pour l'animal. elle permet d'explorer les organes abdominaux comme la rate, le foie, les reins, la vessie, la prostate, le tube digestif... Elle permet aussi bien sûr de diagnostiquer et de suivre la gestation.
</h2>
        </div>
    )
}