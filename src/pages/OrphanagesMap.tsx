import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita =)</p>
        </header>

        <footer>
          <strong>São José do Rio Preto</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-20.8097113, -49.3946108]}
        zoom={13}
        style={{ width: '100%', height: '100%' }}>
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* MapBox: <TileLayer url=`https://api.mapbox.com/styles/v1/mapbox/light-v10/tile/256/{z}/{x}/{y}@2x?access_token=${process.env.NOME_VARIAVEL_TOEKN}` */}
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;