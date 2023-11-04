import MenuListComposition from "../layout/button"
import styles from "./imagerie.module.scss"
import logoUrl from '../assets/logo.jpg'

export default function Imagerie() {
    return(
        <div className={styles.imagerie}>
            <header>
                <MenuListComposition/>
                <img src={logoUrl} alt="logo" />
                <h1>IMAGERIE</h1>
            </header>
            <div className={styles.trapeze}></div>
            <h2>C’est par ce terme que l’on regroupe les techniques qui permettent d’aller voir à l’intérieur du corps de votre animal. Nous avons un appareil de radiologie numérique, qui permet de vous envoyer les radios par mail à la fin de la consultation, ainsi vous les avez avec vous, sans risquer de les perdre ou de les abimer. L'échographie est basée sur l'utilisation des ultrasons , cet examen est complètement indolore pour l'animal. elle permet d'explorer les organes abdominaux comme la rate, le foie, les reins, la vessie, la prostate, le tube digestif... Elle permet aussi bien sûr de diagnostiquer et de suivre la gestation.</h2>
        </div>
    )
}