import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as moment from 'moment';
import { compareNumbers } from "@angular/compiler-cli/src/diagnostics/typescript_version";

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.scss']
})
export class SemaforoComponent implements OnInit {

  form!: FormGroup;
  resultados: any = [];
  total_carros_verde = 0;
  total_carros_amarilla = 0;
  total_carros_roja = 0;
  total_carros_perdido = 0;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm() {
    this.form = this.fb.group({
      hora_inicial: ['18:00', Validators.required],
      hora_final: ['19:00', Validators.required],
      total_carros: [100, Validators.required]
    });
  }

  onSubmit() {
    const hora_inicial = moment(this.form.controls['hora_inicial'].value,'HH:mm:ss');
    const hora_final = moment(this.form.controls['hora_final'].value,'HH:mm:ss');
    const total_carros = this.form.controls['total_carros'].value;
    const total_minutos = (hora_final.diff(hora_inicial,'minutes')) - 1; // hasta 59 min
    this.resultados = [];
    for(let i = 0; i < total_carros; i++) {
      const min_random = this.randomIntFromInterval(0, total_minutos);
      const new_time = hora_inicial.add(min_random,'seconds');
      const obj = {
        carro: i,
        hora_llegada: new_time.format('HH:mm:ss'),
        color: this.getColor(min_random),
        segundos: min_random
      }
      this.resultados.push(obj);
    }
    this.procesarResultados();
  }



  randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  getColor(time: number) {
    if (time<=24) {
      return 'green';
    } else if (time <= 34) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

  procesarResultados() {
    // Cuento los carros.
    this.total_carros_verde = this.resultados.filter((row : any) => row.color === 'green').length;
    this.total_carros_amarilla = this.resultados.filter((row : any) => row.color === 'yellow').length;
    this.total_carros_roja = this.resultados.filter((row : any) => row.color === 'red').length;

    // Carlos los tiempos perdido por los que llegan en luz roja.
    const total_carros_verde_segundos = this.resultados.filter((row : any) => row.color === 'green')
      .map((row: any) => row.segundos).reduce((a: number, b: number) => a + b, 0 );

    const total_carros_amarilla_segundos = this.resultados.filter((row : any) => row.color === 'yellow')
      .map((row: any) => row.segundos)
      .reduce((a: number, b: number) => a + b, 0 );

    this.total_carros_perdido = total_carros_verde_segundos + total_carros_amarilla_segundos;
  }


}
