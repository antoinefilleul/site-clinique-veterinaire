import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import styles from '../layout/button.module.scss';
import headers from '../layout/button.tsx';
import image from './image.jpg';

export default function Acceuil() {
  return (
    <div>
      <img src={image} alt=""></img>
      <h1>VET SUR JALLE</h1>
    </div>
  );
}
