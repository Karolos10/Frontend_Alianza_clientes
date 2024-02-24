import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteAddComponent } from './components/cliente-add/cliente-add.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path:'clientes/inicio', component:ClienteListComponent,
  },
  {
    path:'clientes/agregar', component: ClienteAddComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    ClienteAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
