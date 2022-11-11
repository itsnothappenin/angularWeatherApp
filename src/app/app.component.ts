import { Component } from '@angular/core';

export class Weather {
  current_weather: {
    temperature: number
    time: string
    winddirection: number
    windspeed: number
    weathercode: number
  }
  timezone: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather App';
}
