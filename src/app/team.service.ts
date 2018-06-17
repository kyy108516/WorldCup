import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Team} from './team';
import {Group} from './group';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private url = 'http://worldcup.sfg.io/team/';

  constructor(private http: HttpClient) {
  }

  getAllTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.url}/results`);
  }

  getGroupResult(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.url}/group_results`);
  }
}
