import MenuListComposition from "../layout/button"
import styles from "./steril.module.scss"
import logoUrl from '../assets/logo.jpg'
import bgUrl from '../assets/image.jpg'
import { Helmet } from "react-helmet-async"

export default function Sterilisation() {
  return (
   <div className={styles.steril}>
      <Helmet>
        <title>stérilisation Vet Sur Jalles</title>
        <meta name="description" content="clinique vétérinaire vet sur jalles à Saint Jean d'Illac. Cette intervention est destinée à empêcher la reproduction. Elle peut être chimique ou chirurgicale. Elle va aussi modifier certains comportements. Les interêts de la stérilisation sont nombreux : d’abord réduire le risque de reproduction ( donc pas de portées non désirée donc moins d’abandon), ensuite il n’y a plus de chaleurs : la chienne n’aura plus de pertes de sang, n’attirera plus tous les mâles du voisinage, les mâles ne partiront plus en goguette à la recherche de l’âme soeur ( donc moins de risque d’accident surtout chez les matous). C’est un excellent moyen de prévention des cancers hormono-dépendants ( tumeurs mammaires, cancers de l’ovaire, des testicules, de la prostate) ainsi que des infections des organes sexuels ( infection de l’utérus, du vagin…)."/>
        <link rel="canonical" href="/Sterilisation" />
      </Helmet>
      <div className={styles.menustick}>
        <MenuListComposition/>
      </div>
      <div className={styles.header} style={{ backgroundImage: `url(${bgUrl})` }}>
       <img src={logoUrl} alt="logo" />
       <h1>STERILISATION</h1>
     </div>
     <div className={styles.trapeze}></div>
     <div className={styles.content}>
       <h3>Cette intervention est destinée à empêcher la reproduction. Elle peut être chimique ou chirurgicale. Elle va aussi modifier certains comportements. Les interêts de la stérilisation sont nombreux : d’abord réduire le risque de reproduction ( donc pas de portées non désirée donc moins d’abandon), ensuite il n’y a plus de chaleurs : la chienne n’aura plus de pertes de sang, n’attirera plus tous les mâles du voisinage, les mâles ne partiront plus en goguette à la recherche de l’âme soeur ( donc moins de risque d’accident surtout chez les matous). C’est un excellent moyen de prévention des cancers hormono-dépendants ( tumeurs mammaires, cancers de l’ovaire, des testicules, de la prostate) ainsi que des infections des organes sexuels ( infection de l’utérus, du vagin…).</h3>
       <h2>1/ La stérilisation chimique</h2>
       <h3>Autrefois, mais il n’y a pas si longtemps, on faisait des injections aux femelles pour supprimer les chaleurs ou on donnait une pilule. Ces traitements étaient efficaces pour la contraception mais ils avaient de nombreux effets secondaires ( risque d’infection de l’utérus, de tumeurs mammaires ou ovariennes,..) ce qui fait que maintenant ils sont totalement déconseillés. On utilise maintenant des implants avec des hormones qui bloquent les hormones sexuelles. Ils présentent peu d’effets secondaires et agissent pendant environ 6 mois. </h3>
       <h2>2/ La stérilisation chirurgicale</h2>
       <h3> Appelée castration chez le mâle et ovariectomie chez la femelle, elle consiste en l’ablation des des testicules ou des ovaires. Elle est définitive. Elle nécessite une anesthésie générale : on se verra donc avant l’intervention pour une visite pré opératoire qui permettra de vérifier l’état de santé de l ‘animal, préciser les risques ( ils sont généralement très faibles mais non inexistants), vous expliquer la procédure. Lors de cette visite, on vous remettra un document de consentement éclairé ainsi qu’un devis qu’il faudra ramener le jour de l’intervention. </h3>
       <h3>Le jour de l’intervention, il faudra que l’animal soit à jeun depuis la veille soir, si possible lavé pour les chiens. On fera avec vous une injection de tranquilisation qui permet de diminuer les doses d’anesthésie et des anti douleur. Puis nous nous occuperons de votre animal. Les points sont en intradermo, donc non visibles et ne nécessitent pas de les enlever. Nous vous rendrons l’animal complètement réveillé et selon les interventions avec un traitement anti douleur ou une collerette. Un contrôle post opératoire sera prévu 5 à 7 jours après l’intervention .</h3>
       <h3>Quand pratiquer cette intervention ? On conseille de le faire le plus tôt possible, vers 5 à 6 mois, avant les premières chaleurs en règle générale ( sauf dans certaines races ou lors de malformation de la vulve) mais c’est une intervention qui peut se pratiquer plus tard aussi sans problèmes.</h3>
       <h3>Quels sont les inconvénients de la stérilisation ? Le principal inconvénient est la prise de poids, elle arrive assez rapidement après l’opération, c’est pourquoi on conseille de peser l’animal un mois après la chirurgie pour pouvoir mettre en place des mesures diététiques et d’hygiène de vie le plus précocement possible.</h3>
       <h3>Est-ce que la stérilisation va changer le comportement de votre animal ? Oui et non. Généralement, les animaux stérilisés sont plus calmes, ont un rayon de promenade moins grand ( surtout chez les chats), fuguent moins. Ils sont moins bagarreurs ( surtout les chats mâles). Mais ce n’est pas la panacée absolue, et castrer un animal agressif sans thérapie comportementale associée est un non sens ! Si vous voulez une stérilisation pour lutter contre un problème comportemental, nous vous conseillons plutôt la stérilisation chimique et, en cas de réussite, alors envisager une chirurgie.</h3>
    </div>
  </div>
  )
}