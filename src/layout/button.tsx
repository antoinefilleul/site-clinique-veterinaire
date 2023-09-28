import * as React from 'react';
import {useState} from 'react'
import Box from '@mui/material/Box';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import styles from './button.module.scss';

export default function MenuListComposition() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<PopperPlacementType>();
  const myButtons = [
  ["ACCEUIL", "EQUIPE", "CLINIQUE", "JOINDRE"], 
  ["SERVICES", "chir", "medecine", "imagerie"], 
  ["CONTACT"], 
  ["NOS CONSEILS", "VACCINS", "STERILISATION", "MODE DE VIE", "LUTTE ANTIPARASITAIRE", "QUAND CONSULTER"], 
  ["BOUTIQUE EN LIGNE"]];
  const [button_index, setbutton_index] = useState(0)

  const push_button_index = (nb: number) => {
      setbutton_index(button_index => nb)
  }

  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      push_button_index(parseInt(event.currentTarget.id))
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };
    return (
      <Box sx={{ width: 500 }}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <div className={styles.button}>
              {myButtons[button_index].map((newButton, index) =>
              <Typography sx={{ p: 2 }}>{newButton}</Typography>
              )}
              </div>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container justifyContent="center">
        <Grid item>
          <div className={styles.headers}>
          <Button id="0" onClick={handleClick('top-start')}>ACCEUIL</Button>
          <Button id="1" onClick={handleClick('top-start')}>SERVICES</Button>
          <Button id="2" onClick={handleClick('top-start')}>CONTACT</Button>
          <Button id="3" onClick={handleClick('top-start')}>NOS CONSEILS</Button>
          <Button id="4" onClick={handleClick('top-start')}>BOUTIQUE EN LIGNE</Button>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}