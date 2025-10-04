 import { Component } from '@angular/core';
import { Resistencia } from './rsis';

@Component({
  selector: 'app-resistencias',
  standalone: false,
  templateUrl: './resistencias.component.html',
  styleUrl: './resistencias.component.css'
})
export class ResistenciasComponent {

 resistencia: Resistencia = new Resistencia();

  calcular(): void {
    this.resistencia.calcularValor();
  }

}

