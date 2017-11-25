import { Component, OnInit } from '@angular/core';
import {Course} from '../course';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  courses=[ new Course ('AngularJS','Introducción a Angular JS',0), 
  new Course('Spring','Introdución a Spring',0)];
  
  constructor() { }

  ngOnInit() {
  }

}
