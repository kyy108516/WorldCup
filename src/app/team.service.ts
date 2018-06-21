import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Team} from './team';
import {Group} from './group';
import {shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  allTeamsWithResults = this.getAllTeamsWithResults().pipe(shareReplay());
  groupResult = this.getGroupResult().pipe(shareReplay());
  private url = 'https://worldcup.sfg.io/teams/';

  constructor(private http: HttpClient) {
  }

  getAllTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.url}`);
  }

  getAllTeamsWithResults(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.url}results`);
  }

  getGroupResult(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.url}group_results`);
  }
}
