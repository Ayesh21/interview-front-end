import { NgModule } from '@angular/core';
import {PenguinEarsComponent} from './components/products/penguin-ears/penguin-ears.component';
import {HorseShoesComponent} from './components/products/horse-shoes/horse-shoes.component';
import {CalculatorComponent} from './components/calculator/calculator.component';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'penguin-ears', component: PenguinEarsComponent },
  { path: 'horse-shoes', component: HorseShoesComponent },
  { path: 'calculator', component:  CalculatorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DashboardComponent,
  PenguinEarsComponent,
  HorseShoesComponent,
];
