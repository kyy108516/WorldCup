import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {MatchComponent} from './match/match.component';
import {TeamComponent} from './team/team.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {AboutComponent} from './about/about.component';
import {MatchDetailsComponent} from './match-details/match-details.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {IndexComponent} from './index/index.component';
import {PlayerComponent} from './player/player.component';
import {SearchComponent} from './search/search.component';
import {DateComponent} from './date/date.component';
import {AuthorComponent} from './author/author.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
    TeamComponent,
    AboutComponent,
    MatchDetailsComponent,
    IndexComponent,
    PlayerComponent,
    SearchComponent,
    DateComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    FormsModule,
    NgZorroAntdModule,
    InfiniteScrollModule
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
