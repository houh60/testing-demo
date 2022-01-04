import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComputeComponent } from './compute/compute.component';
import { GreetComponent } from './greet/greet.component';
import { GetCurrenciesComponent } from './get-currencies/get-currencies.component';

@NgModule({
  declarations: [
    AppComponent,
    ComputeComponent,
    GreetComponent,
    GetCurrenciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
