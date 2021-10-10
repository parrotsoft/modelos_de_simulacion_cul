import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";
import { CaraSelloComponent } from "./cara-sello/cara-sello.component";
import { SemaforoComponent } from "./semaforo/semaforo.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: 'pages',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'cara-sello',
        component: CaraSelloComponent
      },
      {
        path: 'semaforo',
        component: SemaforoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
