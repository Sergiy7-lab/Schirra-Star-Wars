import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailCharacterComponent} from "./components/list-of-characters/detail-character/detail-character.component";
import {ListOfCharactersComponent} from "./components/list-of-characters/list-of-characters.component";
import {ListOfPlanetsComponent} from "./components/list-of-planets/list-of-planets.component";

const routes: Routes = [
  {path: '', redirectTo: 'characters', pathMatch: 'prefix'},
  // {path: '**', component: ListOfCharactersComponent, pathMatch: 'full'},
  {path: 'characters', component: ListOfCharactersComponent},
  {path: 'planets', component: ListOfPlanetsComponent},
  {path: 'detail/:id', component: DetailCharacterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
