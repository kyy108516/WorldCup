import {Component, OnInit} from '@angular/core';
import {Match} from '../match';
import {format} from 'date-fns';
import {MatchService} from '../match.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
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
