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

  @Input() mycourse: Course;
  id;


  constructor(private route: ActivatedRoute, private coursesService: CoursesServiceService, ) {
    route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.coursesService.getCourse(this.id).subscribe(response => this.onSuccess(response), error => this.onError(error), () => this.onCompletion());
    
  }


  ngOnInit() {

    //this.coursesService.getCourse(this.id).subscribe(response => this.onSuccess(response), error => this.onError(error), () => this.onCompletion());
  }
  onError(response) {
    alert("No se ha podido cargar la información del curso. Intentalo más tarde.");
    console.log("Error" + response);
  }
  onCompletion() {
    console.log('compldgd');
  }
  onSuccess(response) {
    console.log('success');
    this.mycourse = response._body;
    console.log(`curso` + this.mycourse);
    //  alert(this.mycourse.name);
  }

}
