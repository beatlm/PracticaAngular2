import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { CourseDetailComponent } from './course-detail/course-detail.component';

const appRoutes: Routes = [ 
  {path: 'add-course', component: CreateComponent}, 
  {path: 'courses', component: ListComponent},
  {path: 'detail', component: CourseDetailComponent}
 ]; 

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ListComponent,
    CreateComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
  
}
