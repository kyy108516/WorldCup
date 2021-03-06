import {Component, OnInit} from '@angular/core';
import {TeamService} from '../team.service';
import {Team} from '../team';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams: Team[];
  tempTeams: Team[];
  loading = true;
  hasMore = true;
  cnt = 5;
  flag = false;

  constructor(private teamService: TeamService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.getAllTeams(params['id'])
    );
  }

  onScroll(): void {
    if (this.loading) {
      return;
    }
    this.loading = true;
    if (this.cnt >= this.teams.length) {
      this.hasMore = false;
      this.loading = false;
      return;
    }
    this.cnt += 5;
    this.tempTeams = this.teams.slice(0, this.cnt);
    this.loading = false;
  }

  getAllTeams(id: string): void {
    if (id === 'all') {
      this.teamService.allTeamsWithResults
        .subscribe(teams => {
          this.flag = false;
          this.teams = teams;
          this.loading = false;
          this.tempTeams = this.teams.slice(0, this.cnt);
        });
    } else {
      this.teamService.groupResult
        .subscribe(teams => {
          this.flag = true;
          this.loading = false;
          this.tempTeams = teams[id].ordered_teams;
          this.teams = this.tempTeams;
        });
    }
  }
}
