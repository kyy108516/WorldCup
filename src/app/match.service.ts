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

  getMatchById(code: string): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.url}${code}`);
  }
}
