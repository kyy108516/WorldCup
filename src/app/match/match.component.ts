import {Component, OnInit} from '@angular/core';
import {Match} from '../match';
import {MatchService} from '../match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  matches: Match[];

  constructor(private matchService: MatchService) {
  }

  ngOnInit() {
    this.getAllMatches();
  }

  getAllMatches(): void {
    this.matchService.getAllMatches()
      .subscribe(matches => this.matches = matches);
  }
}
