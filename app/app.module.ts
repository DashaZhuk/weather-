import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { OneDayWeatherComponent } from './weather-search/one-day-weather/one-day-weather.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { WeekWeatherComponent } from './week-weather/week-weather/week-weather.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MapComponent } from './map/map.component';

@NgModule({
   declarations: [
      AppComponent,
      OneDayWeatherComponent,
      WeekWeatherComponent,
      MapComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      MatInputModule,
      FormsModule,
      MatButtonModule,
      MatToolbarModule,
      MatCardModule,
      MatProgressSpinnerModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
