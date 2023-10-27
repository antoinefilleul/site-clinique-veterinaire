import * as React from 'react';
import {useState} from 'react'
import Box from '@mui/material/Box';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import styles from './button.module.scss';
import { Link } from 'react-router-dom';

export default function MenuListComposition() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<PopperPlacementType>();
  const myButtons = [
  {id:0, slots:[{text:"EQUIPE", link:"Acceuil"}, {text: "CLINIQUE", link: "Acceuil"}, {text:"JOINDRE", link: "Acceuil"}, {text:"tarif", link:"Acceuil"}, {text:"CGF", link:"Acceuil"}]}, 
  {id:1, slots:[{text:"CHIRURGIE", link:"chirurgie"}, {text:"MEDECINE", link:"medecine.tsx"}, {text:"IMAGERIE", link:"imagerie.tsx"}, {text:"DEPOT MINUTE", link:"depot.tsx"}, {text:"E-BOUTIQUE", link:"e-boutique.tsx"}, {text:"URGENCE", link:"urgence.tsx"}]}, 
  {id:2, slots:[{text:"VACCINS", link:"vaccins.tsx"}, {text:"STERILISATION", link:"steril.tsx"}, {text:"MODE DE VIE", link:"mode_de_vie.tsx"}, {text:"LUTTE ANTIPARASITAIRE", link:"parasites.tsx"}, {text:"QUAND CONSULTER", link:"consult.tsx"}]}, 
  {id:3, slots:[{text:"CONTACT", link:"contact.tsx"}]}]
  const [button_index, setbutton_index] = useState(0)

  const push_button_index = (nb: number) => {
      setbutton_index(() => nb)
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
              <div>
              {myButtons[button_index].slots.map((newButton) =>
              <Link to={newButton.link} className={styles.drop_down}>{newButton.text}</Link>
              )}
              </div>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container justifyContent="center">
        <Grid item>
          <div className={styles.menu}>
          <Button id="0" onClick={handleClick('top-start')}>ACCEUIL</Button>
          <Button id="1" onClick={handleClick('top-start')}>SERVICES</Button>
          <Button id="2" onClick={handleClick('top-start')}>NOS CONSEILS</Button>
          <Button id="3" onClick={handleClick('top-start')}>CONTACT</Button>
          <Button id="4" onClick={handleClick('top-start')}>BOUTIQUE EN LIGNE</Button>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}