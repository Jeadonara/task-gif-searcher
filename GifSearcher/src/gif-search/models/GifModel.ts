export interface GifModel {
  title: string;
  source: string;
  rating: string;
  aspectRatio: number;
}
export const EMPTY_GIF_MODEL: GifModel = {
  title: '',
  source: '',
  rating: '',
  aspectRatio: 1,
};
