import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteAddComponent } from './components/cliente-add/cliente-add.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes : Routes = [
  {
    path:'clientes/inicio', component:ClienteListComponent,
  },
  {
    path:'clientes/agregar', component: ClienteAddComponent
  },
  {
    path:'clientes/editar/:id', component: ClienteAddComponent
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
    MatSnackBarModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
