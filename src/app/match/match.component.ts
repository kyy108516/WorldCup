import {Component, OnInit} from '@angular/core';
import {Match} from '../match';
import {MatchService} from '../match.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  tempMatches: Match[];
  matches: Match[];
  loading = true;
  hasMore = true;
  cnt = 5;

  constructor(private matchService: MatchService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(params =>
        this.getAllMatches(params['id'])
      );
  }

  getAllMatches(id: string): void {
    if (id === 'all') {
      this.matchService.allMatches
        .subscribe(matches => {
          this.matches = matches;
          this.loading = false;
          this.tempMatches = this.matches.slice(0, this.cnt);
        });
    } else {
      this.matchService.getMatchesByCountry(id)
        .subscribe(matches => {
          this.matches = matches;
          this.loading = false;
          this.tempMatches = this.matches.slice(0, this.cnt);
        });
    }
  }

  onScroll(): void {
    if (this.loading) {
      return;
    }
    this.loading = true;
    if (this.cnt >= this.matches.length) {
      this.hasMore = false;
      this.loading = false;
      return;
    }
    this.cnt += 5;
    this.tempMatches = this.matches.slice(0, this.cnt);
    this.loading = false;
  }
}
