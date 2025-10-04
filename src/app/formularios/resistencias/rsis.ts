 export class Resistencia {
  val1: string;
  val2: string;
  multiplicador: string;
  tolerancia: string;
  valor: number;
  valorMaximo: number;
  valorMinimo: number;
  color1: string;
  color2: string;
  color3: string;
  toleranciaColor: string;

  colores = {
    0: 'Negro',
    1: 'Café',
    2: 'Rojo',
    3: 'Naranja',
    4: 'Amarillo',
    5: 'Verde',
    6: 'Azul',
    7: 'Morado',
    8: 'Gris',
    9: 'Blanco'
  };

  multiplicadores = {
    1: 'Negro',
    10: 'Café',
    100: 'Rojo',
    1000: 'Naranja',
    10000: 'Amarillo',
    100000: 'Verde',
    1000000: 'Azul',
    10000000: 'Morado',
    100000000: 'Gris',
    1000000000: 'Blanco'
  };

  tolerancias = {
    5: '5% Dorado',
    10: '10% Plata'
  };

  constructor() {
    this.val1 = '';
    this.val2 = '';
    this.multiplicador = '';
    this.tolerancia = '';
    this.valor = 0;
    this.valorMaximo = 0;
    this.valorMinimo = 0;
    this.color1 = '';
    this.color2 = '';
    this.color3 = '';
    this.toleranciaColor = '';
  }



  calcularResistencia(): number {
    return (Number(this.val1) * 10 + Number(this.val2)) * Number(this.multiplicador);
  }

  calcularValorMaximo(): number {
    return this.calcularResistencia() + (this.calcularResistencia() * Number(this.tolerancia) / 100);
  }

  calcularValorMinimo(): number {
    return this.calcularResistencia() - (this.calcularResistencia() * Number(this.tolerancia) / 100);
  }

   calcularValor(): void {
    this.valor = this.calcularResistencia();
    this.valorMaximo = this.calcularValorMaximo();
    this.valorMinimo = this.calcularValorMinimo();
    this.color1 = this.colores[this.val1 as unknown as keyof typeof this.colores];
    this.color2 = this.colores[this.val2 as unknown as keyof typeof this.colores];
    this.color3 = this.multiplicadores[this.multiplicador as unknown as keyof typeof this.multiplicadores];
    this.toleranciaColor = this.tolerancias[this.tolerancia as unknown as keyof typeof this.tolerancias];
  }
}

