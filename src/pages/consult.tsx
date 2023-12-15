import MenuListComposition from "../layout/button"
import styles from './consult.module.scss'
import logoUrl from '../assets/logo.jpg'
import bgUrl from '../assets/image.jpg'
import { Helmet } from "react-helmet-async"

export default function Consult () {
    return (
        <div className={styles.consult}>
            <Helmet>
                <title>consultation vet sur Jalles</title>
                <meta name="description" content="Clinique vétérinaire vet sur jalles à Saint Jean d'Illac. Consultation prévenives:vaccins, rdv annuels, bilan de santé, examens compléméntaires, bilan pubertaire. Animale malade: diarrhées hémoragiques, vomissements, animale abbatu, problêmes d'alimentaions, morsures ou plaies ouvertes, démangeaisons"/>
                <link rel="canonical" href="https://www.vetsurjalles.fr/Consult" />
            </Helmet>
            <div className={styles.menustick}>
                <MenuListComposition/>
            </div>
            <div className={styles.header} style={{ backgroundImage: `url(${bgUrl})` }}>
            <img src={logoUrl} alt="logo" />
            <h1>QUAND CONSULTER ?</h1>
            </div>
            <div className={styles.trapeze}></div>
            <div className={styles.content}>
            <h2>Les consultations préventives : cela peut être pour les vaccins : ces rendez-vous sont annuels, un bilan de santé sera effectué, il peut être proposé des examens complémentaires ( radios, analyses sanguines) en fonction de l’examen général, de l’âge de l’animal. Un autre motif de consultation préventive peut être un bilan pubertaire. Entre 5 et 8 mois selon l’animal, ce bilan permet de vérifier la bonne croissance de l’animal, de vérifier la dentition, de parler éducation et stérilisation.</h2>
            <h2>Les consultations pour animal malade : quels sont les symptômes qui doivent vous pousser à consulter et avec quel délai ? Par exemple, des diarrhées légères ou un à deux vomissements depuis une journée, sans que l’animal soit abattu : il faut surveiller l’animal mais il n’est pas forcément de venir en urgence, par contre, si les diarrhées sont hémorragiques, importantes et que l’animal est abattu, il faut nous appeler et on évaluera par téléphone le degré d’urgence. Un chien adulte qui ne mange pas pendant une journée nécessite une surveillance, par contre un chiot ou un animal âgé nécessitera une consultation. Une plaie ouverte ou une morsure nécessitent d’être vues en consultation rapidement, des démangeaisons peuvent attendre 2 à 3 jours… Mais pas plus !</h2>
            <h2>Si vous êtes inquiet, n’hésitez pas à nous appeler, en fonction des symptômes que vous nous décrierez, on pourra vous rassurer, vous faire faire des choses à la maison, ou si cela le nécessite, vous faire venir à la clinique.</h2>
            </div>
        </div>
    )
}