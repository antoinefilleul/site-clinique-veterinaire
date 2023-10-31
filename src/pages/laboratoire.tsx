import MenuListComposition from "../layout/button"
import styles from "./laboratoire.module.scss"

export default function Laboratoire() {
    return(
        <div className={styles.labo}>
            <header>
                <MenuListComposition/>
                <img src="./src/assets/logo.jpg" alt="logo" />
                <h1>LABORATOIRE</h1>
                <h2>La clinique est équipée d’automates d’analyses sanguines pour faire la biochimie ( glycémie, hormones, bilan rénaux, généraux, pré anesthésiques, ionogramme...), le comptage des différentes cellules du sang ( globules rouges, globules blancs, plaquettes) ainsi que d’un microscope, d’un analyseur d’urines.</h2>
            </header>
        </div>
    )
}