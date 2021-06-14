import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import { ChartsModule } from 'ng2-charts';


//Modulo
import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingComponent,
    PromesasComponent,
    RxjsComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingComponent,
    PromesasComponent,
    RxjsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    // ChartsModule,
    SharedModule,
    //AppRoutingModule , otra forma de hacer funcionar el  <router-outlet> de pages.component
    RouterModule,
    ComponentsModule,
    
  ]
})
export class PagesModule { }
