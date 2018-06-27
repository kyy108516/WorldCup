import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatchComponent} from './match/match.component';
import {TeamComponent} from './team/team.component';
import {AboutComponent} from './about/about.component';
import {MatchDetailsComponent} from './match-details/match-details.component';
import {IndexComponent} from './index/index.component';
import {DateComponent} from './date/date.component';
import {SearchComponent} from './search/search.component';
import {AuthorComponent} from './author/author.component';
import {NewsComponent} from './news/news.component';
import {TeamDetailsComponent} from './team-details/team-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'matches', component: MatchComponent},
  {path: 'about', component: AboutComponent},
  {path: 'details/:id', component: MatchDetailsComponent},
  {path: 'countries/:id', component: TeamComponent},
  {path: 'index', component: IndexComponent},
  {path: 'date', component: DateComponent},
  {path: 'search', component: SearchComponent},
  {path: 'author/:id', component: AuthorComponent},
  {path: 'news', component: NewsComponent},
  {path: 'team_details/:id', component: TeamDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
