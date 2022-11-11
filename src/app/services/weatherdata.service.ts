import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Weather } from '../app.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  imageSubject = new BehaviorSubject<string>("")

  constructor(private httpClient: HttpClient) { }

  set(img: string) {
    this.imageSubject.next(img)
  }

  get() {
    return this.imageSubject.asObservable()
  }

  getWeatherInformation(latitude: string, longitude: string): Observable<Weather> {
    return this.httpClient.get<Weather>('https://api.open-meteo.com/v1/forecast?', {
      params: new HttpParams()
        .set('latitude', latitude)
        .set('longitude', longitude)
        .set('current_weather', 'true')
        .set('timezone', 'auto')
    })
  }
}
