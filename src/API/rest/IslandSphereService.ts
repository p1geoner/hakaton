import makeRequest from '@/API/makeRequest';

import {
  GetIslandSphereByNameResponse,
  GetIslandSpheresResponse,
} from '@/types/api/IIslandSphereResponse';

class IslandSphereService {
  fetchIslandSpheres() {
    return makeRequest<GetIslandSpheresResponse>({
      url: 'api/island_spheres',
      authToken: true,
    });
  }

  fetchIslandSphereByName(name?: string) {
    return makeRequest<GetIslandSphereByNameResponse>({
      url: `api/island_sphere/search?name=${name}`,
      authToken: true,
    });
  }
}

export default new IslandSphereService();
