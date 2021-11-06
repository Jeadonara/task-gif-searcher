import {EMPTY_GIF, GifModel} from '../models/GifModel';
import {GIPHYModel} from './GIPHYModel';
import restClient from '../../common/rest/RestClient';

const BASE_URL = 'https://api.giphy.com/v1/gifs';
const API_KEY = '6laXhlmG5KyH2If4Q9ZlcFAn6O1IgpBb';

class GIPHYService {
  getGifs = async (search: string): Promise<GifModel[]> => {
    return restClient
      .get<{data: GIPHYModel[]}>(`${BASE_URL}/search`, {
        api_key: API_KEY,
        q: search,
      })
      .then(response => {
        const gifs = response.data.map(gif => {
          const model: GifModel = {
            title: gif.title,
            source: gif.images.original.url,
            rating: gif.rating,
            sourceStill: gif.images.fixed_height_small_still.url,
            aspectRatio:
              +gif.images.original.width / +gif.images.original.height,
          };
          return model;
        });
        return Promise.resolve(gifs);
      })
      .catch(error => {
        console.warn(error);

        return Promise.resolve([]);
      });
  };
  getRandomGif = async (): Promise<GifModel> => {
    return restClient
      .get<{data: GIPHYModel}>(`${BASE_URL}/random`, {
        api_key: API_KEY,
      })
      .then(response => {
        const gif = response.data;
        const model: GifModel = {
          title: gif.title,
          source: gif.images.original.url,
          rating: gif.rating,
          sourceStill: gif.images.fixed_height_small_still.url,
          aspectRatio: +gif.images.original.width / +gif.images.original.height,
        };
        return Promise.resolve(model);
      })
      .catch(() => Promise.resolve(EMPTY_GIF));
  };
}

const giphyService = new GIPHYService();

export default giphyService;
