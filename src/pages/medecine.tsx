import MenuListComposition from "../layout/button"
import styles from "./medecine.module.scss"
import logoUrl from '../assets/logo.jpg'
import bgUrl from '../assets/image.jpg'

export default function Medecine() {
    return(
        <div className={styles.medecine}>
          <div className={styles.menustick}>
            <MenuListComposition/>
          </div>
          <div className={styles.header} style={{ backgroundImage: `url(${bgUrl})` }}>
            <img src={logoUrl} alt="logo" />
            <h1>MEDECINE</h1>
        </div>
      <div className={styles.trapeze}></div>
      <div className={styles.content}>
        <h2>LA CONSULTATION VACCINALE</h2>
        <h3>La vaccination, l’examen médical régulier et l’alimentation forment la pierre d’assise de la médecine préventive. Un animal vacciné, examiné régulièrement par le vétérinaire et bien alimenté vivra mieux et plus longtemps. La vaccination permet de prévenir l’apparition de maladies graves, voire mortelles ( par exemple, maladie de carré, hépatite chez le chien, leucose chez le chat. Vous pouvez trouver une présentation des différentes vaccinations possibles dans l’onglet nos conseils.). Lors de cette consultation annuelle, nous allons examiner l’animal ( les yeux, les oreilles et la bouche, le coeur...), cela permet de détecter des pathologies en cours de développement et de prévenir des complications. Il n’est pas rare de découvrir du tartre ou des otites. De même, nous ferons un point avec vous sur les protocoles antiparasitaires externes ( lutte contre les puces, les tiques) et internes ( vermifuges) et voir s’ils sont adaptés à votre animal, ces traitements diffèrent en fonction du poids, du mode de vie, de l’âge de l’animal. En fonction de l’âge de votre animal, on pourra parler d’éducation, de croissance, de stérilisation, de lutte contre l’arthrose... les sujets ne manquent pas ! N’hésitez pas à préparer une liste de questions ou de sujets de discussion, amener son animal chez le vétérinaire peut être stressant pour lui comme pour vous, et on peut oublier. Il est fortement recommandé de faire examiner votre animal au moins une fois par an</h3>
        <h2>LES BILANS DE SANTE</h2>
        <h3>Une année de la vie de votre compagnon représente 5 à 10 ans de la nôtre! la croissance est plus rapide ! A un an, votre animal est l’équivalant d’un ado de 18 ans ! Cette croissance rapide et ce vieillissement hélas plus rapide aussi peuvent poser des problèmes. Pour les jeunes, il se passe plein de choses la première année : le début des vaccinations, la croissance, la puberté, le changement de dents de lait en dents adulte : que de bouleversements ! Il faut aussi décider l’avenir reproducteur de votre animal : stérilisation chimique, chirurgicale ou laisser faire la nature : tous ces sujets sont importants. A un âge avancé, un examen une fois l’an accompagné d’un bilan sanguin nous permettra de détecter rapidement un problème de santé. Un problème détecté tôt est évidemment plus facile à traiter ou à contrôler. Contrôler le coeur, les reins, le fois, les yeux... surveiller le poids. Nous pouvons vous proposer de nombreux moyens pour lutter contre l’arthrose ( phytothérapie, compléments alimentaires, anti-inflammatoires, laser ).</h3>
          </div>
        </div>
    )
}