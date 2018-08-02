import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { HeroService } from './service/hero.service';
import { MessagesComponent } from './component/messages/messages.component'
import { MessageService } from './service/message.service'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { DashboardComponent } from './component/dashboard/dashboard.component'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';
import { HeroSearchComponent } from './component/hero-search/hero-search.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false})
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
