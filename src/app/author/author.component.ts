import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Author} from '../author';
import {DataService} from '../data.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors: Author[];
  array = [1, 2, 3, 4];
  id: string;

  constructor(private route: ActivatedRoute) {
    this.authors = DataService.getAuthors();
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
