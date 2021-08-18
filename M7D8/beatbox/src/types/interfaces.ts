export interface Result {
  id: number;
  title: string;
  duration: number;
  title_short: string;
  artist: {
    name: string;
    link: string;
    picture: string;
  };
  album: {
    title: string;
    cover_big: string;
  };
}
