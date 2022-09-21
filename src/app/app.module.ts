import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfCharactersComponent } from './components/list-of-characters/list-of-characters.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { DetailCharacterComponent } from './components/list-of-characters/detail-character/detail-character.component';
import { ListOfPlanetsComponent } from './components/list-of-planets/list-of-planets.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    AppComponent,
    ListOfCharactersComponent,
    HeaderComponent,
    DetailCharacterComponent,
    ListOfPlanetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
