import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesServiceService } from './courses-service.service';
import { HttpModule, Http } from '@angular/http';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const appRoutes: Routes = [
  { path: 'add-course', component: CreateComponent },
  { path: 'courses', component: ListComponent },
  { path: 'detail/:id', component: CourseDetailComponent },

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
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [CoursesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {



}
