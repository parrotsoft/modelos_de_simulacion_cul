import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { PagesModule } from "./pages/pages.module";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        PagesModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
