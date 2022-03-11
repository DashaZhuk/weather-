import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../model/weather.model';

const WEATHER_KEY = "dbf3f697d2a83d42e6308db755b5e868";
const WEATHER_API = "http://api.openweathermap.org/data/2.5/forecast";

const MAP_KEY = "dbf3f697d2a83d42e6308db755b5e868";
const MAP_API = "https://tile.openweathermap.org/map";

@Injectable({
   providedIn: 'root'
})
export class WeatherService {

   constructor(private http: HttpClient) { }

   getWeather(city: string): Observable<Weather> {
      return this.http.get<Weather>(`${WEATHER_API}?q=${city}&units=metric&appid=${WEATHER_KEY}`);
   }

   getMap(): any {
      return this.http.get(`${MAP_API}{temp_new}/{z}/{x}/{y}.png?appid=${MAP_KEY}`);
   }

   
}
