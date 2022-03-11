import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Weather } from 'src/app/shared/model/weather.model';
import { WeatherService } from 'src/app/shared/service/weather.service';

@Component({
   selector: 'app-one-day-weather',
   templateUrl: './one-day-weather.component.html',
   styleUrls: ['./one-day-weather.component.scss']
})
export class OneDayWeatherComponent implements OnInit {
   list: any[] = [];
   name!: string;
   temp!: number;
   id!: number;
   data!: Weather;
   time!: number;
   isWeatherLoading!: boolean;
   @Input() city!: string;

   @Output() onWeatherSearch: EventEmitter<Weather> = new EventEmitter();

   constructor(private openWeatherService: WeatherService) { }

   ngOnChanges(changes: SimpleChanges) {
      if (this.city) {
         this.getOneDayWeather();
      }
   }

   ngOnInit(): void {
   }

   public getOneDayWeather(): void {
      this.isWeatherLoading = true;
      this.openWeatherService.getWeather(this.city).subscribe((data: Weather) => {
         for (let i = 1; i <= 5; i++) {
            this.list.push(data.list[i])
         }
         this.data = data;
         this.isWeatherLoading = false;
         // this.onWeatherSearch.emit(this.data);
         console.log(data);
      });
   }

   getUrlForImg(icon: string): string {
      return `https://openweathermap.org/img/w/${icon}.png`;
   }

   getTempreture(temp: number): number {
      return (Math.round(temp));
   }
}
