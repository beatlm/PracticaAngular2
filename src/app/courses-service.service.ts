import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class CoursesServiceService {

  constructor(private http: Http) { }
  getAllCursos() {

    return this.http.get('https://db-curso.wedeploy.io/cursos')
      .map(response => response.json());

  }

  createCourse(body) {
    //const body = {name: 'Brad'};

    return this.http
      .post('https://db-curso.wedeploy.io/cursos', body);
    // See below - subscribe() is still necessary when using post().
    //.subscribe(...);

  }
  deleteCourse(id) {
    return this.http.delete('https://db-curso.wedeploy.io/cursos/' + id);//.subscribe(response => this.onSuccess(response), error =>  this.onError (error), () => this.onCompletion());

  }
  getCourse(id) {
    return this.http.get('https://db-curso.wedeploy.io/cursos/' + id);//.subscribe(response => this.onSuccess(response), error =>  this.onError (error), () => this.onCompletion());

  }

}
