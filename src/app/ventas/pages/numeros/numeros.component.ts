import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ventas:number=75000.4479
  porcentaje:number=0.48
}
