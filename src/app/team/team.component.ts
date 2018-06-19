import {Component, OnInit} from '@angular/core';
import {TeamService} from '../team.service';
import {Team} from '../team';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams: Team[];
  tempTeams: Team[];
  loading = false;
  hasMore = true;
  cnt = 5;

  constructor(private teamService: TeamService,
              private route: ActivatedRoute,
              private router: Router,
              private msg: NzMessageService) {
  }

  ngOnInit() {
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.getAllTeams();
        }
      });
  }

  onScroll(): void {
    if (this.loading) {
      return;
    }
    this.loading = true;
    if (this.cnt > this.teams.length) {
      this.msg.warning('Infinite List loaded all');
      this.hasMore = false;
      this.loading = false;
      return;
    }
    console.log(this.cnt);
    this.cnt += 5;
    this.tempTeams = this.teams.slice(0, this.cnt);
    this.loading = false;
  }

  getAllTeams(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === 'all') {
      this.teamService.getAllTeamsWithResults()
        .subscribe(teams => {
          this.teams = teams;
          this.tempTeams = this.teams.slice(0, this.cnt);
        });
    } else {
      this.teamService.getGroupResult()
        .subscribe(teams => {
          this.teams = teams[id].group.teams.map(it => it.team);
          this.tempTeams = this.teams.slice(0, this.cnt);
        });
    }
  }
}
