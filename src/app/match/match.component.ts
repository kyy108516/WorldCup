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
  matches: Match[];

  constructor(private matchService: MatchService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getAllMatches();
  }

  getAllMatches(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === 'all') {
      this.matchService.getAllMatches().subscribe(matches => this.matches = matches);
    } else {
      this.matchService.getMatchesByCountry(id).subscribe(matches => this.matches = matches);
    }
  }
}
