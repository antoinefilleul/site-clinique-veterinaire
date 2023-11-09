import * as React from 'react';
import {useState} from 'react'
import Box from '@mui/material/Box';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import styles from './button.module.scss';
import { Link, useLocation } from 'react-router-dom'

export default function MenuListComposition() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<PopperPlacementType>();
  const currentLocation = useLocation();
  const myButtons = [
    {id:0, slots:[{text:"EQUIPE", link:"hash: '#equipe'"}, {text:"JOINDRE", link: "/#joindre"}, {text:"TARIF", link:"/#tarif"}, {text:"CGF", link:"/#CGF"}]}, 
    {id:1, slots:[{text:"CHIRURGIE", link:"/Chirurgie"}, {text:"MEDECINE", link:"/Medecine"}, {text:"IMAGERIE", link:"/Imagerie"}, {text:"DEPOT MINUTE", link:"/Depot"}, {text:"E-BOUTIQUE", link:"/E-boutique"}, {text:"URGENCE", link:"/Urgence"}]}, 
    {id:2, slots:[{text:"VACCINS", link:"/Vaccins"}, {text:"STERILISATION", link:"/Sterilisation"}, {text:"MODE DE VIE", link:"/Mode_de_vie"}, {text:"LUTTE ANTIPARASITAIRE", link:"/Lutte antiparasitaire"}, {text:"QUAND CONSULTER", link:"/Consult"}]}, 
    {id:3, slots:[{text:"CONTACT", link:"/Contact"}]}]
  const [button_index, setbutton_index] = useState(0)

  const push_button_index = (nb: number) => {
      setbutton_index(() => nb)
  }
  const handleLeave =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    push_button_index(parseInt(event.currentTarget.id))
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  const handleHover =
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
              <Link to={newButton.link} className={styles.drop_down} key={newButton.text} onClick={(e) =>{
                if (currentLocation.pathname === '/'+newButton.link) {
                  e.preventDefault()
                  window.scroll(0,0)
              }}}>{newButton.text}</Link>
              )}
              </div>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid>
        <Grid item>
          <div className={styles.menu}>
          <Button id="0" sx={{color: "white"}} onMouseEnter={handleHover('top-start')}>ACCUEIL</Button>
          <Button id="1" sx={{color: "white"}} onMouseEnter={handleHover('top-start')}>SERVICES</Button>
          <Button id="2" sx={{color: "white"}} onMouseEnter={handleHover('top-start')}>NOS CONSEILS</Button>
          <Link to={"/Contact"} onClick={(e) =>{
                if (currentLocation.pathname === '/CONTACT') {
                  e.preventDefault()
                  window.scroll(0,0)
              }}}>CONTACT</Link>
          <a href='https://www.chronovet.fr/connexion?create_account=1&d_clinic=1650?create_account=1&d_clinic=1650'>BOUTIQUE EN LIGNE</a>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}