import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-cara-sello',
  templateUrl: './cara-sello.component.html',
  styleUrls: ['./cara-sello.component.scss']
})
export class CaraSelloComponent implements OnInit {

  form!: FormGroup;
  resultados: any[] = [];
  totalCara = 0;
  totalSello = 0;
  totalGeneral = 0;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm() {
    this.form = this.fb.group({
      num_personas: [5, Validators.required],
      num_repeticiones: [100, Validators.required]
    });
  }

  generaNumber() {
    return Math.random() < 0.5 ? 0 : 1;
  }

  onSubmit() {
    const nPersonas = this.form.controls['num_personas'].value;
    const nRepeticiones = this.form.controls['num_repeticiones'].value;

    new Promise((resolve => {
      let probabilidades: any = [];
      for(let i = 0; i < nPersonas; i++) {
        const obj: any = {
          persona: i,
          items: []
        };
        for (let x = 0; x < nRepeticiones; x++) {
          const resultado = this.generaNumber();
          obj.items.push({
            resultado,
            moneda: resultado === 0 ? 'Cara' : 'Sello'
          });
        }
        probabilidades.push(obj);
      }
      resolve(probabilidades);
    })).then((resp: any) => {
      this.resultados = [];
      resp.forEach((element: any) => {
        const cara = element.items.filter((row : any) => row.resultado === 0).length;
        const sello = element.items.filter((row : any) => row.resultado === 1).length;
        const total = cara + sello;
        const temp: any = {
          persona: element.persona,
          cara,
          sello,
          total
        }
        this.resultados.push(temp);
      });
      this.resultadoGeneral();
    });
  }

  resultadoGeneral() {
    this.totalCara = this.resultados.map(item => item.cara).reduce((a, b) => a + b, 0 );
    this.totalSello = this.resultados.map(item => item.sello ).reduce((a, b) => a + b, 0 );
    this.totalGeneral = this.totalCara + this.totalSello;
  }

}
