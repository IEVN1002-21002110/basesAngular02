import { Component } from '@angular/core';
import { race } from 'rxjs';
import { Heroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html'
})
export class HeroesListComponent {

  listFilter:string='';
  muestraImg:boolean=true;
  showImage(){
    this.muestraImg=!this.muestraImg;
  }

   heroes:Heroes[]=[
    {
      imagen:"https://dragonball-api.com/characters/goku_normal.webp" ,
      nombre:"goku",
      descripcion:"kakaroto",
      race:"saiyan",
      ki:9000
    },
    {
      imagen:"https://dragonball-api.com/characters/vegeta_normal.webp" ,
      nombre:"vegeta",
      descripcion:"principe",
      race:"saiyan",
      ki:8000
    },
    {
      imagen:"https://dragonball-api.com/characters/picolo_normal.webp" ,
      nombre:"piccolo",
      descripcion:"segundo papa de gohan",
      race:"namekusei",
      ki:9000
    },
    {
      imagen:"https://dragonball-api.com/characters/bulma.webp" ,
      nombre:"bulma",
      descripcion:"super agresiva",
      race:"humana",
      ki:90
    },
    {
      imagen:"https://dragonball-api.com/characters/roshi.webp" ,
      nombre:"maestro roshi",
      descripcion:"super pervertido y mañoso",
      race:"Humano",
      ki:100
    }
  ]


}
