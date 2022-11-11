import { Component, OnChanges, OnInit } from '@angular/core';
import { Weather } from '../app.component';
import { WeatherDataService } from '../services/weatherdata.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})


export class DisplayComponent implements OnInit, OnChanges {
  img: string = ''

  weatherData: Weather = {
    current_weather: {
      temperature: 0,
      time: '',
      winddirection: 0,
      windspeed: 0,
      weathercode: 0
    },
    timezone: '-'
  }


  ngOnInit(): void {
    this.getImage()

  }

  ngOnChanges(): void {
    this.getImage()

  }

  constructor(private WeatherDataService: WeatherDataService) { }


  update(weatherData: Weather) {
    this.weatherData = weatherData
  }

  getImage() {
    this.WeatherDataService.get().subscribe((res: string) => {
      if (res) {
        this.img = res
      }
    }
    )
  }
}





