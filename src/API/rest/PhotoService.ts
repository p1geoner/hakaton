import makeRequest from '@/API/makeRequest';

class PhotoService {
  updatePhoto(photo: FormData) {
    return makeRequest<void>({
      url: 'api/profile/photo',
      method: 'post',
      authToken: true,
      data: photo,
    });
  }

  deletePhoto() {
    return makeRequest<void>({
      url: 'api/profile/photo',
      method: 'delete',
      authToken: true,
    });
  }
}

export default new PhotoService();
