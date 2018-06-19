import {Component, OnInit} from '@angular/core';
import {MatchService} from '../match.service';
import {Match} from '../match';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {
  match: Match;

  constructor(private matchService: MatchService) {
  }

  ngOnInit() {
    this.getMatch();
  }

  getMatch() {
    this.matchService.match.subscribe(match => this.match = match);
  }
}
