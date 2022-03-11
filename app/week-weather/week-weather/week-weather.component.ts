import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Weather } from 'src/app/shared/model/weather.model';
import { WeatherService } from 'src/app/shared/service/weather.service';

@Component({
   selector: 'app-week-weather',
   templateUrl: './week-weather.component.html',
   styleUrls: ['./week-weather.component.scss']
})
export class WeekWeatherComponent implements OnInit {
   list: any[] = [];
   data!: Weather;
   isWeatherLoading!: boolean;
   @Input() city!: string;

   constructor(private openWeatherService: WeatherService) { }

   ngOnInit(): void {
   }

   ngOnChanges(changes: SimpleChanges) {
      if (this.city) {
         this.getWeekWeather();
      }
   }

   public getWeekWeather(): void {
      this.isWeatherLoading = true;
      this.openWeatherService.getWeather(this.city).subscribe((data: Weather) => {
         this.data = data;
         this.list = this.data.list.filter(weather => weather.dt_txt.indexOf("15:00") > 0);
         this.isWeatherLoading = false;
         console.log(this.list);
      });
   }

   getUrlForImg(icon: string): string {
      return `https://openweathermap.org/img/w/${icon}.png`;
   }

   getTempreture(temp: number): number {
      return (Math.round(temp));
   }

   getWeekDays(currentDate: string){
      let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return weekDays[new Date(currentDate).getDay()];
   }

}
