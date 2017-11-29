import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import { CoursesServiceService } from '../courses-service.service';
import { ListComponent } from '../list/list.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {


  @Input() course: Course;
  constructor(private coursesService: CoursesServiceService, private listado: ListComponent, private route: Router) {
  }

  ngOnInit() {
  }
  delete() {
    this.coursesService.deleteCourse(this.course.id).subscribe(response => this.onSuccess(response), error => this.onError(error), () => this.onCompletion());
    console.log("Submit");
  }
  detail() {
    this.route.navigate(['/detail', this.course.id]);
  }
  onError(response) {
    alert("No se ha podido borrar el curso. Intentalo de nuevo más tarde.")
    console.log("Error" + response);
  }
  onCompletion() {
    console.log("Completion Delete");
  }
  onSuccess(response) {
    console.log("success delete");
    this.coursesService.getAllCursos()
      .subscribe(response => this.onSuccessList(response), error => this.onErrorList(error), () => this.onCompletionList());

  }
  onErrorList(response) {
    alert("No se ha podido recargar la lista. Intentalo de nuevo más tarde.")
    console.log("Error Listado");
  }
  onCompletionList() {
    console.log("Completion listado");
  }
  onSuccessList(response) {
    this.listado.courses = response;
    console.log("Success listado");
  }

}
