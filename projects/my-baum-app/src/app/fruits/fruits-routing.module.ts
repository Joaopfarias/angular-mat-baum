import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryContainer } from './containers/entry/entry.container';
import { JuicesContainer } from './containers/juices/juices.container';
import { CadiesContainer } from './containers/cadies/cadies.container';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'entry'},
  {path: 'entry', component: EntryContainer},
  {path: 'juices', component: JuicesContainer},
  {path: 'candies', component: CadiesContainer},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FruitsRoutingModule { }
