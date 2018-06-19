import {Component, OnInit} from '@angular/core';
import {TeamService} from '../team.service';
import {Team} from '../team';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams: Team[];

  constructor(private teamService: TeamService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.getAllTeams();
        }
      });
  }

  getAllTeams(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === 'all') {
      this.teamService.getAllTeamsWithResults()
        .subscribe(teams => this.teams = teams);
    } else {
      this.teamService.getGroupResult()
        .subscribe(teams => this.teams = teams[id].group.teams.map(it => it.team));
    }
  }
}
