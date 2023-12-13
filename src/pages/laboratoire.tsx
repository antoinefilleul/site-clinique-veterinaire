import MenuListComposition from "../layout/button"
import styles from "./laboratoire.module.scss"
import logoUrl from '../assets/logo.jpg'
import bgUrl from '../assets/image.jpg'
import { Helmet } from "react-helmet-async"

export default function Laboratoire() {
    return(
        <div className={styles.labo}>
            <Helmet>
                <title>Laboratoire Vet Sur Jalles</title>
                <meta name="description" content="clinique vétérinaire vet sur jalles à Saint Jean d'Illac. La clinique est équipée d’automates d’analyses sanguines pour faire la biochimie et le comptage des différentes cellules du sang ainsi que d’un microscope, d’un analyseur d’urines."/>
                <link rel="canonical" href="/Labotatoire" />
            </Helmet>
            <div className={styles.menustick}>
                <MenuListComposition/>
            </div>
            <div className={styles.header} style={{ backgroundImage: `url(${bgUrl})` }}>
                <img src={logoUrl} alt="logo" />
                <h1>LABORATOIRE</h1>
                <div className={styles.content}>
                <h2>La clinique est équipée d’automates d’analyses sanguines pour faire la biochimie (glycémie, hormones, bilan rénaux, généraux, pré anesthésiques, ionogramme...), le comptage des différentes cellules du sang ( globules rouges, globules blancs, plaquettes) ainsi que d’un microscope, d’un analyseur d’urines.</h2>
                </div>
            </div>
        </div>
    )
}