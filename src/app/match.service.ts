import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Match} from './match';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private url = 'http://worldcup.sfg.io/';

  constructor(private http: HttpClient) {
  }

  getAllMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.url}/matches/?by_date=ASC`);
  }

  getCurrentMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.url}/matches/current`);
  }

  getMatchesByCountry(code: string): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.url}/matches/country?fifa_code=${code}`);
  }
}
