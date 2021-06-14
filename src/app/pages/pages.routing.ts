import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



//Mis componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
    {
        path: 'dashboard', 
        component: PagesComponent ,
        children: [
            {path: '', component: DashboardComponent, data: { titulo: 'Dashboard'} },
            {path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar'} },
            {path: 'grafica1', component: Grafica1Component, data: { titulo: 'Grafica Dona'} },
            {path: 'account-settings', component: AccountSettingComponent, data: { titulo: 'Ajuste'} },
            {path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesa'} },
            {path: 'Rxjs', component: RxjsComponent, data: { titulo: 'Rxjs'} },

            // {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },

    // Example - Routes
    // { path: 'path/:routesParam', component: MyComponent },
    // { path: 'staticPath', component: ... },
    // { path: '**', component: ... },
    // { path: 'oldPath', redirectTo: '/staticPath' },
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    // { path: ... , component: ..., data: { message: 'Custom'} },
    
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [ 
      RouterModule 
  ]
})
export class PagesRoutingModule { }
