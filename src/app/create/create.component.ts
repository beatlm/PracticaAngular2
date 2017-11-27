import { Component, OnInit } from '@angular/core';
import {CoursesServiceService} from '../courses-service.service';
import {Course} from '../course';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
nameField;
descripcionField;
maxAlumnosField;
horasField;
precioField;
plazasField;
course: Course;

constructor(private coursesService: CoursesServiceService) { }

 
  onSubmit(form) {
 this.course=new Course(this.nameField,this.descripcionField,this.maxAlumnosField,this.horasField,this.precioField,this.plazasField);
    this.coursesService.createCourse(this.course).subscribe(response => this.onSuccess(response), error =>  this.onError (error), () => this.onCompletion());
    
    console.log("Submit");
  }
  onError(response){
console.log("Error"+response);
  }
  onCompletion(){
console.log("Completion");
  }
  onSuccess(response){
    alert("El curso se ha dado de alta");
  }
  ngOnInit() {
  }

}
