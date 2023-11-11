import MenuListComposition from "../layout/button"
import styles from "./depot.module.scss"
import logoUrl from '../assets/logo.jpg'
import bgUrl from '../assets/image.jpg'

export default function Depot() {
    return(
        <div className={styles.depot}>
            <div className={styles.menustick}>
                <MenuListComposition/>
            </div>
            <div className={styles.header} style={{ backgroundImage: `url(${bgUrl})` }}>
            <img src={logoUrl} alt="logo" />
            <h1>DEPOT MINUTE</h1>
            </div>
            <div className={styles.trapeze}></div>
            <h2>Comme les gens travaillent, et que de notre côté, notre planning peut être plein à l’heure où vous pouvez venir, nous avons développé ce « concept » de « drive-in »: vous nous prévenez à l’avance, vous déposez votre animal à l’accueil où nous vous ferons remplir un questionnaire de santé pour pouvoir examiner l’animal, ainsi qu’un devis approximatif. Nous examinerons l’animal ensuite, nous vous appellerons pour vous donner des nouvelles. Si l’examen médical révèle des problèmes qui nécessitent des investigations ou des soins qui dépassent le devis, nous vous demanderons votre accord par mail. Puis, l’animal vous sera rendu à un horaire qui sera prévu ensemble.</h2>
        </div>
    )
}