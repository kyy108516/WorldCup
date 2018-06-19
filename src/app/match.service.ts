import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Match} from './match';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private url = 'https://world-cup-json.herokuapp.com/matches/';

  constructor(private http: HttpClient) {
  }

  getAllMatchesWithDetails(): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.url}?details=true`);
  }

  getAllMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(this.url);
  }

  getCurrentMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.url}current`);
  }

  getMatchesByCountry(code: string): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.url}country?fifa_code=${code}`);
  }

  getMatchByid(code: string): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.url}${code}`);
  }
}
