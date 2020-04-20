import React, { useState, useEffect } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const CustomSkinMap = withScriptjs(
  withGoogleMap(() => {
    const [lat, setlat] = useState(0);
    const [lng, setlng] = useState(0);
    const [zoom, setzoom] = useState(5);

    const showCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setlat(position.coords.latitude);
          setlng(position.coords.longitude);
          setzoom(15);
          console.log(position.coords.latitude,position.coords.longitude);
        });
      }
    };

    useEffect(() => {
    showCurrentLocation();
  }, []);

    return (
      <GoogleMap
        defaultZoom={5}
        defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
        center={{ lat: lat, lng: lng }}
        zoom={zoom}
        defaultOptions={{
          scrollwheel: false,
          zoomControl: true,
          styles: [
            {
              featureType: "water",
              stylers: [
                { saturation: 43 },
                { lightness: -11 },
                { hue: "#0088ff" },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry.fill",
              stylers: [
                { hue: "#ff0000" },
                { saturation: -100 },
                { lightness: 99 },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#808080" }, { lightness: 54 }],
            },
            {
              featureType: "landscape.man_made",
              elementType: "geometry.fill",
              stylers: [{ color: "#ece2d9" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry.fill",
              stylers: [{ color: "#ccdca1" }],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#767676" }],
            },
            {
              featureType: "road",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#ffffff" }],
            },
            { featureType: "poi", stylers: [{ visibility: "off" }] },
            {
              featureType: "landscape.natural",
              elementType: "geometry.fill",
              stylers: [{ visibility: "on" }, { color: "#b8cb93" }],
            },
            { featureType: "poi.park", stylers: [{ visibility: "on" }] },
            {
              featureType: "poi.sports_complex",
              stylers: [{ visibility: "on" }],
            },
            { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
            {
              featureType: "poi.business",
              stylers: [{ visibility: "simplified" }],
            },
          ],
        }}
      >
        <Marker position={{ lat: lat, lng: lng }} />
      </GoogleMap>
    );
  })
);

export default function Maps() {
  return (
    <CustomSkinMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA1h_cyazZLo1DExB0h0B2JBuOfv-yFtsM"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}
