import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatchComponent} from './match/match.component';
import {TeamComponent} from './team/team.component';
import {AboutComponent} from './about/about.component';
import {MatchDetailsComponent} from './match-details/match-details.component';
import {IndexComponent} from './index/index.component';
import {PlayerComponent} from './player/player.component';
import {DateComponent} from './date/date.component';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'matches/:id', component: MatchComponent},
  {path: 'about', component: AboutComponent},
  {path: 'details/:id', component: MatchDetailsComponent},
  {path: 'countries/:id', component: TeamComponent},
  {path: 'index', component: IndexComponent},
  {path: 'players', component: PlayerComponent},
  {path: 'date', component: DateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
