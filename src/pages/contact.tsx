import "../index.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { divIcon, point } from "leaflet";
import MenuListComposition from "../layout/button";
import styles from './contact.module.scss'
import { LatLngExpression } from "leaflet";
import bgUrl from '../assets/image.jpg'

const createClusterCustomIcon = function (cluster: { getChildCount: () => any; }) {
  return divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};

export default function Contact() {
  const defaultPosition: LatLngExpression = [44.8096, -0.7624];
  return (
    <div className={styles.contact}>
      <div className={styles.header} style={{ backgroundImage: `url(${bgUrl})` }}>
      <MenuListComposition/>
        <h1>CONTACT</h1>
        <h2>addresse : 1521 av de Bordeaux</h2>
        <h2>email: vetsurjalles@gmail.com</h2>
        <h2>numéro: +33 05 33 09 08 00</h2>
        <MapContainer center={[44.8096, -0.7624]} zoom={13}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

        <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createClusterCustomIcon}>
            <Marker position={defaultPosition}/>
        </MarkerClusterGroup>
        </MapContainer>
        <a className={styles.lien} href="https://maps.app.goo.gl/Rk5xMMsNYZe9suKK9">google map</a>
        <a className={styles.lien} href="https://www.pilepoils.vet/veterinaires/saint-jean-dillac/506939-1/vet-sur-jalles">prise de rendez-vous en ligne</a>
        </div>
    </div>
  );
}
