import { Component, OnInit } from '@angular/core';
import {Course} from '../course';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  courses=[ new Course ('AngularJS','Introduction to Angular 1',0), 
  new Course('Spring','Introduction to spring framework',0)];
  
  constructor() { }

  ngOnInit() {
  }

}
