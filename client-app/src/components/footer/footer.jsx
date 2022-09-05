import React, { useMemo } from "react";
import style from "./footer.module.css";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { AiTwotonePhone } from "react-icons/ai";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function Footer() {
  const GOOGLE_API = import.meta.env.VITE_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_API,
  });
  console.log(GOOGLE_API);

  function Map() {
    const center = useMemo(() => ({ lat: 44, lng: 88 }), []);
    return (
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName={style.mapContainer}
      >
        <Marker position={center} />
      </GoogleMap>
    );
  }

  return (
    <div className={style.mainFooter}>
      <div id="footer" className={style.footer}>
        <div className={style.titles}>
          <h3>Seguinos</h3>
          <div className={style.icons}>
            <IoLogoInstagram />
            <NavLink to="">Instagram</NavLink>
          </div>
        </div>
        <div className={style.titlesMap}>
          <h3>Ubicación</h3>
          <div className={style.icons}>
            <iframe
              width="600"
              height="200"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=3901%20N%2033rd%20Ave,%20Hollywood,%20FL%2033021,%20EE.%20UU.&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
        <div className={style.titles}>
          <h3>Contacto</h3>
          <div className={style.icons}>
            <IoLogoWhatsapp />
            <p>+5491112345678</p>
          </div>
          <div className={style.icons}>
            <AiTwotonePhone />
            <p>(0222)123456</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
