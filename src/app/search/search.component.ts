import {Component, OnInit} from '@angular/core';
import {Match} from '../match';
import {MatchService} from '../match.service';
import {format} from 'date-fns';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  selectedValue = new Date();
  matches: Match[];

  constructor(private matchService: MatchService) {
  }

  ngOnInit() {
  }

  change(date: Date) {
    console.log(format(date, 'YYYY-MM-DD'));
    this.matchService.getMatchesByDate(format(date, 'YYYY-MM-DD'))
      .subscribe(matches => {
        console.log(matches);
        this.matches = matches;
      });
  }
}
