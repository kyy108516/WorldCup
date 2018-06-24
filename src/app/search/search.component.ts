import {Component, OnInit} from '@angular/core';
import {Match} from '../match';
import {MatchService} from '../match.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  matches: Match[];
  filteredOptions = [];
  value: string;
  map = {
    Germany: 'GER',
    Mexico: 'MEX',
    Sweden: 'SWE',
    'Korea Republic': 'KOR',
    Panama: 'PAN',
    England: 'ENG',
    Colombia: 'COL',
    Japan: 'JPN',
    Poland: 'POL',
    Senegal: 'SEN',
    Russia: 'RUS',
    Egypt: 'EGY',
    Portugal: 'POR',
    Morocco: 'MAR',
    Uruguay: 'URU',
    'Saudi Arabia': 'KSA',
    Iran: 'IRN',
    Denmark: 'DEN',
    Australia: 'AUS',
    France: 'FRA',
    Peru: 'PER',
    Argentina: 'ARG',
    Croatia: 'CRO',
    Brazil: 'BRA',
    'Costa Rica': 'CRC',
    Nigeria: 'NGA',
    Iceland: 'ISL',
    Serbia: 'SRB',
    Switzerland: 'SUI',
    Belgium: 'BEL',
    Tunisia: 'TUN',
  };

  constructor(private matchService: MatchService) {
    this.filteredOptions = Object.keys(this.map);
  }

  ngOnInit() {
  }

  change(value: string) {
    this.filteredOptions = Object.keys(this.map)
      .filter(option => option.toLowerCase().indexOf(value.toLowerCase()) === 0);
    if (this.map[value] != null) {
      this.matchService.getMatchesByCountry(this.map[value])
        .subscribe(matches =>
          this.matches = matches
        );
    }
  }
}
