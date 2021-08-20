export interface WeatherSearch {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  timezone: number;
  weather: WeatherSky[];
  visibility: number;
  wind: {
    speed: number;
    def: number;
    gust: number;
  };
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: 2;
  };
}
export interface WeatherSky {
  description: "clear sky";
  icon: "01d";
  id: 800;
  main: "Clear";
}
