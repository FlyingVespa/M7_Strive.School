export interface WeatherSearch {
  dt: number;
  main: WeatherMain;
  weather: WeatherIcon[];
  wind: WeatherWind;
  visibility: number;
  pop: number;
  sys: WeatherSys;
  dt_txt: string;
}
export interface WeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface WeatherSys {
  pod: string;
}

export interface WeatherIcon {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherWind {
  speed: number;
  deg: number;
  gust: number;
}
