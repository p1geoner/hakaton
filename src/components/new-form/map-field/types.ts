export type MapProps = {
  zoom?: number;
  defaultCoords: [number, number];
  mapsStyles?: string;
  onMarkerChange: (
    value: string,
    lat: number | null,
    lng: number | null
  ) => void;
};
