import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatchComponent} from './match/match.component';
import {TeamComponent} from './team/team.component';

const routes: Routes = [
  {path: '', redirectTo: '/matches', pathMatch: 'full'},
  {path: 'matches', component: MatchComponent},
  {path: 'teams', component: TeamComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
