import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HorseShoesComponent } from './components/products/horse-shoes/horse-shoes.component';
import { PenguinEarsComponent } from './components/products/penguin-ears/penguin-ears.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { CalculatorComponent } from './components/calculator/calculator.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HorseShoesComponent,
    PenguinEarsComponent,
    DashboardComponent,
    CalculatorComponent,
    SidebarComponent,
    MenubarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        HttpClientModule,
        MatInputModule,
        MatDividerModule,
        MatPaginatorModule,
        MatTableModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ChartsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
