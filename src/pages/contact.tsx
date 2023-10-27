import "../index.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { divIcon, point } from "leaflet";

// custom cluster icon
const createClusterCustomIcon = function (cluster: { getChildCount: () => any; }) {
  return divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};

export default function Contact() {
  return (
    <div>
        <h1>CONTACT</h1>
        <h2>address : 1521 av de Bordeaux</h2>
        <a href="https://maps.app.goo.gl/Rk5xMMsNYZe9suKK9">chemin google</a>
        <MapContainer center={[44.8096, -0.76]} zoom={13}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

        <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createClusterCustomIcon}>
            <Marker position={[44.8096, -0.7624]}/>
        </MarkerClusterGroup>
        </MapContainer>
    </div>
  );
}
