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

  constructor(private matchService: MatchService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getMatch();
  }

  getMatch() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === 'current') {
      this.matchService.getCurrentMatches().subscribe(match => this.match = match[0]);
    } else {
      this.matchService.getMatchById(id).subscribe(match => this.match = match[0]);
    }
  }
}
