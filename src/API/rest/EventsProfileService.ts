import makeRequest from '@/API/makeRequest';

import { GetEventsProfile } from '@/types/api/IEventsProfileResponse';

class EventsProfileService {
  fetchEventsProfile(query: string) {
    return makeRequest<GetEventsProfile>({
      url: `api/profile_calendar_events?${query}`,
      authToken: true,
    });
  }

  signUpForEventProfile(id: number) {
    return makeRequest<void>({
      url: `api/profile_calendar_events/${id}`,
      method: 'POST',
      authToken: true,
    });
  }

  cancelEventProfile(id: number) {
    return makeRequest<void>({
      url: `api/profile_calendar_events/${id}`,
      method: 'DELETE',
      authToken: true,
    });
  }
}

export default new EventsProfileService();
