import MenuListComposition from "../layout/button"
import styles from './chirurgie.module.scss'
import logoUrl from '../assets/logo.jpg'
import bgUrl from '../assets/image.jpg'

export default function Chirurgie() {
    return (
        <div className={styles.chirurgie}>
            <div className={styles.header} style={{ backgroundImage: `url(${bgUrl})` }}>
                <MenuListComposition/>
                <img src={logoUrl} alt="logo" />
                <h1>CHIRURGIE</h1>
            </div>
            <div className={styles.trapeze}></div>
            <div className={styles.content}>
            <h2>Nous pratiquons la plupart des interventions chirurgicales des tissus mous</h2>
            <h3>- stérilisations des chats, chiens et nouveaux animaux de compagnie,</h3>
            <h3>- chirurgie cutanée,</h3>
            <h3>- chirurgie viscérale ( intestins, vessie, rate...) ainsi que certaines interventions orthopédiques</h3>
            <h3>- fractures</h3>
            <h3>- ligaments croisés</h3>
            <h3>- rotules</h3>
            <h2>VISITE PRE-OPERATOIRE</h2>
            <div className={styles.visite}>
                <h3> Nous vous recevons systématiquement avant chaque chirurgie afin de nous assurer de l'état de santé de votre compagnon. (examen clinique , analyse sanguines éventuelles ...) Cette visite permet également de vous expliquer les motifs de l'intervention, son déroulement et les éventuels soins qui en découlent.</h3>
                <h3>Un devis sera établi.</h3>
                <h3>La plupart de nos chirurgie sont effectuées sous anesthésie générale. Nous pouvons pratiquer toutes sortes d’anesthésie : de la sédation plus ou moins profonde, quand le geste peut être un peu douloureux ou que l’animal ne doit pas bouger, à l’anesthésie générale avec un respirateur artificiel en passant par des anesthésies « flash » de quelques minutes. Le choix se fait en fonction du geste technique à pratiquer, de l’état général de l’animal. Nous attachons également une attention toute particulière à la gestion de la douleur des animaux qui nous sont confiés.</h3>
            </div>
            </div>
        </div>
    )
}