import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/shared/service/weather.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

   data!: any;

  constructor(private openWeatherService: WeatherService) { }

  ngOnInit(): void {
  }

  public getMapWeather(): void {
   this.openWeatherService.getMap().subscribe((data: any) => {
      this.data = data;
      console.log(data);
   });
}

}
