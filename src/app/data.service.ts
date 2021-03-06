import {Injectable} from '@angular/core';
import {Author} from './author';
import {Player} from './player';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  static getAuthors(): Author[] {
    return [{
      'id': 0,
      'code': 'meixi',
      'name': '梅西',
      'team': '阿根廷',
      'birthdate': '1987年6月24日',
      'height': '1.7米',
      'weight': '72公斤',
      'number': '10',
      'place': '前锋'
    }, {
      'id': 1,
      'code': 'cluo',
      'name': 'C罗',
      'team': '葡萄牙',
      'birthdate': '1985年2月05日',
      'height': '1.85米',
      'weight': '80公斤',
      'number': '7',
      'place': '前锋'
    }, {
      'id': 2,
      'code': 'geliziman',
      'name': '格列兹曼',
      'team': '法国',
      'birthdate': '1991年3月21日',
      'height': '1.74米',
      'weight': '72公斤',
      'number': '7',
      'place': '前锋'
    }, {
      'id': 3,
      'code': 'jluo',
      'name': 'J罗',
      'team': '哥伦比亚',
      'birthdate': '1991年7月21日',
      'height': '1.8米',
      'weight': '75公斤',
      'number': '10',
      'place': '中场'
    }, {
      'id': 4,
      'code': 'suyaleisi',
      'name': '苏亚雷斯',
      'team': '乌拉圭',
      'birthdate': '1987年1月24日',
      'height': '1.82米',
      'weight': '85公斤',
      'number': '9',
      'place': '前锋'
    }, {
      'id': 5,
      'code': 'neimaer',
      'name': '内马尔',
      'team': '巴西',
      'birthdate': '1992年2月05日',
      'height': '1.75米',
      'weight': '68公斤',
      'number': '10',
      'place': '前锋'
    }, {
      'id': 6,
      'code': 'yiniesita',
      'name': '伊涅斯塔',
      'team': '西班牙',
      'birthdate': '1984年5月11日',
      'height': '1.71米',
      'weight': '68公斤',
      'number': '6',
      'place': '中场'
    }, {
      'id': 7,
      'code': 'mule',
      'name': '穆勒',
      'team': '德国',
      'birthdate': '1989年9月13日',
      'height': '1.86米',
      'weight': '75公斤',
      'number': '13',
      'place': '中场'
    }];
  }

  static getPlayers(): Player[] {
    return [{
      'name': 'Essam El Hadary',
      'position': 'GK',
      'country': 'Egypt',
      'club': 'Al Taawoun'
    }, {
      'name': 'Mohamed El-Shennawy',
      'position': 'GK',
      'country': 'Egypt',
      'club': 'Al Ahly'
    }, {
      'name': 'Sherif Ekramy',
      'position': 'GK',
      'country': 'Egypt',
      'club': 'Al Ahly'
    }, {
      'name': 'Ahmed Fathi',
      'position': 'DEF',
      'country': 'Egypt',
      'club': 'Al Ahly'
    }, {
      'name': 'Saad Samir',
      'position': 'DEF',
      'country': 'Egypt',
      'club': 'Al Ahly'
    }, {
      'name': 'Ayman Ashraf',
      'position': 'DEF',
      'country': 'Egypt',
      'club': 'Al Ahly'
    }, {
      'name': 'Mahmoud Hamdy',
      'position': 'DEF',
      'country': 'Egypt',
      'club': 'Zamalek'
    }, {
      'name': 'Mohamed Abdel-Shafy',
      'position': 'DEF',
      'country': 'Egypt',
      'club': 'Al Fateh'
    }, {
      'name': 'Ahmed Hegazi',
      'position': 'DEF',
      'country': 'Egypt',
      'club': 'West Brom'
    }, {
      'name': 'Ali Gabr',
      'position': 'DEF',
      'country': 'Egypt',
      'club': 'Zamalek'
    }, {
      'name': 'Ahmed Elmohamady',
      'position': 'DEF',
      'country': 'Egypt',
      'club': 'Aston Villa'
    }, {
      'name': 'Omar Gaber',
      'position': 'DEF',
      'country': 'Egypt',
      'club': 'Los Angeles FC'
    }, {
      'name': 'Tarek Hamed',
      'position': 'MID',
      'country': 'Egypt',
      'club': 'Zamalek'
    }, {
      'name': 'Shikabala',
      'position': 'MID',
      'country': 'Egypt',
      'club': 'Zamalek'
    }, {
      'name': 'Abdallah Said',
      'position': 'MID',
      'country': 'Egypt',
      'club': 'Al Ahli'
    }, {
      'name': 'Sam Morsy',
      'position': 'MID',
      'country': 'Egypt',
      'club': 'Wigan Athletic'
    }, {
      'name': 'Mohamed Elneny',
      'position': 'MID',
      'country': 'Egypt',
      'club': 'Arsenal'
    }, {
      'name': 'Mahmoud Kahraba',
      'position': 'MID',
      'country': 'Egypt',
      'club': 'Al Ittihad'
    }, {
      'name': 'Ramadan Sobhi',
      'position': 'MID',
      'country': 'Egypt',
      'club': 'Stoke City'
    }, {
      'name': 'Mahmoud Hassan',
      'position': 'MID',
      'country': 'Egypt',
      'club': 'Kasimpasa'
    }, {
      'name': 'Amr Warda',
      'position': 'MID',
      'country': 'Egypt',
      'club': 'Atromitos Athens'
    }, {
      'name': 'Marwan Mohsen',
      'position': 'ATT',
      'country': 'Egypt',
      'club': 'Al Ahly'
    }, {
      'name': 'Mohamed Salah',
      'position': 'ATT',
      'country': 'Egypt',
      'club': 'Liverpool'
    }, {
      'name': 'Igor Akinfeev',
      'position': 'GK',
      'country': 'Russia',
      'club': 'CSKA Moscow'
    }, {
      'name': 'Vladimir Gabulov',
      'position': 'GK',
      'country': 'Russia',
      'club': 'Club Brugge'
    }, {
      'name': 'Andrey Lunev',
      'position': 'GK',
      'country': 'Russia',
      'club': 'Zenit St Petersburg'
    }, {
      'name': 'Vladimir Granat',
      'position': 'DEF',
      'country': 'Russia',
      'club': 'Rubin Kazan'
    }, {
      'name': 'Fedor Kudryashov',
      'position': 'DEF',
      'country': 'Russia',
      'club': 'Rubin Kazan'
    }, {
      'name': 'Ilya Kutepov',
      'position': 'DEF',
      'country': 'Russia',
      'club': 'Spartak Moscow'
    }, {
      'name': 'Andrey Semenov',
      'position': 'DEF',
      'country': 'Russia',
      'club': 'Akhmat Grozny'
    }, {
      'name': 'Sergei Ignashevich',
      'position': 'DEF',
      'country': 'Russia',
      'club': 'CSKA Moscow'
    }, {
      'name': 'Mario Fernandes',
      'position': 'DEF',
      'country': 'Russia',
      'club': 'CSKA Moscow'
    }, {
      'name': 'Igor Smolnikov',
      'position': 'DEF',
      'country': 'Russia',
      'club': 'Zenit St Petersburg'
    }, {
      'name': 'Yuri Gazinskiy',
      'position': 'MID',
      'country': 'Russia',
      'club': 'Krasnodar'
    }, {
      'name': 'Alexsandr Golovin',
      'position': 'MID',
      'country': 'Russia',
      'club': 'CSKA Moscow'
    }, {
      'name': 'Alan Dzagoev',
      'position': 'MID',
      'country': 'Russia',
      'club': 'CSKA Moscow'
    }, {
      'name': 'Aleksandr Erokhin',
      'position': 'MID',
      'country': 'Russia',
      'club': 'Zenit St Petersburg'
    }, {
      'name': 'Yuri Zhirkov',
      'position': 'MID',
      'country': 'Russia',
      'club': 'Zenit St Petersburg'
    }, {
      'name': 'Daler Kuzyaev',
      'position': 'MID',
      'country': 'Russia',
      'club': 'Zenit St Petersburg'
    }, {
      'name': 'Roman Zobnin',
      'position': 'MID',
      'country': 'Russia',
      'club': 'Spartak Moscow'
    }, {
      'name': 'Alexsandr Samedov',
      'position': 'MID',
      'country': 'Russia',
      'club': 'Spartak Moscow'
    }, {
      'name': 'Anton Miranchuk',
      'position': 'MID',
      'country': 'Russia',
      'club': 'Lokomotiv Moscow'
    }, {
      'name': 'Denis Cheryshev',
      'position': 'MID',
      'country': 'Russia',
      'club': 'Villarreal'
    }, {
      'name': 'Artem Dzyuba',
      'position': 'ATT',
      'country': 'Russia',
      'club': 'Arsenal Tula'
    }, {
      'name': 'Aleksey Miranchuk',
      'position': 'ATT',
      'country': 'Russia',
      'club': 'Lokomotiv Moscow'
    }, {
      'name': 'Fedor Smolov',
      'position': 'ATT',
      'country': 'Russia',
      'club': 'Krasnodar'
    }, {
      'name': 'Mohammed Al Owais',
      'position': 'GK',
      'country': 'Saudi Arabia',
      'club': 'Al Ahli'
    }, {
      'name': 'Yasser Al Mosailem',
      'position': 'GK',
      'country': 'Saudi Arabia',
      'club': 'Al Ahli'
    }, {
      'name': 'Abdullah Al Mayouf',
      'position': 'GK',
      'country': 'Saudi Arabia',
      'club': 'Al Hilal'
    }, {
      'name': 'Mansoor Al Harbi',
      'position': 'DEF',
      'country': 'Saudi Arabia',
      'club': 'Al Ahli'
    }, {
      'name': 'Yasser Al ShahraniMohammed Al Breik',
      'position': 'DEF',
      'country': 'Saudi Arabia',
      'club': 'Al Hilal'
    }, {
      'name': 'Motaz Hawsawi',
      'position': 'DEF',
      'country': 'Saudi Arabia',
      'club': 'Al Ahli'
    }, {
      'name': 'Osama Hawsawi',
      'position': 'DEF',
      'country': 'Saudi Arabia',
      'club': 'Al Hilal'
    }, {
      'name': 'Omar Hawsawi',
      'position': 'DEF',
      'country': 'Saudi Arabia',
      'club': 'Al Nassr'
    }, {
      'name': 'Ali Al Bulaihi',
      'position': 'DEF',
      'country': 'Saudi Arabia',
      'club': 'Al Hilal'
    }, {
      'name': 'Abdullah Al Khaibari',
      'position': 'MID',
      'country': 'Saudi Arabia',
      'club': 'Al Shabab'
    }, {
      'name': 'Abdulmalek Al Khaibri',
      'position': 'MID',
      'country': 'Saudi Arabia',
      'club': 'Al Hilal'
    }, {
      'name': 'Abdullah Otayf',
      'position': 'MID',
      'country': 'Saudi Arabia',
      'club': 'Al Hilal'
    }, {
      'name': 'Taiseer Al Jassim',
      'position': 'MID',
      'country': 'Saudi Arabia',
      'club': 'Al Ahli'
    }, {
      'name': 'Houssain Al Mogahwi',
      'position': 'MID',
      'country': 'Saudi Arabia',
      'club': 'Al Ahli'
    }, {
      'name': 'Salman Al Faraj',
      'position': 'MID',
      'country': 'Saudi Arabia',
      'club': 'Al Hilal'
    }, {
      'name': 'Mohamed Kanno',
      'position': 'MID',
      'country': 'Saudi Arabia',
      'club': 'Al Hilal'
    }, {
      'name': 'Hattan Bahebri',
      'position': 'MID',
      'country': 'Saudi Arabia',
      'club': 'Al Shabab'
    }, {
      'name': 'Salem Al Dawsari',
      'position': 'MID',
      'country': 'Saudi Arabia',
      'club': 'Al Hilal'
    }, {
      'name': 'Yahya Al Shehri',
      'position': 'MID',
      'country': 'Saudi Arabia',
      'club': 'Al Nassr'
    }, {
      'name': 'Fahad Al Muwallad',
      'position': 'MID',
      'country': 'Saudi Arabia',
      'club': 'Al Ittihad'
    }, {
      'name': 'Mohammad Al Sahlawi',
      'position': 'ATT',
      'country': 'Saudi Arabia',
      'club': 'Al Nassr'
    }, {
      'name': 'Muhannad Assiri',
      'position': 'ATT',
      'country': 'Saudi Arabia',
      'club': 'Al Ahli'
    }, {
      'name': 'Martin Campana',
      'position': 'GK',
      'country': 'Uruguay',
      'club': 'Independiente'
    }, {
      'name': 'Fernando Muslera',
      'position': 'GK',
      'country': 'Uruguay',
      'club': 'Galatasaray'
    }, {
      'name': 'Martin Silva',
      'position': 'GK',
      'country': 'Uruguay',
      'club': 'Vasco da Gama'
    }, {
      'name': 'Martin Caceres',
      'position': 'DEF',
      'country': 'Uruguay',
      'club': 'Lazio'
    }, {
      'name': 'Sebastian Coates',
      'position': 'DEF',
      'country': 'Uruguay',
      'club': 'Sporting CP'
    }, {
      'name': 'Jose Maria Gimenez',
      'position': 'DEF',
      'country': 'Uruguay',
      'club': 'Atletico Madrid'
    }, {
      'name': 'Diego Godin',
      'position': 'DEF',
      'country': 'Uruguay',
      'club': 'Atletico Madrid'
    }, {
      'name': 'Maximiliano Pereira',
      'position': 'DEF',
      'country': 'Uruguay',
      'club': 'Porto'
    }, {
      'name': 'Gaston Silva',
      'position': 'DEF',
      'country': 'Uruguay',
      'club': 'Independiente'
    }, {
      'name': 'Guillermo Varela',
      'position': 'DEF',
      'country': 'Uruguay',
      'club': 'Penarol'
    }, {
      'name': 'Giorgian De Arrascaeta',
      'position': 'MID',
      'country': 'Uruguay',
      'club': 'Cruzeiro'
    }, {
      'name': 'Rodrigo Bentancur',
      'position': 'MID',
      'country': 'Uruguay',
      'club': 'Juventus'
    }, {
      'name': 'Diego Laxalt',
      'position': 'MID',
      'country': 'Uruguay',
      'club': 'Genoa'
    }, {
      'name': 'Nahitan Nandez',
      'position': 'MID',
      'country': 'Uruguay',
      'club': 'Boca Juniors'
    }, {
      'name': 'Cristian Rodriguez',
      'position': 'MID',
      'country': 'Uruguay',
      'club': 'Penarol'
    }, {
      'name': 'Carlos Sanchez',
      'position': 'MID',
      'country': 'Uruguay',
      'club': 'Monterrey'
    }, {
      'name': 'Lucas Torreira',
      'position': 'MID',
      'country': 'Uruguay',
      'club': 'Sampdoria'
    }, {
      'name': 'Matias Vecino',
      'position': 'MID',
      'country': 'Uruguay',
      'club': 'Inter'
    }, {
      'name': 'Jonathan Urretaviscaya',
      'position': 'MID',
      'country': 'Uruguay',
      'club': 'Monterrey'
    }, {
      'name': 'Edinson Cavani',
      'position': 'ATT',
      'country': 'Uruguay',
      'club': 'Paris St-Germain'
    }, {
      'name': 'Maximiliano Gomez',
      'position': 'ATT',
      'country': 'Uruguay',
      'club': 'Celta Vigo'
    }, {
      'name': 'Luis Suarez',
      'position': 'ATT',
      'country': 'Uruguay',
      'club': 'Barcelona'
    }, {
      'name': 'Cristhian Stuani',
      'position': 'ATT',
      'country': 'Uruguay',
      'club': 'Girona'
    }, {
      'name': 'Alireza Beyranvand',
      'position': 'GK',
      'country': 'Iran',
      'club': 'Persepolis'
    }, {
      'name': 'Rashid Mazaheri',
      'position': 'GK',
      'country': 'Iran',
      'club': 'Zob Ahan'
    }, {
      'name': 'Amir Abedzadeh',
      'position': 'GK',
      'country': 'Iran',
      'club': 'Maritimo'
    }, {
      'name': 'Majid Hosseini',
      'position': 'DEF',
      'country': 'Iran',
      'club': 'Esteghlal'
    }, {
      'name': 'Ramin Rezaeian',
      'position': 'DEF',
      'country': 'Iran',
      'club': 'Ostende'
    }, {
      'name': 'Mohammad Reza Khanzadeh',
      'position': 'DEF',
      'country': 'Iran',
      'club': 'Padideh'
    }, {
      'name': 'Morteza Pouraliganji',
      'position': 'DEF',
      'country': 'Iran',
      'club': 'Alsaad'
    }, {
      'name': 'Pejman Montazeri',
      'position': 'DEF',
      'country': 'Iran',
      'club': 'Esteghlal'
    }, {
      'name': 'Milad Mohammadi',
      'position': 'DEF',
      'country': 'Iran',
      'club': 'Akhmat Grozny'
    }, {
      'name': 'Roozbeh Cheshmi',
      'position': 'DEF',
      'country': 'Iran',
      'club': 'Esteghlal'
    }, {
      'name': 'Ehsan Hajsafi',
      'position': 'DEF',
      'country': 'Iran',
      'club': 'Olympiacos'
    }, {
      'name': 'Saeid Ezatollahi',
      'position': 'MID',
      'country': 'Iran',
      'club': 'Amkar Perm'
    }, {
      'name': 'Masoud Shojaei',
      'position': 'MID',
      'country': 'Iran',
      'club': 'AEK Athens'
    }, {
      'name': 'Mehdi Torabi',
      'position': 'MID',
      'country': 'Iran',
      'club': 'Saipa'
    }, {
      'name': 'Omid Ebrahimi',
      'position': 'MID',
      'country': 'Iran',
      'club': 'Esteghlal'
    }, {
      'name': 'Karim Ansarifard',
      'position': 'MID',
      'country': 'Iran',
      'club': 'Olympiacos'
    }, {
      'name': 'Alireza Jahanbakhsh',
      'position': 'ATT',
      'country': 'Iran',
      'club': 'AZ Alkmaar'
    }, {
      'name': 'Mahdi Taremi',
      'position': 'ATT',
      'country': 'Iran',
      'club': 'Al Gharafa'
    }, {
      'name': 'Sardar Azmoun',
      'position': 'ATT',
      'country': 'Iran',
      'club': 'Rubin Kazan'
    }, {
      'name': 'Reza Ghoochannejhad',
      'position': 'ATT',
      'country': 'Iran',
      'club': 'Heerenveen'
    }, {
      'name': 'Saman Ghoddos',
      'position': 'ATT',
      'country': 'Iran',
      'club': 'Ostersunds'
    }, {
      'name': 'Ashkan Dejagah',
      'position': 'ATT',
      'country': 'Iran',
      'club': 'Nottingham Forest'
    }, {
      'name': 'Vahid Amiri',
      'position': 'ATT',
      'country': 'Iran',
      'club': 'Persepolis'
    }, {
      'name': 'Mounir El Kajoui',
      'position': 'GK',
      'country': 'Morroco',
      'club': 'Numancia'
    }, {
      'name': 'Yassine Bounou',
      'position': 'GK',
      'country': 'Morroco',
      'club': 'Girona'
    }, {
      'name': 'Ahmad Reda Tagnaouti',
      'position': 'GK',
      'country': 'Morroco',
      'club': 'Ittihad Tanger'
    }, {
      'name': 'Mehdi Benatia',
      'position': 'DEF',
      'country': 'Morroco',
      'club': 'Juventus'
    }, {
      'name': 'Romain Saiss',
      'position': 'DEF',
      'country': 'Morroco',
      'club': 'Wolves'
    }, {
      'name': 'Manuel Da Costa',
      'position': 'DEF',
      'country': 'Morroco',
      'club': 'Basaksehir'
    }, {
      'name': 'Nabil Dirar',
      'position': 'DEF',
      'country': 'Morroco',
      'club': 'Fenerbahce'
    }, {
      'name': 'Achraf Hakimi',
      'position': 'DEF',
      'country': 'Morroco',
      'club': 'Real Madrid'
    }, {
      'name': 'Hamza Mendyl',
      'position': 'DEF',
      'country': 'Morroco',
      'club': 'Lille'
    }, {
      'name': 'M\'barek Boussoufa',
      'position': 'MID',
      'country': 'Morroco',
      'club': 'Al Jazira'
    }, {
      'name': 'Karim El Ahmadi',
      'position': 'MID',
      'country': 'Morroco',
      'club': 'Feyenoord'
    }, {
      'name': 'Youssef Ait Bennasser',
      'position': 'MID',
      'country': 'Morroco',
      'club': 'Caen'
    }, {
      'name': 'Sofyan Amrabat',
      'position': 'MID',
      'country': 'Morroco',
      'club': 'Feyenoord'
    }, {
      'name': 'Younes Belhanda',
      'position': 'MID',
      'country': 'Morroco',
      'club': 'Galatasaray'
    }, {
      'name': 'Faycal Fajr',
      'position': 'MID',
      'country': 'Morroco',
      'club': 'Getafe'
    }, {
      'name': 'Amine Harit',
      'position': 'MID',
      'country': 'Morroco',
      'club': 'Schalke 04'
    }, {
      'name': 'Khalid Boutaib',
      'position': 'ATT',
      'country': 'Morroco',
      'club': 'Malatyaspor'
    }, {
      'name': 'Aziz Bouhaddouz',
      'position': 'ATT',
      'country': 'Morroco',
      'club': 'Saint Pauli'
    }, {
      'name': 'Ayoub El Kaabi',
      'position': 'ATT',
      'country': 'Morroco',
      'club': 'Renaissance Berkane'
    }, {
      'name': 'Nordin Amrabat',
      'position': 'ATT',
      'country': 'Morroco',
      'club': 'Leganes'
    }, {
      'name': 'Mehdi Carcela',
      'position': 'ATT',
      'country': 'Morroco',
      'club': 'Standard de Liege'
    }, {
      'name': 'Hakim Ziyech',
      'position': 'ATT',
      'country': 'Morroco',
      'club': 'Ajax'
    }, {
      'name': 'Youssef En Nesyri',
      'position': 'ATT',
      'country': 'Morroco',
      'club': 'Malaga'
    }, {
      'name': 'Anthony Lopes',
      'position': 'GK',
      'country': 'Portugal',
      'club': 'Lyon'
    }, {
      'name': 'Beto',
      'position': 'GK',
      'country': 'Portugal',
      'club': 'Goztepe'
    }, {
      'name': 'Rui Patricio',
      'position': 'GK',
      'country': 'Portugal',
      'club': 'Sporting Lisbon'
    }, {
      'name': 'Bruno Alves',
      'position': 'DEF',
      'country': 'Portugal',
      'club': 'Rangers'
    }, {
      'name': 'Cedric Soares',
      'position': 'DEF',
      'country': 'Portugal',
      'club': 'Southampton'
    }, {
      'name': 'Jose Fonte',
      'position': 'DEF',
      'country': 'Portugal',
      'club': 'Dalian Yifang'
    }, {
      'name': 'Mario Rui',
      'position': 'DEF',
      'country': 'Portugal',
      'club': 'Napoli'
    }, {
      'name': 'Pepe',
      'position': 'DEF',
      'country': 'Portugal',
      'club': 'Besiktas'
    }, {
      'name': 'Raphael Guerreiro',
      'position': 'DEF',
      'country': 'Portugal',
      'club': 'Borussia Dortmund'
    }, {
      'name': 'Ricardo Pereira',
      'position': 'DEF',
      'country': 'Portugal',
      'club': 'Porto'
    }, {
      'name': 'Ruben Dias',
      'position': 'DEF',
      'country': 'Portugal',
      'club': 'Benfica'
    }, {
      'name': 'Adrien Silva',
      'position': 'MID',
      'country': 'Portugal',
      'club': 'Leicester'
    }, {
      'name': 'Bruno Fernandes',
      'position': 'MID',
      'country': 'Portugal',
      'club': 'Sporting Lisbon'
    }, {
      'name': 'Joao Mario',
      'position': 'MID',
      'country': 'Portugal',
      'club': 'West Ham'
    }, {
      'name': 'Joao Moutinho',
      'position': 'MID',
      'country': 'Portugal',
      'club': 'AS Monaco'
    }, {
      'name': 'Manuel Fernandes',
      'position': 'MID',
      'country': 'Portugal',
      'club': 'Lokomotiv Moscow'
    }, {
      'name': 'William Carvalho',
      'position': 'MID',
      'country': 'Portugal',
      'club': 'Sporting'
    }, {
      'name': 'Andre Silva',
      'position': 'ATT',
      'country': 'Portugal',
      'club': 'AC Milan'
    }, {
      'name': 'Bernardo Silva',
      'position': 'ATT',
      'country': 'Portugal',
      'club': 'Manchester City'
    }, {
      'name': 'Cristiano Ronaldo',
      'position': 'ATT',
      'country': 'Portugal',
      'club': 'Real Madrid'
    }, {
      'name': 'Gelson Martins',
      'position': 'ATT',
      'country': 'Portugal',
      'club': 'Sporting Lisbon'
    }, {
      'name': 'Goncalo Guedes',
      'position': 'ATT',
      'country': 'Portugal',
      'club': 'Valencia'
    }, {
      'name': 'Ricardo Quaresma',
      'position': 'ATT',
      'country': 'Portugal',
      'club': 'Besiktas'
    }, {
      'name': 'David de Gea',
      'position': 'GK',
      'country': 'Spain',
      'club': 'Manchester United'
    }, {
      'name': 'Pepe Reina',
      'position': 'GK',
      'country': 'Spain',
      'club': 'Napoli'
    }, {
      'name': 'Kepa Arrizabalaga',
      'position': 'GK',
      'country': 'Spain',
      'club': 'Athletic Bilbao'
    }, {
      'name': 'Jordi Alba',
      'position': 'DEF',
      'country': 'Spain',
      'club': 'Barcelona'
    }, {
      'name': 'Nacho Monreal',
      'position': 'DEF',
      'country': 'Spain',
      'club': 'Arsenal'
    }, {
      'name': 'Alvaro Odriozola',
      'position': 'DEF',
      'country': 'Spain',
      'club': 'Real Sociedad'
    }, {
      'name': 'Nacho Fernandez',
      'position': 'DEF',
      'country': 'Spain',
      'club': 'Real Madrid'
    }, {
      'name': 'Dani Carvajal',
      'position': 'DEF',
      'country': 'Spain',
      'club': 'Real Madrid'
    }, {
      'name': 'Gerard Pique',
      'position': 'DEF',
      'country': 'Spain',
      'club': 'Barcelona'
    }, {
      'name': 'Sergio Ramos',
      'position': 'DEF',
      'country': 'Spain',
      'club': 'Real Madrid'
    }, {
      'name': 'Cesar Azpilicueta',
      'position': 'DEF',
      'country': 'Spain',
      'club': 'Chelsea'
    }, {
      'name': 'Sergio Busquets',
      'position': 'MID',
      'country': 'Spain',
      'club': 'Barcelona'
    }, {
      'name': 'Isco',
      'position': 'MID',
      'country': 'Spain',
      'club': 'Real Madrid'
    }, {
      'name': 'Thiago Alcantara',
      'position': 'MID',
      'country': 'Spain',
      'club': 'Bayern Munich'
    }, {
      'name': 'David Silva',
      'position': 'MID',
      'country': 'Spain',
      'club': 'Manchester City'
    }, {
      'name': 'Andres Iniesta',
      'position': 'MID',
      'country': 'Spain',
      'club': 'Barcelona'
    }, {
      'name': 'Saul Niguez',
      'position': 'MID',
      'country': 'Spain',
      'club': 'Atletico Madrid'
    }, {
      'name': 'Koke',
      'position': 'MID',
      'country': 'Spain',
      'club': 'Atletico Madrid'
    }, {
      'name': 'Marco Asensio',
      'position': 'ATT',
      'country': 'Spain',
      'club': 'Real Madrid'
    }, {
      'name': 'Iago Aspas',
      'position': 'ATT',
      'country': 'Spain',
      'club': 'Celta Vigo'
    }, {
      'name': 'Diego Costa',
      'position': 'ATT',
      'country': 'Spain',
      'club': 'Atletico Madrid'
    }, {
      'name': 'Rodrigo Moreno',
      'position': 'ATT',
      'country': 'Spain',
      'club': 'Valencia'
    }, {
      'name': 'Lucas Vazquez',
      'position': 'ATT',
      'country': 'Spain',
      'club': 'Real Madrid'
    }, {
      'name': 'Brad Jones',
      'position': 'GK',
      'country': 'Australia',
      'club': 'Feyenoord'
    }, {
      'name': 'Mat Ryan',
      'position': 'GK',
      'country': 'Australia',
      'club': 'Brighton'
    }, {
      'name': 'Danny Vukovic',
      'position': 'GK',
      'country': 'Australia',
      'club': 'Genk'
    }, {
      'name': 'Aziz Behich',
      'position': 'DEF',
      'country': 'Australia',
      'club': 'Bursaspor'
    }, {
      'name': 'Milos Degenek',
      'position': 'DEF',
      'country': 'Australia',
      'club': 'Yokohama F Marinos'
    }, {
      'name': 'Matthew Jurman',
      'position': 'DEF',
      'country': 'Australia',
      'club': 'Suwon Samsung Blue Wings'
    }, {
      'name': 'James Meredith',
      'position': 'DEF',
      'country': 'Australia',
      'club': 'Millwall'
    }, {
      'name': 'Josh Risdon',
      'position': 'DEF',
      'country': 'Australia',
      'club': 'Western Sydney'
    }, {
      'name': 'Trent Sainsbury',
      'position': 'DEF',
      'country': 'Australia',
      'club': 'Grasshopper Zurich'
    }, {
      'name': 'Jackson Irvine',
      'position': 'MID',
      'country': 'Australia',
      'club': 'Hull City'
    }, {
      'name': 'Mile Jedinak',
      'position': 'MID',
      'country': 'Australia',
      'club': 'Aston Villa'
    }, {
      'name': 'Robbie Kruse',
      'position': 'MID',
      'country': 'Australia',
      'club': 'VfL Bochum'
    }, {
      'name': 'Massimo Luongo',
      'position': 'MID',
      'country': 'Australia',
      'club': 'QPR'
    }, {
      'name': 'Mark Milligan',
      'position': 'MID',
      'country': 'Australia',
      'club': 'Al-Ahli'
    }, {
      'name': 'Aaron Mooy',
      'position': 'MID',
      'country': 'Australia',
      'club': 'Huddersfield'
    }, {
      'name': 'Tom Rogic',
      'position': 'MID',
      'country': 'Australia',
      'club': 'Celtic'
    }, {
      'name': 'Tim Cahill',
      'position': 'MID',
      'country': 'Australia',
      'club': 'Millwall'
    }, {
      'name': 'Daniel Arzani',
      'position': 'ATT',
      'country': 'Australia',
      'club': 'Melbourne City'
    }, {
      'name': 'Tomi Juric',
      'position': 'ATT',
      'country': 'Australia',
      'club': 'Luzern'
    }, {
      'name': 'Mathew Leckie',
      'position': 'ATT',
      'country': 'Australia',
      'club': 'Hertha Berlin'
    }, {
      'name': 'Andrew Nabbout',
      'position': 'ATT',
      'country': 'Australia',
      'club': 'Urawa Red Diamonds'
    }, {
      'name': 'Dimitri Petratos',
      'position': 'ATT',
      'country': 'Australia',
      'club': 'Newcastle Jets'
    }, {
      'name': 'Jamie Maclaren',
      'position': 'ATT',
      'country': 'Australia',
      'club': 'Hibernian'
    }, {
      'name': 'Kasper Schmeichel',
      'position': 'GK',
      'country': 'Denmark',
      'club': 'Leicester'
    }, {
      'name': 'Jonas Lossl',
      'position': 'GK',
      'country': 'Denmark',
      'club': 'Huddersfield'
    }, {
      'name': 'Frederik Ronow',
      'position': 'GK',
      'country': 'Denmark',
      'club': 'Brondby'
    }, {
      'name': 'Simon Kjaer',
      'position': 'DEF',
      'country': 'Denmark',
      'club': 'Sevilla'
    }, {
      'name': 'Andreas Christensen',
      'position': 'DEF',
      'country': 'Denmark',
      'club': 'Chelsea'
    }, {
      'name': 'Mathias Jorgensen',
      'position': 'DEF',
      'country': 'Denmark',
      'club': 'Huddersfield'
    }, {
      'name': 'Jannik Vestergaard',
      'position': 'DEF',
      'country': 'Denmark',
      'club': 'Borussia Moenchengladbach'
    }, {
      'name': 'Henrik Dalsgaard',
      'position': 'DEF',
      'country': 'Denmark',
      'club': 'Brentford'
    }, {
      'name': 'Jens Stryger',
      'position': 'DEF',
      'country': 'Denmark',
      'club': 'Udinese'
    }, {
      'name': 'Jonas Knudsen',
      'position': 'DEF',
      'country': 'Denmark',
      'club': 'Ipswich'
    }, {
      'name': 'William Kvist',
      'position': 'MID',
      'country': 'Denmark',
      'club': 'FC Copenhagen'
    }, {
      'name': 'Thomas Delaney',
      'position': 'MID',
      'country': 'Denmark',
      'club': 'Werder Bremen'
    }, {
      'name': 'Lukas Lerager',
      'position': 'MID',
      'country': 'Denmark',
      'club': 'Bordeaux'
    }, {
      'name': 'Lasse Schone',
      'position': 'MID',
      'country': 'Denmark',
      'club': 'Ajax'
    }, {
      'name': 'Christian Eriksen',
      'position': 'MID',
      'country': 'Denmark',
      'club': 'Tottenham'
    }, {
      'name': 'Michael Krohn-Dehli',
      'position': 'MID',
      'country': 'Denmark',
      'club': 'Deportivo La Coruna'
    }, {
      'name': 'Pione Sisto',
      'position': 'ATT',
      'country': 'Denmark',
      'club': 'Celta Vigo'
    }, {
      'name': 'Martin Braithwaite',
      'position': 'ATT',
      'country': 'Denmark',
      'club': 'Bordeaux'
    }, {
      'name': 'Andreas Cornelius',
      'position': 'ATT',
      'country': 'Denmark',
      'club': 'Atalanta'
    }, {
      'name': 'Viktor Fischer',
      'position': 'ATT',
      'country': 'Denmark',
      'club': 'FC Copenhagen'
    }, {
      'name': 'Yussuf Poulsen',
      'position': 'ATT',
      'country': 'Denmark',
      'club': 'RB Leipzig'
    }, {
      'name': 'Nicolai Jorgensen',
      'position': 'ATT',
      'country': 'Denmark',
      'club': 'Feyenoord'
    }, {
      'name': 'Kasper Dolberg',
      'position': 'ATT',
      'country': 'Denmark',
      'club': 'Ajax'
    }, {
      'name': 'Hugo Lloris',
      'position': 'GK',
      'country': 'France',
      'club': 'Tottenham Hotspur'
    }, {
      'name': 'Steve Mandanda',
      'position': 'GK',
      'country': 'France',
      'club': 'Marseille'
    }, {
      'name': 'Alphonse Areola',
      'position': 'GK',
      'country': 'France',
      'club': 'Paris Saint-Germain'
    }, {
      'name': 'Lucas Hernandez',
      'position': 'DEF',
      'country': 'France',
      'club': 'Atletico Madrid'
    }, {
      'name': 'Presnel Kimpembe',
      'position': 'DEF',
      'country': 'France',
      'club': 'Paris Saint-Germain'
    }, {
      'name': 'Benjamin Mendy',
      'position': 'DEF',
      'country': 'France',
      'club': 'Manchester City'
    }, {
      'name': 'Benjamin Pavard',
      'position': 'DEF',
      'country': 'France',
      'club': 'Stuttgart'
    }, {
      'name': 'Adil Rami',
      'position': 'DEF',
      'country': 'France',
      'club': 'Marseille'
    }, {
      'name': 'Djibril Sidibe',
      'position': 'DEF',
      'country': 'France',
      'club': 'Monaco'
    }, {
      'name': 'Samuel Umtiti',
      'position': 'DEF',
      'country': 'France',
      'club': 'Barcelona'
    }, {
      'name': 'Raphael Varane',
      'position': 'DEF',
      'country': 'France',
      'club': 'Real Madrid'
    }, {
      'name': 'N\'Golo Kante',
      'position': 'MID',
      'country': 'France',
      'club': 'Chelsea'
    }, {
      'name': 'Blaise Matuidi',
      'position': 'MID',
      'country': 'France',
      'club': 'Juventus'
    }, {
      'name': 'Steven N\'Zonzi',
      'position': 'MID',
      'country': 'France',
      'club': 'Sevilla'
    }, {
      'name': 'Paul Pogba',
      'position': 'MID',
      'country': 'France',
      'club': 'Manchester United'
    }, {
      'name': 'Corentin Tolisso',
      'position': 'MID',
      'country': 'France',
      'club': 'Bayern Munich'
    }, {
      'name': 'Ousmane Dembele',
      'position': 'ATT',
      'country': 'France',
      'club': 'Barcelona'
    }, {
      'name': 'Nabil Fekir',
      'position': 'ATT',
      'country': 'France',
      'club': 'Lyon'
    }, {
      'name': 'Olivier Giroud',
      'position': 'ATT',
      'country': 'France',
      'club': 'Chelsea'
    }, {
      'name': 'Antoine Griezmann',
      'position': 'ATT',
      'country': 'France',
      'club': 'Atletico Madrid'
    }, {
      'name': 'Thomas Lemar',
      'position': 'ATT',
      'country': 'France',
      'club': 'Monaco'
    }, {
      'name': 'Kylian Mbappe',
      'position': 'ATT',
      'country': 'France',
      'club': 'Paris Saint-Germain'
    }, {
      'name': 'Florian Thauvin',
      'position': 'ATT',
      'country': 'France',
      'club': 'Marseille'
    }, {
      'name': 'Pedro Gallese',
      'position': 'GK',
      'country': 'Peru',
      'club': 'Veracruz'
    }, {
      'name': 'Jose Carvallo',
      'position': 'GK',
      'country': 'Peru',
      'club': 'UTC'
    }, {
      'name': 'Carlos Caceda',
      'position': 'GK',
      'country': 'Peru',
      'club': 'Municipal'
    }, {
      'name': 'Luis Advincula',
      'position': 'DEF',
      'country': 'Peru',
      'club': 'Lobos'
    }, {
      'name': 'Miguel Araujo',
      'position': 'DEF',
      'country': 'Peru',
      'club': 'Alianza Lima'
    }, {
      'name': 'Aldo Corzo',
      'position': 'DEF',
      'country': 'Peru',
      'club': 'Universitario'
    }, {
      'name': 'Nilson Loyola',
      'position': 'DEF',
      'country': 'Peru',
      'club': 'Melgar'
    }, {
      'name': 'Christian Ramos',
      'position': 'DEF',
      'country': 'Peru',
      'club': 'Veracruz'
    }, {
      'name': 'Alberto Rodriguez',
      'position': 'DEF',
      'country': 'Peru',
      'club': 'Junior Barranquilla'
    }, {
      'name': 'Anderson Santamaria',
      'position': 'DEF',
      'country': 'Peru',
      'club': 'Puebla'
    }, {
      'name': 'Miguel Trauco',
      'position': 'DEF',
      'country': 'Peru',
      'club': 'Flamengo'
    }, {
      'name': 'Pedro Aquino',
      'position': 'MID',
      'country': 'Peru',
      'club': 'Lobos'
    }, {
      'name': 'Wilmer Cartagena',
      'position': 'MID',
      'country': 'Peru',
      'club': 'Veracruz'
    }, {
      'name': 'Christian Cueva',
      'position': 'MID',
      'country': 'Peru',
      'club': 'Sao Paulo'
    }, {
      'name': 'Edison Flores',
      'position': 'MID',
      'country': 'Peru',
      'club': 'Aalborg'
    }, {
      'name': 'Paolo Hurtado',
      'position': 'MID',
      'country': 'Peru',
      'club': 'Vitoria Guimaraes'
    }, {
      'name': 'Andy Polo',
      'position': 'MID',
      'country': 'Peru',
      'club': 'Portland Timbers'
    }, {
      'name': 'Renato Tapia',
      'position': 'MID',
      'country': 'Peru',
      'club': 'Feyenoord'
    }, {
      'name': 'Yoshimar Yotun',
      'position': 'MID',
      'country': 'Peru',
      'club': 'Orlando City'
    }, {
      'name': 'Andre Carrillo',
      'position': 'ATT',
      'country': 'Peru',
      'club': 'Watford'
    }, {
      'name': 'Raul Ruidiaz',
      'position': 'ATT',
      'country': 'Peru',
      'club': 'Morelia'
    }, {
      'name': 'Jefferson Farfan',
      'position': 'ATT',
      'country': 'Peru',
      'club': 'Lokomotiv Moscow'
    }, {
      'name': 'Paolo Guerrero',
      'position': 'ATT',
      'country': 'Peru',
      'club': 'Flamengo'
    }, {
      'name': 'Willy Caballero',
      'position': 'GK',
      'country': 'Argentina',
      'club': 'Chelsea'
    }, {
      'name': 'Franco Armani',
      'position': 'GK',
      'country': 'Argentina',
      'club': 'River Plate'
    }, {
      'name': 'Nahuel Guzman',
      'position': 'GK',
      'country': 'Argentina',
      'club': 'Tigres UANL'
    }, {
      'name': 'Gabriel Mercado',
      'position': 'DEF',
      'country': 'Argentina',
      'club': 'Sevilla'
    }, {
      'name': 'Federico Fazio',
      'position': 'DEF',
      'country': 'Argentina',
      'club': 'Roma'
    }, {
      'name': 'Nicolas Otamendi',
      'position': 'DEF',
      'country': 'Argentina',
      'club': 'Manchester City'
    }, {
      'name': 'Marcos Rojo',
      'position': 'DEF',
      'country': 'Argentina',
      'club': 'Manchester United'
    }, {
      'name': 'Nicolas Taglafico',
      'position': 'DEF',
      'country': 'Argentina',
      'club': 'Ajax'
    }, {
      'name': 'Javier Mascherano',
      'position': 'DEF',
      'country': 'Argentina',
      'club': 'Hebei Fortune'
    }, {
      'name': 'Marcos Acuna',
      'position': 'DEF',
      'country': 'Argentina',
      'club': 'Sporting Lisbon'
    }, {
      'name': 'Cristian Ansaldi',
      'position': 'DEF',
      'country': 'Argentina',
      'club': 'Torino'
    }, {
      'name': 'Ever Banega',
      'position': 'MID',
      'country': 'Argentina',
      'club': 'Sevilla'
    }, {
      'name': 'Lucas Biglia',
      'position': 'MID',
      'country': 'Argentina',
      'club': 'AC Milan'
    }, {
      'name': 'Angel Di Maria',
      'position': 'MID',
      'country': 'Argentina',
      'club': 'Paris St-Germain'
    }, {
      'name': 'Giovani Lo Celso',
      'position': 'MID',
      'country': 'Argentina',
      'club': 'Paris St-Germain'
    }, {
      'name': 'Enzo Perez',
      'position': 'MID',
      'country': 'Argentina',
      'club': 'River Plate'
    }, {
      'name': 'Cristian Pavon',
      'position': 'MID',
      'country': 'Argentina',
      'club': 'Boca Juniors'
    }, {
      'name': 'Maximiliano Meza',
      'position': 'MID',
      'country': 'Argentina',
      'club': 'Independiente'
    }, {
      'name': 'Eduardo Salvio',
      'position': 'MID',
      'country': 'Argentina',
      'club': 'Benfica'
    }, {
      'name': 'Lionel Messi',
      'position': 'ATT',
      'country': 'Argentina',
      'club': 'Barcelona'
    }, {
      'name': 'Gonzalo Higuain',
      'position': 'ATT',
      'country': 'Argentina',
      'club': 'Juventus'
    }, {
      'name': 'Paulo Dybala',
      'position': 'ATT',
      'country': 'Argentina',
      'club': 'Juventus'
    }, {
      'name': 'Sergio Aguero',
      'position': 'ATT',
      'country': 'Argentina',
      'club': 'Manchester City'
    }, {
      'name': 'Danijel Subasic',
      'position': 'GK',
      'country': 'Crotia',
      'club': 'Monaco'
    }, {
      'name': 'Lovre Kalinic',
      'position': 'GK',
      'country': 'Crotia',
      'club': 'Gent'
    }, {
      'name': 'Dominik Livakovic',
      'position': 'GK',
      'country': 'Crotia',
      'club': 'Dinamo'
    }, {
      'name': 'Vedran Corluka',
      'position': 'DEF',
      'country': 'Crotia',
      'club': 'Lokomotiv Moscow'
    }, {
      'name': 'Domagoj Vida',
      'position': 'DEF',
      'country': 'Crotia',
      'club': 'Besiktas'
    }, {
      'name': 'Ivan Strinic',
      'position': 'DEF',
      'country': 'Crotia',
      'club': 'Sampdoria'
    }, {
      'name': 'Dejan Lovren',
      'position': 'DEF',
      'country': 'Crotia',
      'club': 'Liverpool'
    }, {
      'name': 'Sime Vrsaljko',
      'position': 'DEF',
      'country': 'Crotia',
      'club': 'Atletico Madrid'
    }, {
      'name': 'Josip Pivaric',
      'position': 'DEF',
      'country': 'Crotia',
      'club': 'Dynamo Kiev'
    }, {
      'name': 'Tin Jedvaj',
      'position': 'DEF',
      'country': 'Crotia',
      'club': 'Bayer Leverkusen'
    }, {
      'name': 'Duje Caleta-Car',
      'position': 'DEF',
      'country': 'Crotia',
      'club': 'Red Bull Salzburg'
    }, {
      'name': 'Luka Modric',
      'position': 'MID',
      'country': 'Crotia',
      'club': 'Real Madrid'
    }, {
      'name': 'Ivan Rakitic',
      'position': 'MID',
      'country': 'Crotia',
      'club': 'Barcelona'
    }, {
      'name': 'Mateo Kovacic',
      'position': 'MID',
      'country': 'Crotia',
      'club': 'Real Madrid'
    }, {
      'name': 'Milan Badelj',
      'position': 'MID',
      'country': 'Crotia',
      'club': 'Fiorentina'
    }, {
      'name': 'Marcelo Brozovic',
      'position': 'MID',
      'country': 'Crotia',
      'club': 'Inter'
    }, {
      'name': 'Filip Bradaric',
      'position': 'MID',
      'country': 'Crotia',
      'club': 'Rijeka'
    }, {
      'name': 'Mario Mandzukic',
      'position': 'ATT',
      'country': 'Crotia',
      'club': 'Juventus'
    }, {
      'name': 'Ivan Perisic',
      'position': 'ATT',
      'country': 'Crotia',
      'club': 'Inter'
    }, {
      'name': 'Nikola Kalinic',
      'position': 'ATT',
      'country': 'Crotia',
      'club': 'Milan'
    }, {
      'name': 'Andrej Kramaric',
      'position': 'ATT',
      'country': 'Crotia',
      'club': 'Hoffenheim'
    }, {
      'name': 'Marko Pjaca',
      'position': 'ATT',
      'country': 'Crotia',
      'club': 'Schalke'
    }, {
      'name': 'Ante Rebic',
      'position': 'ATT',
      'country': 'Crotia',
      'club': 'Eintracht'
    }, {
      'name': 'Hannes Thor Halldorsson',
      'position': 'GK',
      'country': 'Iceland',
      'club': 'Randers FC'
    }, {
      'name': 'Runar Alex Runarsson',
      'position': 'GK',
      'country': 'Iceland',
      'club': 'FC Nordsjælland'
    }, {
      'name': 'Frederik Schram',
      'position': 'GK',
      'country': 'Iceland',
      'club': 'FC Roskilde'
    }, {
      'name': 'Kari Arnason',
      'position': 'DEF',
      'country': 'Iceland',
      'club': 'Aberdeen'
    }, {
      'name': 'Ari Freyr Skulason',
      'position': 'DEF',
      'country': 'Iceland',
      'club': 'KSC Lokeren Oost-Vlaanderen'
    }, {
      'name': 'Birkir Mar Saevarsson',
      'position': 'DEF',
      'country': 'Iceland',
      'club': 'Hammarby'
    }, {
      'name': 'Sverrir Ingi Ingason',
      'position': 'DEF',
      'country': 'Iceland',
      'club': 'FC Rostov'
    }, {
      'name': 'Hordur Magnusson',
      'position': 'DEF',
      'country': 'Iceland',
      'club': 'Bristol City'
    }, {
      'name': 'Holmar Orn Eyjolfsson',
      'position': 'DEF',
      'country': 'Iceland',
      'club': 'Maccabi Haifa'
    }, {
      'name': 'Ragnar Sigurdsson',
      'position': 'DEF',
      'country': 'Iceland',
      'club': 'FC Rostov'
    }, {
      'name': 'Johann Berg Gudmundsson',
      'position': 'MID',
      'country': 'Iceland',
      'club': 'Burnley'
    }, {
      'name': 'Birkir Bjarnason',
      'position': 'MID',
      'country': 'Iceland',
      'club': 'Aston Villa'
    }, {
      'name': 'Arnor Ingvi Traustason',
      'position': 'MID',
      'country': 'Iceland',
      'club': 'Malmo FF'
    }, {
      'name': 'Emil Hallfredsson',
      'position': 'MID',
      'country': 'Iceland',
      'club': 'Udinese'
    }, {
      'name': 'Gylfi Sigurdsson',
      'position': 'MID',
      'country': 'Iceland',
      'club': 'Everton'
    }, {
      'name': 'Olafur Ingi Skulason',
      'position': 'MID',
      'country': 'Iceland',
      'club': 'Kardemir Karabukspor'
    }, {
      'name': 'Rurik Gislason',
      'position': 'MID',
      'country': 'Iceland',
      'club': 'FC Nurnberg'
    }, {
      'name': 'Samuel Fridjonsson',
      'position': 'MID',
      'country': 'Iceland',
      'club': 'Valerenga'
    }, {
      'name': 'Aron Gunnarsson',
      'position': 'MID',
      'country': 'Iceland',
      'club': 'Cardiff City'
    }, {
      'name': 'Alfred Finnbogason',
      'position': 'ATT',
      'country': 'Iceland',
      'club': 'FC Augsburg'
    }, {
      'name': 'Bjorn Bergmann Sigurdarson',
      'position': 'ATT',
      'country': 'Iceland',
      'club': 'FC Rostov'
    }, {
      'name': 'Jon Dadi Bodvarsson',
      'position': 'ATT',
      'country': 'Iceland',
      'club': 'Reading'
    }, {
      'name': 'Albert Gudmundsson',
      'position': 'ATT',
      'country': 'Iceland',
      'club': 'PSV Eindhoven'
    }, {
      'name': 'Francis Uzoho',
      'position': 'GK',
      'country': 'Nigeria',
      'club': 'Deportivo La Coruna'
    }, {
      'name': 'Ikechukwu Ezenwa',
      'position': 'GK',
      'country': 'Nigeria',
      'club': 'Enyimba'
    }, {
      'name': 'Daniel Akpeyi',
      'position': 'GK',
      'country': 'Nigeria',
      'club': 'Chippa United'
    }, {
      'name': 'William Troost-Ekong',
      'position': 'DEF',
      'country': 'Nigeria',
      'club': ''
    }, {
      'name': 'Abdullahi Shehu',
      'position': 'DEF',
      'country': 'Nigeria',
      'club': 'Bursaspor'
    }, {
      'name': 'Tyronne Ebuehi',
      'position': 'DEF',
      'country': 'Nigeria',
      'club': 'Ado Den Haag'
    }, {
      'name': 'Elderson Echiejile',
      'position': 'DEF',
      'country': 'Nigeria',
      'club': 'Cercle Brugge KSV'
    }, {
      'name': 'Bryan Idowu',
      'position': 'DEF',
      'country': 'Nigeria',
      'club': 'Amkar Perm'
    }, {
      'name': 'Chidozie Awaziem',
      'position': 'DEF',
      'country': 'Nigeria',
      'club': 'Nantes FC'
    }, {
      'name': 'Leon Balogun',
      'position': 'DEF',
      'country': 'Nigeria',
      'club': 'Brighton'
    }, {
      'name': 'Kenneth Omeruo',
      'position': 'DEF',
      'country': 'Nigeria',
      'club': 'Kasimpasa'
    }, {
      'name': 'Mikel John Obi',
      'position': 'MID',
      'country': 'Nigeria',
      'club': 'Tianjin Teda'
    }, {
      'name': 'Ogenyi Onazi',
      'position': 'MID',
      'country': 'Nigeria',
      'club': 'Trabzonspor'
    }, {
      'name': 'Wilfred Ndidi',
      'position': 'MID',
      'country': 'Nigeria',
      'club': 'Leicester City'
    }, {
      'name': 'Oghenekaro Etebo',
      'position': 'MID',
      'country': 'Nigeria',
      'club': 'Las Palmas'
    }, {
      'name': 'John Ogu',
      'position': 'MID',
      'country': 'Nigeria',
      'club': 'Hapoel Be\'er Sheva'
    }, {
      'name': 'Joel Obi',
      'position': 'MID',
      'country': 'Nigeria',
      'club': 'Torino'
    }, {
      'name': 'Italy)',
      'position': 'MID',
      'country': 'Nigeria',
      'club': 'Italy'
    }, {
      'name': 'Ahmed Musa',
      'position': 'ATT',
      'country': 'Nigeria',
      'club': 'CSKA Moscow'
    }, {
      'name': 'Kelechi Iheanacho',
      'position': 'ATT',
      'country': 'Nigeria',
      'club': 'Leicester City'
    }, {
      'name': 'Victor Moses',
      'position': 'ATT',
      'country': 'Nigeria',
      'club': 'Chelsea'
    }, {
      'name': 'Odion Ighalo',
      'position': 'ATT',
      'country': 'Nigeria',
      'club': 'Changchun Yatai'
    }, {
      'name': 'Alex Iwobi',
      'position': 'ATT',
      'country': 'Nigeria',
      'club': 'Arsenal'
    }, {
      'name': 'Simeon Nwankwo',
      'position': 'ATT',
      'country': 'Nigeria',
      'club': 'Crotone'
    }, {
      'name': 'Alisson',
      'position': 'GK',
      'country': 'Brazil',
      'club': 'Roma'
    }, {
      'name': 'Ederson',
      'position': 'GK',
      'country': 'Brazil',
      'club': 'Manchester City'
    }, {
      'name': 'Cassio',
      'position': 'GK',
      'country': 'Brazil',
      'club': 'Corinthians'
    }, {
      'name': 'Danilo',
      'position': 'DEF',
      'country': 'Brazil',
      'club': 'Manchester City'
    }, {
      'name': 'Fagner',
      'position': 'DEF',
      'country': 'Brazil',
      'club': 'Corinthians'
    }, {
      'name': 'Marcelo',
      'position': 'DEF',
      'country': 'Brazil',
      'club': 'Real Madrid'
    }, {
      'name': 'Filipe Luis',
      'position': 'DEF',
      'country': 'Brazil',
      'club': 'Atletico Madrid'
    }, {
      'name': 'Thiago Silva',
      'position': 'DEF',
      'country': 'Brazil',
      'club': 'PSG'
    }, {
      'name': 'Marquinhos',
      'position': 'DEF',
      'country': 'Brazil',
      'club': 'PSG'
    }, {
      'name': 'Miranda',
      'position': 'DEF',
      'country': 'Brazil',
      'club': 'Inter Milan'
    }, {
      'name': 'Pedro Geromel',
      'position': 'DEF',
      'country': 'Brazil',
      'club': 'Gremio'
    }, {
      'name': 'Casemiro',
      'position': 'MID',
      'country': 'Brazil',
      'club': 'Real Madrid'
    }, {
      'name': 'Fernandinho',
      'position': 'MID',
      'country': 'Brazil',
      'club': 'Manchester City'
    }, {
      'name': 'Paulinho',
      'position': 'MID',
      'country': 'Brazil',
      'club': 'Barcelona'
    }, {
      'name': 'Fred',
      'position': 'MID',
      'country': 'Brazil',
      'club': 'Shakhtar Donetsk'
    }, {
      'name': 'Renato Augusto',
      'position': 'MID',
      'country': 'Brazil',
      'club': 'Beijing Guoan'
    }, {
      'name': 'Philippe Coutinho',
      'position': 'MID',
      'country': 'Brazil',
      'club': 'Barcelona'
    }, {
      'name': 'Willian',
      'position': 'MID',
      'country': 'Brazil',
      'club': 'Chelsea'
    }, {
      'name': 'Douglas Costa',
      'position': 'MID',
      'country': 'Brazil',
      'club': 'Juventus'
    }, {
      'name': 'Neymar',
      'position': 'ATT',
      'country': 'Brazil',
      'club': 'PSG'
    }, {
      'name': 'Taison',
      'position': 'ATT',
      'country': 'Brazil',
      'club': 'Shakhtar Donetsk'
    }, {
      'name': 'Gabriel Jesus',
      'position': 'ATT',
      'country': 'Brazil',
      'club': 'Manchester City'
    }, {
      'name': 'Roberto Firmino',
      'position': 'ATT',
      'country': 'Brazil',
      'club': 'Liverpool'
    }, {
      'name': 'Keylor Navas',
      'position': 'GK',
      'country': 'Costa Rica',
      'club': 'Real Madrid'
    }, {
      'name': 'Patrick Pemberton',
      'position': 'GK',
      'country': 'Costa Rica',
      'club': 'Liga Deportiva Alajuelense'
    }, {
      'name': 'Leonel Moreira',
      'position': 'GK',
      'country': 'Costa Rica',
      'club': 'CS Herediano'
    }, {
      'name': 'Cristian Gamboa',
      'position': 'DEF',
      'country': 'Costa Rica',
      'club': 'Celtic'
    }, {
      'name': 'Ian Smith',
      'position': 'DEF',
      'country': 'Costa Rica',
      'club': 'Santos de Guapiles FC'
    }, {
      'name': 'Ronald Matarrita',
      'position': 'DEF',
      'country': 'Costa Rica',
      'club': 'News York City'
    }, {
      'name': 'Bryan Oviedo',
      'position': 'DEF',
      'country': 'Costa Rica',
      'club': 'Sunderland'
    }, {
      'name': 'Oscar Duarte',
      'position': 'DEF',
      'country': 'Costa Rica',
      'club': 'Espanyol'
    }, {
      'name': 'Giancarlo Gonzalez',
      'position': 'DEF',
      'country': 'Costa Rica',
      'club': 'Bologna'
    }, {
      'name': 'Francisco Calvo',
      'position': 'DEF',
      'country': 'Costa Rica',
      'club': 'Minnesota United'
    }, {
      'name': 'Kendall Waston',
      'position': 'DEF',
      'country': 'Costa Rica',
      'club': 'Vancouver Whitecaps'
    }, {
      'name': 'Johnny Acosta',
      'position': 'DEF',
      'country': 'Costa Rica',
      'club': 'Rionegro Aguilas'
    }, {
      'name': 'David Guzman',
      'position': 'MID',
      'country': 'Costa Rica',
      'club': 'Portland Timbers'
    }, {
      'name': 'Yeltsin Tejeda',
      'position': 'MID',
      'country': 'Costa Rica',
      'club': 'FC Lausanne-Sport'
    }, {
      'name': 'Celso Borges',
      'position': 'MID',
      'country': 'Costa Rica',
      'club': 'Deportivo de La Coruna'
    }, {
      'name': 'Randall Azofeifa',
      'position': 'MID',
      'country': 'Costa Rica',
      'club': 'CS Herediano'
    }, {
      'name': 'Rodney Wallace',
      'position': 'MID',
      'country': 'Costa Rica',
      'club': 'News York City'
    }, {
      'name': 'Bryan Ruiz',
      'position': 'MID',
      'country': 'Costa Rica',
      'club': 'Sporting'
    }, {
      'name': 'Daniel Colindres',
      'position': 'MID',
      'country': 'Costa Rica',
      'club': 'Deportivo Saprissa'
    }, {
      'name': 'Christian Bolanos',
      'position': 'MID',
      'country': 'Costa Rica',
      'club': 'Deportivo Saprissa'
    }, {
      'name': 'Johan Venegas',
      'position': 'ATT',
      'country': 'Costa Rica',
      'club': 'Deportivo Saprissa'
    }, {
      'name': 'Joel Campbell',
      'position': 'ATT',
      'country': 'Costa Rica',
      'club': 'Real Betis'
    }, {
      'name': 'Marco Urena',
      'position': 'ATT',
      'country': 'Costa Rica',
      'club': 'Los Angeles FC'
    }, {
      'name': 'Vladimir Stojkovic',
      'position': 'GK',
      'country': 'Serbia',
      'club': 'Partizan Belgrade'
    }, {
      'name': 'Predrag Rajkovic',
      'position': 'GK',
      'country': 'Serbia',
      'club': 'Maccabi Tel Aviv'
    }, {
      'name': 'Marko Dmitrovic',
      'position': 'GK',
      'country': 'Serbia',
      'club': 'Eibar'
    }, {
      'name': 'Aleksandar Kolarov',
      'position': 'DEF',
      'country': 'Serbia',
      'club': 'AS Roma'
    }, {
      'name': 'Branislav Ivanovic',
      'position': 'DEF',
      'country': 'Serbia',
      'club': 'Zenit St Petersburg'
    }, {
      'name': 'Dusko Tosic',
      'position': 'DEF',
      'country': 'Serbia',
      'club': 'Guangzhou R&F'
    }, {
      'name': 'Antonio Rukavina',
      'position': 'DEF',
      'country': 'Serbia',
      'club': 'Villarreal'
    }, {
      'name': 'Milos Veljkovic',
      'position': 'DEF',
      'country': 'Serbia',
      'club': 'Werder Bremen'
    }, {
      'name': 'Milan Rodic',
      'position': 'DEF',
      'country': 'Serbia',
      'club': 'Red Star Belgrade'
    }, {
      'name': 'Uros Spajic',
      'position': 'DEF',
      'country': 'Serbia',
      'club': 'Krasnodar'
    }, {
      'name': 'Nikola Milenkovic',
      'position': 'DEF',
      'country': 'Serbia',
      'club': 'Fiorentina'
    }, {
      'name': 'Nemanja Matic',
      'position': 'MID',
      'country': 'Serbia',
      'club': 'Manchester United'
    }, {
      'name': 'Luka Milivojevic',
      'position': 'MID',
      'country': 'Serbia',
      'club': 'Crystal Palace'
    }, {
      'name': 'Sergej Milinkovic-Savic',
      'position': 'MID',
      'country': 'Serbia',
      'club': 'Lazio'
    }, {
      'name': 'Marko Grujic',
      'position': 'MID',
      'country': 'Serbia',
      'club': 'Liverpool'
    }, {
      'name': 'Adem Ljajic',
      'position': 'MID',
      'country': 'Serbia',
      'club': 'Torino'
    }, {
      'name': 'Dusan Tadic',
      'position': 'MID',
      'country': 'Serbia',
      'club': 'Southampton'
    }, {
      'name': 'Filip Kostic',
      'position': 'MID',
      'country': 'Serbia',
      'club': 'Hamburg SV'
    }, {
      'name': 'Andrija Zivkovic',
      'position': 'MID',
      'country': 'Serbia',
      'club': 'Benfica'
    }, {
      'name': 'Nemanja Radonjic',
      'position': 'MID',
      'country': 'Serbia',
      'club': 'Red Star Belgrade'
    }, {
      'name': 'Aleksandar Mitrovic',
      'position': 'ATT',
      'country': 'Serbia',
      'club': 'Newcastle United'
    }, {
      'name': 'Aleksandar Prijovic',
      'position': 'ATT',
      'country': 'Serbia',
      'club': 'PAOK Salonika'
    }, {
      'name': 'Luka Jovic',
      'position': 'ATT',
      'country': 'Serbia',
      'club': 'Benfica'
    }, {
      'name': 'Yann Sommer',
      'position': 'GK',
      'country': 'Switzerland',
      'club': 'Borussia Mönchengladbach'
    }, {
      'name': 'Roman Bürki',
      'position': 'GK',
      'country': 'Switzerland',
      'club': 'Borussia Dortmund'
    }, {
      'name': 'Yvon Mvogo',
      'position': 'GK',
      'country': 'Switzerland',
      'club': 'RB Leipzig'
    }, {
      'name': 'Stephan Lichtsteiner',
      'position': 'DEF',
      'country': 'Switzerland',
      'club': 'Juventus'
    }, {
      'name': 'Johan Djourou',
      'position': 'DEF',
      'country': 'Switzerland',
      'club': 'Antalyaspor'
    }, {
      'name': 'Ricardo Rodríguez',
      'position': 'DEF',
      'country': 'Switzerland',
      'club': 'Milan'
    }, {
      'name': 'Fabian Schär',
      'position': 'DEF',
      'country': 'Switzerland',
      'club': 'Deportivo La Coruna'
    }, {
      'name': 'François Moubandje',
      'position': 'DEF',
      'country': 'Switzerland',
      'club': 'Toulouse'
    }, {
      'name': 'Michael Lang',
      'position': 'DEF',
      'country': 'Switzerland',
      'club': 'Basel'
    }, {
      'name': 'Manuel Akanji',
      'position': 'DEF',
      'country': 'Switzerland',
      'club': 'Borussia Dortmund'
    }, {
      'name': 'Nico Elvedi',
      'position': 'DEF',
      'country': 'Switzerland',
      'club': 'Borussia Mönchengladbach'
    }, {
      'name': 'Valon Behrami',
      'position': 'MID',
      'country': 'Switzerland',
      'club': 'Udinese'
    }, {
      'name': 'Xherdan Shaqiri',
      'position': 'MID',
      'country': 'Switzerland',
      'club': 'Stoke'
    }, {
      'name': 'Gelson Fernandes',
      'position': 'MID',
      'country': 'Switzerland',
      'club': 'Eintracht Frankfurt'
    }, {
      'name': 'Blerim Džemaili',
      'position': 'MID',
      'country': 'Switzerland',
      'club': 'Bologna'
    }, {
      'name': 'Granit Xhaka',
      'position': 'MID',
      'country': 'Switzerland',
      'club': 'Arsenal'
    }, {
      'name': 'Steven Zuber',
      'position': 'MID',
      'country': 'Switzerland',
      'club': '1899 Hoffenheim'
    }, {
      'name': 'Remo Freuler',
      'position': 'MID',
      'country': 'Switzerland',
      'club': 'Atalanta'
    }, {
      'name': 'Denis Zakaria',
      'position': 'MID',
      'country': 'Switzerland',
      'club': 'Borussia Mönchengladbach'
    }, {
      'name': 'Haris Seferović',
      'position': 'ATT',
      'country': 'Switzerland',
      'club': 'Benfica'
    }, {
      'name': 'Josip Drmić',
      'position': 'ATT',
      'country': 'Switzerland',
      'club': 'Borussia Mönchengladbach'
    }, {
      'name': 'Breel Embolo',
      'position': 'ATT',
      'country': 'Switzerland',
      'club': 'Schalke 04'
    }, {
      'name': 'Mario Gavranović',
      'position': 'ATT',
      'country': 'Switzerland',
      'club': 'Dinamo Zagreb'
    }, {
      'name': 'Manuel Neuer',
      'position': 'GK',
      'country': 'Germany',
      'club': 'Bayern Munich'
    }, {
      'name': 'Marc-Andre ter Stegen',
      'position': 'GK',
      'country': 'Germany',
      'club': 'Barcelona'
    }, {
      'name': 'Kevin Trapp',
      'position': 'GK',
      'country': 'Germany',
      'club': 'Paris St-Germain'
    }, {
      'name': 'Jerome Boateng',
      'position': 'DEF',
      'country': 'Germany',
      'club': 'Bayern Munich'
    }, {
      'name': 'Matthias Ginter',
      'position': 'DEF',
      'country': 'Germany',
      'club': 'Borussia Monchengladbach'
    }, {
      'name': 'Jonas Hector',
      'position': 'DEF',
      'country': 'Germany',
      'club': 'Cologne'
    }, {
      'name': 'Mats Hummels',
      'position': 'DEF',
      'country': 'Germany',
      'club': 'Bayern Munich'
    }, {
      'name': 'Joshua Kimmich',
      'position': 'DEF',
      'country': 'Germany',
      'club': 'Bayern Munich'
    }, {
      'name': 'Marvin Plattenhardt',
      'position': 'DEF',
      'country': 'Germany',
      'club': 'Hertha Berlin'
    }, {
      'name': 'Antonio Rudiger',
      'position': 'DEF',
      'country': 'Germany',
      'club': 'Chelsea'
    }, {
      'name': 'Niklas Sule',
      'position': 'DEF',
      'country': 'Germany',
      'club': 'Bayern Munich'
    }, {
      'name': 'Julian Brandt',
      'position': 'MID',
      'country': 'Germany',
      'club': 'Bayer Leverkusen'
    }, {
      'name': 'Julian Draxler',
      'position': 'MID',
      'country': 'Germany',
      'club': 'Paris St-Germain'
    }, {
      'name': 'Leon Goretska',
      'position': 'MID',
      'country': 'Germany',
      'club': 'Schalke'
    }, {
      'name': 'Ilkay Gundogan',
      'position': 'MID',
      'country': 'Germany',
      'club': 'Manchester City'
    }, {
      'name': 'Sami Khedira',
      'position': 'MID',
      'country': 'Germany',
      'club': 'Juventus'
    }, {
      'name': 'Toni Kroos',
      'position': 'MID',
      'country': 'Germany',
      'club': 'Real Madrid'
    }, {
      'name': 'Mesut Ozil',
      'position': 'MID',
      'country': 'Germany',
      'club': 'Arsenal'
    }, {
      'name': 'Sebastian Rudy',
      'position': 'MID',
      'country': 'Germany',
      'club': 'Bayern Munich'
    }, {
      'name': 'Mario Gomez',
      'position': 'ATT',
      'country': 'Germany',
      'club': 'Stuttgart'
    }, {
      'name': 'Thomas Muller',
      'position': 'ATT',
      'country': 'Germany',
      'club': 'Bayern Munich'
    }, {
      'name': 'Marco Reus',
      'position': 'ATT',
      'country': 'Germany',
      'club': 'Borussia Dortmund'
    }, {
      'name': 'Timo Werner',
      'position': 'ATT',
      'country': 'Germany',
      'club': 'RB Leipzig'
    }, {
      'name': 'Guillermo Ochoa',
      'position': 'GK',
      'country': 'Mexico',
      'club': 'Standard Liege'
    }, {
      'name': 'Alfredo Talavera',
      'position': 'GK',
      'country': 'Mexico',
      'club': 'Toluca'
    }, {
      'name': 'Jesus Corona',
      'position': 'GK',
      'country': 'Mexico',
      'club': 'Cruz Azul'
    }, {
      'name': 'Carlos Salcedo',
      'position': 'DEF',
      'country': 'Mexico',
      'club': 'Eintracht Frankfurt'
    }, {
      'name': 'Diego Reyes',
      'position': 'DEF',
      'country': 'Mexico',
      'club': 'Porto'
    }, {
      'name': 'Hector Moreno',
      'position': 'DEF',
      'country': 'Mexico',
      'club': 'Real Sociedad'
    }, {
      'name': 'Hugo Ayala',
      'position': 'DEF',
      'country': 'Mexico',
      'club': 'Tigres'
    }, {
      'name': 'Edson Alvarez',
      'position': 'DEF',
      'country': 'Mexico',
      'club': 'America'
    }, {
      'name': 'Jesus Gallardo',
      'position': 'DEF',
      'country': 'Mexico',
      'club': 'Monterrey'
    }, {
      'name': 'Miguel Layun',
      'position': 'DEF',
      'country': 'Mexico',
      'club': 'Sevilla'
    }, {
      'name': 'Erick Gutierrez',
      'position': 'DEF',
      'country': 'Mexico',
      'club': 'Pachuca'
    }, {
      'name': 'Rafael Marquez',
      'position': 'MID',
      'country': 'Mexico',
      'club': 'Atlas'
    }, {
      'name': 'Hector Herrera',
      'position': 'MID',
      'country': 'Mexico',
      'club': 'Porto'
    }, {
      'name': 'Jonathan Dos Santos',
      'position': 'MID',
      'country': 'Mexico',
      'club': 'LA Galaxy'
    }, {
      'name': 'Giovani Dos Santos',
      'position': 'MID',
      'country': 'Mexico',
      'club': 'LA Galaxy'
    }, {
      'name': 'Andres Guardado',
      'position': 'MID',
      'country': 'Mexico',
      'club': 'Real Betis'
    }, {
      'name': 'Marco Fabian',
      'position': 'MID',
      'country': 'Mexico',
      'club': 'Eintracht Frankfurt'
    }, {
      'name': 'Javier Hernandez',
      'position': 'ATT',
      'country': 'Mexico',
      'club': 'West Ham'
    }, {
      'name': 'Raul Jimenez',
      'position': 'ATT',
      'country': 'Mexico',
      'club': 'Benfica'
    }, {
      'name': 'Oribe Peralta',
      'position': 'ATT',
      'country': 'Mexico',
      'club': 'America'
    }, {
      'name': 'Jesus Manuel Corona',
      'position': 'ATT',
      'country': 'Mexico',
      'club': 'Porto'
    }, {
      'name': 'Carlos Vela',
      'position': 'ATT',
      'country': 'Mexico',
      'club': 'Los Angeles FC'
    }, {
      'name': 'Javier Aquino',
      'position': 'ATT',
      'country': 'Mexico',
      'club': 'Tigres'
    }, {
      'name': 'Hirving Lozano',
      'position': 'ATT',
      'country': 'Mexico',
      'club': 'PSV Eindhoven'
    }, {
      'name': 'Kim Seung-gyu',
      'position': 'GK',
      'country': 'Korea Republic',
      'club': 'Vissel Kobe'
    }, {
      'name': 'Kim Jin-hyeon',
      'position': 'GK',
      'country': 'Korea Republic',
      'club': 'Cerezo Osaka'
    }, {
      'name': 'Cho Hyun-woo',
      'position': 'GK',
      'country': 'Korea Republic',
      'club': 'Daegu FC'
    }, {
      'name': 'Kim Young-gwon',
      'position': 'DEF',
      'country': 'Korea Republic',
      'club': 'Guangzhou Evergrande'
    }, {
      'name': 'Jang Hyun-soo',
      'position': 'DEF',
      'country': 'Korea Republic',
      'club': 'FC Tokyo'
    }, {
      'name': 'Jung Seung-hyun',
      'position': 'DEF',
      'country': 'Korea Republic',
      'club': 'Sagan Tosu'
    }, {
      'name': 'Yun Yong-sun',
      'position': 'DEF',
      'country': 'Korea Republic',
      'club': 'Seongnam FC'
    }, {
      'name': 'Oh Ban-suk',
      'position': 'DEF',
      'country': 'Korea Republic',
      'club': 'Jeju United'
    }, {
      'name': 'Kim Min-woo',
      'position': 'DEF',
      'country': 'Korea Republic',
      'club': 'Sangju Sangmu'
    }, {
      'name': 'Park Joo-ho',
      'position': 'DEF',
      'country': 'Korea Republic',
      'club': 'Ulsan Hyundai'
    }, {
      'name': 'Hong Chul',
      'position': 'DEF',
      'country': 'Korea Republic',
      'club': 'Sangju Sangmu'
    }, {
      'name': 'Go Yo-han',
      'position': 'DEF',
      'country': 'Korea Republic',
      'club': 'FC Seoul'
    }, {
      'name': 'Lee Yong',
      'position': 'DEF',
      'country': 'Korea Republic',
      'club': 'Jeonbuk Hyundai Motors'
    }, {
      'name': 'Ki Sung-yueng',
      'position': 'MID',
      'country': 'Korea Republic',
      'club': 'Swansea City'
    }, {
      'name': 'Jung Woo-young',
      'position': 'MID',
      'country': 'Korea Republic',
      'club': 'Vissel Kobe'
    }, {
      'name': 'Ju Se-jong',
      'position': 'MID',
      'country': 'Korea Republic',
      'club': 'Asan Mugunghwa FC'
    }, {
      'name': 'Koo Ja-cheol',
      'position': 'MID',
      'country': 'Korea Republic',
      'club': 'FC Augsburg'
    }, {
      'name': 'Lee Jae-sung',
      'position': 'MID',
      'country': 'Korea Republic',
      'club': 'Jeonbuk Hyundai Motors'
    }, {
      'name': 'Lee Seung-woo',
      'position': 'MID',
      'country': 'Korea Republic',
      'club': 'Hellas Verona'
    }, {
      'name': 'Moon Seon-min',
      'position': 'MID',
      'country': 'Korea Republic',
      'club': 'Incheon United'
    }, {
      'name': 'Kim Shin-wook',
      'position': 'ATT',
      'country': 'Korea Republic',
      'club': 'Jeonbuk Hyundai Motors'
    }, {
      'name': 'Son Heung-min',
      'position': 'ATT',
      'country': 'Korea Republic',
      'club': 'Tottenham Hotspur'
    }, {
      'name': 'Hwang Hee-chan',
      'position': 'ATT',
      'country': 'Korea Republic',
      'club': 'FC Red Bull Salzburg'
    }, {
      'name': 'Robin Olsen',
      'position': 'GK',
      'country': 'Sweden',
      'club': 'Copenhagen'
    }, {
      'name': 'Karl-Johan Johnsson',
      'position': 'GK',
      'country': 'Sweden',
      'club': 'Guingamp'
    }, {
      'name': 'Kristoffer Nordfeldt',
      'position': 'GK',
      'country': 'Sweden',
      'club': 'Swansea'
    }, {
      'name': 'Mikael Lustig',
      'position': 'DEF',
      'country': 'Sweden',
      'club': 'Celtic'
    }, {
      'name': 'Victor Lindelof',
      'position': 'DEF',
      'country': 'Sweden',
      'club': 'Manchester United'
    }, {
      'name': 'Andreas Granqvist',
      'position': 'DEF',
      'country': 'Sweden',
      'club': 'Krasnador'
    }, {
      'name': 'Martin Olsson',
      'position': 'DEF',
      'country': 'Sweden',
      'club': 'Swansea'
    }, {
      'name': 'Ludwig Augustinsson',
      'position': 'DEF',
      'country': 'Sweden',
      'club': 'Werder Bremen'
    }, {
      'name': 'Filip Helander',
      'position': 'DEF',
      'country': 'Sweden',
      'club': 'Bologna'
    }, {
      'name': 'Emil Krafth',
      'position': 'DEF',
      'country': 'Sweden',
      'club': 'Bologna'
    }, {
      'name': 'Pontus Jansson',
      'position': 'DEF',
      'country': 'Sweden',
      'club': 'Leeds United'
    }, {
      'name': 'Sebastian Larsson',
      'position': 'MID',
      'country': 'Sweden',
      'club': 'Hull'
    }, {
      'name': 'Albin Ekdal',
      'position': 'MID',
      'country': 'Sweden',
      'club': 'Hamburg'
    }, {
      'name': 'Emil Forsberg',
      'position': 'MID',
      'country': 'Sweden',
      'club': 'RB Leipzig'
    }, {
      'name': 'Gustav Svensson',
      'position': 'MID',
      'country': 'Sweden',
      'club': 'Seattle Sounders'
    }, {
      'name': 'Oscar Hiljemark',
      'position': 'MID',
      'country': 'Sweden',
      'club': 'Genoa'
    }, {
      'name': 'Viktor Claesson',
      'position': 'MID',
      'country': 'Sweden',
      'club': 'Krasnador'
    }, {
      'name': 'Marcus Rohden',
      'position': 'MID',
      'country': 'Sweden',
      'club': 'Crotone'
    }, {
      'name': 'Jimmy Durmaz',
      'position': 'MID',
      'country': 'Sweden',
      'club': 'Toulouse'
    }, {
      'name': 'Marcus Berg',
      'position': 'ATT',
      'country': 'Sweden',
      'club': 'Al Ain'
    }, {
      'name': 'John Guidetti',
      'position': 'ATT',
      'country': 'Sweden',
      'club': 'Alaves'
    }, {
      'name': 'Ola Toivonen',
      'position': 'ATT',
      'country': 'Sweden',
      'club': 'Toulouse'
    }, {
      'name': 'Isaac Kiese Thelin',
      'position': 'ATT',
      'country': 'Sweden',
      'club': 'Waasland-Beveren'
    }, {
      'name': 'Koen Casteels',
      'position': 'GK',
      'country': 'Belgium',
      'club': 'Wolfsburg'
    }, {
      'name': 'Thibaut Courtois',
      'position': 'GK',
      'country': 'Belgium',
      'club': 'Chelsea'
    }, {
      'name': 'Simon Mignolet',
      'position': 'GK',
      'country': 'Belgium',
      'club': 'Liverpool'
    }, {
      'name': 'Toby Alderweireld',
      'position': 'DEF',
      'country': 'Belgium',
      'club': 'Tottenham Hotspur'
    }, {
      'name': 'Dedryck Boyata',
      'position': 'DEF',
      'country': 'Belgium',
      'club': 'Celtic'
    }, {
      'name': 'Vincent Kompany',
      'position': 'DEF',
      'country': 'Belgium',
      'club': 'Manchester City'
    }, {
      'name': 'Thomas Meunier',
      'position': 'DEF',
      'country': 'Belgium',
      'club': 'Paris St-Germain'
    }, {
      'name': 'Laurent Ciman',
      'position': 'DEF',
      'country': 'Belgium',
      'club': ''
    }, {
      'name': 'Thomas Vermaelen',
      'position': 'DEF',
      'country': 'Belgium',
      'club': 'Barcelona'
    }, {
      'name': 'Jan Vertonghen',
      'position': 'DEF',
      'country': 'Belgium',
      'club': 'Tottenham Hotspur'
    }, {
      'name': 'Yannick Carrasco',
      'position': 'MID',
      'country': 'Belgium',
      'club': 'Dalian Yifang'
    }, {
      'name': 'Kevin de Bruyne',
      'position': 'MID',
      'country': 'Belgium',
      'club': 'Manchester City'
    }, {
      'name': 'Mousa Dembele',
      'position': 'MID',
      'country': 'Belgium',
      'club': 'Tottenham Hotspur'
    }, {
      'name': 'Leander Dendoncker',
      'position': 'MID',
      'country': 'Belgium',
      'club': 'Anderlecht'
    }, {
      'name': 'Marouane Fellaini',
      'position': 'MID',
      'country': 'Belgium',
      'club': 'Manchester United'
    }, {
      'name': 'Eden Hazard',
      'position': 'MID',
      'country': 'Belgium',
      'club': 'Chelsea'
    }, {
      'name': 'Thorgan Hazard',
      'position': 'MID',
      'country': 'Belgium',
      'club': 'Borussia Monchengladbach'
    }, {
      'name': 'Adnan Januzaj',
      'position': 'MID',
      'country': 'Belgium',
      'club': 'Real Sociedad'
    }, {
      'name': 'Dries Mertens',
      'position': 'MID',
      'country': 'Belgium',
      'club': 'Napoli'
    }, {
      'name': 'Youri Tielemans',
      'position': 'MID',
      'country': 'Belgium',
      'club': 'Monaco'
    }, {
      'name': 'Axel Witsel',
      'position': 'MID',
      'country': 'Belgium',
      'club': 'Tianjin Quanjian'
    }, {
      'name': 'Michy Batshuayi',
      'position': 'ATT',
      'country': 'Belgium',
      'club': 'Chelsea'
    }, {
      'name': 'Nacer Chadli',
      'position': 'ATT',
      'country': 'Belgium',
      'club': 'West Brom'
    }, {
      'name': 'Romelu Lukaku',
      'position': 'ATT',
      'country': 'Belgium',
      'club': 'Manchester United'
    }, {
      'name': 'Jack Butland',
      'position': 'GK',
      'country': 'England',
      'club': 'Stoke City'
    }, {
      'name': 'Jordan Pickford',
      'position': 'GK',
      'country': 'England',
      'club': 'Everton'
    }, {
      'name': 'Nick Pope',
      'position': 'GK',
      'country': 'England',
      'club': 'Burnley'
    }, {
      'name': 'Trent Alexander-Arnold',
      'position': 'DEF',
      'country': 'England',
      'club': 'Liverpool'
    }, {
      'name': 'Gary Cahill',
      'position': 'DEF',
      'country': 'England',
      'club': 'Chelsea'
    }, {
      'name': 'Fabian Delph',
      'position': 'DEF',
      'country': 'England',
      'club': 'Manchester City'
    }, {
      'name': 'Phil Jones',
      'position': 'DEF',
      'country': 'England',
      'club': 'Manchester United'
    }, {
      'name': 'Harry Maguire',
      'position': 'DEF',
      'country': 'England',
      'club': 'Leicester City'
    }, {
      'name': 'Danny Rose',
      'position': 'DEF',
      'country': 'England',
      'club': 'Tottenham Hotspur'
    }, {
      'name': 'John Stones',
      'position': 'DEF',
      'country': 'England',
      'club': 'Manchester City'
    }, {
      'name': 'Kieran Trippier',
      'position': 'DEF',
      'country': 'England',
      'club': 'Tottenham Hotspur'
    }, {
      'name': 'Kyle Walker',
      'position': 'DEF',
      'country': 'England',
      'club': 'Manchester City'
    }, {
      'name': 'Ashley Young',
      'position': 'DEF',
      'country': 'England',
      'club': 'Manchester United'
    }, {
      'name': 'Dele Alli',
      'position': 'MID',
      'country': 'England',
      'club': 'Tottenham Hotspur'
    }, {
      'name': 'Eric Dier',
      'position': 'MID',
      'country': 'England',
      'club': 'Tottenham Hotspur'
    }, {
      'name': 'Jordan Henderson',
      'position': 'MID',
      'country': 'England',
      'club': 'Liverpool'
    }, {
      'name': 'Jesse Lingard',
      'position': 'MID',
      'country': 'England',
      'club': 'Manchester United'
    }, {
      'name': 'Ruben Loftus-Cheek',
      'position': 'MID',
      'country': 'England',
      'club': 'Chelsea'
    }, {
      'name': 'Harry Kane',
      'position': 'ATT',
      'country': 'England',
      'club': 'Tottenham Hotspur'
    }, {
      'name': 'Marcus Rashford',
      'position': 'ATT',
      'country': 'England',
      'club': 'Manchester United'
    }, {
      'name': 'Raheem Sterling',
      'position': 'ATT',
      'country': 'England',
      'club': 'Manchester City'
    }, {
      'name': 'Jamie Vardy',
      'position': 'ATT',
      'country': 'England',
      'club': 'Leicester City'
    }, {
      'name': 'Danny Welbeck',
      'position': 'ATT',
      'country': 'England',
      'club': 'Manchester United'
    }, {
      'name': 'Jose Calderon',
      'position': 'GK',
      'country': 'Panama',
      'club': 'Chorrillo FC'
    }, {
      'name': 'Jaime Penedo',
      'position': 'GK',
      'country': 'Panama',
      'club': 'Dinamo Bucharest'
    }, {
      'name': 'Alex Rodriguez',
      'position': 'GK',
      'country': 'Panama',
      'club': 'San Francisco FC'
    }, {
      'name': 'Felipe Baloy',
      'position': 'DEF',
      'country': 'Panama',
      'club': 'CSD Municipal'
    }, {
      'name': 'Harold Cummings',
      'position': 'DEF',
      'country': 'Panama',
      'club': 'San Jose Earthquakes'
    }, {
      'name': 'Eric Davis',
      'position': 'DEF',
      'country': 'Panama',
      'club': 'DAC Dunajska Streda'
    }, {
      'name': 'Fidel Escobar',
      'position': 'DEF',
      'country': 'Panama',
      'club': 'News York Red Bulls'
    }, {
      'name': 'Adolfo Machado',
      'position': 'DEF',
      'country': 'Panama',
      'club': 'Houston Dynamo'
    }, {
      'name': 'Michael Murillo',
      'position': 'DEF',
      'country': 'Panama',
      'club': 'News York Red Bulls'
    }, {
      'name': 'Luis Ovalle',
      'position': 'DEF',
      'country': 'Panama',
      'club': 'CD Olimpia'
    }, {
      'name': 'Roman Torres',
      'position': 'DEF',
      'country': 'Panama',
      'club': 'Seattle Sounders'
    }, {
      'name': 'Edgar Barcenas',
      'position': 'MID',
      'country': 'Panama',
      'club': 'Cafetaleros de Tapachula'
    }, {
      'name': 'Armando Cooper',
      'position': 'MID',
      'country': 'Panama',
      'club': 'Club Universidad de Chile'
    }, {
      'name': 'Anibal Godoy',
      'position': 'MID',
      'country': 'Panama',
      'club': 'San Jose Earthquakes'
    }, {
      'name': 'Gabriel Gómez',
      'position': 'MID',
      'country': 'Panama',
      'club': 'Bucaramanga'
    }, {
      'name': 'Valentin Pimentel',
      'position': 'MID',
      'country': 'Panama',
      'club': 'Plaza Amador'
    }, {
      'name': 'Alberto Quintero',
      'position': 'MID',
      'country': 'Panama',
      'club': 'Universitario de Lima'
    }, {
      'name': 'Jose Luis Rodriguez',
      'position': 'MID',
      'country': 'Panama',
      'club': 'KAA Gent'
    }, {
      'name': 'Abdiel Arroyo',
      'position': 'ATT',
      'country': 'Panama',
      'club': 'LD Alajuelense'
    }, {
      'name': 'Ismael Diaz',
      'position': 'ATT',
      'country': 'Panama',
      'club': 'Deportivo La Coruna'
    }, {
      'name': 'Blas Perez',
      'position': 'ATT',
      'country': 'Panama',
      'club': 'CSD Municipal'
    }, {
      'name': 'Luis Tejada',
      'position': 'ATT',
      'country': 'Panama',
      'club': 'Sports Boys'
    }, {
      'name': 'Gabriel Torres',
      'position': 'ATT',
      'country': 'Panama',
      'club': 'CD Huachipato'
    }, {
      'name': 'Farouk Ben Mustapha',
      'position': 'GK',
      'country': 'Tunisia',
      'club': 'Al Shabab'
    }, {
      'name': 'Saudi Arabia)',
      'position': 'GK',
      'country': 'Tunisia',
      'club': 'Saudi Arabia'
    }, {
      'name': 'Moez Hassen',
      'position': 'GK',
      'country': 'Tunisia',
      'club': 'Chateauroux'
    }, {
      'name': 'France)',
      'position': 'GK',
      'country': 'Tunisia',
      'club': 'France'
    }, {
      'name': 'Aymen Mathlouthi',
      'position': 'GK',
      'country': 'Tunisia',
      'club': 'Al Baten'
    }, {
      'name': 'Rami Bedoui',
      'position': 'DEF',
      'country': 'Tunisia',
      'club': 'Etoile du Sahel'
    }, {
      'name': 'Yohan Benalouane',
      'position': 'DEF',
      'country': 'Tunisia',
      'club': 'Leicester City'
    }, {
      'name': 'Syam Ben Youssef',
      'position': 'DEF',
      'country': 'Tunisia',
      'club': 'Kasimpasa'
    }, {
      'name': 'Dylan Bronn',
      'position': 'DEF',
      'country': 'Tunisia',
      'club': 'Gent'
    }, {
      'name': 'Oussama Haddadi',
      'position': 'DEF',
      'country': 'Tunisia',
      'club': 'Dijon'
    }, {
      'name': 'Ali Maaloul',
      'position': 'DEF',
      'country': 'Tunisia',
      'club': 'Al Ahly'
    }, {
      'name': 'Yassine Meriah',
      'position': 'DEF',
      'country': 'Tunisia',
      'club': 'CS Sfaxien'
    }, {
      'name': 'Hamdi Nagguez',
      'position': 'DEF',
      'country': 'Tunisia',
      'club': 'Zamalek'
    }, {
      'name': 'Anice Badri',
      'position': 'MID',
      'country': 'Tunisia',
      'club': 'Esperance'
    }, {
      'name': 'Mohamed Amine Ben Amor',
      'position': 'MID',
      'country': 'Tunisia',
      'club': 'Al Ahli Riyadh'
    }, {
      'name': 'Ghaylene Chaalali',
      'position': 'MID',
      'country': 'Tunisia',
      'club': 'Esperance'
    }, {
      'name': 'Ahmed Khalil',
      'position': 'MID',
      'country': 'Tunisia',
      'club': 'Club Africain'
    }, {
      'name': 'Saifeddine Khaoui',
      'position': 'MID',
      'country': 'Tunisia',
      'club': 'Troyes'
    }, {
      'name': 'Ferjani Sassi',
      'position': 'MID',
      'country': 'Tunisia',
      'club': 'Al Nasr'
    }, {
      'name': 'Ellyes Skhiri',
      'position': 'MID',
      'country': 'Tunisia',
      'club': 'Montpellie'
    }, {
      'name': 'Naim Sliti',
      'position': 'MID',
      'country': 'Tunisia',
      'club': 'Dijon'
    }, {
      'name': 'Bassem Srarfi',
      'position': 'MID',
      'country': 'Tunisia',
      'club': 'Nice'
    }, {
      'name': 'Fakhreddine Ben Youssef',
      'position': 'ATT',
      'country': 'Tunisia',
      'club': 'Al Ittifaq'
    }, {
      'name': 'Saber Khalifa',
      'position': 'ATT',
      'country': 'Tunisia',
      'club': 'Club Africain'
    }, {
      'name': 'Wahbi Khazri',
      'position': 'ATT',
      'country': 'Tunisia',
      'club': 'Rennes'
    }, {
      'name': 'David Ospina',
      'position': 'GK',
      'country': 'Colombia',
      'club': 'Arsenal'
    }, {
      'name': 'Camilo Vargas',
      'position': 'GK',
      'country': 'Colombia',
      'club': 'Deportivo Cali'
    }, {
      'name': 'José Fernando Cuadrado',
      'position': 'GK',
      'country': 'Colombia',
      'club': 'Once Caldas'
    }, {
      'name': 'Cristian Zapata',
      'position': 'DEF',
      'country': 'Colombia',
      'club': 'Milan'
    }, {
      'name': 'Dávinson Sánchez',
      'position': 'DEF',
      'country': 'Colombia',
      'club': 'Tottenham'
    }, {
      'name': 'Santiago Arias',
      'position': 'DEF',
      'country': 'Colombia',
      'club': 'PSV Eindhoven'
    }, {
      'name': 'Óscar Murillo',
      'position': 'DEF',
      'country': 'Colombia',
      'club': 'Pachuca'
    }, {
      'name': 'Frank Fabra',
      'position': 'DEF',
      'country': 'Colombia',
      'club': 'Boca Juniors'
    }, {
      'name': 'Johan Mojica',
      'position': 'DEF',
      'country': 'Colombia',
      'club': 'Girona'
    }, {
      'name': 'Yerry Mina',
      'position': 'DEF',
      'country': 'Colombia',
      'club': 'Barcelona'
    }, {
      'name': 'Wílmar Barrios',
      'position': 'MID',
      'country': 'Colombia',
      'club': 'Boca Juniors'
    }, {
      'name': 'Carlos Sánchez',
      'position': 'MID',
      'country': 'Colombia',
      'club': 'Espanyol'
    }, {
      'name': 'Jefferson Lerma',
      'position': 'MID',
      'country': 'Colombia',
      'club': 'Levante'
    }, {
      'name': 'José Izquierdo',
      'position': 'MID',
      'country': 'Colombia',
      'club': 'Brighton Hove & Albion'
    }, {
      'name': 'James Rodríguez',
      'position': 'MID',
      'country': 'Colombia',
      'club': 'Bayern Múnich'
    }, {
      'name': 'Abel Aguilar',
      'position': 'MID',
      'country': 'Colombia',
      'club': 'Deportivo Cali'
    }, {
      'name': 'Mateus Uribe',
      'position': 'MID',
      'country': 'Colombia',
      'club': 'América'
    }, {
      'name': 'Juan Fernando Quintero',
      'position': 'MID',
      'country': 'Colombia',
      'club': 'River Plate'
    }, {
      'name': 'Juan Guillermo Cuadrado',
      'position': 'MID',
      'country': 'Colombia',
      'club': 'Juventus'
    }, {
      'name': 'Radamel Falcao',
      'position': 'ATT',
      'country': 'Colombia',
      'club': 'Mónaco'
    }, {
      'name': 'Miguel Borja',
      'position': 'ATT',
      'country': 'Colombia',
      'club': 'Palmeiras'
    }, {
      'name': 'Carlos Bacca',
      'position': 'ATT',
      'country': 'Colombia',
      'club': 'Villarreal'
    }, {
      'name': 'Luis Fernando Muriel',
      'position': 'ATT',
      'country': 'Colombia',
      'club': 'Sevilla'
    }, {
      'name': 'Eiji Kawashima',
      'position': 'GK',
      'country': 'Japan',
      'club': 'Metz'
    }, {
      'name': 'Masaaki Higashiguchi',
      'position': 'GK',
      'country': 'Japan',
      'club': 'Gamba Osaka'
    }, {
      'name': 'Kosuke Nakamura',
      'position': 'GK',
      'country': 'Japan',
      'club': 'Kashiwa Reysol'
    }, {
      'name': 'Yuto Nagatomo',
      'position': 'DEF',
      'country': 'Japan',
      'club': 'Galatasaray'
    }, {
      'name': 'Tomoaki Makino',
      'position': 'DEF',
      'country': 'Japan',
      'club': ''
    }, {
      'name': 'Wataru Endo',
      'position': 'DEF',
      'country': 'Japan',
      'club': 'Urawa Reds'
    }, {
      'name': 'Maya Yoshida',
      'position': 'DEF',
      'country': 'Japan',
      'club': 'Southampton'
    }, {
      'name': 'Hiroki Sakai',
      'position': 'DEF',
      'country': 'Japan',
      'club': 'Marseille'
    }, {
      'name': 'Gotoku Sakai',
      'position': 'DEF',
      'country': 'Japan',
      'club': 'Hamburg'
    }, {
      'name': 'Gen Shoji',
      'position': 'DEF',
      'country': 'Japan',
      'club': 'Kashima Antlers'
    }, {
      'name': 'Naomichi Ueda',
      'position': 'DEF',
      'country': 'Japan',
      'club': 'Kashima Antlers'
    }, {
      'name': 'Makoto Hasebe',
      'position': 'MID',
      'country': 'Japan',
      'club': 'Eintracht Frankfurt'
    }, {
      'name': 'Keisuke Honda',
      'position': 'MID',
      'country': 'Japan',
      'club': 'Pachuca'
    }, {
      'name': 'Takashi Inui',
      'position': 'MID',
      'country': 'Japan',
      'club': 'Eibar'
    }, {
      'name': 'Shinji Kagawa',
      'position': 'MID',
      'country': 'Japan',
      'club': 'Dortmund'
    }, {
      'name': 'Hotaru Yamaguchi',
      'position': 'MID',
      'country': 'Japan',
      'club': 'Cerezo Osaka'
    }, {
      'name': 'Genki Haraguchi',
      'position': 'MID',
      'country': 'Japan',
      'club': 'Fortuna Düsseldorf'
    }, {
      'name': 'Takashi Usami',
      'position': 'MID',
      'country': 'Japan',
      'club': 'Fortuna Dusseldorf'
    }, {
      'name': 'Gaku Shibasaki',
      'position': 'MID',
      'country': 'Japan',
      'club': 'Getafe'
    }, {
      'name': 'Ryota Oshima',
      'position': 'MID',
      'country': 'Japan',
      'club': 'Kawasaki Frontale'
    }, {
      'name': 'Shinji Okazaki',
      'position': 'ATT',
      'country': 'Japan',
      'club': 'Leicester'
    }, {
      'name': 'Yuya Osako',
      'position': 'ATT',
      'country': 'Japan',
      'club': 'Werder Bremen'
    }, {
      'name': 'Yoshinori Muto',
      'position': 'ATT',
      'country': 'Japan',
      'club': 'Mainz'
    }, {
      'name': 'Bartosz Białkowski',
      'position': 'GK',
      'country': 'Poland',
      'club': 'Ipswich Town'
    }, {
      'name': 'Łukasz Fabiański',
      'position': 'GK',
      'country': 'Poland',
      'club': 'Swansea City'
    }, {
      'name': 'Wojciech Szczęsny',
      'position': 'GK',
      'country': 'Poland',
      'club': 'Juventus'
    }, {
      'name': 'Jan Bednarek',
      'position': 'DEF',
      'country': 'Poland',
      'club': 'Southampton'
    }, {
      'name': 'Bartosz Bereszyński',
      'position': 'DEF',
      'country': 'Poland',
      'club': 'Sampdoria'
    }, {
      'name': 'Thiago Cionek',
      'position': 'DEF',
      'country': 'Poland',
      'club': 'SPAL'
    }, {
      'name': 'Kamil Glik',
      'position': 'DEF',
      'country': 'Poland',
      'club': 'AS Monaco'
    }, {
      'name': 'Łukasz Piszczek',
      'position': 'DEF',
      'country': 'Poland',
      'club': 'Borussia Dortmund'
    }, {
      'name': 'Artur Jędrzejczyk',
      'position': 'DEF',
      'country': 'Poland',
      'club': 'Legia Warsaw'
    }, {
      'name': 'Michał Pazdan',
      'position': 'DEF',
      'country': 'Poland',
      'club': 'Legia Warsaw'
    }, {
      'name': 'Jakub Błaszczykowski',
      'position': 'MID',
      'country': 'Poland',
      'club': 'VfL Wolfsburg'
    }, {
      'name': 'Jacek Góralski',
      'position': 'MID',
      'country': 'Poland',
      'club': 'Ludogorets Razgrad'
    }, {
      'name': 'Kamil Grosicki',
      'position': 'MID',
      'country': 'Poland',
      'club': 'Hull City'
    }, {
      'name': 'Grzegorz Krychowiak',
      'position': 'MID',
      'country': 'Poland',
      'club': 'West Bromwich Albion'
    }, {
      'name': 'Rafał Kurzawa',
      'position': 'MID',
      'country': 'Poland',
      'club': 'Górnik Zabrze'
    }, {
      'name': 'Karol Linetty',
      'position': 'MID',
      'country': 'Poland',
      'club': 'Sampdoria'
    }, {
      'name': 'Sławomir Peszko',
      'position': 'MID',
      'country': 'Poland',
      'club': 'Lechia Gdańsk'
    }, {
      'name': 'Maciej Rybus',
      'position': 'MID',
      'country': 'Poland',
      'club': 'Lokomotiv Moscow'
    }, {
      'name': 'Piotr Zieliński',
      'position': 'MID',
      'country': 'Poland',
      'club': 'Napoli'
    }, {
      'name': 'Dawid Kownacki',
      'position': 'ATT',
      'country': 'Poland',
      'club': 'Sampdoria'
    }, {
      'name': 'Robert Lewandowski',
      'position': 'ATT',
      'country': 'Poland',
      'club': 'Bayern Munich'
    }, {
      'name': 'Arkadiusz Milik',
      'position': 'ATT',
      'country': 'Poland',
      'club': 'Napoli'
    }, {
      'name': 'Łukasz Teodorczyk',
      'position': 'ATT',
      'country': 'Poland',
      'club': 'Anderlecht'
    }, {
      'name': 'Khadim Ndiaye',
      'position': 'GK',
      'country': 'Senegal',
      'club': 'Horoya AC'
    }, {
      'name': 'Abdoulaye Diallo',
      'position': 'GK',
      'country': 'Senegal',
      'club': 'Rennes'
    }, {
      'name': 'Alfred Gomis',
      'position': 'GK',
      'country': 'Senegal',
      'club': 'Torino'
    }, {
      'name': 'Kara Mbodji',
      'position': 'DEF',
      'country': 'Senegal',
      'club': 'Anderlecht'
    }, {
      'name': 'Kalidou Koulibaly',
      'position': 'DEF',
      'country': 'Senegal',
      'club': 'Napoli'
    }, {
      'name': 'Moussa Wague',
      'position': 'DEF',
      'country': 'Senegal',
      'club': 'Eupen'
    }, {
      'name': 'Saliou Ciss',
      'position': 'DEF',
      'country': 'Senegal',
      'club': 'Angers'
    }, {
      'name': 'Youssouf Sabaly',
      'position': 'DEF',
      'country': 'Senegal',
      'club': 'Bordeaux'
    }, {
      'name': 'Lamine Gassama',
      'position': 'DEF',
      'country': 'Senegal',
      'club': 'Alanyaspor'
    }, {
      'name': 'Armand Traore',
      'position': 'DEF',
      'country': 'Senegal',
      'club': 'Nottingham Forest'
    }, {
      'name': 'Salif Sane',
      'position': 'DEF',
      'country': 'Senegal',
      'club': 'Hannover 96'
    }, {
      'name': 'Pape Alioune Ndiaye',
      'position': 'MID',
      'country': 'Senegal',
      'club': 'Stoke'
    }, {
      'name': 'Idrissa Gueye',
      'position': 'MID',
      'country': 'Senegal',
      'club': 'Everton'
    }, {
      'name': 'Cheikhou Kouyate',
      'position': 'MID',
      'country': 'Senegal',
      'club': 'West Ham'
    }, {
      'name': 'Cheikh N\'Doye',
      'position': 'MID',
      'country': 'Senegal',
      'club': 'Birmingham'
    }, {
      'name': 'Sadio Mane',
      'position': 'ATT',
      'country': 'Senegal',
      'club': 'Liverpool'
    }, {
      'name': 'Diao Balde Keita',
      'position': 'ATT',
      'country': 'Senegal',
      'club': 'Monaco'
    }, {
      'name': 'Ismaila Sarr',
      'position': 'ATT',
      'country': 'Senegal',
      'club': 'Rennes'
    }, {
      'name': 'Diafra Sakho',
      'position': 'ATT',
      'country': 'Senegal',
      'club': 'Rennes'
    }, {
      'name': 'Moussa Konate',
      'position': 'ATT',
      'country': 'Senegal',
      'club': 'Amiens'
    }, {
      'name': 'Mame Biram Diouf',
      'position': 'ATT',
      'country': 'Senegal',
      'club': 'Stoke'
    }, {
      'name': 'Mbaye Niang',
      'position': 'ATT',
      'country': 'Senegal',
      'club': 'AC Milan'
    }];
  }
}
