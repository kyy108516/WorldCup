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
  matchesWithDetails: Match[];

  constructor(private matchService: MatchService) {
  }

  click(match: Match) {
    this.matchService.match.next(match);
  }

  ngOnInit() {
    this.getAllMatches();
    this.getAllMatchesWithDetails();
  }

  getAllMatches(): void {
    this.matchService.getAllMatches()
      .subscribe(matches => this.matches = matches);
  }

  getAllMatchesWithDetails(): void {
    this.matchService.getAllMatchesWithDetails()
      .subscribe(matches => this.matchesWithDetails = matches);
  }
}
