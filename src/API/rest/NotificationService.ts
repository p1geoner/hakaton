import makeRequest from '@/API/makeRequest';

import { GetNotificationsResponse } from '@/types/api/INotificationResponse';
import {
  TApplicantNotificationResponse,
  TEmployerNotificationResponse,
} from '@/types/entities/INotification';

class NotificationService {
  fetchNotifications() {
    return makeRequest<GetNotificationsResponse>({
      url: 'api/notification_settings',
      authToken: true,
    });
  }

  updateNotifications(
    notifications:
      | TEmployerNotificationResponse
      | TApplicantNotificationResponse
  ) {
    return makeRequest<GetNotificationsResponse>({
      url: 'api/notification_settings',
      method: 'post',
      authToken: true,
      data: { notification_settings: notifications },
    });
  }
}

export default new NotificationService();
