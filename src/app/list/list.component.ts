import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CoursesServiceService } from '../courses-service.service';
import { FormControl,ReactiveFormsModule, FormGroup} from '@angular/forms';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: []
})
export class ListComponent implements OnInit {
   courses;
   searchForm= new FormControl();
  
  constructor(private coursesService: CoursesServiceService) {

   }
 

  ngOnInit() {
   
 this.refresh();

 this.searchForm.valueChanges
 .filter(x=>x.length>4)
 .subscribe(form => {
  console.log('Form changes', form)
})


 
  }
  refresh(){
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
