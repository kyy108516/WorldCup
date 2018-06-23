import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Match} from './match';
import {HttpClient} from '@angular/common/http';
import {shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  allMatches = this.getAllMatches().pipe(shareReplay());
  private url = 'https://worldcup.sfg.io/matches/';

  constructor(private http: HttpClient) {
    this.allMatches = this.getAllMatches().pipe(shareReplay());
  }

  getMatchesByDate(date: string): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.url}?start_date=${date}&details=false`);
  }

  getAllMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(this.url);
  }

  getCurrentMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.url}current`);
  }

  getMatchesByCountry(code: string): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.url}country?fifa_code=${code}&details=false`);
  }

  getMatchById(code: string): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.url}${code}`);
  }
}
