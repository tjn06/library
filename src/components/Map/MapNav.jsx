import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import markerIcon from '../../assets/markerIcon.png'
import styled from 'styled-components';



const Container = styled(MapContainer)`
    z-index: 0;
    width: 400px;
    height:400px;
    margin: auto;
    border: 3px solid #888888;
    border-radius: 10px;

    .leaflet-control-zoom-in{
      color: white;
      background-color:green;
      

      :hover{
        color: green;
        background-color: white;
      }
    }

    .leaflet-control-zoom-out{
      color: white;
      background-color: green;

      :hover{
        color: green;
        background-color: white;
      }
    }
`
const PopUP = styled(Popup)`
      .leaflet-popup-content-wrapper, .leaflet-popup-tip{
        background-color: #bdbdbd;
        border: 2px solid green;
      }
 
`
const Info = styled.div`
  color: black;
`

export default function MapNav() {

  const teatIcon = new L.icon({
    iconUrl: markerIcon,
    iconSize: [25, 25],
  })

 

  return (
    <div>
      <Container center={[57.690301, 11.9084715]} zoom={15}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[57.690301, 11.908471]} icon={teatIcon} >
      
      <PopUP >
        <Info>
          <h1>Pizzeria Tobias</h1>
          <span>Tele: <a href="0707-123456">0707-123456</a></span><br />
          <span>Mejl: <a href="cool@gmail.se">cool@gmail.se</a></span><br />
          <span>Adress: Klippan 1e</span>
        </Info>
        </PopUP>
        </Marker>
      </Container>
    </div>
  )
}
