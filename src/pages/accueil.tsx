import styles from './accueil.module.scss'
import MenuListComposition from '../layout/button';
import logoUrl from '../assets/logo.jpg'
import bgUrl from '../assets/image.jpg'
import { Helmet } from 'react-helmet-async';
export default function Accueil() {
  const tarifs = [
  {name:"consultation", id:"45€"},
  {name:"radiographie", id:"48€"},
  {name:"castration chat", id:"79€"},
  {name:"castration chien", id:"180€-210€"},
  {name:"ovariectomie chatte", id:"145€"},
  {name:"ovariectomie chienne", id:"295€-345€"}]
  const list_tarif = tarifs.map(tarif =>
    <ul key={tarif.id}>
      <li className={styles.type}>
        {tarif.name} 
      </li>
      <li className={styles.price}>
        {tarif.id}
      </li>
    </ul>
    )
  return (
    <div className={styles.accueil}>
      <Helmet>
        <title>Accueil</title>
        <meta name="description" content="Clinique vétarinaire du Docteur Dominique Filleul."/>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className={styles.menustick}>
        <MenuListComposition/>
      </div>
      <div className={styles.header} style={{ backgroundImage: `url(${bgUrl})` }}>
      <img src={logoUrl} alt="logo" />
      <h1>Bienvenue à la clinique vétérinaire VET SUR JALLES</h1>
      <h1>DR Dominique VENEQUE</h1>
      </div>
      <div className={styles.trapeze}></div>
      <div className={styles.equipe}>
        <h2 id = "equipe">Equipe</h2>
        <h3>DR Dominique VENEQUE</h3>
        <h4>diplomée de l'Ecole Nationale Vétérinaire de Maisons Alfort en 1991.</h4>
      </div>
      <div className={styles.triangle}></div>
      <div className={styles.content}>
        <h2 id = "joindre">Nous Joindre</h2>
        <h3>adresse : 1521 Avenue de Bordeaux 3317 ST Jean d'Illac</h3>
        <h3>tel :+33 05 33 09 08 00</h3>
        <h3>vetsurjalles@gmail.com</h3>
        <a className={styles.lien} href="https://www.pilepoils.vet/veterinaires/saint-jean-dillac/506939-1/vet-sur-jalles">prise de rendez-vous en ligne</a>
        <div className={styles.tarif}>
          <h2 id = "tarif">Tarifs</h2>
          <div className={styles.flexbox}>
            {list_tarif}
          </div>
        </div>
        <div className={styles.CGF1}>
        <h2 id = "CGF">Conditions Générales de Fonctionnement</h2>
        <ul>
        <li>Les présentes conditions sont consultables à l’accueil de notre clinique ainsi que sur le site internet de la clinique. Tout acte effectué sur un patient dans notre établissement est soumis aux conditions générales de fonctionnement que le propriétaire ou détenteur de l’animal déclare accepter sans conditions.</li>
        <li>Notre établissement de soins est classé « clinique vétérinaire pour animaux de compagnie » conformément à l’arrêté du 15 mars 2015 relatifs aux établissements de soins vétérinaires et du cahier des charges publié sur le site internet de l’ordre des vétérinaires www.veterinaire.fr. La clinique est située au 1521 avenue de Bordeaux à saint Jean d’Illac, vous pouvez nous joindre par téléphone au 0533090800 ou par mail à l’adresse vetsurjalles@gmail.com</li>
        <li>La clinique est ouverte au public du lundi au vendredi de 8h30 à 12h30 et de 14h à 18h30. Les consultations ont lieu uniquement sur rendez-vous sauf cas d’urgence. Pour la sécurité de tous, les chiens doivent être tenus en laisse et les chats doivent être dans des cages de transport. Un docteur vétérinaire est présent dans la clinique pendant les heures d’ouverture, sauf cas de force majeure.</li>
        <li>Nous assurons les consultations généralistes, la vente de médicaments ( conformément à la législation sur la pharmacie vétérinaire en vigueur), de produits d’hygiène, d’aliments physiologiques ou diététiques pour les chiens et les chats, nous pratiquons aussi :<br></br>
        - chirurgies de convenance<br></br>
        - chirurgie générale<br></br>
        - chirurgie orthopédique et traumatologique<br></br>
        - analyses sanguines : hématologie ( Procyte One) biochimie ( Catalyst One)<br></br>
        - radiologie numérique : les radios vous sont envoyées par mail<br></br>
        - échographie<br></br>
        - réanimation,hospitalisation<br></br>
        - laser<br></br>
        - anesthésie générale</li>
        <li>Les animaux hospitalisés font l’objet de soins attentifs et réguliers. Vous pouvez rendre visite à votre compagnon en accord avec la charte d’hospitalisation que nous vous ferons signer. En dehors des heures d’ouverture, un vétérinaire se déplace pour assurer les soins, autant que de besoin et au rythme où il le juge nécessaire. En cas de nécessité médicale, si l’animal a besoin de soins de réanimation ou d’une surveillance continue et permanente, un transfert de celui-ci sera organisé vers un établissement de soins vétérinaires ouvert 24h/24. Ce transfert sera assuré par le propriétaire de l’animal en respectant les consignes données par le vétérinaire.</li>
        </ul>
        </div>
        <div className={styles.CGF2}>
        <ul>
        <li>En cas d’urgence en dehors des horaires d’ouverture, la permanence et continuité de soins est assurée selon les conditions suivantes :<br></br>
        - entre 12h30 et 14h, les jours d’ouverture, le vétérinaire assure la permanence téléphonique et recevra les urgences en fonction du degré d’urgence.<br></br>
        - la nuit et les jours de fermeture, l’établissement assurant la continuité des soins est la clinique Aquivet à Eysines, 19 avenue de la forêt.</li>
        <li>Tout acte sur un animal (traitement médicamenteux, anesthésie, chirurgie) comporte des risques dont nous informons le propriétaire. Cette information se fera verbalement dans le cadre de la pratique courante ou par écrit (formulaire de consentement éclairé, charte d’hospitalisation) lors de traitements lourds, de chirurgie et d’hospitalisation.</li>
        <li>Les tarifs des principaux actes sont affichés à l’accueil, ils sont aussi disponibles sur le site internet de la clinique. Pour tout acte pratiqué, le montant vous sera indiqué par oral lors d’une consultation ou par écrit lors d’une chirurgie ou d’une hospitalisation. La nature aléatoire de certains actes, maladies, chirurgies peut rendre difficile l’établissement d’un devis précis. Tout changement ne sera fait qu’avec votre accord. Tout devis signé engage le propriétaire à le régler à la restitution de son animal. Tous nos actes sont soumis à une TVA de 20 %. Une facture (papier ou informatique) sera établie à l’issue de toute transaction. Les honoraires sont payables comptant à lors de la restitution de l’animal, ou en fin de consultation en carte bancaire ou en espèces.</li>
        <li>En cas de litige à caractère déontologique, le propriétaire peut s’adresser au Conseil Régional de l’Ordre des Vétérinaires de la région Nouvelle Aquitaine, 40 rue de Belfort, 33000 Bordeaux (tel: 05 56 24 56 93, adresse électronique : cro.nouvelle-aquitaine@ordre.veterinaire/fr). La clinique est assurée pour sa responsabilité professionnelle par AXA, agence Tartary, 500 avenue du Las, 33127 Saint jean d’Illac.</li>
        <li>Conformément à la loi « Informatique et liberté » du 6 janvier 1978, le client dispose d’un droit d’accès, de modification, de suppression des données le concernant auprès du docteure vétérinaire Vénèque. Tout vétérinaire est soumis au secret professionnel, aucune information recueillie lors de la consultation ne pourra être divulguée sauf commission rogatoire selon les conditions prévues par la loi.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
