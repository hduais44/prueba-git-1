import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nombre="Luis"
  genero="masculino"

  invitacionMapa=
  {
    "masculino":"invitarlo",
    "femenino":"invitarla"
  }
  clientes=["Maria","Pedro","Hernando","Eduardo","Fernando"]
  clientesMapa=
  {
    "=0":" No tenemos ningun cliente esperando.",
    "=1": "Tenemos 1 cliente esperando.",
    "other": "Tenemos # clientes esperando."
  }
  cambiarNombre()
  {
    this.nombre="Susana",
    this.genero="femenino"
    
  }
  borrarCliente()
  {
    this.clientes.shift()
    return this.clientes
  }

  persona=
  {
    nombre:"Luis",
    edad:20,
    direccion:"Durán,Ecuador"
  }
  heroe=
  [
    {
      nombre:"Superman",
      vuela:true
    },
    {
      nombre:"Superman",
      vuela:true
    },
    {
      nombre:"Superman",
      vuela:true
    }
  ]
  miobservable=interval(1000)

  valorpromesa= new Promise((resolve,reject)=>
  {
    setTimeout(() => {
      resolve("tenemos data de promesa")
    },3500);
  })
}
