import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatchComponent} from './match/match.component';
import {TeamComponent} from './team/team.component';
import {AboutComponent} from './about/about.component';
import {MatchDetailsComponent} from './match-details/match-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/details/current', pathMatch: 'full'},
  {path: 'matches/:id', component: MatchComponent},
  {path: 'about', component: AboutComponent},
  {path: 'details/:id', component: MatchDetailsComponent},
  {path: 'countries/:id', component: TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
