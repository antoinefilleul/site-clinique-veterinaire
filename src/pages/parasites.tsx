import MenuListComposition from "../layout/button"
import styles from "./parasites.module.scss"
import logoUrl from '../assets/logo.jpg'
import bgUrl from '../assets/image.jpg'
import { Helmet } from "react-helmet-async"

export default function Lutte_parasitaire() {
    return (
        <div className={styles.parasites}>
            <Helmet>
                <title>Lutte Anti Parasitaire Vet Sur Jalles</title>
                <meta name="description" content="clinique vétérinaire vet sur jalles à Saint Jean d'Illac. Il existe deux grandes sortes de parasites chez nos carnivores domestiques : les internes et les externes. Les paraites internes : ce sont en France métropolitaine, principalement des vers digestifs ( plats ou ronds) et quelques vers pulmonaires. Les parasites externes : il s’agit principalement des puces et des tiques. Des moyens de lutte adaptés à votre animal sont disponibles ( cachets, pipettes, colliers) , n’hésitez pas à nous demander conseil"/>
                <link rel="canonical" href="https://www.vetsurjalles.fr/Lutte antiparasitaire" />
            </Helmet>
            <div className={styles.menustick}>
                <MenuListComposition/>
            </div>
            <div className={styles.header} style={{ backgroundImage: `url(${bgUrl})` }}>
                <img src={logoUrl} alt="logo" />
                <h1>LUTTE ANTIPARASITAIRE</h1>
            </div>
            <div className={styles.trapeze}></div>
            <div className={styles.content}>
            <h2>Il existe deux grandes sortes de parasites chez nos carnivores domestiques : les internes et les externes.</h2>
            <h2>Les paraites internes : ce sont en France métropolitaine, principalement des vers digestifs ( plats ou ronds) et quelques vers pulmonaires. Les animaux peuvent se contaminer par l’alimentation, en mangeant des escargots, ou par les puces. Les larves de ces vers passent le placenta et par le lait et peuvent donc se passer de la mère aux bébés. Certains peuvent se passer aux humains. Ils peuvent provoquer de l’amaigrissement, des diarrhées, des vomissements et dans les cas extrèmes des occlusions intestinales voire des perforation des intestins ! Il est important de vermifuger régulièrement les animaux, le protocole est à étudier en fonction du mode de vie de votre animal.</h2>
            <h2>Les parasites externes : il s’agit principalement des puces et des tiques. Outre les démangeaisons et les problèmes de peau qu’une infestation par ces petites bêtes peuvent provoquer, ils peuvent aussi transmettre des maladies graves ( piroplasmose transmise par les tiques chez le chien, hémobartonellose transmise par les puces chez le chat), ils peuvent aussi transmettre certains vers digestifs.</h2>
            <h2>Des moyens de lutte adaptés à votre animal sont disponibles ( cachets, pipettes, colliers) , n’hésitez pas à nous demander conseil, c’est notre métier de vous conseiller !</h2>
            </div>
        </div>
    )
}