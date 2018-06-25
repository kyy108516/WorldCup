import {Component, OnInit} from '@angular/core';
import {Author} from '../author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author: Author[] = [{
    'id': 1,
    'name': '梅西',
    'team': '阿根廷',
    'birthdate': '1987年6月24日',
    'height': '1.7米',
    'weight': '72公斤',
    'number': '10',
    'place': '前锋'
  }, {
    'id': 2,
    'name': 'C罗',
    'team': '葡萄牙',
    'birthdate': '1985年2月05日',
    'height': '1.85米',
    'weight': '80公斤',
    'number': '7',
    'place': '前锋'
  }, {
    'id': 3,
    'name': '格列兹曼',
    'team': '法国',
    'birthdate': '1991年3月21日',
    'height': '1.74米',
    'weight': '72公斤',
    'number': '7',
    'place': '前锋'
  }, {
    'id': 4,
    'name': 'J罗',
    'team': '哥伦比亚',
    'birthdate': '1991年7月21日',
    'height': '1.8米',
    'weight': '75公斤',
    'number': '10',
    'place': '中场'
  }, {
    'id': 5,
    'name': '苏亚雷斯',
    'team': '乌拉圭',
    'birthdate': '1987年1月24日',
    'height': '1.82米',
    'weight': '85公斤',
    'number': '9',
    'place': '前锋'
  }, {
    'id': 6,
    'name': '内马尔',
    'team': '巴西',
    'birthdate': '1992年2月05日',
    'height': '1.75米',
    'weight': '68公斤',
    'number': '10',
    'place': '前锋'
  }, {
    'id': 7,
    'name': '伊涅斯塔',
    'team': '西班牙',
    'birthdate': '1984年5月11日',
    'height': '1.71米',
    'weight': '68公斤',
    'number': '6',
    'place': '中场'
  }, {
    'id': 8,
    'name': '穆勒',
    'team': '德国',
    'birthdate': '1989年9月13日',
    'height': '1.86米',
    'weight': '75公斤',
    'number': '13',
    'place': '中场'
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
