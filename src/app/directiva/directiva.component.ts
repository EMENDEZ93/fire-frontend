import { Component, OnInit } from '@angular/core';
import {isBoolean} from 'util';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {

  listaCurso: string[] = ['TypeScript', 'JavaScript', 'Java SE', 'C#', 'PHP'];

  habilitar =  true;

  constructor() { }
h;
  setHabilitar(): void {
    this.habilitar = (this.habilitar) ? false : true;
  }

}
