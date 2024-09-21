import makeRequest from '@/API/makeRequest';

import {
  GetCalendarEventsResponse,
  GetMainCalendarEventsResponse,
} from '@/types/api/ICalendarEventResponse';

class CalendarEventService {
  fetchMainCalendarEvents() {
    return makeRequest<GetMainCalendarEventsResponse>({
      url: 'api/main_calendar_events',
      authToken: true,
    });
  }

  fetchCalendarEvents(query?: string) {
    return makeRequest<GetCalendarEventsResponse>({
      url: `api/calendar_events${query}`,
      authToken: true,
    });
  }

  fetchSignUpToEvent(id: number) {
    return makeRequest<void>({
      url: `api/profile_calendar_events/${id}`,
      method: 'post',
      authToken: true,
    });
  }

  fetchLogOutEvent(id: number) {
    return makeRequest<void>({
      url: `api/profile_calendar_events/${id}`,
      method: 'delete',
      authToken: true,
    });
  }
}

export default new CalendarEventService();
