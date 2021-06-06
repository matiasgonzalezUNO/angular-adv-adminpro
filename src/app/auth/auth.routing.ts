import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Mis componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent },

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
export class AuthRoutingModule { }