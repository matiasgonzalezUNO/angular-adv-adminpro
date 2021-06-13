import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



//Mis componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';

const routes: Routes = [
    {
        path: 'dashboard', 
        component: PagesComponent ,
        children: [
            {path: '', component: DashboardComponent },
            {path: 'progress', component: ProgressComponent },
            {path: 'grafica1', component: Grafica1Component },
            {path: 'account-settings', component: AccountSettingComponent },
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
