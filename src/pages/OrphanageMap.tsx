import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'

import 'leaflet/dist/leaflet.css'

import mapMakerImg from '../images/map-maker.svg'

import '../styles/pages/orphanage-map.css'

const mapIcon = Leaflet.icon({
  iconUrl: mapMakerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

function OrfanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMakerImg} alt="Map-maker"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
         
        <footer>
          <strong>Centralidade Do Sequele</strong>
          <span>Luanda</span>
        </footer>
      </aside>


      <Map 
        center={[-8.8834048,13.4873088]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          // url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
        />

        <Marker
          icon={mapIcon} 
          position={[-8.8834048,13.4873088]}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-pop">
            Lar das meninas

            <Link to="">
              <FiArrowRight size={20} color="#FFF" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/" className="create-orphange">
        <FiPlus size={32} color='#fff'/>
      </Link>
    </div>
  )
}

export default OrfanagesMap;