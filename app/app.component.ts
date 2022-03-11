import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title = 'weather-app';
   city!: string;
   searchCity!: string;

   oneDayWeather!: boolean;
   weakWeather!: boolean;
   mapWeather!:boolean;

   getOneDayWeather(): void {
      this.oneDayWeather = true;
      this.weakWeather = false;
      this.city = this.searchCity;
   }

   getWeekWeather(): void {
      this.oneDayWeather = false;
      this.weakWeather = true;
      this.city = this.searchCity;
   }

   getMapWeather(): void {
      this.mapWeather = true;
      this.oneDayWeather = false;
      this.weakWeather = false;
      this.city = this.searchCity;
   }
}
