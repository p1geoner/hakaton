import makeRequest from '@/API/makeRequest';

import { ReadResumeEventResponse } from '@/types/api/IResumeResponse';

class ResumeEventService {
  createEvent(event: FormData) {
    return makeRequest<ReadResumeEventResponse>({
      url: 'api/resume_events',
      method: 'post',
      authToken: true,
      data: event,
    });
  }

  updateEvent(eventId: number, event: FormData) {
    return makeRequest<ReadResumeEventResponse>({
      url: `api/resume_events/${eventId}`,
      method: 'post',
      authToken: true,
      data: event,
    });
  }

  deleteEvent(eventId: number) {
    return makeRequest<void>({
      url: `api/resume_events/${eventId}`,
      method: 'delete',
      authToken: true,
    });
  }
}

export default new ResumeEventService();
