import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ClienteListComponent]
})
export class AppModule { }
