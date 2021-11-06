export interface GIPHYModel {
  title: string;
  rating: string;
  images: {
    original: {
      height: string;
      size: string;
      url: string;
      width: string;
    };
    fixed_height_small_still: {
      height: string;
      size: string;
      url: string;
      width: string;
    };
  };
}
