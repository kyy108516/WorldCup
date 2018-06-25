import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  constructor(private http: HttpClient) {
  }

  getNews(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Ocp-Apim-Subscription-Key': '51f659738e424262a782be947326108d'
      }),
      params: {
        'q': 'world+cup+2018'
      }
    };
    return this.http.get<any>('https://api.cognitive.microsoft.com/bing/v7.0/news/search', httpOptions);
  }
}
