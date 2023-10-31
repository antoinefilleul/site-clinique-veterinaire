import MenuListComposition from "../layout/button"
import styles from "./urgence.module.scss"

export default function Urgence() {
    return (
        <div className={styles.urgence}>
            <header>
                <MenuListComposition/>
                <img src="./src/assets/logo.jpg" alt="logo" />
            <h1>URGENCES</h1>
            <h2>En cas d’urgence pendant les heures d’ouverture, appelez-nous avant de venir : d’une part, nous pourrons évaluer avec vous par téléphone le degré d’urgence et apaiser vos craintes, nous pourrons aussi vous donner des conseils ( par exemple, en cas de contact avec des chenilles processionnaires, bien rincer l’animal avant de l’amener) et d’autre part, cela nous permettra de préparer ce qu’il faut pour vous recevoir le plus efficacement possible. En dehors des heures d’ouverture, nous avons signé une permanence de continuité de soins avec le Centre Hospitalier Vétérinaire Aquivet , 19 allée de la forêt à Eysines. Leur numéro de téléphone est le 05 56 95 01 01.</h2>
            </header>
        </div>
    )
}