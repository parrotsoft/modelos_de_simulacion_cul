import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { CaraSelloComponent } from './cara-sello/cara-sello.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from "@angular/forms";
import { PersonaComponent } from './cara-sello/persona/persona.component';
import { ActividadCaraSelloComponent } from './cara-sello/actividad-cara-sello/actividad-cara-sello.component';


@NgModule({
  declarations: [
    LayoutComponent,
    CaraSelloComponent,
    SemaforoComponent,
    HomeComponent,
    PersonaComponent,
    ActividadCaraSelloComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ReactiveFormsModule
    ]
})
export class PagesModule { }
