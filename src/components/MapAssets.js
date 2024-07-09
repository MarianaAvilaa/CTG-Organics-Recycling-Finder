import {Icon} from "leaflet";
import dropOff from "../assets/dropOffIcon.png";
import locationMarker from "../assets/locationIcon.png";

export const dropOffIcon = new Icon({
  iconUrl: dropOff,
  iconAnchor: [0, 55],
  popupAnchor: [10, -44],
  iconSize: [15, 25],
})

export const locationIcon = new Icon({
  iconUrl: locationMarker,
  iconAnchor: [10, 50],
  popupAnchor: [10, -40],
  iconSize: [40, 50],
})