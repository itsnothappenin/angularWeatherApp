import { Component, Output, EventEmitter } from '@angular/core';
import { WeatherDataService } from '../services/weatherdata.service';
import { Weather } from '../app.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output() onSelection:
    EventEmitter<Weather> = new EventEmitter<Weather>()

  img: string = '';

  constructor(private WeatherDataService: WeatherDataService) { }
  weatherData = new Weather();


  latitude: string = '';
  longitude: string = '';

  ngOnInit(): void {
    this.getWeatherReport(this.latitude, this.longitude);
  }

  onSubmit() {
    this.getWeatherReport(this.latitude, this.longitude);
    this.latitude = '';
    this.longitude = '';
  }

  getWeatherCode(weatherData: Weather) {
    let currentWeatherInfo = weatherData.current_weather
    if (currentWeatherInfo.weathercode === 0) {
      this.img = "clear.png"
    } else if (currentWeatherInfo.weathercode === 1) {
      this.img = "mainlyClear.png"
    } else if (currentWeatherInfo.weathercode === 2) {
      this.img = "partlyCloudy.png"
    } else if (currentWeatherInfo.weathercode === 3) {
      this.img = "overcast.png"
    } else if (currentWeatherInfo.weathercode === 45) {
      this.img = "fog1.png"
    } else if (currentWeatherInfo.weathercode === 48) {
      this.img = "fog2.png"
    } else if (currentWeatherInfo.weathercode === 51) {
      this.img = "drizzle1.png"
    } else if (currentWeatherInfo.weathercode === 53) {
      this.img = "drizzle2.png"
    } else if (currentWeatherInfo.weathercode === 55) {
      this.img = "drizzle3.png"
    } else if (currentWeatherInfo.weathercode === 56) {
      this.img = "drizzleFreezing1.png"
    } else if (currentWeatherInfo.weathercode === 57) {
      this.img = "drizzleFreezing2.png"
    } else if (currentWeatherInfo.weathercode === 61) {
      this.img = "rain1.png"
    } else if (currentWeatherInfo.weathercode === 63) {
      this.img = "rain2.png"
    } else if (currentWeatherInfo.weathercode === 65) {
      this.img = "rain3.png"
    } else if (currentWeatherInfo.weathercode === 66) {
      this.img = "rainFreezing1.png"
    } else if (currentWeatherInfo.weathercode === 67) {
      this.img = "rainFreezing2.png"
    } else if (currentWeatherInfo.weathercode === 71) {
      this.img = "snow1.png"
    } else if (currentWeatherInfo.weathercode === 73) {
      this.img = "snow2.png"
    } else if (currentWeatherInfo.weathercode === 75) {
      this.img = "snow3.png"
    } else if (currentWeatherInfo.weathercode === 77) {
      this.img = "snowGrains.png"
    } else if (currentWeatherInfo.weathercode === 80) {
      this.img = "rainShower1.png"
    } else if (currentWeatherInfo.weathercode === 81) {
      this.img = "rainShower2.png"
    } else if (currentWeatherInfo.weathercode === 82) {
      this.img = "rainShower3.png"
    } else if (currentWeatherInfo.weathercode === 85) {
      this.img = "snowShower1.png"
    } else if (currentWeatherInfo.weathercode === 86) {
      this.img = "snowShower2.png"
    } else if (currentWeatherInfo.weathercode === 95) {
      this.img = "thunderstorm2.png"
    } else if (currentWeatherInfo.weathercode === 96) {
      this.img = "hail1.png"
    } else if (currentWeatherInfo.weathercode === 99) {
      this.img = "hail2.png"
    }
    this.WeatherDataService.set(this.img);
  }

  getWeatherReport(latitude: string, longitude: string) {
    this.WeatherDataService.getWeatherInformation(latitude, longitude)
      .subscribe({
        next: (response) => {
          this.weatherData = response;
          console.log(response);
          this.getWeatherCode(this.weatherData)
          this.onSelection.emit(this.weatherData)
        }
      })
  }
}


