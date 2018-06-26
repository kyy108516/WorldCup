import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Team} from '../team';
import {Player} from '../player';
import {TeamService} from '../team.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  team: Team;
  code: string;
  player: Player[];

  constructor(private route: ActivatedRoute,
              private teamService: TeamService) {
  }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    const code = this.route.snapshot.paramMap.get('id');
    this.teamService.allTeamsWithResults
      .subscribe(teams => {
        this.team = teams
          .filter(itt =>
            itt.fifa_code === code)[0];
      });
    const c = this.team.country;
    this.player = DataService.getPlayers()
      .filter(itt =>
        itt.country === c);
  }
}
