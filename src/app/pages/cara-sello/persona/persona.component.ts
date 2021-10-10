import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  @Input() persona?: number;
  @Input() cara?: number;
  @Input() sello?: number;
  @Input() total?: number;

  constructor() { }

  ngOnInit(): void {
  }

  get porCara() {
    // @ts-ignore
    return ((this.cara/100) * this.total).toFixed(1);
  }

  get porSello() {
    // @ts-ignore
    return ((this.sello/100) * this.total).toFixed(1);
  }

}
