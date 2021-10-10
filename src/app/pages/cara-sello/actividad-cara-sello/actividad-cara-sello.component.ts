import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad-cara-sello',
  templateUrl: './actividad-cara-sello.component.html',
  styleUrls: ['./actividad-cara-sello.component.scss']
})
export class ActividadCaraSelloComponent implements OnInit {

  @Input() totalCara? : number;
  @Input() totalSello? : number;
  @Input() totalGeneral? : number;

  constructor() { }

  ngOnInit(): void {
  }

  get porCara() {
    // @ts-ignore
    return ((this.totalCara/100) * this.totalGeneral).toFixed(1);
  }

  get porSello() {
    // @ts-ignore
    return ((this.totalSello/100) * this.totalGeneral).toFixed(1);
  }

}
