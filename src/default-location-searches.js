import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-singapore',
    predictionPlace: {
      address: 'Singapore',
      bounds: new LatLngBounds(new LatLng(1.47792089869855, 104.406654862095), new LatLng(1.13085662018305, 103.574203823519)),
    },
  },
  {
    id: 'default-malaysia',
    predictionPlace: {
      address: 'Malaysia',
      bounds: new LatLngBounds(new LatLng(7.55668193461427, 119.375409992174), new LatLng(0.85382000305218, 99.5404600007008)),
    },
  },
  {
    id: 'default-Indonesia',
    predictionPlace: {
      address: 'Indonesia',
      bounds: new LatLngBounds(new LatLng(6.18124598740633, 141.022151999997), new LatLng(-11.0917989658297, 94.9073060005655)),
    },
  },
  {
    id: 'default-HK',
    predictionPlace: {
      address: 'HongKong',
      bounds: new LatLngBounds(new LatLng(22.5735499907553, 114.504522269355), new LatLng(22.1343230695576, 113.773493896307)),
    },
  },
  {
    id: 'default-CN',
    predictionPlace: {
      address: 'China',
      bounds: new LatLngBounds(new LatLng(53.560711991333, 134.77281099468), new LatLng(18.0608510186141, 73.4998560298202)),
    },
  },
];
