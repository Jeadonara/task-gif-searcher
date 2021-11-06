export interface GifModel {
  title: string;
  source: string;
  sourceStill: string;
  rating: string;
  aspectRatio: number;
}
export const EMPTY_GIF: GifModel = {
  title: '',
  source: '',
  sourceStill: '',
  rating: '',
  aspectRatio: 1,
};
export const EMPTY_GIF_COLLECTION: GifModel[] = [];
