import axios from 'axios';

class MapService {
  getAddressByCoords(coords) {
    return axios.get(
      `https://nominatim.openstreetmap.org/reverse?lat=${coords[0]}&lon=${coords[1]}&format=json`
    );
  }
}

export default new MapService();
