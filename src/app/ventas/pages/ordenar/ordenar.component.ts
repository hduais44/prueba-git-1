import { Component, OnInit } from '@angular/core';
import { color, heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  enmayuscula:boolean=false
  ordenarPor:string="";
  heroes:heroe[]=[
    {
      nombre:"Superman",
      vuela:true,
      color:color.azul
    },
    {
      nombre:"Batman",
      vuela:false,
      color:color.negro
    },
    {
      nombre:"Robin",
      vuela:false,
      color:color.verde
    },
    {
      nombre:"Daredevil",
      vuela:false,
      color:color.rojo
    },
    {
      nombre:"Linterna verde",
      vuela:true,
      color:color.verde
    }
  ]

  constructor() { }
  
  ngOnInit(): void {
  }
  convertir()
  {
    this.enmayuscula=!this.enmayuscula
  }
  cambiarOrden(valor:string)
  {
    this.ordenarPor=valor
  }
}
