import * as React from 'react';
import styles from './acceuil.module.scss'
import MenuListComposition from '../layout/button';
export default function Acceuil() {
  const tarifs = [
  {name:"consultation", id:"45€"}, 
  {name:"radiographie", id:"48€"}, 
  {name:"castration chat", id:"79€"}, 
  {name:"castration chien", id:"180€-210€"}, 
  {name:"ovariectomie chat", id:"145€"}, 
  {name:"ovariectomie chienne", id:"295€-345€"}]
  const list_tarif = tarifs.map(tarif =>
    <li key={tarif.id}>
      <p>{tarif.name} {tarif.id}</p>
    </li>
    )
  return (
    <div className={styles.default}>
      <header>
      <p>
      <MenuListComposition/>
      </p>
      <img src="./src/assets/logo.jpg" alt="logo" />
      <h1>Bienvenue à la clinique vétérinaire VET SUR JALLE</h1>
      <h1>DR Dominique VENEQUE</h1>
      </header>
      <h2>Equipe</h2>
      <h3>DR Dominique VENEQUE</h3>
      <h4>diplomée de l'Ecole Nationale Vétérinaire de Maison Alfort en 1981.</h4>
      <h2>Nous Joindre</h2>
      <h3>adresse :1521 Avenue de Bordeaux 3317 ST Jean d'Illac</h3>
      <h3>tel :0982794727</h3>
      <h3>vetsurjalles@gmail.com</h3>
      <h2>Tarifs</h2>
      <ul>{list_tarif}</ul>
      <h2>Condition Générale de Fonctionnement</h2>
    </div>
  );
}
