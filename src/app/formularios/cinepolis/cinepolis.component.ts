import { Component } from '@angular/core';

interface Pagare {
  nombre: string;
  cantidadPersonas: number;
  cantidadBoletos: number;
  opcionTarjeta: string;
}
function calcularSubtotal(pagare: Pagare): number {
  let valorBoleto = 12;
  let subtotal = pagare.cantidadBoletos * valorBoleto;
  return subtotal;
}
function calcularDescuento(pagare: Pagare): number {
  let boletosPorPersona = pagare.cantidadBoletos / pagare.cantidadPersonas;
  let descuento = boletosPorPersona > 5 ? 0.15 : boletosPorPersona >= 3 ? 0.10 : 0;
  return descuento;
}
function calcularTotal(pagare: Pagare): number {
  let subtotal = calcularSubtotal(pagare);
  let descuento = calcularDescuento(pagare);
  let total = subtotal * (1 - descuento);
  if (pagare.opcionTarjeta === 'yes') {
    total *= 0.9;
  }
  if (pagare.cantidadBoletos > pagare.cantidadPersonas * 7) {
    alert("No se puede comprar más de 7 boletos por persona");
  }
  return total;
}

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})

export class CinepolisComponent {

  nombre: string = '';
  cantidadPersonas: number = 0;
  cantidadBoletos: number = 0;
  opcionTarjeta: string = '';
  valorPagare: string = '';
  calcular(): void {
    let pagare: Pagare = {
      nombre: this.nombre,
      cantidadPersonas: this.cantidadPersonas,
      cantidadBoletos: this.cantidadBoletos,
      opcionTarjeta: this.opcionTarjeta
    };
    let total = calcularTotal(pagare);
    if (total === 0) {
      this.valorPagare = '';
    } else {
      this.valorPagare = `${pagare.nombre} su precio a pagar es de $ ${total.toFixed(2)}`;
    }
  }

}
