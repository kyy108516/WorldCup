import {Component, OnInit} from '@angular/core';
import {TeamService} from '../team.service';
import {Team} from '../team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams: Team[];

  constructor(private teamService: TeamService) {
  }

  ngOnInit() {
    this.getAllTeams();
  }

  getAllTeams(): void {
    this.teamService.getAllTeamsWithResults().subscribe(teams => this.teams = teams);
  }
}
