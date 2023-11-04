import MenuListComposition from "../layout/button"
import styles from "./boutique.module.scss"
import logoUrl from '../assets/logo.jpg'

export default function Eboutique() {
    return (
        <div className={styles.boutique}>
            <header>
            <MenuListComposition/>
            <img src={logoUrl} alt="logo" />
            <h1>E-BOUTIQUE</h1>
            <div className={styles.content}>
            <h2>Nous travaillons avec Chronovet. C’est un site de vente en ligne de produits vétérinaires en vente sans ordonnance. Vous y trouverez de l’alimentation, des produits d’hygiène... aux prix d’internet. Vous précisez que vous voulez être livré à notre clinique et en 24 à 48h, vos produits sont chez nous, vous n’avez plus qu’à passer les chercher.</h2>
            <a className={styles.lien} href="https://www.chronovet.fr/connexion?create_account=1&d_clinic=1650?create_account=1&d_clinic=1650">boutique en ligne</a>
            </div>
            </header>
        </div>
    )
}