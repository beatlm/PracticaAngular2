import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import { ActivatedRoute } from '@angular/router';
import { CoursesServiceService } from '../courses-service.service';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {


  id;
  mycourse:Course;

  constructor(private route: ActivatedRoute, private coursesService: CoursesServiceService, ) {
    route.params.subscribe(params => {
      this.id = params['id'];
    }); 
  }

  ngOnInit() {
console.log(this.id);
    this.coursesService.getCourse(this.id).subscribe(response => this.onSuccess(response), error => this.onError(error), () => this.onCompletion());
  }
  onError(response) {
    alert("No se ha podido cargar la información del curso. Intentalo más tarde.");
    console.log("Error" + response);
  }
  onCompletion() {
    console.log('completion');
  }
  onSuccess(response) {
    console.log('success:');
    this.mycourse=response.json();
  }

}
