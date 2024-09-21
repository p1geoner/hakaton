import makeRequest from '@/API/makeRequest';

import { GetFavoriteResponse } from '@/types/api/IFavoriteResponse';
import { TFavoriteItemResponse } from '@/types/entities/IFavorite';

class FavoriteService {
  favoriteUrl = 'api/favorites';

  async fetchFavoriteList(query: string) {
    const url = query ? `api/favorites${query}` : 'api/favorites';

    return makeRequest<GetFavoriteResponse>({
      url,
      authToken: true,
    });
  }

  createFavorite(favorite: TFavoriteItemResponse) {
    return makeRequest<void>({
      url: this.favoriteUrl,
      method: 'post',
      data: favorite,
      authToken: true,
    });
  }

  deleteFavorite(favorite: TFavoriteItemResponse) {
    return makeRequest<void>({
      url: this.favoriteUrl,
      method: 'delete',
      data: favorite,
      authToken: true,
    });
  }
}

export default new FavoriteService();
