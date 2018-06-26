import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  constructor(private http: HttpClient) {
  }

  getNews(): Observable<any> {
    const url = 'https://api.cognitive.microsoft.com/bing/v7.0/news/search';

    const httpOptions = {
      headers: {
        'Ocp-Apim-Subscription-Key': '51f659738e424262a782be947326108d'
      },
      params: {
        'q': 'world+cup+2018'
      }
    };
    return this.http.get<any>(url, httpOptions);
  }
}
