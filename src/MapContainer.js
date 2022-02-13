import React from "react";
import { GoogleMap, LoadScript } from "google-maps-react";

function MapContainer() {
  const mapStyles = {
    height: "75vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 28.44923,
    lng: 77.04448,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyC9qhUuTNpLi6Tcj30FBp09ZWI9QGr6UdU">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={8}
        center={defaultCenter}
      />
    </LoadScript>
  );
}

export default MapContainer;
