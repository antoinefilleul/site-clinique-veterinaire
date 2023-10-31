import MenuListComposition from "../layout/button"
import styles from "./mode_de_vie.module.scss"

export default function Mode_de_vie () {
    return (
        <div className={styles.mdv}>
            <header>
                <MenuListComposition/>
                <img src="./src/assets/logo.jpg" alt="logo" />
            <h1>MODE DE VIE</h1>
            </header>
            <div className={styles.trapeze}></div>
            <div className={styles.content}></div>
            <h2>Le mode de vie que vous avez choisi pour votre animal a une grande importance. Cela va influencer les pathologies qu’il peut rencontrer ainsi que les plans de prévention qu’il faut mettre en place. </h2>
            <h3>Un chat qui reste en intérieur a peu de chance de faire des abcès ( il ne se bat pas) mais peut développer des troubles anxieux. Il n’aura pas besoin d’être vacciné contre la leucose, mais il faudra quand même le vacciner contre le typhus et le coryza qui sont des maladies que vous pouvez amener à la maison avec vos chaussures, vos habits. Il n’aura besoin de traitement antipuces qu’à la demande, les vermifuges ne seront à faire qu’une fois par an. Un chat qui sort, même juste dans votre jardin aura besoin de vaccins plus complets, devra être traité contre les puces régulièrement tout au long de l’année, devra être vermifugé tous les trois mois. Il sera plus à risque de développer des abcès, avoir des plaies. Nous vous recommandons de rentrer vos chats le soir et de les garder en sécurité pour la nuit à l’intérieur : en effet, les bagarres entre chats, les accidents avec les voitures ont plus de probabilités d’arriver la nuit. Pour les chiens, un chien sportif ( canicross, chasse, agility) n’aura pas besoin les mêmes besoins nutritionnels qu’un chien de canapé. Les soins à apporter à ses articulations, à ses pattes seront différents. </h3>
        </div>
    )
}