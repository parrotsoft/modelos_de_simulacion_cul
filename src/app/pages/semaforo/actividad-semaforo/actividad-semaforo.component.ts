import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad-semaforo',
  templateUrl: './actividad-semaforo.component.html',
  styleUrls: ['./actividad-semaforo.component.scss']
})
export class ActividadSemaforoComponent implements OnInit {

  @Input() total_carros_verde? : number;
  @Input() total_carros_amarilla? : number;
  @Input() total_carros_roja? : number;
  @Input() total_carros_perdido? : number;

  constructor() { }

  ngOnInit(): void {
  }

  get minutos() {
    // @ts-ignore
    return (this.total_carros_perdido / 60).toFixed(2);
  }

}
