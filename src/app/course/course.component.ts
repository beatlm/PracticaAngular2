import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import { CoursesServiceService } from '../courses-service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  id;
  @Input() course: Course;
  constructor(private coursesService: CoursesServiceService) {

  }

  ngOnInit() {
  }
  delete() { 
   
    this.coursesService.deleteCourse(this.course.id).subscribe(response => this.onSuccess(response), error => this.onError(error), () => this.onCompletion());

    console.log("Submit");
  }
  onError(response) {
    alert("No se ha podido borrar el curso. Intentalo de nuevo más tarde.")
    console.log("Error" + response);
  }
  onCompletion() {
    console.log("Completion");
  }
  onSuccess(response) {
    window.location.reload() ;
  }

}
