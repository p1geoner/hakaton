import makeRequest from '@/API/makeRequest';

import {
  GetContactDetails,
  GetPracticeStudentsContacts,
} from '@/types/api/IContactResponse';
import { TRoles } from '@/types/general/unions';

class ContactsService {
  fetchContacts(role: TRoles, id: number) {
    return makeRequest<GetContactDetails>({
      url: `api/${role}_profiles/${id}/contacts`,
      authToken: true,
    });
  }

  fetchPracticeStudentsContacts(practiceId: number) {
    return makeRequest<GetPracticeStudentsContacts>({
      url: `api/practices/${practiceId}/contacts`,
    });
  }
}

export default new ContactsService();
