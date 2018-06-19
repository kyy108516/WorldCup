import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {MatchService} from './match.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WorldCup';
  isCollapsed = false;

  constructor(private location: Location, private matchService: MatchService) {
  }

  goBack(): void {
    this.location.back();
  }

  click() {
    this.matchService.getCurrentMatches().subscribe(match => this.matchService.match.next(match[0]));
  }
}
