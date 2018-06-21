import {Component, OnInit} from '@angular/core';
import {MatchService} from '../match.service';
import {Match} from '../match';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {
  match: Match;
  flag = false;

  constructor(private matchService: MatchService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.getMatch(params['id'])
    );
  }

  getMatch(id: string) {
    if (id === 'current') {
      this.matchService.getCurrentMatches().subscribe(match => {
        this.match = match[0];
        if (this.match != null) {
          this.flag = true;
        }
      });
    } else {
      this.matchService.getMatchById(id).subscribe(match => {
        this.match = match[0];
        if (this.match != null) {
          this.flag = true;
        }
      });
    }
  }
}
