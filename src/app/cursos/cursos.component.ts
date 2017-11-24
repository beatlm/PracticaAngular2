import { Component, OnInit, Input } from '@angular/core';
import{Course} from '../course';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  
@Input() course:Course;


  ngOnInit() {
  }

}
