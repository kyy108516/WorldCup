import {Component, OnInit} from '@angular/core';
import {Author} from '../author';
import {DataService} from '../data.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  authors: Author[];

  constructor() {
    this.authors = DataService.getAuthors();
  }

  ngOnInit() {
  }
}
