import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComputeComponent } from './compute/compute.component';
import { GreetComponent } from './greet/greet.component';
import { GetCurrenciesComponent } from './get-currencies/get-currencies.component';
import { VoteComponent } from './vote/vote.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ComputeComponent,
    GreetComponent,
    GetCurrenciesComponent,
    VoteComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
