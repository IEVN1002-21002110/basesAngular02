import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {

  num1:string="";
  num2:string="";
  res:string="";
  operacio:string="";

operaci():void{
  if (this.operacio){
  switch(this.operacio){

  case 'suma':
    this.res=(parseInt(this.num1)+parseInt(this.num2)).toString();
  break;

  case 'rest':
    this.res=(parseInt(this.num1)-parseInt(this.num2)).toString();
  break;

  case 'multi':
    this.res=(parseInt(this.num1)*parseInt(this.num2)).toString();
  break;
  case 'divi':
    this.res=(parseInt(this.num1)/parseInt(this.num2)).toString();
  break;
  }
    }
  }
}
