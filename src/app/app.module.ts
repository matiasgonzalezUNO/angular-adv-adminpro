import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// lib externas
// import { ChartsModule } from 'ng2-charts';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

//Componentes
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    ComponentsModule,
    // ChartsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
