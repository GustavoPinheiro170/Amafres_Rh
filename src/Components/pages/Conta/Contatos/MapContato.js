import React from 'react';
import { MapContainer  as Map, TileLayer , Marker, Popup} from 'react-leaflet';
import MapIcon from '../../../Helper/mapicon';

const MapContato = () => {
    const position = [-23.5828498,-46.6680072];

    const PositionMap = {
        latitude:'-23.5828498',
        longitude : '-46.6680072'
    };

    return  (

    <Map 
    center={position}
    zoom ={16}
    style={{width:'100%' , height:300}}
    
 ><TileLayer
  url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
   />
     <Marker 
     position={position} 
     icon={MapIcon}>
        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">Av. Brigadeiro Luís Antônio, 4843 - Jardim Paulista, São Paulo - SP, 01401-002  |
            <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${PositionMap.latitude},${PositionMap.longitude}`}>  Ver no Google Maps</a>
         </Popup>
        
     </Marker>
   </Map>
    );
}

export default MapContato;