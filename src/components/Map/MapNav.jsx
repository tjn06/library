import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import markerIcon from '../../assets/markerIcon.png'
import styled from 'styled-components';



const Container = styled(MapContainer)`
    z-index: 0;
    /* position: fixed; */
    /* width: 100%;
    height:100%; */
    /* width: 400px;
    height:400px; */

    /* top:0px; */
    margin: auto;
    border: 1px solid #888888;
    border-radius: 10px;
    /* -3px 3px 10px -2px rgba(0, 0, 0, 0.253) */

    position: ${props => props.position ?  props.position :  'block'};
    top: ${props => props.topPosition ?  props.topPosition :  'unset'};
    width: ${props => props.width ?  props.width : '400px'};  
    height:${props => props.height ?  props.height : '400px'};
    border-radius:${props => props.radius ?  props.radius : '10px'};
    border: ${props => props.border ?  props.border :  '1.5px solid rgb(0, 0, 0)'}; 
    box-shadow: ${props => props.shadow ?  props.shadow :  'unset'};

    
    @media (max-width: 686px){
      width: 300px;
      height:300px;
    }

    .leaflet-control-zoom-in{
      color: white;
      background-color:#b9b9b9;
      

      :hover{
        color: #b9b9b9;
        background-color: white;
      }
    }

    .leaflet-control-zoom-out{
      color: white;
      background-color: #b9b9b9;

      :hover{
        color:#b9b9b9;
        background-color: white;
      }
    }
`
const PopUP = styled(Popup)`
      .leaflet-popup-content-wrapper, .leaflet-popup-tip{
        background-color: #e9e9e9;
        border: 2px solid #777777;
      }
 
`
const Info = styled.div`
  color: black;
  font-family: 'Rokkitt', serif;
  font-weight: 600;
`
const Hide = styled.div`
  width: 100px;
  height: 10px;
  background-color: black;
`

export default function MapNav({position, topPosition, width, height, radius, border, shadow}) {

  const teatIcon = new L.icon({
    iconUrl: markerIcon,
    iconSize: [17, 25],
  })

 

  return (
    <div>
      <Container center={[57.690301, 11.9084715]} zoom={15}
       position={position} topPosition={topPosition} width={width} height={height} radius={radius} border={border} shadow={shadow} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[57.690301, 11.908471]} icon={teatIcon} >
      <Hide></Hide>
      <PopUP >
        <Info>
          <h1>Pizzeria Tobias</h1>
          <span>Tele: <a href="tel:0707-123456">0707-123456</a></span><br />
          <span>Mejl: <a href="cool@gmail.se">cool@gmail.se</a></span><br />
          <span>Adress: Klippan 1e</span>
        </Info>
        </PopUP>
        </Marker>
      </Container>
    </div>
  )
}
