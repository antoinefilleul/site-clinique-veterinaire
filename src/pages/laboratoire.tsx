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

export default function Laboratoire() {
    return(
        <div>
            <h1>LABORATOIRE</h1>
            <h2>La clinique est équipée d’automates d’analyses sanguines pour faire la biochimie
( glycémie, hormones, bilan rénaux, généraux, pré anesthésiques, ionogramme...), le comptage des différentes cellules du sang ( globules rouges, globules blancs, plaquettes) ainsi que d’un microscope, d’un analyseur d’urines.
</h2>
        </div>
    )
}