import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nombrelower="luis"
  nombreupper="LUIS"
  nombretitle="lUiS gaRceS"

  fecha:Date= new Date

}
