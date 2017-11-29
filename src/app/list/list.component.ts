import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CoursesServiceService } from '../courses-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   courses;
  constructor(private coursesService: CoursesServiceService) { }

  ngOnInit() {
    this.coursesService.getAllCursos()
      .subscribe(response => this.onSuccess(response), error => this.onError(error), () => this.onCompletion());

  }
  onSuccess(response: Array<any>) {
    this.courses = response;
    console.log("Success");
  }
  onError(response) {
    console.log("Error");
  }
  onCompletion() {
    console.log("Completed");
  }
}
