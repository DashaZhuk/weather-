export interface Weather {
   city: {
      coord: {
         lat: number,
         lon: number
      }
      country: string
      id: number,
      name: string,
      population: number
      sunrise: number
      sunset: number
      timezone: number
   },
   cnt: number,
   cod: string,
   list: {
      clouds: {
         all: number
      }
      dt: number
      dt_txt: string
      main: {
         temp: number,
         feels_like: number,
         temp_min: number,
         temp_max: number,
         pressure: number,
         sea_level: number
      }
      pop: number,
      snow: {
         "3h": number
      }
      sys: {
         pod: string
      }
      visibility: number,
      weather: {
         id: number,
         main: string,
         description: string,
         icon: string,
      }[]
      wind: {
         speed: number,
         deg: number,
         gust: number
      }
   }[],
   message: number
}

