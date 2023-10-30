import styles from './accueil.module.scss'
import MenuListComposition from '../layout/button';

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
      <header>
      <div>
      <MenuListComposition/>
      </div>
      <img src="./src/assets/logo.jpg" alt="logo" />
      <h1>Bienvenue à la clinique vétérinaire VET SUR JALLES</h1>
      <h1>DR Dominique VENEQUE</h1>
      </header>
      <div className={styles.trapeze}></div>
      <div className={styles.equipe}>
        <h2 id = "equipe">Equipe</h2>
        <h3>DR Dominique VENEQUE</h3>
        <h4>diplomée de l'Ecole Nationale Vétérinaire de Maison Alfort en 1981.</h4>
        <div className={styles.triangle}></div>
      </div>
      <div className={styles.content}>
        <h2>Nous Joindre</h2>
        <h3>adresse :1521 Avenue de Bordeaux 3317 ST Jean d'Illac</h3>
        <h3>tel :0982794727</h3>
        <h3>vetsurjalles@gmail.com</h3>
        <div className={styles.tarif}>
          <h2 id = "tarif">Tarifs</h2>
          <div className={styles.flexbox}>
            {list_tarif}
          </div>
        </div>
        <div className={styles.CGF}>
        <h2 id = "CGF">Condition Générale de Fonctionnement</h2>
        <h3>Les présentes conditions sont consultables à l’accueil de notre clinique ainsi que sur le site internet de la clinique. Tout acte effectué sur un patient dans notre établissement est soumis aux conditions générales de fonctionnement que le propriétaire ou détenteur de l’animal déclare accepter sans conditions.</h3>
        <h3>Notre établissement de soins est classé « clinique vétérinaire pour animaux de compagnie » conformément à l’arrêté du 15 mars 2015 relatifs aux établissements de soins vétérinaires et du cahier des charges publié sur le site internet de l’ordre des vétérinaires www.veterinaire.fr. La clinique est située au 1521 avenue de Bordeaux à saint Jean d’Illac, vous pouvez nous joindre par téléphone au 0533090800 ou par mail à l’adresse vetsurjalles@gmail.com</h3>
        <h3>La clinique est ouverte au public du lundi au vendredi de 8h30 à 12h30 et de 14h à 18h30. Les consultations ont lieu uniquement sur rendez-vous sauf cas d’urgence. Pour la sécurité de tous, les chiens doivent être tenus en laisse et les chats doivent être dans des cages de transport. Un docteur vétérinaire est présent dans la clinique pendant les heures d’ouverture, sauf cas de force majeure.</h3>
        <h3>Nous assurons les consultations généralistes, la vente de médicaments ( conformément à la législation sur la pharmacie vétérinaire en vigueur), de produits d’hygiène, d’aliments physiologiques ou diététiques pour les chiens et les chats, nous pratiquons aussi :</h3>
        <h4>- chirurgies de convenance</h4>
        <h4>- chirurgie générale</h4>
        <h4>- chirurgie orthopédique et traumatologique</h4>
        <h4>- analyses sanguines : hématologie ( Procyte One) biochimie ( Catalyst One)</h4>
        <h4>- radiologie numérique : les radios vous sont envoyées par mail</h4>
        <h4>- échographie</h4>
        <h4>- réanimation, hospitalisation</h4>
        <h4>- laser</h4>
        <h4>- anesthésie générale</h4>
        <h3>Les animaux hospitalisés font l’objet de soins attentifs et réguliers. Vous pouvez rendre visite à votre compagnon en accord avec la charte d’hospitalisation que nous vous ferons signer. En dehors des heures d’ouverture, un vétérinaire se déplace pour assurer les soins, autant que de besoin et au rythme où il le juge nécessaire. En cas de nécessité médicale, si l’animal a besoin de soins de réanimation ou d’une surveillance continue et permanente, un transfert de celui-ci sera organisé vers un établissement de soins vétérinaires ouvert 24h/24. Ce transfert sera assuré par le propriétaire de l’animal en respectant les consignes données par le vétérinaire.</h3>
        <h3>En cas d’urgence en dehors des horaires d’ouverture, la permanence et continuité de soins est assurée selon les conditions suivantes :</h3>
        <h4>- entre 12h30 et 14h, les jours d’ouverture, le vétérinaire assure la permanence téléphonique et recevra les urgences en fonction du degré d’urgence.</h4>
        <h4>- la nuit et les jours de fermeture, l’établissement assurant la continuité des soins est la clinique Aquivet à Eysines, 19 avenue de la forêt.</h4>
        <h3>Tout acte sur un animal ( traitement médicamenteux, anesthésie, chirurgie) comporte des risques dont nous informons le propriétaire. Cette information se fera verbalement dans le cadre de la pratique courante ou par écrit ( formulaire de consentement éclairé, charte d’hospitalisation) lors de traitements lourds, de chirurgie et d’hospitalisation.</h3>
        <h3>Les tarifs des principaux actes sont affichés à l’accueil, ils sont aussi disponibles sur le site internet de la clinique. Pour tout acte pratiqué, le montant vous sera indiqué par oral lors d’une consultation ou par écrit lors d’une chirurgie ou d’une hospitalisation. La nature aléatoire de certains actes, maladies, chirurgies peut rendre difficile l’établissement d’un devis précis. Tout changement ne sera fait qu’avec votre accord. Tout devis signé engage le propriétaire à le régler à la restitution de son animal. Tous nos actes sont soumis à une TVA de 20 %. Une facture ( papier ou informatique) sera établie à l’issue de toute transaction. Les honoraires sont payables comptant à lors de la restitution de l’animal, ou en fin de consultation en carte bancaire ou en espèces.</h3>
        <h3>En cas de litige à caractère déontologique, le propriétaire peut s’adresser au Conseil Régional de l’Ordre des Vétérinaires de la région Nouvelle Aquitaine, 40 rue de Belfort, 33000 Bordeaux. La clinique est assurée pour sa responsabilité professionnelle par AXA, agence Tartary, 500 avenue du Las, 33127 Saint jean d’Illac.</h3>
        <h3>Conformément à la loi « Informatique et liberté » du 6 janvier 1978, le client dispose d’un droit d’accès, de modification, de suppression des données le concernant auprès du docteure Vénèque. Tout vétérinaire est soumis au secret professionnel, aucune information recueillie lors de la consultation ne pourra être divulguée sauf commission rogatoire selon les conditions prévues par la loi.</h3>
        </div>
      </div>
    </div>
  );
}
