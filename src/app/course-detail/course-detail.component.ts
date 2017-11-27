import { Component, OnInit, Input } from '@angular/core';
import{Course} from '../course';
import{ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

@Input() course:Course;
 

/*constructor(private route: ActivatedRoute) { 
	route.params.subscribe( params =>{ 
		this.course = params['course']; 
	}); 
}*/
constructor(course:Course){
  this.course=course;
}

  ngOnInit() {
  }

}
