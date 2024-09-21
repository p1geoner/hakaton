import makeRequest from '@/API/makeRequest';

import {
  GetEventPlaceResponse,
  GetEventPlacesResponse,
} from '@/types/entities/IEventPlace';

class EventPlaceService {
  fetchEventPlaces(isIsland?: boolean) {
    return makeRequest<GetEventPlacesResponse>({
      url: `api/event_places${isIsland && '?is_islands=1'}`,
    });
  }
  fetchSearchEventPlaces(query: string, isIsland?: boolean) {
    return makeRequest<GetEventPlacesResponse>({
      url: isIsland
        ? `api/event_places?name=${query}&is_islands=1`
        : `api/event_places?name=${query}`,
    });
  }
  fetchEventPlace(id: number) {
    return makeRequest<GetEventPlaceResponse>({
      url: `api/event_places/${id}`,
    });
  }
}

export default new EventPlaceService();
