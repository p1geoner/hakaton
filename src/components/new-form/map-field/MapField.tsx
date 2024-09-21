'use client';

import styles from './MapField.module.scss';

import './MapField.scss';
import clsx from 'clsx';
import { divIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';

import MapService from '@/API/rest/MapService';

import { MapProps } from './types';

import IcMarker from '@/assets/icons/general/ic_marker.svg';

const MapField: FC<MapProps> = ({
  zoom = 13,
  defaultCoords,
  mapsStyles = '',
  onMarkerChange,
}) => {
  const [coords, setCoords] = useState<[number, number]>([null, null]);
  const markerRef = useRef(null);
  const mapRef = useRef(null);
  const iconMarkup = renderToStaticMarkup(<IcMarker />);

  const customMarkerIcon = divIcon({
    html: iconMarkup,
    iconAnchor: [0, 0],
  });

  useEffect(() => {
    setCoords(defaultCoords);
    if (!defaultCoords.includes(null) && mapRef.current !== null) {
      mapRef.current.flyTo(defaultCoords, 15, { duration: 0.3 });
    }
  }, [defaultCoords]);

  useEffect(() => {
    const getAddress = async () => {
      const response = await MapService.getAddressByCoords(coords);
      if ('data' in response) {
        onMarkerChange(response.data.display_name, coords[0], coords[1]);
      }
    };
    if (defaultCoords !== coords && !coords.includes(null)) {
      getAddress();
    }
  }, [coords]);

  const DynamicMarker = () => {
    const map = useMapEvents({
      click(e) {
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;
        setCoords([lat, lng]);
      },
    });
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          if (marker !== null) {
            const lat = marker.getLatLng().lat;
            const lng = marker.getLatLng().lng;
            setCoords([lat, lng]);
          }
        },
      }),
      []
    );

    if (coords.includes(null)) {
      return null;
    }

    return (
      <Marker
        eventHandlers={eventHandlers}
        ref={markerRef}
        draggable={true}
        position={coords}
        icon={customMarkerIcon}
      />
    );
  };

  return (
    <MapContainer
      ref={mapRef}
      center={defaultCoords[0] !== null ? defaultCoords : [46.9641, 142.7285]}
      zoom={zoom}
      className={clsx(mapsStyles, styles.map)}
      zoomControl={false}
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <DynamicMarker />
    </MapContainer>
  );
};

export default MapField;
