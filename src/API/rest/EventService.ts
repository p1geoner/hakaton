import makeRequest from '@/API/makeRequest';

import { GetEventsResponse } from '@/types/api/IEventResponse';

class EventService {
  fetchEvents() {
    return makeRequest<GetEventsResponse>({
      url: 'api/events',
      authToken: true,
    });
  }
}

export default new EventService();
