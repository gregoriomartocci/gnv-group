import { Fragment, useEffect } from "react";
import L from "leaflet";
import styles from "./maps.module.css";

import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Maps = ({ children, attribution, ...rest }) => {
  useEffect(() => {
    (async function init() {
      delete L.Icon.Default.prototype._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: iconRetinaUrl.src,
        iconUrl: iconUrl.src,
        shadowUrl: shadowUrl.src,
      });
    })();
  }, []);

  return (
    <MapContainer className={styles.container} {...rest}>
      <TileLayer
        attribution={attribution}
        url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
      />
    </MapContainer>
  );
};

export default Maps;
